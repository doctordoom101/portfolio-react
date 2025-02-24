import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Badge from "./Badge"; // Import Badge

const PopUpCard = ({ isOpen, onClose, projectData }) => {
  if (!isOpen) return null;

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    if (projectData.Images.length > 1) {
      setCurrentImage((prev) => (prev + 1) % projectData.Images.length);
    }
  };

  const prevImage = () => {
    if (projectData.Images.length > 1) {
      setCurrentImage((prev) =>
        prev === 0 ? projectData.Images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
      <div className="relative bg-white w-full max-w-lg p-4 md:p-6 shadow-2xl rounded-lg">
        <div className="absolute top-2 left-2 w-full h-full bg-black -z-10 rounded-lg"></div>

        {/* Gambar project */}
        <div className="relative w-full h-[200px] sm:h-[300px] overflow-hidden rounded-md bg-gray-300 flex items-center justify-center">
          {Array.isArray(projectData.Images) && projectData.Images.length > 0 ? (
            <img
              src={projectData.Images[currentImage]} // Menggunakan path lokal langsung
              alt={`Project Image ${currentImage + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <span className="text-gray-500 text-sm md:text-base">No Image Available</span>
          )}

          {projectData.Images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
              >
                ◀
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
              >
                ▶
              </button>
            </>
          )}
        </div>

        {projectData.Images.length > 1 && (
          <div className="flex justify-center space-x-2 my-2">
            {projectData.Images.map((_, index) => (
              <div
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                  index === currentImage ? "bg-gray-600" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        )}

        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">{projectData.Title}</h2>
        <div className="h-24 sm:h-28 overflow-y-auto mt-2 text-gray-600 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 text-sm sm:text-base">
          {projectData.Description}
        </div>

        {/* Pindahkan Badge ke Bawah */}
        {projectData.Tools && projectData.Tools.length > 0 && (
          <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-gray-300">
            {projectData.Tools.map((tool, index) => (
              <Badge key={index}>{tool}</Badge>
            ))}
          </div>
        )}

        {projectData.githubLink && (
          <div className="flex justify-end mt-4">
            <a href={projectData.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl sm:text-3xl text-black hover:text-gray-700 transition" />
            </a>
          </div>
        )}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-lg sm:text-xl"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default PopUpCard;
