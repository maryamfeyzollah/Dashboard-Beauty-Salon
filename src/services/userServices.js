import axios from "axios";

const SERVER_URL = "https://dashboard-beauty-salon-api.vercel.app";

export const getAllUsers = () => {
  const url = `${SERVER_URL}/users`;
  return axios.get(url);
};

export const searchUser = () => {
  const url = `${SERVER_URL}/users`;
  return axios.get(url);
};

export const getUser = (userId) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return axios.get(url);
};

export const creatUser = (user) => {
  const url = `${SERVER_URL}/users`;
  return axios.post(url, user);
};

export const deleteUser = (userId) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return axios.delete(url);
};
export const updateUser = (user, userId) => {
  const url = `${SERVER_URL}/users/${userId}`;
  return axios.put(url, user);
};

// services

export const getAllServices = () => {
  const url = `${SERVER_URL}/services`;
  return axios.get(url);
};

export const searchService = () => {
  const url = `${SERVER_URL}/services`;
  return axios.get(url);
};

export const getService = (serviceId) => {
  const url = `${SERVER_URL}/services/${serviceId}`;
  return axios.get(url);
};

export const creatService = (service) => {
  const url = `${SERVER_URL}/services`;
  return axios.post(url, service);
};

export const deleteService = (serviceId) => {
  const url = `${SERVER_URL}/services/${serviceId}`;
  return axios.delete(url);
};
export const updateService = (service, serviceId) => {
  const url = `${SERVER_URL}/services/${serviceId}`;
  return axios.put(url, service);
};

// personels

export const getAllPersonels = () => {
  const url = `${SERVER_URL}/personels`;
  return axios.get(url);
};

export const searchPersonel = () => {
  const url = `${SERVER_URL}/personels`;
  return axios.get(url);
};

export const getPersonel = (serviceId) => {
  const url = `${SERVER_URL}/personels/${serviceId}`;
  return axios.get(url);
};

export const getPersonelService = (serviceId) => {
  const url = `${SERVER_URL}/personels?services=${serviceId}`;
  return axios.get(url);
};

export const creatPersonel = (personel) => {
  const url = `${SERVER_URL}/personels`;
  return axios.post(url, personel);
};

export const deletePersonel = (personelId) => {
  const url = `${SERVER_URL}/personels/${personelId}`;
  return axios.delete(url);
};
export const updatePersonel = (personel, personelId) => {
  const url = `${SERVER_URL}/personels/${personelId}`;
  return axios.put(url, personel);
};

// reserv

export const getAllReserve = () => {
  const url = `${SERVER_URL}/reserve`;
  return axios.get(url);
};

export const searchReserves = () => {
  const url = `${SERVER_URL}/reserve`;
  return axios.get(url);
};
