// Local Files
import "./Yoga.css";
import head from "../assets/yogaHead.svg";
import lhand from "../assets/yogalArm.svg";
import rhand from "../assets/yogarArm.svg";
import legs from "../assets/yogaLegs.svg";
import abdomen from "../assets/yogaAbdomen.svg";
import chest from "../assets/yogaChest.svg";
import symbol from "../assets/symbol.svg";

type YogaProps = {
  className?: string;
};

const Yoga = (props: YogaProps) => {
  return (
    <div className={"Yoga " + props.className}>
      <img src={head} alt="" className="absolute w-[78px] start-[153.5px] yogaimg z-[1]" />
      <img src={chest} alt="" className="absolute w-[180px] start-[100px] top-[111px] yogaimg z-[1]" />
      <img src={lhand} alt="" className="absolute w-[47px] start-[87.5px] top-[163px] yogaimg z-[2]" />
      <img src={rhand} alt="" className="absolute w-[63.5px] end-[88px] top-[163px] yogaimg z-[2]" />
      <img src={abdomen} alt="" className="absolute w-[120px] start-[134px] top-[241px] yogaimg z-[2]" />
      <img src={legs} alt="" className="absolute w-[385.5px] start-[0px] top-[260px] yogaimg z-[1]" />
      <img src={symbol} alt="" className="absolute w-[45px] start-[25px] top-[200px] yogaimg z-[1]" />
    </div>
  );
};

export default Yoga;
