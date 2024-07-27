import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-black py-8">
        <hr classname="bg-black-900 mb-3"/>
      <div className=" mt-4 container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm">
              We are dedicated to providing the best service and value to our customers. Our mission is to bring you quality products at affordable prices.
            </p>
          </div>
         
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Agra, Utttar-Pradesh, 282002</p>
            <p className="text-sm">Email: prateekchaudharyjt@gmail.com</p>
            <p className="text-sm">Phone:+91-8445681496</p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;