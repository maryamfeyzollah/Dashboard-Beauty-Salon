import Card from "./Card";

const Widget = ({ icon, title, subtitle }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-xl">
      <div className="mr-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-slate-100 p-3 ">
          <span className="flex items-center text-custom-2">{icon}</span>
        </div>
      </div>

      <div className="mr-5 flex w-auto flex-col ">
        <p className=" p-2 text-sm font-semibold text-gray-600">{title}</p>
        <h4 className="text-base px-2 font-bold text-navy-700">
          {subtitle} {"عدد"}
        </h4>
      </div>
    </Card>
  );
};

export default Widget;
