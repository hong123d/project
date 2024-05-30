import axios from 'axios';

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3",
  params: {
    api_key: "11b4232ff8170f2482b646eed9175adf",
    language: "ko-KR"
  }
})

export default instance;