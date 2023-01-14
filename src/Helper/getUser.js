const getUser = async (email) => {
  const userInfo = [];
  const res = await fetch(`http://localhost:8000/api/v1/user/${email}`);
  const user = await res.json();
  userInfo.push(user);
  return userInfo;
};
export default getUser;
