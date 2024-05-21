import logo from "../public/gas-station.png"; // Import the image file

const Header = () => {
  return (
    <header className="text-center my-8">
      <img src={logo} alt="Logo" className="block mx-auto w-80 h-auto" />
      <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mr-2 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent">Welcome</h1>
        <h1 className="text-4xl font-bold text-gray-800 mr-2 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent">To</h1>
        <h1 className="text-4xl font-bold text-blue-600 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent">Fuel Price Dashboard</h1>
      </div>
      <p className="text-gray-600 mt-3">
        Stay updated with the latest fuel prices in Malaysia
        <br />
        Created by
        <a href="https://github.com/zulhusni2003" className="font-extrabold text-blue-500" target="_blank" rel="noopener noreferrer">
          {" "}
          zulhusni{" "}
        </a>
        &
        <a href="https://github.com/nikzaim" className="font-extrabold text-blue-500" target="_blank" rel="noopener noreferrer">
          {" "}
          zaim{" "}
        </a>
      </p>
    </header>
  );
};

export default Header;
