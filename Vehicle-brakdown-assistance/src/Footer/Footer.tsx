const Footer = () => {
    return (
      <footer className="bg-mine-shaft-950 text-gray-300 py-10 px-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-white">On-Road Vehicle Assistance</h3>
            <p className="mt-2 text-sm text-gray-400">
              Reliable help when you need it most. Fast, secure, and easy.
            </p>
          </div>

          {/* Right Section */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} RoadAssist. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  