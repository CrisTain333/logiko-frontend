const saveUser = async (
  name,
  email,
  gender,
  phone,
  img,
  password,
  username
) => {
  const data = { name, email, gender, phone, img, password, username };
  const userEmail = {
    Email: data.email,
  };
  const uri = "http://localhost:8000/api/v1/auth";
  const tokenUri = "http://localhost:8000/api/v1/jwt";
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

  // save user in dataBase
  const res = await fetch(uri, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = res.json();
  return result;
};
export default saveUser;
