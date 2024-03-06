// Import necessary dependencies
"use client"
import { useGetDataQuery } from '../redux/feature/projects/projectsApi';

const Projects = () => {
  // Fetch data using the useGetDataQuery hook
  const { data, isLoading: loading } = useGetDataQuery();

  // Display a loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex items-center justify-center ">
        <div className="animate-spin rounded-full border-t-4 border-opacity-25 border-r-4 border-gray-300 h-16 w-16 mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  // Display projects once data is loaded
  return (
    <div className="bg-[#111827] min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-white font-bold mb-4">My Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Iterate over projects and display them */}
          {data &&
            data.map((project) => (
              <div key={project.id} className="bg-white p-4 rounded shadow mb-4">
                {/* Display project image */}
                <img src={project.image} className="w-full h-40 object-cover rounded mb-2" alt={project.name} />

                {/* Display project name */}
                <p className="text-gray-800 text-lg font-semibold mb-2">{project.name}</p>

                {/* Display project URL */}
                <a href={project.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                  {project.url}
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
