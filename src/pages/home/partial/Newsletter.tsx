import PageBreaker from "../../../components/_Common/PageBreaker";

const Newsletter = () => {
  return (
    <div className="mt-8 grid grid-cols-[6fr_2fr] gap-2">
      <div className="flex flex-col gap-2">
        <PageBreaker className="px-4 text-start uppercase" label="Tin Tức" />
        <div className="flex gap-2 rounded-md border border-secondary p-2">
          <div className="space-y-3 ">
            <img
              src="https://cdn.chungauto.vn/uploads/tin-tuc-1/do-ford-everest-2023-578x300.jpg"
              alt="hinh"
            />
            <p className="font-bold">
              Tổng hợp phụ kiện xe Ford Everest độ đẹp 2023
            </p>
          </div>
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center gap-2">
              <img
                className="h-[70px] w-[130px]"
                src="https://cdn.chungauto.vn/uploads/camera-3-mat/camera-3-mat-cho-honda-civic-426x221.jpg"
                alt=""
              />
              <p>Camera 3 mắt cho xe Honda Civic 2022-2024</p>
            </div>
            <hr />
            <div className="flex items-center gap-2">
              <img
                className="h-[70px] w-[130px]"
                src="https://cdn.chungauto.vn/uploads/camera-3-mat/camera-3-mat-cho-honda-civic-426x221.jpg"
                alt=""
              />
              <p>Camera 3 mắt cho xe Honda Civic 2022-2024</p>
            </div>
            <hr />
            <div className="flex items-center gap-2">
              <img
                className="h-[70px] w-[130px]"
                src="https://cdn.chungauto.vn/uploads/camera-3-mat/camera-3-mat-cho-honda-civic-426x221.jpg"
                alt=""
              />
              <p>Camera 3 mắt cho xe Honda Civic 2022-2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2  ">
        <PageBreaker
          className="px-4 text-start uppercase"
          label="Kinh nghiệm"
        />

        <div className="rounded-md border border-secondary p-2">
          <img
            src="https://cdn.chungauto.vn/uploads/tin-tuc-1/do-ford-everest-2023-578x300.jpg"
            alt=""
          />
          <p className="font-bold">Camera 3 mắt cho xe Honda Civic 2022-2024</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
