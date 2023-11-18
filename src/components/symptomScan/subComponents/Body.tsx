// Dependencies
import { Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

// Local Files
import "./Body.css";
import head from "../assets/head.svg";
import lhand from "../assets/lhand.svg";
import lleg from "../assets/leftleg.svg";
import rhand from "../assets/rhand.svg";
import rleg from "../assets/rightleg.svg";
import abdomen from "../assets/abdomen.svg";
import chest from "../assets/chest.svg";
import symbol from "../assets/symbol.svg";

type BodyProps = {
  className?: string;
  setSymptomsToken: Function;
  infoToken: Boolean;
  onOpen: Function;
  setPainpoint: Function;
};

const Body = (props: BodyProps) => {
  const navigate = useNavigate();

  const bodyClicked = (id: number) => {
    props.setPainpoint(id);
    if (props.infoToken) {
      props.setSymptomsToken(true);
      navigate("../SymptomsList", { state: { id: id } });
    } else {
      props.onOpen();
    }
  };

  return (
    <div className={"Body " + props.className}>
      <Tooltip key="Head, Throat & Neck" placement="right" content="Head, Throat & Neck" color="danger" showArrow>
        <img
          src={head}
          alt=""
          className="absolute w-[73px] start-[97.5px] showOnHover"
          onClick={() => bodyClicked(6)}
        />
      </Tooltip>
      <Tooltip key="Chest & Back" placement="right" content="Chest & Back" color="danger" showArrow>
        <img
          src={chest}
          alt=""
          className="absolute w-[160px] start-[63px] top-[83.5px] showOnHover"
          onClick={() => bodyClicked(15)}
        />
      </Tooltip>
      <Tooltip key="lArm" placement="left" content="Arms & shoulder" color="danger" showArrow>
        <img src={lhand} alt="" className="absolute w-[90.5px] top-[99px] showOnHover" onClick={() => bodyClicked(7)} />
      </Tooltip>
      <Tooltip key="rArm" placement="right" content="Arms & Shoulder" color="danger" showArrow>
        <img
          src={rhand}
          alt=""
          className="absolute w-[81.8px] end-[0px] top-[114px] showOnHover"
          onClick={() => bodyClicked(7)}
        />
      </Tooltip>
      <Tooltip
        key="Abdomen, pelvis & buttocks"
        placement="right"
        content="Abdomen, Pelvis & Buttocks"
        color="danger"
        showArrow
      >
        <img
          src={abdomen}
          alt=""
          className="absolute w-[133px] start-[78px] top-[180px] showOnHover"
          onClick={() => bodyClicked(16)}
        />
      </Tooltip>
      <Tooltip key="lLeg" placement="left" content="Legs" color="danger" showArrow>
        <img
          src={lleg}
          alt=""
          className="absolute w-[70.4px] start-[74px] top-[311px] showOnHover"
          onClick={() => bodyClicked(10)}
        />
      </Tooltip>
      <Tooltip key="rLeg" placement="right" content="Legs" color="danger" showArrow>
        <img
          src={rleg}
          alt=""
          className="absolute w-[64.2px] end-[64.5px] top-[320px] showOnHover"
          onClick={() => bodyClicked(10)}
        />
      </Tooltip>
      <Tooltip key="Skin, Joints & General" placement="right" content="Skin, Joints & General" color="danger" showArrow>
        <img
          src={symbol}
          alt=""
          className="absolute w-[45px] start-[10px] top-[340px] showOnHover"
          onClick={() => bodyClicked(17)}
        />
      </Tooltip>
    </div>
  );
};

export default Body;
