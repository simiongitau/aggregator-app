import MainScreen from "../components/MainScreen/MainScreen.component";
import firepadRef, { db } from "../server/firebase";
import "./App.css";
import React, { useEffect } from "react";
import {
  setMainStream,
  addParticipant,
  setUser,
  removeParticipant,
  updateParticipant,
} from "../store/actioncreator";
import { connect } from "react-redux";
import { MainState } from "../services/context/MainContext";

function App(props) {
  const { user } = MainState();

  const userName = React.useMemo(() => user?.name, [user?.name]);

  const getUserStream = async () => {
    const localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });

    return localStream;
  };
  const connectedRef = db.database().ref(".info/connected");
  const participantRef = firepadRef.child("participants");

  useEffect(() => {
    const addUserToCall = async () => {
      const stream = await getUserStream();
      stream.getVideoTracks()[0].enabled = false;
      props.setMainStream(stream);

      connectedRef.on("value", (snap) => {
        if (snap.val()) {
          const defaultPreference = {
            audio: false,
            video: false,
            screen: false,
          };
          const userStatusRef = participantRef.push({
            userName,
            reg: user?.registration,
            preferences: defaultPreference,
          });
          props.setUser({
            [userStatusRef.key]: {
              name: userName,
              reg: user?.registration,
              ...defaultPreference,
            },
          });
          userStatusRef.onDisconnect().remove();
        }
      });
    };

    addUserToCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isUserSet = !!props.user;
  const isStreamSet = !!props.stream;

  useEffect(() => {
    if (isStreamSet && isUserSet) {
      participantRef.on("child_added", (snap) => {
        const preferenceUpdateEvent = participantRef
          .child(snap.key)
          .child("preferences");
        preferenceUpdateEvent.on("child_changed", (preferenceSnap) => {
          props.updateParticipant({
            [snap.key]: {
              [preferenceSnap.key]: preferenceSnap.val(),
            },
          });
        });
        const { userName: name, preferences = {} } = snap.val();
        props.addParticipant({
          [snap.key]: {
            name,
            ...preferences,
          },
        });
      });
      participantRef.on("child_removed", (snap) => {
        props.removeParticipant(snap.key);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStreamSet, isUserSet]);

  return (
    <div className="App ">
      <MainScreen />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stream: state.mainStream,
    user: state.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMainStream: (stream) => dispatch(setMainStream(stream)),
    addParticipant: (user) => dispatch(addParticipant(user)),
    setUser: (user) => dispatch(setUser(user)),
    removeParticipant: (userId) => dispatch(removeParticipant(userId)),
    updateParticipant: (user) => dispatch(updateParticipant(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
