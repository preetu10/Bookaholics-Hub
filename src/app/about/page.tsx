import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import NavBar from "../components/NavBar";

const AboutPage = () => {
  return (
    <>
    <main className='bg-about_bg_image   bg-cover object-cover bg-opacity-25'>
      <div className="w-full h-full min-h-screen">
        <div className="w-full">
          <NavBar />
          <AboutSectionOne />
          <AboutSectionTwo />
        </div>
      </div>
    </main>
    </>
  );
};

export default AboutPage;
