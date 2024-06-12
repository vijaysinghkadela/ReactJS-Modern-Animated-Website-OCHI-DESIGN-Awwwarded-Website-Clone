function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5 ">
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative w-full rounded-lg  h-full  bg-[#094D43] flex items-center justify-center ">
          <img
            className="w-32  "
            src="	https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 border-[#CDEA68] left-10 bottom-10 text-[#CDEA68]">
            &copy;2024-25
          </button>
        </div>
      </div>
      <div className="cardContainer relative flex gap-5 h-[50vh] w-1/2">
        <div className="card w-1/2 h-full rounded-lg  bg-[#212121] flex items-center justify-center ">
          <img
            className="w-32  "
            src="		https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 uppercase border-[#fff] text-[#fff]">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className="card w-1/2 h-full rounded-lg  bg-[#212121] flex items-center justify-center ">
          <img
            className="w-32  "
            src="	https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 right-12 bottom-10 uppercase">
          Bussiness bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
