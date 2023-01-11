// import comeingImage from "../../assets/images/comeing.png";

const ComingSoon = () => {
  return (
    <div>
      {/* main did  */}
      <div className="w-[80%] mx-auto">
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0">
          <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
            <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  We are under
                  <br className="hidden md:block" />
                  <span className="text-primary">Construction</span>{" "}
                  <span className="inline-block text-deep-purple-accent-400">
                    check back for update soon.
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
            <img
              className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none sm:h-96 lg:h-full"
              src={comeingImage}
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
