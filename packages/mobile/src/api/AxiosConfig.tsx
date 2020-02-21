import axios from "axios";

const response = axios.create({
  baseURL: "https://newsapi.org/v2/everything?q=netflix&sortBy=publishedAt&apiKey=c04fd04b98d841d9ac3f0826f2497094"
});

export default response;
