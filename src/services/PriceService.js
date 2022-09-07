import http from '../http-common';

const getAll = () => http.get('/prices');

// eslint-disable-next-line import/prefer-default-export
export const PriceService = { getAll };
