// Import necessary dependencies
"use client"
import { useGetDataQuery } from '../redux/feature/projects/projectsApi';

const Projects = () => {
  // Fetch data using the useGetDataQuery hook
  const { data, isLoading: loading } = useGetDataQuery();


  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-full h-12 w-12 border-t-2 border-[#111827] border-opacity-50 animate-spin mr-4"></div>
        <div>
          <p className="text-lg font-semibold text-gray-700 mb-2">Loading...</p>
          <div className="w-48 h-4 bg-[#111827] rounded-full"></div>
        </div>
      </div>
    );
  }



  return (
    <div className=" bg-[#111827] ">
      <div className="md:mx-[120px] mx-10  ">
        <h1 className="text-3xl text-white font-bold mb-4">My Projects</h1>

        <div className="grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Iterate over projects and display them */}
          {data &&
            data.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded shadow mb-4">
                {/* Display project image */}
                <img src={project.image} className="w-full h-40 object-cover rounded mb-2" alt={project.name} />

                {/* Display project name */}
                <p className="truncate text-gray-800 text-lg font-semibold mb-2">{project.name}</p>

                {/* Display project URL */}
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    Visit Live Project
                  </button>
                </a>
                {/* Add more project details as needed */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
