// Local Files
import "./Logo.css";
import logo from "../globalAssets/logo.svg";

type LogoProps = {
  children?: JSX.Element;
  className?: string;
};

const Logo = (props: LogoProps) => {
  const className = "flex items-center gap-5 " + props.className;
  return (
    <div className={className}>
      <img className="Logo" src={logo} alt="" />
      {props.children}
    </div>
  );
};

export default Logo;
