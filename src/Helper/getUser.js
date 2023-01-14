const getUser = async (email) => {
  const res = await fetch(`http://localhost:8000/api/v1/user/${email}`);
  const user = await res.json();
  return user;
};
export default getUser;
