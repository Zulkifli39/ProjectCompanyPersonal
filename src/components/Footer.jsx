import logo from "../image/logo.png";

function Footer() {
  return (
    <div className="bg-bluefav md:px-14 max-w-screen-2xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 px-4 md:px-12">
        <div className="md:w-1/2 space-y-8">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3 text-primary"
          >
            <img src={logo} alt="Logo" className="w-36 mt-2" />
            <span className="text-black text-base font-bold">Mpw</span>
          </a>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus nostrum, id fuga quasi dolor nobis rerum voluptatem
            inventore necessitatibus officia.
          </p>
          <div className="mt-8">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Input Your Email"
              className="bg-white py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary"
            />
          </div>
        </div>

        {/* Footer Navigations */}
        <div className="md:w-1/2 flex flex-col md:flex-row justify-between gap-8     items-start">
          <div className="space-y-4 mt-5">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="" className="block hover:text-gray-300">
                Feature
              </a>
              <a href="" className="block hover:text-gray-300">
                About
              </a>
              <a href="" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Landing Page
              </a>
              <a href="" className="block hover:text-gray-300">
                Email Marketing
              </a>
              <a href="" className="block hover:text-gray-300">
                HTML Template
              </a>
              <a href="" className="block hover:text-gray-300">
                Wordpress Theme
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="font-semibold">Resources</h4>
            <ul className="space-y-3">
              <a href="" className="block hover:text-gray-300">
                Blog
              </a>
              <a href="" className="block hover:text-gray-300">
                F.A.Q
              </a>
              <a href="" className="block hover:text-gray-300">
                Testimoni
              </a>
              <a href="" className="block hover:text-gray-300">
                Site Map
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
