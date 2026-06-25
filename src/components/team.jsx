import "./css/team.css";
import gaurav from "../assets/gaurav.jpeg";
import sachin from "../assets/sachin.png";
import krish from "../assets/krish.jpeg";
import anand from "../assets/anand.png";
function Team() {
  const members = [
    {
      name: "Deepanshu Joshi",
      role: "Frontend Developer",
      desc: "Specialized in React, JavaScript, and responsive UI design.",
      img: sachin,
    },
    {
      name: "Anand Thakur",
      role: "Backend Developer",
      desc: "Building scalable APIs and server-side applications.",
      img: anand,
    },
    {
      name: "Krish Rawat",
      role: "Full Stack Developer",
      desc: "Developing complete web solutions from frontend to backend.",
      img: krish,
    },
    {
      name: "Gaurav Mishra",
      role: "UI/UX Designer",
      desc: "Creating modern and user-friendly digital experiences.",
      img: gaurav,
    },
  ];

  return (
    <section id="team" className="team">
      <div className="team-header">
        <span>OUR TEAM</span>
        <h1>Meet The Developers</h1>
        <p>
          A team of passionate developers dedicated to creating modern web
          experiences for businesses and startups.
        </p>
      </div>

      <div className="team-container">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />

            <h3>{member.name}</h3>
            <h4>{member.role}</h4>

            <p>{member.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
