const Banner = () => {
  return (
    <div
      className="flex w-full h-full flex-col rounded-xl bg-cover px-5 py-5 md:px-10 md:py-10"
      style={{
        backgroundImage: `url('https://i.ibb.co/tMcztYt/9.png')`,
      }}
    >
      <div className="w-full">
        <h4 className=" text-xl font-bold text-custom-1  xl:text-3xl xl:pb-10">
          داشبورد سالن زیبایی
        </h4>
        <p className="mt-4 text-base font-medium text-purple-950 ">
          برای کسب اطلاع از سرویس های سالن زیبایی و ثبت درخواست می توانید از
          منوی پایین سرویس مورد نطر را انتخاب نمایید
        </p>
      </div>
    </div>
  );
};

export default Banner;
