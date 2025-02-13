import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="spinner border-t-4 border-b-4 border-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
