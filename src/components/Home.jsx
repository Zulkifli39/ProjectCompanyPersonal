import Group1 from "../image/Group1.png";

function Home() {
  return (
    <>
      <div className="relative bg-bluefav min-h-screen flex items-center justify-center overflow-hidden">
        {/* SVG Background */}
        <div className="container mx-auto px-4 md:px-24 flex flex-col md:flex-row justify-between items-center z-10 space-y-8 md:space-y-0">
          {/* Banner Content */}
          <div className="md:w-3/5 md:text-left space-y-6 mt-20 md:mt-0">
            <h2 className="text-white text-4xl font-bold mb-4 w-full md:w-3/4">
              Reach the Heart of Your Target Audience
            </h2>
            <p className="text-white text-xl mb-6">
              Start a free 30-Minute Strategy Chat
            </p>
            <div>
              <button className="bg-white text-black py-4 px-8 rounded-full">
                <p className="font-bold text-sm">Start Now</p>
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/5">
            <img
              src={Group1}
              alt="Globe illustration"
              className="lg:h-[520px] mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full max-w-full -mt-20"
      >
        <path
          fill="#0076e0"
          d="M0,96L40,106.7C80,117,160,139,240,138.7C320,139,400,117,480,122.7C560,128,640,160,720,186.7C800,213,880,235,960,218.7C1040,203,1120,149,1200,133.3C1280,117,1360,139,1400,149.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default Home;
