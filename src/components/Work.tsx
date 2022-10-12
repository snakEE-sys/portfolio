import sdhzablati from "../images/sdhzablati.png";
import rybisupina from "../images/rybisupina.png";
import tronia from "../images/tronia.png";

const Work = () => {
  return (
    <section id="portfolio">
      <div
        className="work-section w-full min-h-screen text-white uppercase text-xl"
        style={{ backgroundColor: "#151414" }}
      >
        <div className="flex justify-center items-center content-center flex-col">
          <div
            className="text-3xl monument-black mt-36 border-b-2 border-spacing-y-5 text-center"
            data-aos="fade-in"
            data-aos-duration="700"
          >
            <h1>Ukázky práce</h1>
          </div>
          <span
            className="normal-case mt-12"
            data-aos="fade-in"
            data-aos-duration="700"
          >
            Webové stránky na míru
          </span>
          <div className="grid grid-rows-2 lg:grid-cols-2 mt-28 justify-items-center gap-8 text-center p-6">
            <div data-aos="fade-right" data-aos-duration="700">
              <a href="https://rybisupina.cz" target="_blank" rel="noreferrer">
                <img width={"430px"} src={rybisupina} alt="rybisupina"></img>
                <h3 className="p-2">Rybí šupina</h3>
              </a>
            </div>
            <div data-aos="fade-left" data-aos-duration="700">
              <a href="https://tronia.eu" target="_blank" rel="noreferrer">
                <img width={"430px"} src={tronia} alt="tronia"></img>
                <h3 className="p-2">Tronia</h3>
              </a>
            </div>
            <div data-aos="fade-up" data-aos-duration="700">
              <a href="https://sdhzablati.cz" target="_blank" rel="noreferrer">
                <img width={"430px"} src={sdhzablati} alt="sdhzablati"></img>
                <h3 className="p-2">SDH Bohumín - Záblatí</h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
