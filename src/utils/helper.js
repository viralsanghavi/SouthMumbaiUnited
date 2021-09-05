import { storage } from "../Components/config/firebaseConfig";

export const getData = async () => {
  await storage
    .ref()
    .child("Hero")
    .listAll()
    .then((res) => {
      let promises = res.items.map((item) => item.getDownloadURL());
      return promises;
    });
};

export const getImageUrls = (urls) => {
  if (!urls) {
    return;
  }
  const displayUrls = urls.map((url, index) => ({
    src: url,
    key: index,
    caption: `In Action ${index + 1}`,
  }));
  console.log(displayUrls);
  return displayUrls;
};
