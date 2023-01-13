const saveUser = async (name, email, gender, phone, img, password) => {
  const data = { name, email, gender, phone, img, password };
  const uri = "http://localhost:8000/api/v1/auth";
  const tokenUri = "http://localhost:8000/api/v1/jwt";

  fetch(tokenUri, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: email,
  })
    .then((res) => res.json())
    .then((token) => {
      console.log(token);
      localStorage.setItem("authToken", token);
    });

  const res = await fetch(uri, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = res.json();
  return result;
};
export default saveUser;
