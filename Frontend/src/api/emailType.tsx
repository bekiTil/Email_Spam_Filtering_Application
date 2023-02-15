const API_URL = "http://127.0.0.1:8000";
const fetchInbox = async (username: string, password: string) => {
   console.log(username, password)

   const response = await fetch(`${API_URL}/inbox/`, {
      method: "POST",

      body: JSON.stringify({
         username,
         password,
      }),
   });

   return response
};

const fetchSpam = async (username:string, password:string) => {
   console.log(username, password)

   const response = await fetch(`${API_URL}/spam/`, {
      method: "POST",

      body: JSON.stringify({
         username,
         password,
      }),
   });

   return response
};
const fetchSent = async (username:string, password:string) => {
   console.log(username, password)

   const response = await fetch(`${API_URL}/sent/`, {
      method: "POST",

      body: JSON.stringify({
         username,
         password,
      }),
   });

   return response
};

export { fetchInbox, fetchSent, fetchSpam };