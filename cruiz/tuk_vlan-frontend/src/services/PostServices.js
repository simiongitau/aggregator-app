import axios, { setAuthToken } from "./AxiosService";

const createPost = async (formData) => {
  await setAuthToken(axios);

  const res = await axios({
    url: `/posts/new`,
    method: "POST",
    formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

const fetchMyPosts = async () => {
  await setAuthToken(axios);

  const res = await axios.get(`/feed`);

  return res.data;
};

const MeetingService = { createPost, fetchMyPosts };

export default MeetingService;
