import { useEffect } from "react";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    document.getElementById("app").className = "home";
  }, []);

  return (
    <main className="home-section">
        <article className="home-content">
          <h5>So, you want to travel to</h5>
          <h1>space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>

        <button className="home-btn">Explore</button>
    </main>
  );
};

export default Home;
