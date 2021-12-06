import axios from "axios";

const genAx = () => {
  // custom base URL logic examples:
  // - to request a current URL without the search parameters part:
  let baseUrl = window.location.href.slice(0, -window.location.search.length);

  //// or to insert '/api' after the host part
  //let baseUrl = window.location.host + '/api' + window.location.pathname;

  // ensure slash at the end
  if (baseUrl[baseUrl.length - 1] != "/") baseUrl = baseUrl + "/";

  let axiosConfig = {
    baseURL: baseUrl,
  };

  let ax = axios.create(axiosConfig);
  return ax;
};

export default {
  genAx,
};
