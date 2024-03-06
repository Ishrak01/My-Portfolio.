// components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-[#1F2937] text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center mb-4">
          <a href="https://www.facebook.com/Hasin.Ishrak.Hisham/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 mx-2">
            Facebook
          </a>
          <a href="https://www.linkedin.com/in/hasin-ishrak-hisham-b9a67b20b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 mx-2">
            LinkedIn
          </a>
          <a href="https://github.com/Ishrak01" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 mx-2">
            GitHub
          </a>
          {/* Add more social media links as needed */}
        </div>
        <p className="text-sm">Contact me at: <a href="mailto:hasinishrak84@gmail.com" className="text-blue-500 hover:underline">hasinishrak84@gmail.com</a></p>
        <p className="text-sm">&copy; {new Date().getFullYear()} Hasin Ishrak. All rights reserved.</p>
        {/* Add additional footer content as needed */}
      </div>
    </footer>
  );
};

export default Footer;

