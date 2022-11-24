import axios from "axios";

axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const handleLoginAPI = async (username, password) => {
  let responseData;

  return axios.post("/api/login", {
    username,
    password,
  });
  // .then((response) => {
  //   responseData = response.data;
  // })
  // .catch(function (error) {
  //   // handle error
  //   responseData = error.response.data;
  // });

  // return responseData;
};

export { handleLoginAPI };

// //   axios({
// //     method: "POST",
// //     url: "http://localhost:5000/api/login",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //   })
// //     .then((res) => {
// //       responseData = res.data;
// //       console.log("res: ", res.data);
// //       console.log("message: ", res.data.message);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });

// //   axios({
// //     method: "GET",
// //     url: "http://localhost:5000/test-axios-get",
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //   }).then((res) => {
// //     console.log(res.data.message);
// //   });

// // axios.post("/api-login", { username, password });

// // fetch("http://example.com/movies.json")
// //   .then((response) => response.json())
// //   .then((data) => console.log(data));

// // const requestOptions = {
// //   method: "POST",
// //   headers: { "Content-Type": "application/json" },
// //   body: JSON.stringify({ username: "dung", password: "dung" }),
// // };
// // fetch("http://localhost:5000/api-login", requestOptions)
// //   .then((response) => response.json())
// //   .then((data) => {
// //     console.log("data: ", data);
// //   });

// // // Fetch with method GET
// // try {
// //   fetch("http://localhost:5000/test-axios-get")
// //     .then((response) => response.json())
// //     .then((data) => console.log("data: ", data));
// // } catch (error) {
// //   console.log("error: ", error);
// // }

// try {
//   // fetch("http://localhost:5000/api-login", {
//   //   method: "POST",
//   //   mode: "cors",
//   //   cache: "no-cache",
//   //   credentials: "same-origin",
//   //   headers: {
//   //     "Content-Type": "application/json; charset=utf-8",
//   //   },
//   //   redirect: "follow",
//   //   referrer: "no-referrer",
//   //   body: JSON.stringify({ username: "dung", password: "dung" }),
//   // })
//   //   .then(function (response) {
//   //     return response.json();
//   //   })
//   //   .then(function (myJson) {
//   //     console.log(myJson);
//   //   });

//   // fetch("http://localhost:5000/api-login", {
//   //   method: "POST",
//   //   headers: {
//   //     Accept: "application/json",
//   //     "Content-Type": "application/json",
//   //   },
//   //   body: JSON.stringify({
//   //     username: "dung",
//   //     password: "dung",
//   //   }),
//   // })
//   //   .then(function (response) {
//   //     return response.json();
//   //   })
//   //   .then(function (myJson) {
//   //     console.log("data: ", myJson);
//   //   });

//   // axios({
//   //   method: "POST",
//   //   url: "http://localhost:5000/api-login",
//   //   body: JSON.stringify({
//   //     username: "dung",
//   //     password: "dung",
//   //   }),
//   //   headers: {
//   //     "Content-Type": "text/json",
//   //   },
//   // }).then((res) => {
//   //   console.log("data: ", res.data.message);
//   // });
// } catch (error) {
//   console.log("error: ", error);
// }
