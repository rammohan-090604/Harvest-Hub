// components/Footer.js
const Footer = () => {
    return (
      <footer className="bg-[#fef8f2] text-green-800 shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-green-200 pb-6">
            <div className="text-2xl font-bold">Harvest Hub</div>
            <p className="text-center text-sm text-green-600 mt-4 md:mt-0">
              Empowering farmers through innovation and technology.
            </p>
          </div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            {/* Links */}
            <div className="flex space-x-6 text-green-700">
              <a
                href="#"
                className="hover:text-green-900 transition-all text-sm"
              >
                About Us
              </a>
              <a
                href="#"
                className="hover:text-green-900 transition-all text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-green-900 transition-all text-sm"
              >
                Contact Us
              </a>
            </div>
  
            {/* Copyright */}
            <p className="text-green-600 text-sm mt-4 md:mt-0">
              &copy; {new Date().getFullYear()} Harvest Hub. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  