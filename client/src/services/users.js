import axios from "axios";
import axFactoryService from "./axFactory";
const baseURL = "/api/users";

// var getBaseUrl = () => {
//   // custom base URL logic examples:
//   // - to request a current URL without the search parameters part:
//   let baseUrl = window.location.href.slice(0, -window.location.search.length);

//   //// or to insert '/api' after the host part
//   //let baseUrl = window.location.host + '/api' + window.location.pathname;

//   // ensure slash at the end
//   if (baseUrl[baseUrl.length - 1] != "/") baseUrl = baseUrl + "/";

//   return baseUrl;
// };

// var axiosConfig = {
//   baseURL: getBaseUrl(),
// };
let ax = axFactoryService.genAx();

const getAll = () => {
  const response = ax.get(baseURL);
  return response.then((response) => response.data);
};

const getUser = (id) => {
  const response = ax.get(`${baseURL}/userandgroups/${id}`);
  return response.then((response) => response.data);
};

const createUser = (newObject) => {
  const response = ax.post(baseURL, newObject);
  return response.then((response) => response.data);
};

export default {
  getAll,
  getUser,
  createUser,
};
