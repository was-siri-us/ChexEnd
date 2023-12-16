import "../CSS/dashboard.css";
import React, { useState } from "react";

export default function DashBoard() {
  const [imgFile, setImgFile] = useState(null);
  const [responseMessage,setResponseMessage] = useState("-----")

  const fileSelectHandler = (event) => {
    setImgFile(event.target.files[0]);
  };
  const fileUploadHandler = async () => {
    if (imgFile) {
      const formData = new FormData();
      formData.append("image", imgFile);

      try {
        const response = await fetch("https://2bdb-13-232-181-159.ngrok-free.app/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          console.log("Image uploaded successfully!");
          const data = await response.text();
          setResponseMessage(data)
        } else {
          console.error("Image upload failed.");
        }
      } catch (error) {
        console.error("Error during image upload:", error);
      }
    }
    else {
      console.log('No file selected.');
  }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={fileSelectHandler}></input>
      <button onClick={fileUploadHandler}>Generate</button>
      <h2>Output: {responseMessage}</h2>
    </div>
  );
}
