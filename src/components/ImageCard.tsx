const ImageCard = () => {
  return (
    <div className="relative">
      <div className=" py-10 px-2 overflow-x-auto absolute w-full top-0">
        <div className="flex justify-between ">
          <div className=" bg-amber-600 w-20">Hii</div>
          <div className=" bg-amber-600 w-20">Hii</div>
          <div className=" bg-amber-600 w-20">Hii</div>
          <div className=" bg-amber-600 w-20">Hii</div>
          <div className=" bg-amber-600 w-20">Hii</div>
          <div className=" bg-amber-600 w-20">Hii</div>
          {
            // Array.from({ length: 6 }).map((_, i) => (
            //   <div key={i} className="w-8 sm:w-24 lg:w-50 rounded-xl bg-white p-6 ">
            //     <h3 className="text-lg font-semibold mb-2">Card {i + 1}</h3>
            //     {/* <p className="text-gray-500">This is a sample card description.</p> */}
            //   </div>
            // ))
          }
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
