const Workflow = () => {
  return (
    <div className="mt-10 bg-[#4F39F6] py-10 text-center text-white">
      <div>
        <div>
          <h1 className="text-4xl  font-bold">
            Ready to Transform Your Workflow?
          </h1>
          <p className="text-white/50 my-4">
            Join thousands of professionals who are already using Digitools to
            work smarter. Start your free trial today.
          </p>
        </div>
        <div>
          <div className="flex justify-center gap-4">
            <button className="btn btn-outline btn-primary bg-white rounded-full">
              Explore Products
            </button>
            <button className="btn text-white bg-[#4F39F6] rounded-full">
              View Pricing
            </button>
          </div>
          <p className="text-white/50 my-4">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
