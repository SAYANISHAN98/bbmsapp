import React from "react";
import Navigation from './components/Navigation';
import mobileImage from './mobile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AppDownloadPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
     
      <Navigation />

      <div className="flex items-center justify-center flex-grow bg-gray-200">
        <div className="flex w-[70%] h-[70%] bg-white rounded-lg shadow-lg">
          
          <div className="flex items-center justify-center w-1/2 p-4 rounded-l-lg">
            <img
              src={mobileImage}
              alt="Phone"
              className="w-auto h-full max-h-[800px] object-contain"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-1/2 p-8">
            <h1 className="text-3xl font-bold text-gray-800">DOWNLOAD OUR APP</h1>
            
            <div className="flex justify-center mt-6">
              <a
                href="/path/to/your-app.apk" 
                download
                className="flex items-center justify-center px-6 py-3 text-white transition bg-black rounded-lg shadow-md w-80 hover:bg-gray-800"
              >
                {/* Font Awesome Icon */}
                <FontAwesomeIcon icon={faDownload} className="w-6 h-6 mr-2" />
                <span>Download App</span>
              </a>
            </div>
            <p className="mt-4 text-sm font-semibold text-gray-600">
            Your default password has been sent to your registered email address.
            </p>
          </div>
        </div>
      </div>

      <footer className="mt-auto text-sm text-center text-gray-500">
        © 2024 Blood Bank Management System
      </footer>
    </div>
  );
};

export default AppDownloadPage;
