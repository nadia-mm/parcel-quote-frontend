import http from "../http-common";
const getAll = () => {
    return http.get("/countries");
};

export const CountryService ={getAll};