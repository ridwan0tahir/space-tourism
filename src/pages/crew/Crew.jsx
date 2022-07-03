import "./Crew.css";
import ButtonMap from "../../components/ButtonMap";
import { useEffect, useState } from "react";

const Crew = () => {
  useEffect(() => {
    document.getElementById("app").className = "crew";
  }, []);

  const [data, setData] = useState("");

  useEffect(() => {
    fetch("/public/data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((apiData) => setData(apiData.crew));
  }, []);

  const [index, setIndex] = useState(0);

  console.log(data);

  return (
    <main>
      {data.length > 0 && (
        <section className="crew__section">
          <h5 className="crew__header">
            <span>02</span>Meet your crew
          </h5>

          <section className="crew__imgContainer">
            <img src={data[index].images.png} alt="" />
          </section>

          <section className="crew__description">
            <section className="crew__buttonContainer">
              <ButtonMap
                customClass={"crew__button"}
                names={data.map((_) => [""])}
                handleClick={(index) => {
                  setIndex(index);
                }}
              />
            </section>
            <article className="crew__content">
              <h4>{data[index].role}</h4>
              <h3>{data[index].name}</h3>
              <p>{data[index].bio}</p>
            </article>
          </section>
        </section>
      )}
    </main>
  );
};

export default Crew;
