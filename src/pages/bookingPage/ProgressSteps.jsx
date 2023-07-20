import { Link, useLocation } from "react-router-dom";

const ProgressSteps = ({ serviceId }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const steps = [
    { id: 1, name: "خدمات", path: "/booking" },
    { id: 2, name: "پرسنل", path: `/booking/${serviceId}` },
    { id: 3, name: "تایید نهایی", path: `/booking/summary/${serviceId}` },
  ];

  const currentStep = steps.findIndex((step) => step.path === currentPath);

  return (
    <div className="justify-between mb-5">
      <div className="flex justify-between p-4    ">
        {steps.map((step) => (
          <Link
            key={step.id}
            to={step.path}
            className={`flex flex-col  items-center   ${
              step.id <= currentStep + 1 ? "text-pink-500" : "text-gray-500"
            }`}
          >
            <div
              className={`h-5 w-5  rounded-full  ${
                step.id === currentStep + 1 ? "bg-pink-500" : "bg-gray-300"
              }`}
            ></div>
            <span
              className={`my-2  ${
                step.id === currentStep + 1 ? "font-bold" : ""
              }`}
            >
              {step.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProgressSteps;
