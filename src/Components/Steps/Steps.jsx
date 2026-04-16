import { Box, Rocket, User } from "lucide-react";

const Steps = () => {
  return (
    <div className="my-10 bg-base-200 py-10">
      <div>
        <h1 className="text-5xl font-bold text-center ">
          Get Started in 3 Steps
        </h1>
        <p className="text-black/50 text-center mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      {/* cards section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-12 mt-5">
        <div className="flex flex-col justify-between items-center bg-white p-5 rounded-2xl space-y-3">
          <div className="ml-auto">
            <p className="bg-[#4F39F6] text-white h-10 w-10 items-center flex justify-center rounded-full">
              01
            </p>
          </div>

          <User className="badge badge-primary badge-soft rounded-full h-15 w-15"></User>
          <h2 className="text-l font-bold">Create Accnount</h2>
          <p className="text-black/50 text-sm text-center">
            Sign up for free in seconds. No credit card required to get started.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center bg-white p-5 rounded-2xl space-y-3">
          <div className="ml-auto">
            <p className="bg-[#4F39F6] text-white h-10 w-10 items-center flex justify-center rounded-full">
              02
            </p>
          </div>

          <Box className="badge badge-primary badge-soft rounded-full h-15 w-15"></Box>
          <h2 className="text-l font-bold">Choose Products</h2>
          <p className="text-black/50 text-sm text-center">
            Browse our catalog and select the tools that fit your needs.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center bg-white p-5 rounded-2xl space-y-3">
          <div className="ml-auto">
            <p className="bg-[#4F39F6] text-white h-10 w-10 items-center flex justify-center rounded-full">
              03
            </p>
          </div>

          <Rocket className="badge badge-primary badge-soft rounded-full h-15 w-15"></Rocket>
          <h2 className="text-l font-bold">Start Creating</h2>
          <p className="text-black/50 text-sm text-center">
            Download and start using your premium tools immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
