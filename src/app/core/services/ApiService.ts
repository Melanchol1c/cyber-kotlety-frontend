import axios from 'axios-observable';

const axiosInstance = axios.create({
  // eslint-disable-next-line no-undef
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: { 'Content-Type': 'application/json' },
});

export { axiosInstance };
