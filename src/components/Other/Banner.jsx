const Banner = () => {
  return (
    <div
      className="flex w-full h-full flex-col rounded-[20px] bg-cover px-[30px] py-[30px] md:px-[64px] md:py-[56px]"
      style={{
        backgroundImage: `url('https://i.ibb.co/tMcztYt/9.png')`,
      }}
    >
      <div className="w-full">
        <h4 className=" text-xl font-bold text-custom-1  md:text-3xl md:pb-10">
          داشبورد سالن زیبایی
        </h4>
        <p className=" text-base font-medium text-[#E3DAFF] ">
          برای کسب اطلاع از سرویس های سالن زیبایی و ثبت درخواست می توانید از
          منوی پایین سرویس مورد نطر را انتخاب نمایید
        </p>
      </div>
      
    </div>
  );
};

export default Banner;
