import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <section id="kontakt">
      <div
        className="footer h-screen w-full px-6 flex flex-col justify-evenly overflow-hidden"
        style={{ backgroundColor: "#151414" }}
      >
        <div className="link" data-aos="fade-left">
          <a href="#o mně">
            <span className="text-stroke uppercase lg:text-transparent hover:text-white text-white transition ease-in monument-black max-w-content text-3xl md:text-8xl lg:text-9xl">
              O mně
            </span>
          </a>
        </div>
        <div className="link text-right" data-aos="fade-right">
          <a href="#portfolio">
            <span className="text-stroke lg:text-transparent hover:text-white text-white uppercase transition ease-in monument-black text-3xl md:text-8xl lg:text-9xl">
              Portfolio
            </span>
          </a>
        </div>
        <div className="link" data-aos="fade-left">
          <a href="#kontakt">
            <span className="text-stroke lg:text-transparent text-white hover:text-white uppercase transition ease-in monument-black text-3xl md:text-8xl lg:text-9xl">
              Kontakt
            </span>
          </a>
        </div>
      </div>
      <div
        className="footer-kontakt w-full h-16"
        style={{ backgroundColor: "#151414" }}
      >
        <div className="flex justify-center items-center text-white monument-black">
          <a href="mailto: kontakt@andrzejgrabowski.cz">
            kontakt@andrzejgrabowski.cz
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
