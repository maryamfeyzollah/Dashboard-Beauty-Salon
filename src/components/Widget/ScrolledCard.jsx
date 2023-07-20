import { Link } from "react-router-dom";

function ScrolledCard({ data, ...props }) {
  return (
    <div
      className={`scrolledCard ${data.color} text-slate-50 flex flex-col justify-center items-center`}
    >
      <Link to={data.navigate}>
        <div className="pb-3 flex justify-center items-center">{data.icon}</div>

        <div className="flex flex-row justify-between items-center gap-3">
          <span className="text-2xl font-bold px-2 py-1">{data.title}</span>
        </div>
      </Link>
    </div>
  );
}

export default ScrolledCard;
