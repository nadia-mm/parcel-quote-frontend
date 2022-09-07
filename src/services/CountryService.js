import http from '../http-common';

const getAll = () => http.get('/countries');

// eslint-disable-next-line import/prefer-default-export
export const CountryService = { getAll };
