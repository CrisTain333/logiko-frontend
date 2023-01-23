const getJwt = (email) => {
  const userEmail = {
    Email: email,
  };
  const tokenUri = "https://logiko-backend.vercel.app/api/v1/jwt";
  // get JWT token
  fetch(tokenUri, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userEmail),
  })
    .then((res) => res.json())
    .then((token) => {
      console.log(token);
      localStorage.setItem("LogikoAuthToken", token);
    });
};
export default getJwt;
