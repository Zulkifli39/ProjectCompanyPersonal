import { useState } from "react";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 250000,
      yearlyPrice: 500000,
      description:
        "A common place for future learning in web development programming.",
    },
    {
      name: "Advance",
      monthlyPrice: 350000,
      yearlyPrice: 600000,
      description:
        "A common place for future learning in web development programming.",
    },
    {
      name: "Premium",
      monthlyPrice: 450000,
      yearlyPrice: 700000,
      description:
        "A common place for future learning in web development programming.",
    },
  ];

  return (
    <div className="w-full md:px-14 p-4 max-w-s mx-auto py-24">
      <div className="text-center">
        <div>
          <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">
            Here are all our plans
          </h2>
          <p className="text-tertiary md:w-1/3 mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
            voluptatibus iusto aperiam reprehenderit obcaecati repellendus optio
            facere similique. Perspiciatis, at!
          </p>

          {/* Toggle Pricing */}
          <div className="mt-16">
            <label
              htmlFor="toggle"
              className="inline-flex items-center cursor-pointer"
            >
              <span>Monthly</span>
              <div className="w-14 h-6 bg-gray-300 rounded-full mx-2 relative">
                <div
                  className={`bg-bluefav w-6 h-6 rounded-full transition-transform duration-200 ease-in-out transform ${
                    isYearly ? "translate-x-8" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <span>Yearly</span>
            </label>
            <input
              type="checkbox"
              id="toggle"
              className="hidden"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
            />
          </div>
        </div>
      </div>

      {/* Pricing cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-11/12 mx-auto mt-14">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
          >
            <h2 className="text-3xl font-bold text-center text-primary">
              {pkg.name}
            </h2>
            <p className="text-tertiary text-center my-5">{pkg.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl">
              Rp{isYearly ? pkg.yearlyPrice : pkg.monthlyPrice.toLocaleString()}{" "}
              <span className="text-base text-tertiary font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-8 space-y-4 px-4">
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-800 inline-block mr-2"></span>{" "}
                Videos of Lessons
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-greenlight inline-block mr-2"></span>{" "}
                Videos of Lessons
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-blue-800 inline-block mr-2"></span>{" "}
                Videos of Lessons
              </li>
              <li className="flex items-center">
                <span className="w-4 h-4 rounded-full bg-greenlight inline-block mr-2"></span>{" "}
                Videos of Lessons
              </li>
            </ul>
            <div className="w-1/2 mx-auto mt-8 flex items-center justify-center bg-bluefav p-2 rounded-lg">
              <button className="font-semibold text-sm">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
