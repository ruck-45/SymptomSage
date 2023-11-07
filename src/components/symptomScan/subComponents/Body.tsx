// Dependencies
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";

// Local Files
import "./Body.css";
import head from "../assets/head.svg";
import lhand from "../assets/lhand.svg";
import lleg from "../assets/lleg.svg";
import rhand from "../assets/rhand.svg";
import rleg from "../assets/rleg.svg";
import abdomen from "../assets/abdomen.svg";
import chest from "../assets/chest.svg";

type BodyProps = {
  className?: string;
};

const Body = (props: BodyProps) => {
  return (
    <div className={"Body " + props.className}>
      <Tooltip key="Head, Throat & Neck" placement="right" content="Head, Throat & Neck" color="danger" showArrow>
        <Link className="absolute w-[73px] start-[97.5px] showOnHover" to={"./"}>
          <img src={head} alt="" />
        </Link>
      </Tooltip>
      <Tooltip key="Chest & Back" placement="right" content="Chest & Back" color="danger" showArrow>
        <Link className="absolute w-[160px] start-[63px] top-[83.5px] showOnHover" to={"./"}>
          <img src={chest} alt="" />
        </Link>
      </Tooltip>
      <Tooltip key="Arms & shoulder" placement="left" content="Arms & shoulder" color="danger" showArrow>
        <Link className="absolute w-[90.5px] top-[99px] showOnHover" to={"./"}>
          <img src={lhand} alt="" />
        </Link>
      </Tooltip>
      <Tooltip key="Arms & Shoulder" placement="right" content="Arms & Shoulder" color="danger" showArrow>
        <Link className="absolute w-[81.8px] end-[0px] top-[114px] showOnHover" to={"./"}>
          <img src={rhand} alt="" />
        </Link>
      </Tooltip>
      <Tooltip
        key="Abdomen, pelvis & buttocks"
        placement="right"
        content="Abdomen, Pelvis & Buttocks"
        color="danger" showArrow
      >
        <Link className="absolute w-[133px] start-[78px] top-[180px] showOnHover" to={"./"}>
          <img src={abdomen} alt="" />
        </Link>
      </Tooltip>
      <Tooltip key="Legs" placement="left" content="Legs" color="danger" showArrow>
        <Link className="absolute w-[70.4px] start-[74px] top-[311px] showOnHover" to={"./"}>
          <img src={lleg} alt="" />
        </Link>
      </Tooltip>
      <Tooltip key="Legs" placement="right" content="Legs" color="danger" showArrow>
        <Link className="absolute w-[64.2px] end-[64.5px] top-[320px] showOnHover" to={"/"}>
          <img src={rleg} alt="" />
        </Link>
      </Tooltip>
    </div>
  );
};

export default Body;
