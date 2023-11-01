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
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react";

// Local Files
import "./NavBar.css";
import Logo from "./Logo";
import Profile from "../assets/dummyProfile.png";

type NavBarProps = {
  className?: string;
};

const NavBar = (props: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Get Started", "Services", "About", "Login", "Sign Up"];

  const className = "Nav px-5 " + props.className;

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
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand className="NavBrand">
          <Logo />
          <p className="font-bold text-inherit logoText">Symptom Sage</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex" isActive>
          <Link className="NavLink active" href="#" aria-current="page">
            Get Started
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link className="NavLink" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link className="NavLink" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link className="NavLink" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button as={Link} color="danger" href="#" radius="full" className="NavLink">
            Sign Up
          </Button>
        </NavbarItem>

        <Dropdown placement="bottom-end" className="DropDownMenu">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="danger"
              name="Jason Hughes"
              size="md"
              src={Profile}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Ready to Sign In?</p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Login /Sign Up
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu className="NavbarMenu">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className={`w-full NavbarMenuLink ${item}`} href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
