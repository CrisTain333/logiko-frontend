const uploadImage = async (image) => {
  const uri = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgKey}`;
  const res = await fetch(uri, {
    method: "POST",
    body: image,
  });
  const data = await res.json();
  return data;
};
export default uploadImage;
