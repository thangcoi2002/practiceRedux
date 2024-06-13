import axios from "axios";

export default getCourse = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("API")
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        reject(error);
      });
  });
};
