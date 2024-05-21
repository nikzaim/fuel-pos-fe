import React from "react";

const InfoSection: React.FC = () => {
  return (
    <section className="my-8 p-6">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent">About Fuel Prices in Malaysia</h2>
            <p className="text-gray-700 mb-4">
              Fuel prices in Malaysia are regulated by the government and can vary depending on global oil prices and local factors. The prices are typically reviewed on a weekly basis to reflect changes in the market.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-slate-400 bg-clip-text text-transparent">Types of Fuel in Malaysia</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>
                <span className="font-bold">RON95:</span> Regular unleaded petrol used by most vehicles.
              </li>
              <li>
                <span className="font-bold">RON97:</span> Premium unleaded petrol that provides better performance.
              </li>
              <li>
                <span className="font-bold">DIESEL:</span> Used mainly by commercial vehicles and some passenger vehicles.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
