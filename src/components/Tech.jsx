import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-6">
      {technologies.map((technology) => (
        <div className="flex items-center" key={technology.name}>
          <li 
            className={`flex items-center justify-between gap-4 px-4 py-3 
              text-md text-black bg-white font-semibold font-opensans 
              hover:bg-primary hover:text-white hover:border-white 
              active:bg-opacity-20 border-4 rounded-md 
              cursor-pointer transition-all duration-300`}
          >
            {/* El texto está a la izquierda */}
            <p className="flex-1">{technology.name}</p>
            {/* La imagen está a la derecha con un tamaño más pequeño */}
            <div className="w-12 h-12 flex justify-center items-center">
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-full h-full object-contain"
              />
            </div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");





 //<BallCanvas icon={technology.icon} />