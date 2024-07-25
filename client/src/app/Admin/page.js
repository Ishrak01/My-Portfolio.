
"use client"

import Image from "next/image";
import Link from "next/link";
import { useDeleteByIdMutation, useGetDataQuery } from "../redux/feature/projects/projectsApi";
;


const Admin = () => {
  

  const { data, error, isLoading } = useGetDataQuery();

  const [deleteById, {}] = useDeleteByIdMutation();

  const handleDelete = (id) => {
    deleteById(id);
  };





  return (
    <div className="flex h-screen bg-blue-900">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64">
        {/* Sidebar Content */}
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
  
          <br/>
            <li >
              <Link className="hover:text-gray-300" href="/Upload">
                Project Upload
              </Link>
              </li>
              <li>
              <Link className="hover:text-gray-300" href="/Cv">
               CV Upload
              </Link>
              </li>
            
           
            
            
            {/* Add more sidebar items as needed */}
          
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-5">Admin page</h1>

      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Image</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
          
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((products) => (
              <tr key={products.id}>
                <td className="border border-gray-300 px-4 py-2">
                  <Image className="h-10 w-10" src={products.image} alt="image" />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {products.name}
                </td>
               
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    href={`/adminView/productUpdate/${products._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 mx-1 rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(products._id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 mx-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Admin;
