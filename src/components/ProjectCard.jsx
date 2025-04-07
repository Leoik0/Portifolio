import { useRef } from "react";

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      <div
        className="relative w-full h-48 overflow-hidden cursor-pointer group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            className="object-cover w-full h-full"
            muted
            loop
            playsInline
          />
        ) : (
          <div className="w-full h-full bg-black"></div>
        )}

        <div className="absolute inset-0 transition duration-500 bg-black/0 group-hover:bg-black/70"></div>

        <h2 className="absolute z-10 text-2xl font-bold text-white transition-opacity duration-500 transform -translate-x-1/2 -translate-y-1/2 opacity-0 whitespace-nowrap group-hover:opacity-100 top-1/2 left-1/2">
          {project.name}
        </h2>
      </div>
    </a>
  );
};

export default ProjectCard;
