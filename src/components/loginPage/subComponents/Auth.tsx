// Dependencies
import { useState } from "react";
import { Button, Input, Checkbox } from "@nextui-org/react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGoogleCircle, AiFillInstagram } from "react-icons/ai";

// Local Files
import "./Auth.css";
import EyeFilledIcon from "./EyeFilledIcon";
import EyeSlashFilledIcon from "./EyeSlashFilledIcon";
import Logo from "../../../globalSubComponents/Logo";

type AuthProps = {
  authState: boolean;
};

const Auth = (props: AuthProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [authStatus, setauthStatus] = useState(props.authState);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const changeAuthStatus = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    setauthStatus(!authStatus);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  return (
    <form className="flex flex-col justify-center p-12 gap-3 Auth rounded-3xl">
      <Logo className="mb-6">
        <h3 className="LogoName">Symptom Sage</h3>
      </Logo>
      <div className="flex gap-2 font-semibold welcomeText">
        <h1>Welcome to Symptom Sage </h1>
        <p>👋</p>
      </div>
      <p className="text-xs mb-2">Please {authStatus ? "Login to" : "Create"} your account and start the adventure !</p>
      <Input
        type="text"
        label="Username"
        labelPlacement="outside"
        placeholder="Enter your username"
        isClearable
        className={authStatus ? "hidden" : ""}
        onKeyDown={handleKeyPress}
      />
      <Input
        type="email"
        label="Email"
        labelPlacement="outside"
        placeholder="Enter your email"
        isClearable
        onKeyDown={handleKeyPress}
      />
      <Input
        label="Password"
        labelPlacement="outside"
        placeholder="Enter your password"
        endContent={
          <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyPress}
      />
      <Input
        label="Confirm Password"
        labelPlacement="outside"
        placeholder="Confirm your password"
        className={authStatus ? "hidden" : ""}
        endContent={<button className="focus:outline-none" type="button" onClick={toggleVisibility}></button>}
        type={isVisible ? "text" : "password"}
        onKeyDown={handleKeyPress}
      />
      <a href="#" className={authStatus ? "text-xs text-right" : "hidden"} style={{ color: "#006FEE" }}>
        Forgot Password?
      </a>
      <Checkbox defaultSelected size="sm" className={authStatus ? "" : "hidden"}>
        Remember Me
      </Checkbox>
      <Button className="mt-2 mb-2" color="primary" variant="shadow">
        Submit
      </Button>
      <p className="text-xs text-center">
        {authStatus ? "New to our platform?" : "Already have an account?"}
        &nbsp;
        <button
          style={{ color: "#006FEE" }}
          onClick={(e) => {
            changeAuthStatus(e);
          }}
        >
          {authStatus ? "Create an account" : "Login"}
        </button>
      </p>
      <div className={authStatus ? "flex items-center justify-center gap-5 overflow-hidden mt-1 mb-1" : "hidden"}>
        <div className="Divider"></div>
        <p className="text-sm">or</p>
        <div className="Divider"></div>
      </div>
      <div className={authStatus ? "flex justify-center items-center gap-3" : "hidden"}>
        <Button className="text-2xl" isIconOnly color="danger" variant="flat">
          <AiFillInstagram />
        </Button>
        <Button className="text-2xl" isIconOnly color="primary" variant="flat">
          <FaFacebook />
        </Button>
        <Button className="text-2xl" isIconOnly color="default" variant="flat">
          <FaSquareXTwitter />
        </Button>
        <Button className="text-2xl" isIconOnly color="danger" variant="flat">
          <AiFillGoogleCircle />
        </Button>
      </div>
    </form>
  );
};

export default Auth;
