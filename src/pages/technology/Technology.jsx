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
    <main>
      {data.length > 0 && (
        <section className="tech__section">
          <h5 className="tech__header">
            <span>03</span>Space launch 101
          </h5>

          <img
            className="tech__img"
            src={data[index].images.landscape}
            alt=""
          />

          <section className="tech__description">
            <section className="tech__buttonContainer">
              <ButtonMap
                customClass={"tech__button"}
                names={data.map((_, _index) => [_index + 1])}
                handleClick={(index) => {
                  setIndex(index);
                }}
              />
            </section>
            <article className="tech__content">
              <p>The Terminology...</p>
              <h3>{data[index].name}</h3>
              <p>{data[index].description}</p>
            </article>
          </section>
        </section>
      )}
    </main>
  );
};

export default Technology;
