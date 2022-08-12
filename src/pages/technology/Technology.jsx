import "./Technology.css";
import ButtonMap from "../../components/ButtonMap";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";

const Technology = () => {
  useEffect(() => {
    document.getElementById("app").className = "technology";
  }, []);

  const data = useFetch("technology");
  const [index, setIndex] = useState(0);

  return (
    <main className="tech-section">
      {data.length > 0 && (
        <>

          <h5 className="tech-header"><span>03</span>Space launch 101</h5>

          <section className="tech-content">
            <figure className="tech-image-container">
              <img
                src={data[index].images.landscape}
                alt=""
              />
            </figure>
            
            <section className="tech-button-container">
              <ButtonMap
                customClass={"tech-button"}
                names={data.map((_, _index) => [_index + 1])}
                handleClick={(index) => {
                  setIndex(index);
                }}
              />
            </section>

            <article className="tech-detail">
              <div className="tech-title">
                <p>The Terminology...</p>
                <h3>{data[index].name}</h3>
              </div>
              <p>{data[index].description}</p>
            </article>
          </section>
        </>
      )}
    </main>
  );
};

export default Technology;
