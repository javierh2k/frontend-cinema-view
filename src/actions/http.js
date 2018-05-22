import axios from 'axios'
const baseURL='http://localhost:1337';

const http = axios.create({
  baseURL, headers: {    
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})


export { http };