import axios from "axios";

const apiClinet = axios.create({
  baseURL: "https://usub.mohsenmirzaei.dev/app/usub/api/v1",
});

export default apiClinet;
