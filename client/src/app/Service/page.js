// pages/services.js

const ServicePage = () => {
  return (
    <div className="bg-[#111827] min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-white font-bold mb-4">My Services</h1>
        <p className="text-gray-300 mb-6">Explore the web development services I offer:</p>

        {/* Add your list of services here */}
        <ul className="list-disc ml-6 text-gray-300">
          <li>Responsive Website Development</li>
          <li>React.js and Next.js Development</li>
          <li>Full Stack Development</li>
          <li>Mern Stack Development</li>
          <li>Custom Web Application Development</li>
          <li>API Integration</li>
          <li>E-commerce Solutions</li>
          <li>Design and implement responsive and user-friendly interfaces using
HTML, CSS, and JavaScript.</li>
          <li>Develope and maintain full-stack web applications from concept to
deployment.</li>
<li>Integrate and maintain databases, ensuring efficient data storage and
retrieval ( e.g., MongoDB, MySQL).</li>
<li>Implement RESTful APIs for seamless communication between the front-
end and back-end components.</li>
<li>Deploy web applications and ensured scalability and
performance optimization.</li>

          {/* Add more services as needed */}
        </ul>

        {/* Add any additional information about your services */}
        <p className="text-gray-300 mt-6">Contact me to discuss your project or request a quote.</p>
      </div>
    </div>
  );
};

export default ServicePage;
