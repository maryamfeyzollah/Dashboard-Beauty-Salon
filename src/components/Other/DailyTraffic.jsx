import BarChart from "../charts/BarChart";
import { barChartDataDailyTraffic } from "../../variables/chart";
import { barChartOptionsDailyTraffic } from "../../variables/chart";
import { MdArrowDropUp } from "react-icons/md";
import Card from "../../pages/Card";
const DailyTraffic = () => {
  return (
    <Card extra="p-5">
      <div className="flex flex-row justify-between">
        <div className="">
          <p className="text-xs font-medium  text-gray-600 xl:text-xl">
            بازدید روزانه
          </p>
          <p className="text-base font-bold text-custom-1">
            ۱۲{" "}
            <span className="text-sm xl:text-2xl font-medium  text-gray-600">
              نفر
            </span>
          </p>
        </div>
        <div className="mt-2 flex items-start">
          <div className="flex items-center text-sm text-green-500">
            <MdArrowDropUp className="h-5 w-5" />
            <p className="font-bold"> +2.45% </p>
          </div>
        </div>
      </div>

      <div className=" w-full md:h-full h-full xl:h-[200px] ">
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic}
        />
      </div>
    </Card>
  );
};

export default DailyTraffic;
