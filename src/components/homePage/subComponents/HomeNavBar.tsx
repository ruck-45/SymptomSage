// Dependencies
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Local Files
import "./HomeNavBar.css";
import Logo from "../../../globalSubComponents/Logo";
import Profile from "../../../globalAssets/dummyProfile.png";

type HomeNavBarProps = {
  className?: string;
};

type routeChangeLandingEvent =
  | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  | React.MouseEvent<HTMLLIElement, MouseEvent>;

const menuItems = [
  { name: "Home", to: "./Content" },
  { name: "Services", to: "./Services" },
  { name: "About", to: "./About" },
];

const HomeNavBar = (props: HomeNavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const className = "HomeNav px-5 " + props.className;

  const navigate = useNavigate();
  const routeChangeLanding = (event: routeChangeLandingEvent) => {
    let path = `../Landing`;
    navigate(path);
    event.preventDefault();
  };

  const [activeElement, setActiveElement] = useState(0);

  const changeActive = (cur: number) => {
    setActiveElement(cur);
    setIsMenuOpen(false);
  };

  return (
    <Navbar
      className={className}
      isBordered={false}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      height={"5rem"}
      maxWidth="full"
      isBlurred={false}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="HomeNavToggle" />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand className="HomeNavBrand">
          <Logo className="HomeLogo" />
          <p className="font-bold text-inherit HomeLogoText">Symptom Sage</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex" isActive>
          <Link
            className={activeElement === 0 ? "HomeNavLink HomeActive" : "HomeNavLink"}
            to="./Content"
            aria-current="page"
            onClick={() => {
              changeActive(0);
            }}
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            className={activeElement === 1 ? "HomeNavLink HomeActive" : "HomeNavLink"}
            to="./Services"
            onClick={() => {
              changeActive(1);
            }}
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link
            className={activeElement === 2 ? "HomeNavLink HomeActive" : "HomeNavLink"}
            to="./About"
            onClick={() => {
              changeActive(2);
            }}
          >
            About
          </Link>
        </NavbarItem>

        <Dropdown placement="bottom-end" className="HomeDropDownMenu">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform ml-3"
              color="danger"
              name="Jason Hughes"
              size="md"
              src={Profile}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Edit Profile</p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={(e) => routeChangeLanding(e)}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className="HomeNavbarMenu">
        {menuItems.map((item, index) => {
          let className = "w-full HomeNavbarMenuLink";
          if (index === activeElement) {
            className += " HomeRespActive";
          }

          return (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link
                className={className}
                to={item.to}
                onClick={() => {
                  changeActive(index);
                }}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default HomeNavBar;
