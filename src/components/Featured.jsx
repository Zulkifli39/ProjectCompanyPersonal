import saly from "../image/Saly.png";
import travel from "../image/travel.png";

function Featured() {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto md:mt-96 ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <div className="lg:w-1/4">
          <h3 className="text-2xl text-primary font-bold  lg:w-1/2">
            Why are better than others{" "}
          </h3>
          <p className="text-sm text-tartiary">
            A Simple paragraph is comprised of three major components . The
            First sentences which is often a declarative sentences is called the
            topic sentences
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start  md:gap-12 gap-8">
            <div className="bg-[rgba(255 , 255 , 255 , 0.04)] rounded-[35px] h-72 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer ">
              <div>
                <img src={saly} alt="" className="w-28 mx-auto" />
                <h5 className=" text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convention Salary
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255 , 255 , 255 , 0.04)] rounded-[35px] h-72 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:mt-16 ">
              <div>
                <img src={travel} alt="" className="w-28 mx-auto" />
                <h5 className=" text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convention Salary
                </h5>
              </div>
            </div>
            <div className="bg-[rgba(255 , 255 , 255 , 0.04)] rounded-[35px] h-72 shadow-3xl p-8 flex justify-center items-center hover:-translate-y-4 transition-all duration-300  cursor-pointer">
              <div>
                <img src={saly} alt="" className="w-28 mx-auto" />
                <h5 className=" text-2xl font-semibold text-primary px-5 text-center mt-5 ">
                  Convention Salary
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
