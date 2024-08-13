import line from "../image/line.png";
import sosmed from "../image/iconsosmed.png";

function Services() {
  return (
    <div className="w-full  mt-6 flex flex-col items-center">
      <div className="text-center flex flex-col space-y-3">
        <h3 className="font-semibold text-xl">Services</h3>
        <h2 className="text-2xl font-bold">What we Offer</h2>
        <p className="md:w-2/5 w-full mx-auto">
          We engage in integrated digital marketing strategies to ensure you’ve
          got all your bases covered.
        </p>
      </div>

      <div className="relative mt-10 w-full flex justify-center">
        <img src={line} alt="Line Decoration" className="" />
        <div className="absolute top-0 w-full flex justify-around items-center mt-[-30px]">
          <img src={sosmed} alt="Facebook Icon" className="" />
        </div>
      </div>
      <div>{/* <img src={bigdesign} alt="" /> */}</div>
    </div>
  );
}

export default Services;
