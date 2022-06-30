import axios from "axios";

const axioxInstance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});
axioxInstance.interceptors.request.use(
  function (config) {
    config.params = {
      api_key: "123qwedsazxc",
    };
    config.headers = {
      token: "ewdjioewqdjioj239jdskospi09slkqwjdslkajdsalkd90dslakjdla",
      "content-type": "application/json",
    };
    console.log(config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


axioxInstance.interceptors.response.use(function(response) {
    return response;
},
function (error) {
    return Promise.reject(error);
  }


);
export default axioxInstance;
