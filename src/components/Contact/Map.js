import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const data = [
  {
    id: 1,
    title: "Upwork",
    icon: SiUpwork,
    link: "https://www.upwork.com/freelancers/~018035b359da09c454",
  },
  {
    id: 2,
    title: "Linked In",
    icon: BsLinkedin,
    link: "https://www.linkedin.com/in/hamza-siddique-b90253130/",
  },
  {
    id: 3,
    title: "Git Hub",
    icon: BsGithub,
    link: "https://github.com/hamza7681",
  },
];

const Map = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row w-auto mx-10 lg:mx-14 mt-9 gap-4">
        <div className="w-full lg:w-2/5 bg-gray-600 bg-opacity-30">
          <p className="text-white font-bold font-serif text-3xl opacity-100 mt-6 text-center">
            Let's Connect!
          </p>
          <div className="mt-5">
            {data.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-x-10 mt-8 mb-8 h-full"
              >
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  {React.createElement(item.icon, {
                    size: 40,
                    className: "text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer",
                  })}
                </a>
                <p className="text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ... cursor-pointer">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-3/5 bg-gray-600 bg-opacity-40">
          <p className="text-white font-bold font-serif text-3xl opacity-100 flex text-center mt-5 justify-center">
            Vist me here
          </p>
          <div className="w-full mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.069090471159!2d74.42725417415471!3d31.467285549765457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391908c0aff95013%3A0xdb6a523bd988b615!2sp%2C%20A%20106%2C%20A%20Block%20Sector%20A%20Phase%205%20D.H.A%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1685182387051!5m2!1sen!2s"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
