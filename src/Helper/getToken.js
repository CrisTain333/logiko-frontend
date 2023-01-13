const getToken = (email) => {
  const userEmail = {
    email: email,
  };
  const tokenUri = "http://localhost:8000/api/v1/jwt";
  fetch(tokenUri, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userEmail),
  })
    .then((res) => res.json())
    .then((token) => {
      console.log(token);
      localStorage.setItem("Logio-Token", token);
    });
};
export default getToken;
