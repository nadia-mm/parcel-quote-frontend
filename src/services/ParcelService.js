import http from '../http-common';

const getAll = () => {
  http.get('/parcels');
};

const get = (id) => http.get(`/parcels/${id}`);

const create = (data) => http.post('/parcels/', data);

const update = (id, data) => http.put(`/parcels/${id}`, data);

const remove = (id) => http.delete(`/parcels/${id}`);

// eslint-disable-next-line import/prefer-default-export
export const ParcelService = {
  getAll,
  get,
  create,
  update,
  remove,
};
