import banner from "../../assets/banner.png";
const Hero = () => {
  return (
    <div className="flex mx-12 my-10 justify-between items-center">
      <div className="space-y-5">
        <div>
          <div className="badge badge-soft badge-primary">
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl font-bold mt-5">
            Supercharge Your Digital Workflow
          </h1>
          <p className="text-black/40 mt-4">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>
        <div>
          <button className="btn btn-primary rounded-3xl">
            Explore Products
          </button>
          <button className="btn rounded-3xl">Watch Demo</button>
        </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Hero;
