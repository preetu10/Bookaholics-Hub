/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import SectionTitle from "../SectionTitle";

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container flex items-center justify-center pt-20"> 
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center"> 
              <SectionTitle
                title="About Bookaholics' Hub"
                paragraph="At Bookaholics' Hub, we're a passionate team of bibliophiles who understand the joy and significance of reading. Our platform offers a wide range of features to enhance your book journey and fellow bookaholics. With Bookaholics' Hub you can exchange, buy, sell, and borrow books, creating a vibrant community for avid readers. Our mission is to connect readers, foster literary discussions, and create a thriving community united by the love of books. Whether you're a seasoned reader or just embarking on your literary journey. Bookaholics' Hub is here to enhance your reading adventures. Happy reading!"
                mb="44px"
              /> 
                <div 
                data-wow-delay=".15s"
               >
            </div> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
