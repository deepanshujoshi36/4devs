// import "./css/home.css";
// import teamImage from "../assets/team.jpg"; // your image
// import Counter from "../extra/counter";
// function Home() {
//   return (
//     <section id="home" className="home">
//       <div className="home-left">
//         <span className="home-tag">ABOUT US</span>

//         <h1>
//           Transforming Ideas
//           <br />
//           Into Powerful
//           <br />
//           <span>Web Experiences</span>
//         </h1>

//         <p>
//           We are a team of passionate developers crafting modern, responsive,
//           and high-performance websites that help businesses grow in the digital
//           world.
//         </p>
//       </div>

//       <div className="home-right">
//         <img src={teamImage} alt="Team" />
//       </div>

//       <div className="stats">
//         <div className="stat">
//           <h2>
//             <Counter end={20} duration={1000} />+
//           </h2>
//           <p>Projects Completed</p>
//         </div>

//         <div className="stat">
//           <h2>
//             <Counter end={4} duration={400} />
//           </h2>
//           <p>Developers</p>
//         </div>

//         <div className="stat">
//           <h2>
//             <Counter end={100} duration={1000} />%
//           </h2>
//           <p>Client Focused</p>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Home;

import { useState } from "react";
import "./css/home.css";
import teamImage from "../assets/team.jpg";
import Counter from "../extra/counter";

function Home() {
  const [projectKey, setProjectKey] = useState(0);
  const [developerKey, setDeveloperKey] = useState(0);
  const [clientKey, setClientKey] = useState(0);

  return (
    <section id="home" className="home">
      <div className="home-left">
        <span className="home-tag">ABOUT US</span>

        <h1>
          Transforming Ideas
          <br />
          Into Powerful
          <br />
          <span>Web Experiences</span>
        </h1>

        <p>
          We are a team of passionate developers crafting modern, responsive,
          and high-performance websites that help businesses grow in the digital
          world.
        </p>
      </div>

      <div className="home-right">
        <img src={teamImage} alt="Team" />
      </div>

      <div className="stats">
        <div
          className="stat"
          onMouseEnter={() => setProjectKey((prev) => prev + 1)}
        >
          <h2>
            <Counter key={projectKey} end={20} duration={400} />+
          </h2>
          <p>Projects Completed</p>
        </div>

        <div
          className="stat"
          onMouseEnter={() => setDeveloperKey((prev) => prev + 1)}
        >
          <h2>
            <Counter key={developerKey} end={4} duration={200} />
          </h2>
          <p>Developers</p>
        </div>

        <div
          className="stat"
          onMouseEnter={() => setClientKey((prev) => prev + 1)}
        >
          <h2>
            <Counter key={clientKey} end={100} duration={500} />%
          </h2>
          <p>Client Focused</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
