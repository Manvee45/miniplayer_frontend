const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-2xl pt-14 px-6 relative lg:px-8">
        <div className="text-center flex justify-center flex-col">
          <h1 className="text-5xl   font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            WELCOME TO FUNNY APE CLUB
          </h1>
          {/* <p className="mt-8 text-lg  font-medium text-pretty text-gray-500 sm:text-xl/8 ">
              Fuape is a collection of 1000 funny ape NFTs - unique digitalsm:text-xl/8
              collectibles living on the Ethereum blockchain.
            </p> */}
          <p className="mt-8 text-lg font-medium text-gray-500 max-w-xl mx-auto text-pretty sm:text-xl/8">
            Fuape is a collection of 1000 funny ape NFTs - unique digital
            collectibles living on the Ethereum blockchain.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 gap-x-6">
            <button className=" outline-1 outline-black rounded-full py-3 px-6 hover:text-white hover:bg-black">
              Join Discord
            </button>
            <button className=" outline-1 outline-black bg-black text-white  rounded-full py-3 px-6 hover:bg-[#212121c5] ">
              See on Opensea
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
