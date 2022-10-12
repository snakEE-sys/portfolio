import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  AOS.init();
  return (
    <section id="o mně">
      <div
        className="omne-section w-full min-h-screen text-white flex uppercase text-xl md:text-2xl"
        style={{ backgroundColor: "#151414" }}
      >
        <div className="flex flex-col justify-evenly lg:flex-row my-8">
          <div
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="900"
            className="item flex p-5 xsm:p-16 flex-col"
          >
            <h1 className="monument-black tracking-wide">Vítejte, </h1>
            <p>
              Jmenuji se Andrzej Grabowski. Jsem 20 letý frontend developer. Mám
              více než 4 letou zkušenost s tvorbou webových stránek.
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="250"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="900"
            className="item p-5 xsm:p-16 flex items-center"
          >
            <div>
              <h1 className="monument-black tracking-wide">
                Kvalita, <span className="line-through">Kvantita</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Integer lacinia. Fusce aliquam vestibulum ipsum. Fusce nibh.
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="450"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="900"
            className="item p-5 xsm:p-16 flex items-end"
          >
            <div>
              <h1 className="monument-black tracking-wide">
                Kvalita, <span className="line-through">Kvantita</span>
              </h1>
              <p>
                Vivamus luctus egestas leo. Class aptent taciti sociosqu ad
                litora torquent per conubia nostra, per inceptos hymenaeos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
