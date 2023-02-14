const API_URL = "http://localhost:3000/";

// const changePassword = async (id: any, token: string, reqBody: any) => {
//   const response = await fetch(`${API_URL}api/v1/user/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({ ...reqBody }),
//   });

//   return response;
// };
const signin = async (email: string, password: string) => {
  //   const response = await fetch(`${API_URL}api/v1/user/login`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       password,
  //       email,
  //     }),
  //   });

  return { email: email, password: password };
};

// const signout = async (accessToken: string, token: string) => {
//   const response = await fetch(`${API_URL}api/v1/user/logout`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${accessToken}`,
//     },
//     body: JSON.stringify({
//       token,
//     }),
//   });
//   return response;
// };

export { signin };
