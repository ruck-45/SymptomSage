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

type NavBarProps = {
  className?: string;
};

const NavBar = (props: NavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Feature", "Contact", "Login", "Sign Up", "Log Out"];

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
        <NavbarItem className="hidden sm:flex">
          <Link className="NavLink" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link className="NavLink" href="#">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Link className="NavLink" href="#">
            Contact
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
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"}
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
