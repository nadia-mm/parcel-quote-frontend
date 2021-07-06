import axios from "axios";

export default axios.create({
  baseURL: "https://parcel-quote.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});