// pages/contact.js

const ContactPage = () => {
  return (
    <div className="bg-[#111827] min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-white font-bold mb-4">Contact Me</h1>
        <p className="text-gray-300 mb-6">Feel free to reach out if you have any questions or inquiries.</p>

        {/* Contact Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-300 block mb-2">Name:</label>
            <input type="text" id="name" name="name" className="w-full p-2 border border-gray-500 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-300 block mb-2">Email:</label>
            <input type="email" id="email" name="email" className="w-full p-2 border border-gray-500 rounded" />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-gray-300 block mb-2">Message:</label>
            <textarea id="message" name="message" rows="4" className="w-full p-2 border border-gray-500 rounded"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
