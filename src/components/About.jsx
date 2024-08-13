import about1 from "../image/about1.jpeg";

function About() {
  return (
    <div className="w-full md:px-14 p-4 max-w-s mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:2/5  ">
          <img src={about1} alt="" className="md:w-96 md:ml-20" />
        </div>

        {/* About Content */}
        <div className="md:w-1/2">
          <h2 className="md:text-4xl texl-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary">for many years</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            laudantium ducimus vitae eius doloremque suscipit voluptatum aperiam
            quia mollitia amet?
          </p>
          <button className="bg-bluefav text-black py-4 px-8 rounded-full">
            <p className="font-bold text-sm">Start Now</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col mt-14 md:flex-row-reverse justify-between items-center">
        <div className="md:2/5  ">
          <img src={about1} alt="" className="md:w-96 md:mr-20" />
        </div>

        {/* About Content */}
        <div className="md:w-1/2 md:ml-20">
          <h2 className="md:text-4xl texl-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product{" "}
            <span className="text-secondary">for many years</span>
          </h2>
          <p className="text-tartiary text-lg mb-7">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            laudantium ducimus vitae eius doloremque suscipit voluptatum aperiam
            quia mollitia amet?
          </p>
          <button className="bg-bluefav text-black py-4 px-8 rounded-full">
            <p className="font-bold text-sm">Start Now</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
