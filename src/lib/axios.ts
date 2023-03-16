import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json",
    // "Accept": "application/json",
    // "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
  }
})