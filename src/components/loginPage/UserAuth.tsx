// Direcetories
import { useLocation } from "react-router-dom";
import { Image } from "@nextui-org/react";

// Local Files
import "./UserAuth.css";
import Auth from "./subComponents/Auth";
import authImg from "./assets/authImg.svg";

type UserAuthProps = {
  setmemory: Function;
};

const UserAuth = (props:UserAuthProps) => {
  const location = useLocation();
  return (
    <div className="flex h-screen justify-center UserAuth">
      <div className="flex justify-center items-center UserAuthImg">
        <Image removeWrapper isBlurred className="AuthImg" src={authImg} alt="" />
      </div>
      <Auth authState={location.state} setmemory={props.setmemory} />
    </div>
  );
};

export default UserAuth;
