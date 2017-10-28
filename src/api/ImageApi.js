import axios from "axios";

// 🔹 API URL (change this when needed)
export const IMAGE_API = "https://picsum.photos/v2/list?page=1&limit=8";

// 🔹 Reusable function for fetching images
export const fetchImages = async () => {
  try {
    const res = await axios.get(IMAGE_API);
    return res.data; // return only the image list
  } catch (error) {
    console.error("Image fetch error:", error);
    return []; // return empty array if error
  }
};
