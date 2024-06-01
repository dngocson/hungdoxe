const HomeImage = () => {
  return (
    <div
      className="grid grid-cols-2 gap-2"
      style={{ gridTemplateColumns: "65% 35%" }}
    >
      <img
        className="object-fit h-full"
        src="images/homePage1.jpg"
        alt="homePageImg"
      />
      <div className="flex flex-grow basis-2/5 flex-col gap-2">
        <img src="images/HomePage2.jpg" alt="homePageImg" />
        <img src="images/homePage3.jpg" alt="homePageImg" />
        <img src="images/HomePage4.jpg" alt="homePageImg" />
      </div>
    </div>
  );
};

export default HomeImage;
