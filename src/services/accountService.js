import axios from "axios";

const handleLoginAPI = async (username, password) => {
  axios
    .post("http://localhost:5000/api/login", {
      username,
      password,
    })
    .then((response) => {
      console.log("result: :", response.data.message);
    })
    .catch(function (error) {
      // handle error
      console.log("error: ", error.response.data.message);
    });

  return true;
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
