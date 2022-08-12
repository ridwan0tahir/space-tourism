import "./Destination.css";
import ButtonMap from "../../components/ButtonMap";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const Destination = () => {
  useEffect(() => {
    document.getElementById("app").className = "destination";
  }, []);

  const data = useFetch("destinations");
  const [index, setIndex] = useState(0);
  return (
    <main className="destination-section">
      {data.length > 0 && (
        <>
          <h5 className="destination-header"><span>01</span>Pick your destination </h5>
                
          <section className="destination-content">

            <figure className="destination-image-container">
              <img src={data[index].images.webp} alt="" loading="lazy"/>
            </figure>
            
            <section className="destination-description">
              <section className="destination-button-container">
                <ButtonMap
                  customClass={"destination-button"}
                  names={data.map((_) => [_.name])}
                  handleClick={(index) => {
                    setIndex(index);
                  }}
                />
              </section>

              <article className="destination-detail">
                <h2>{data[index].name}</h2>
                <p>{data[index].description}</p>

                <section className="destination-estimate">
                  <div className="destination-distance">
                    <p className="sub-heading-2">AVG. DISTANCE</p>
                    <p className="sub-heading-1">{data[index].distance}</p>
                  </div>
                  <div className="destination-time">
                    <p className="sub-heading-2">EST. TIME TRAVEL</p>
                    <p className="sub-heading-1">{data[index].travel}</p>
                  </div>
                </section>
              </article>
            </section>
          </section>
        </> )}
    </main>
  );
};

export default Destination;
