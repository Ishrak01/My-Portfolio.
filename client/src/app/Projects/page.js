"use client";
import Image from 'next/image';
import IntersectionApi from '../components/IntersectionApi';
import { useGetDataQuery } from '../redux/feature/projects/projectsApi';

const ProjectItem = ({ project }) => {
  const [containerRef, isVisible] = IntersectionApi({
    threshold: .5,
  });

  return (
    <div
      ref={containerRef}
      className={`bg-white p-4 rounded shadow mb-4 transition-transform duration-500 ${
        isVisible ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0'
      }`}
    >
      <Image
        src={project.image}
        className="w-full h-40 object-cover rounded mb-2"
        alt={project.name}
      />
      <p className="truncate text-gray-800 text-lg font-semibold mb-2">
        {project.name}
      </p>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 text-white py-2 w-full px-4 rounded hover:bg-red-600">
          Visit Live Project
        </button>
      </a>
    </div>
  );
};

const Projects = () => {
  const { data, isLoading: loading } = useGetDataQuery();

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-[#111827] h-screen">
        <div className="rounded-full bg-white h-12 w-12 border-t-2 border-blue-500 border-opacity-50 animate-spin mr-4"></div>
        <div>
          <p className="text-lg font-semibold text-red-500 mb-2">Loading...</p>
          <div className="w-48 h-4 bg-blue-500 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#111827]">
      <div className="md:mx-[120px] mx-10">
        <h1 className="text-3xl text-white font-bold mb-4">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data && data.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;