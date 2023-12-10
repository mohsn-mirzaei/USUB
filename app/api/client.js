import axios from "axios";

const apiClinet = axios.create({
  baseURL: "https://usab.saeidtavazani.ir/app/droptuts/api/v1",
});

export default apiClinet;
