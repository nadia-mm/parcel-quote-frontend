import http from "../http-common";

const getAll = () => {
  return http.get("/parcels");
};

const get = id => {
  return http.get(`/parcels/${id}`);
};

const create = data => {
  return http.post("/parcels/", data);
};

const update = (id, data) => {
  return http.put(`/parcels/${id}`, data);
};

const remove = id => {
  return http.delete(`/parcels/${id}`);
};

export const ParcelService = {
  getAll,
  get,
  create,
  update,
  remove
};