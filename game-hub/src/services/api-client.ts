import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ac1db638ccd41fa87be455b6c1a8ea3",
  },
});
