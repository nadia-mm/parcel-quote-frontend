import http from "../http-common";
const getAll = () => {
    return http.get("/prices");
};

export const PriceService ={getAll};