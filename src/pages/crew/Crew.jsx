
import { useEffect, useState } from "react";
import "./Crew.css";
import ButtonMap from "../../components/ButtonMap";
import useFetch from "../../hooks/useFetch";


const Crew = () => {
  useEffect(() => {
    document.getElementById("app").className = "crew";
  }, []);

  const data = useFetch("crew");
  const [index, setIndex] = useState(0);

  return (
    <main className="crew-section">
      {data.length > 0 && (
        <>
          <h5 className="crew-header"><span>02</span>Meet your crew</h5>

          <section className="crew-content">

            <figure className="crew-image-container">
              <img src={data[index].images.png} alt="" loading="lazy"/>
            </figure>

            <section className="crew-description">
              <section className="crew-button-container">
                <ButtonMap
                  customClass={"crew-button"}
                  names={data.map((_) => [""])}
                  handleClick={(index) => {
                    setIndex(index);
                  }}
                />
              </section>

              <article className="crew-detail">
                <h4>{data[index].role}</h4>
                <h3>{data[index].name}</h3>
                <p>{data[index].bio}</p>
              </article>

            </section>

          </section>
        </>
      )}
    </main>
  );
};

export default Crew;
