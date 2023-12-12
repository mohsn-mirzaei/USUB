import axios from "axios";

const apiClinet = axios.create({
  baseURL: "https://usab.saeidtavazani.ir/app/usab/api/v1",
});

export default apiClinet;
