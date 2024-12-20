import React from "react";
import Navigation from './components/Navigation';
import mobileImage from './mobile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AppDownloadPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      <Navigation />

      <div className="flex items-center justify-center flex-grow px-4 bg-gray-200">
        <div className="flex flex-col w-full max-w-4xl bg-white rounded-lg shadow-lg md:flex-row">
          
          {/* Left Section (Image) */}
          <div className="flex items-center justify-center w-full p-4 rounded-t-lg md:w-1/2 md:rounded-l-lg md:rounded-tr-none">
            <img
              src={mobileImage}
              alt="Phone"
              className="object-contain w-full h-auto max-h-96"
            />
          </div>

          {/* Right Section (Content) */}
          <div className="flex flex-col items-center justify-center w-full p-8 md:w-1/2">
            <h1 className="text-2xl font-bold text-center text-gray-800 md:text-3xl">
              DOWNLOAD OUR APP
            </h1>
            
            <div className="flex justify-center mt-6">
              <a
                href="app-4.apk"
                download
                className="flex items-center justify-center w-full max-w-xs px-6 py-3 text-white transition bg-black rounded-lg shadow-md hover:bg-gray-800"
              >
                <FontAwesomeIcon icon={faDownload} className="w-6 h-6 mr-2" />
                <span>Download App</span>
              </a>
            </div>

            <p className="mt-4 text-sm font-semibold text-center text-gray-600">
              Your default password has been sent to your registered email address.
            </p>
          </div>
        </div>
      </div>

      <footer className="px-4 mt-auto text-sm text-center text-gray-500">
        © 2024 Blood Bank Management System
      </footer>
    </div>
  );
};

export default AppDownloadPage;
