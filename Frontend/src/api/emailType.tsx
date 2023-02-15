const fetchInbox = async () => {
    //   const response = await fetch(`${API_URL}api/v1/user/login`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       password,
    //       email,
    //     }),
    //   });
  
    return [
        {recipient:"btilahun@gmail.com" ,subject:"about the life expectancy" , message:"hkjelkejrlk", timestamp:'Thu,  9 Jun 2011 13:35:55 -0400 (EDT)'}
     ];
  };

const fetchSpam = async () => {
    //   const response = await fetch(`${API_URL}api/v1/user/login`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       password,
    //       email,
    //     }),
    //   });
  
    return [
        {recipient:"btilahun@gmail.com" ,subject:"about the life expectancy" , message:"hkjelkejrlk", timestamp:'Thu,  9 Jun 2011 13:35:55 -0400 (EDT)'}
     ];
  };
  const fetchSent = async () => {
    //   const response = await fetch(`${API_URL}api/v1/user/login`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       password,
    //       email,
    //     }),
    //   });
  
    return [
        {recipient:"btilahun@gmail.com" ,subject:"about the life expectancy" , message:"hkjelkejrlk", timestamp:'Thu,  9 Jun 2011 13:35:55 -0400 (EDT)'}
     ];
  };
  export { fetchInbox, fetchSent, fetchSpam };