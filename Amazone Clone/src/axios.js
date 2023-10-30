import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-1fd04/us-central1/api", //api url (cloud function)
});

export default instance;