import "./Destination.css";
import ButtonMap from "../../components/ButtonMap";
import { useEffect, useState } from "react";

const Destination = () => {
  useEffect(() => {
    document.getElementById("app").className = "destination";
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((resp) => {
        return resp.json();
      })
      .then((apiData) => setData(apiData.destinations));
  }, []);

  const [index, setIndex] = useState(0);
  console.log(data);
  return (
    <main>
      {data.length > 0 && (
        <section className="destination__section">
          <h5 className="destination__header">
            <span>01</span>Pick your destination
          </h5>

          <section className="destination__imgContainer">
            <img src={data[index].images.webp} alt="" />
          </section>

          <section className="destination__description">
            <section className="destination__buttonContainer">
              <ButtonMap
                customClass={"destination__button"}
                names={data.map((_) => [_.name])}
                handleClick={(index) => {
                  setIndex(index);
                }}
              />
            </section>

            <article className="destination__content">
              <h2>{data[index].name}</h2>
              <p>{data[index].description}</p>

              <section className="destination__estimate">
                <div>
                  <p className="sub-heading2">AVG. DISTANCE</p>
                  <p className="sub-heading1">{data[index].distance}</p>
                </div>
                <div>
                  <p className="sub-heading2">EST. TIME TRAVEL</p>
                  <p className="sub-heading1">{data[index].travel}</p>
                </div>
              </section>
            </article>
          </section>
        </section>
      )}
    </main>
  );
};

export default Destination;
