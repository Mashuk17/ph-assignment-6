import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="p-10 ">
      <div>
        <h1 className="text-4xl font-bold text-center  pb-4">
          Simple, Transparent Pricing
        </h1>
        <p className="text-black/50 text-center">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      {/* card container */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        <div className="bg-base-200 p-6 rounded-2xl space-y-1 flex flex-col ">
          <h2 className="font-bold text-xl">Starter</h2>
          <p className=" text-black/50 mb-3">Perfect for getting started</p>
          <p className="mb-4">
            <span className="text-4xl font-bold">$0</span>/Month
          </p>
          <p className="flex">
            <Check color="#30B868" />
            Access to 10 free tools
          </p>
          <p className="flex">
            <Check color="#30B868" />
            Basic templetes
          </p>
          <p className="flex">
            <Check color="#30B868"></Check>Communication support
          </p>
          <p className="flex">
            <Check color="#30B868"></Check>1 project per month
          </p>
          <div className="mt-auto">
            <button className="btn btn-primary w-full rounded-3xl">
              Get Started Free
            </button>
          </div>
        </div>
        <div className="bg-[#4F39F6] text-white p-6 rounded-2xl space-y-1">
          <h2 className="font-bold text-xl">Starter</h2>
          <p className=" text-white/50 mb-3">Perfect for getting started</p>
          <p className="mb-4">
            <span className="text-4xl font-bold">$0</span>/Month
          </p>
          <p className="flex">
            <Check color="white" />
            Access to all premium tools
          </p>
          <p className="flex">
            <Check color="white" />
            Unlimited templates
          </p>
          <p className="flex">
            <Check color="white"></Check>Priority support
          </p>
          <p className="flex">
            <Check color="white"></Check>Unlimited projects
          </p>
          <p className="flex">
            <Check color="white"></Check>Cloud sync
          </p>
          <p className="flex">
            <Check color="white"></Check>Advanced analytics
          </p>
          <button className="btn bg-white w-full text-[#4F39F6] rounded-3xl ">
            Contact Sales
          </button>
        </div>
        <div className="bg-base-200 p-6 rounded-2xl space-y-1 flex flex-col">
          <h2 className="font-bold text-xl">Starter</h2>
          <p className=" text-black/50 mb-3">Perfect for getting started</p>
          <p className="mb-4">
            <span className="text-3xl font-bold">$0</span>/Month
          </p>
          <p className="flex">
            <Check color="#30B868" />
            Everything in Pro
          </p>
          <p className="flex">
            <Check color="#30B868" />
            Team collaboration
          </p>
          <p className="flex">
            <Check color="#30B868"></Check>Custom integrations
          </p>
          <p className="flex">
            <Check color="#30B868"></Check>Dedicated support
          </p>
          <p className="flex">
            <Check color="#30B868"></Check>SLA guarantee
          </p>
          <p className="flex">
            <Check color="#30B868"></Check>Custom branding
          </p>
          <div className="mt-auto">
            <button className="btn btn-primary w-full rounded-3xl">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
