import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 lg:gap-28 lg:py-20 xl:flex-row ">
      <div className="hero-map" />

    
      <div className=" relative z-20 felx flex-1 flex-col lg:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          sunt quisquam perspiciatis suscipit quos, pariatur commodi quibusdam
          modi. Error eum voluptate vel suscipit nihil explicabo assumenda
          officia dolorum sapiente? Molestias?
        </p>
        <div className="my-10 flex flex-wrap gap-5 items-center">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={50}
                  height={50}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70 ">
            198k
            <span className="regular-16 lg:regular-20 ml-1">Excellent Reviews</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button type="button" variant="btn_green" title="Download App"/>
            <Button type="button" icon="/play.svg" variant="btn_white_text" title="How We Work"/>
        </div>
      </div>
      <div className=" relative flex flex-1 items-start">
        <div className=" relative z-20 w-[268px] flex  flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
            <div className="flex flex-col">
                <div className="flexBetween">
                    <p className="regular-16 text-gray-20 ">Location</p>
                    <Image src="/close.svg" alt="close" width={25} height={25}/>

                </div>
                <p className="bold-20 text-white">Agues Calintes</p>
            </div>
                <div className="flexBetween">
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Distance</p>
                        <p className="bold-20 text-white">173.23 mi</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="regular-16 block text-gray-20">Elevition</p>
                        <p className="bold-20 text-white">2.040 Km</p>
                    </div>

                </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
