"use client"
"use client"
import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://server.ishrakhasin.com/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message sent successfully');
        setFormData({
          
          email: '',
          message: '',
        });
      } else {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        toast.error(`Failed to send message: ${errorText}`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111827] min-h-screen">
      <div className="md:mx-[120px] mx-10 p-6">
        <h1 className="text-3xl text-white font-bold mb-4">Contact Me</h1>
        <p className="text-gray-300 mb-6">Feel free to reach out if you have any questions or inquiries.</p>

        <form onSubmit={handleSubmit}>
         

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-300 block mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-500 rounded"
              disabled={loading}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-gray-300 block mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-500 rounded"
              disabled={loading}
            ></textarea>
          </div>

          <button
            type="submit"
            className={`bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 ${loading ? 'cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
