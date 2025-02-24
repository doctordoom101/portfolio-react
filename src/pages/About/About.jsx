import foto2 from "../../assets/images/foto2.png";
import Badge from "../../components/Badge";
import Footer from "../../components/Footer";

function About() {
  const skill = {
    programingLanguages: ["Python", "GO", "Java", "JavaScript"],
    lib: ["Django", "Flask", "Gin"],
    tools: ["Git", "Figma"],
    databases: ["MySQL", "PostgreSQL"],
  };

  return (
    <div className="min-h-screen pt-20 font-inria">
      <div className="bg-secondary text-center py-10">
        <h1 className="text-4xl font-kaushan">About Me</h1>
      </div>
      <div className="md:flex">
        <div className="bg-orange w-full lg:w-1/3 py-10 border flex items-center border-black">
          <div className="w-fit mx-auto shadow-[16px_16px_0px_1px] shadow-black">
            <img
              src={foto2}
              className="neu text-white"
              alt=""
            />
          </div>
        </div>
        <div className="bg-pink border w-full py-6 border-black">
          <div className="flex flex-col justify-center px-5 h-full lg:w-2/3 mx-auto">
            <h2 className="font-bold text-2xl md:text-4xl mb-4">Defanda Yeremia Christian Rompas</h2>
            <p className="text-lg text-justify my-4 indent-9">
              I am an Informatics Engineering student passionate about Data Science, Machine Learning, and Backend Development. I enjoy working with Python, SQL, and cloud-based technologies while building APIs and data-driven applications.
            </p>
            <p className="text-lg text-justify indent-9">
              My goal is to gain hands-on experience in scalable backend systems and real-world machine learning applications. I am eager to learn industry best practices and stay updated with the latest advancements in technology.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-yellow flex bg-grid items-center justify-center px-5 relative py-44">
        <div className="absolute top-0 bg-green border border-black px-10 p-5">
          <h1 className="font-bold text-xl uppercase">Experience</h1>
        </div>
        <div className="bg-white border border-black flex flex-col gap-y-7 shadow-[10px_10px_0px_1px] p-7 md:px-20 md:py-14 w-full md:w-2/3 lg:w-1/2">
          <Experience
            year="Aug 2024 - Present"
            position="Media creative @ GDG on Campus Esa Unggul"
            job=" Ensure the community stays active and engaged. Handle administrative tasks like creating forms and RSVP links. Manage the community online (Discord, WhatsApp) and offline (meetups)."
          />
          <Experience
            year="Oct 2023 - Aug 2024"
            position="Comunity Manager @ GDSC Esa Unggul"
            job="Ensure the community stays active and engaged. Handle administrative tasks like creating forms and RSVP links. Manage the community online (Discord, WhatsApp) and offline (meetups)."
          />
        </div>
      </div>
      <div className="bg-primary px-5 pt-32 pb-12 relative flex items-center justify-center">
        <div className="absolute top-0 bg-pink border border-black px-10 p-5">
          <h1 className="font-bold text-xl">SKILLS</h1>
        </div>
        <div>
          <Skill
            title="Programing Language"
            skill={skill.programingLanguages}
          />
          <Skill
            title="Library / Framework"
            skill={skill.lib}
          />
          <Skill
            title="Databases"
            skill={skill.databases}
          />
          <Skill
            title="Tools"
            skill={skill.tools}
          />
        </div>
      </div>
      <div className="bg-ungu pt-24 px-5 pb-20 relative flex items-center justify-center">
        <div className="absolute top-0 bg-yellow border border-black px-10 p-5">
          <h1 className="font-bold text-xl uppercase">education</h1>
        </div>
        <div className="bg-white border border-black flex flex-col gap-y-7 shadow-[10px_10px_0px_1px] p-7 md:px-16 md:py-16 w-full md:w-2/3 lg:w-1/2">
          <Education
            year="2023 - Present"
            school="Esa Unggul University"
          />
          <Education
            year="Oct 2023 - Aug 2024"
            school="SMA Negeri 2 Jakarta"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Experience({ year, position, job }) {
  return (
    <div className="flex justify-between gap-y-5 flex-col md:flex-row md:gap-x-7 lg:gap-x-0">
      <div className="w-full md:w-2/3">
        <h2>{year}</h2>
      </div>
      <div className="w-full">
        <h2 className="font-bold">{position}</h2>
        <p>{job}</p>
      </div>
    </div>
  );
}

function Skill({ skill, title }) {
  return (
    <div className="mb-5">
      <div className="grid grid-rows-2 md:grid-cols-3 gap-x-10">
        <div className="">
          <h2 className="text-lg">{title}</h2>
        </div>
        <div className="col-span-2 mt-2 md:mt-0">
          <span className="mr-10 hidden md:inline-block">:</span>
          {skill.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education({ school, year }) {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold text-xl">{school}</h1>
      <h1>{year}</h1>
    </div>
  );
}

export default About;
