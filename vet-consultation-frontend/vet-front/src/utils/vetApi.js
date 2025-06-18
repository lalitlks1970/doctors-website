import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const loginUser = (email, password) => {
  return axios.post(`${BASE_URL}/auth/login`, { email, password });
};

export const registerUser = (email, password) => {
  return axios.post(`${BASE_URL}/auth/register`, { email, password });
};

export const getDoctors = (location, category) => {
  return axios.get(`${BASE_URL}/doctors`, {
    params: { location, category }
  });
};

export const bookAppointment = (doctorId, date) => {
  return axios.post(`${BASE_URL}/appointments`, { doctorId, date });
};

export const makePayment = (appointmentId, amount, method) => {
  return axios.post(`${BASE_URL}/payments`, {
    appointmentId,
    amount,
    method
  });
};
