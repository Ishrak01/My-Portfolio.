"use client"

import { useEffect, useState } from "react";


import { useCreateMutation } from "../redux/feature/projects/projectsApi";




const Upload = () => {
  const [name, setName] = useState("");
 
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const [create, { data, isLoading }] = useCreateMutation()



 
 

  const handleSubmit = (e) => {
    e.preventDefault();

    create({
      name,
    image,
    url
      
    });
  };
useEffect(() => {
  if(data){
    alert("product uploaded")
  }

  
}, [data])

 

  

  return (
  <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 h-screen text-black bg-gray-100 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">Upload Projects</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-semibold mb-2">
         image
        </label>
        <textarea
          id="description"
          name="description"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="price" className="block text-sm font-semibold mb-2">
     url
        </label>
        <input
          type="String"
          id="String"
          name="String"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
    
    
      <button
        type="submit"
        className="bg-blue-500 text-black px-6 py-2  rounded-md hover:bg-blue-600 focus:outline-none"
      >
        Upload 
      </button>
    </form>

);
};

export default Upload;