import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";

const Rules = () => {
  const [sidebarToggle] = useOutletContext();
  return (
    <main className="h-full font-inter">
      <Navbar toggle={sidebarToggle} />

      {/* Main Content */}
      <div className="mainCard">
        <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-xl">
          <div className=" py-5 ">
            <h1 className=" text-custom-2 font-bold text-2xl">
              قوانین و مقررات
            </h1>
            <div className=" text-slate-500 text-justify py-5 ">
              <p className="py-2 ">
                مبلغ بیعانه به هیچ عنوان برگشت داده نمی‌شود.
              </p>
              <p className="py-2 ">
                در صورت کنسل کردن نوبت، مبلغ بیعانه برگشت داده نمی‌شود.
              </p>
              <p className="py-2">
                در صورت تاخیر ۱۵ دقیقه به بالا، نوبت شما کنسل می‌شود.
              </p>
              <p className="py-2">
                در صورت تعویض پرسنل، هزینه ۵۰.۰۰۰ تومان بیشتر می‌شود.
              </p>
              <p className="py-2">
                نوبت‌دهی فقط از طریق سایت می‌باشد اما برای جابجایی حتما باید بین
                ساعت ۱۰ تا ۱۸ تماس بگیرید. در صورتی که زمان زودتر می‌خواهید،
                تماس بگیرید تا در لیست کنسلی ها باشید. کنسل کردن تایم فقط از
                طریق تلفنی و هماهنگی با منشی است.
              </p>
              <p className="py-2">از آوردن بچه و همراه خودداری کنید.</p>
              <p className="py-2">
                در صورت بروز هرگونه مشکل حداکثر تا ۱۲ روز اول تماس بگیرید تا کار
                اصلاح شود. در غیر این صورت نوبت ترمیم بعدی خود را رزرو کنید.
              </p>
              <p className="py-2">
                اگر نوبت ریموو دارید، حتما ۱۵ دقیقه زودتر از تایم نوبت خود در
                سالن حضور داشته باشید
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rules;
