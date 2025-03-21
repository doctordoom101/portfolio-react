import React, { useState } from "react";
import Card from "../../components/Card";
import PopUpCard from "../../components/PopUpCard";
import img1 from "../../assets/images/p1.png";
import img2 from "../../assets/images/p2.png";
import img3 from "../../assets/images/p3.png";
import img4 from "../../assets/images/p4.png";
import img5 from "../../assets/images/pp1.png";
import img6 from "../../assets/images/pp2.png";
import img7 from "../../assets/images/ppp1.png";
import img8 from "../../assets/images/ppp2.png";
import img9 from "../../assets/images/ppp3.png";


const projectData = [
  {
    Title: "Sentiment Analysis",
    Description: "This Project Contains About How I done The Twitter Sentiment Analysis from Data Collecting to Machine Learning Model Implementation. #Project title# : *Analisis Sentiment Terhadap Mental Health Anak Remaja dengan Dataset Twitter berbasis Hybrid Model Machine Learning*",
    Images: [img1, img2, img3, img4],
    Tools: ["Python", "Google Colab"],
    githubLink: "https://github.com/doctordoom101/Twitter-Sentiment-Analysis---Programming-Language-Lecturer-Final-Project",
  },
  {
    Title: "REST API Portfolio Service",
    Description: "Implementing REST API for my portfolio website management, I can update my portfolio content dynamically without direct database access. A key feature of this project is the admin page, which is exclusively accessible to me as the portfolio owner. To maintain data integrity and security, the POST, PUT, and DELETE methods can only be executed through this admin page, preventing unauthorized modifications. Since this website is designed for a single user—myself—I decided not to implement authentication at the backend. Instead, authentication is handled on the frontend using protected routes in React.js, ensuring that only authenticated users can access the admin panel.",
    Images: [img5, img6],
    Tools: ["Go", "Gin", "PostgreSQL", "ReactJS"],
    githubLink: "https://github.com/doctordoom101/my-web-portfolio-service",
  },
  {
    Title: "Sales & Inventory Management",
    Description: "Inventory Management and POS system, oop project",
    Images: [img7, img8, img9],
    Tools: ["Java", "JavaFX", "MySQL"],
    githubLink: "https://github.com/Zain0205/el-market-inventory-and-sales",
  },
];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-secondary text-center py-10">
        <h1 className="text-4xl font-semibold font-kaushan">My Projects</h1>
      </div>
      <div className= "min-h-screen bg-ungu px-5 gap-y-8 gap-x-8 lg:px-12 flex-wrap py-10 bg-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex ">
        {projectData.map((project, index) => (
          <Card key={index} project={project} onClick={() => handleCardClick(project)} />
        ))}
      </div>
      <PopUpCard isOpen={isPopupOpen} onClose={closePopup} projectData={selectedProject} />
    </div>
  );
}

export default Project;
