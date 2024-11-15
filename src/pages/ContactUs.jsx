import React from 'react';

import Footer from '../Components/Footer';


const ContactUs = () => {

  return (
    <>
     
     <div className="bg-gray-100 min-h-screen p-4">
        <div className="container mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-20 text-center">Contact Us</h1>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get In Touch</h2>
                <form className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      placeholder="Your message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
              <div className="lg:w-1/2 lg:pl-4">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Details</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Address:</strong> 123 Main St, Anytown USA
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Phone:</strong> +91 123 456 789
                </p> 
                <p className="text-gray-600 mb-4">
                  <strong>Email:</strong> bakerville@bakery.com
                </p>
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg">

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.840340082133!2d84.44925467447176!3d27.691329126199555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e53738980041%3A0xef1088fbee6a41fa!2sBakeryCakeShop%26Restro!5e0!3m2!1sen!2snp!4v1719470155993!5m2!1sen!2snp"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
