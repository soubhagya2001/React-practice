"use client";
// Correct syntax for marking a component as a Client Component
import React, { useState } from "react";
import Header from "@/Components/Header";
import axios from "axios";

// Wrap your component with useClient
const Page = () => {
  const [Images, setImages] = useState([]);
  const getImages = async () => {
    try {
      const response = await axios.get("https://picsum.photos/v2/list");
      const data = response.data;
      console.log(data);
      setImages(data);
    } catch (error) {
      console.error("Error in fetching image");
    }
  };

  // Your component code with useState
  const [marks, setMarks] = useState(80);
  const [user, setUser] = useState("Sarthak");
  const [editor, seteditor] = useState("Akarsh");

  return (
    <>
      {/* <Header user={user} edit={editor}/> */}
      <Header />
      <h1>Your marks is {marks}</h1>
      <button
        onClick={() => {
          setMarks(33);
        }}
      >
        Update
      </button>

      <div>
        <button
          onClick={getImages}
          className="px-5 py-3 bg-green-600 text-white font-bold"
        >
          Get Images
        </button>
        <div className="p-10">
          {Images.map((elem, i) => (
            // Removed the newline and added parentheses
            <div key={i}>
              <img
                src={elem.download_url}
                width={300}
                height={300}
                className="rounded m-10 inline-block"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page; // Fix the export statement here
