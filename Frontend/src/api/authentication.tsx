const API_URL = "http://127.0.0.1:8000";


const signin = async (username: string, password: string) => {
    const response = await fetch(`${API_URL}/login/`, {
      method: "POST",
      body: 
      JSON.stringify({
        username,
        password,
       
      }),
    });
console.log(response)
  return response;
};


export { signin };
