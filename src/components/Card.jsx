import Badge from "./Badge";

function Card({ project, onClick }) {
  return (
    <div 
      onClick={onClick} 
      className="w-full neu-pressed cursor-pointer p-5 lg:w-[31%] neu bg-white flex flex-col"
    >
      <div className="bg-gray-500">
        {Array.isArray(project.Images) && project.Images.length > 0 ? (
          <img 
            className="w-full h-[220px] object-cover rounded-md"
            src={project.Images[0]}  
            alt={project.Title}
          />
        ) : (
          <p className="text-white text-center py-10">No Image Available</p>
        )}
      </div>

      {/* Konten utama dengan flex-grow agar badge tetap di bawah */}
      <div className="pt-3 flex-grow">
        <h1 className="text-2xl font-semibold">{project.Title}</h1>
        <p className="line-clamp-4 text-base my-2">{project.Description}</p>
      </div>

      {/* Badge dipindahkan ke bagian bawah pada layar besar */}
      <div className="mt-4 lg:mt-auto pt-4 flex flex-wrap gap-2">
        {project.Tools && project.Tools.length > 0 ? (
          project.Tools.map((tool, index) => <Badge key={index}>{tool}</Badge>)
        ) : (
          <span className="text-gray-400">No tools specified</span>
        )}
      </div>
    </div>
  );
}

export default Card;
