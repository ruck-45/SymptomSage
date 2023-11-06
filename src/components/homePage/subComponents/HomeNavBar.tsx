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
  Button,
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsArrowUpRightSquare } from "react-icons/bs";

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
  { name: "Pricing", to: "./Pricing" },
  { name: "About", to: "./About" },
];

const getBase = () => {
  const base = window.location.pathname.split("/").pop();

  switch (base) {
    case "SymptomScan":
    case "FindMyCare":
    case "FitnessPal":
    case "MedMatch360":
      return 0;
    case "Services":
      return 1;
    case "Pricing":
      return 2;
    case "About":
      return 3;
    default:
      return 4;
  }
};

const HomeNavBar = (props: HomeNavBarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const className = "HomeNav px-5 " + props.className;

  const navigate = useNavigate();
  const routeChangeLanding = (event: routeChangeLandingEvent) => {
    let path = `../Landing`;
    navigate(path);
    event.preventDefault();
  };

  const base = getBase();
  const [activeElement, setActiveElement] = useState(base);

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
      shouldHideOnScroll
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
            to="./SymptomScan"
            aria-current="page"
            onClick={() => {
              changeActive(0);
            }}
          >
            Home
          </Link>
        </NavbarItem>

        <Dropdown>
          <NavbarItem className="hidden sm:flex">
            <DropdownTrigger>
              <Button
                disableRipple
                className={activeElement === 1 ? "HomeNavLink HomeDropDownActive overflow-visible" : "HomeNavLink"}
                endContent={<RiArrowDropDownLine className="HomeDropdownIcon" />}
                radius="sm"
                variant="light"
                size="lg"
              >
                Services
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu aria-label="Services" className="gap-4">
            <DropdownItem key="SymptomScan" className="p-0" textValue="SymptomScan">
              <Link
                to="./SymptomScan"
                onClick={() => {
                  changeActive(0);
                }}
                style={{ display: "block", padding: "6px 8px" }}
              >
                Symptom Scan
              </Link>
            </DropdownItem>
            <DropdownItem key="FindMyCare" className="p-0" textValue="FindMyCare">
              <Link
                to="./FindMyCare"
                onClick={() => {
                  changeActive(0);
                }}
                style={{ display: "block", padding: "6px 8px" }}
              >
                Find My Care
              </Link>
            </DropdownItem>
            <DropdownItem key="FitnessPal" className="p-0" textValue="FitnessPal">
              <Link
                to="./FitnessPal"
                onClick={() => {
                  changeActive(0);
                }}
                style={{ display: "block", padding: "6px 8px" }}
              >
                Fitness Pal
              </Link>
            </DropdownItem>
            <DropdownItem key="MedMatch360" className="p-0" textValue="MedMatch360">
              <Link
                to="./MedMatch360"
                onClick={() => {
                  changeActive(0);
                }}
                style={{ display: "block", padding: "6px 8px" }}
              >
                MedMatch 360
              </Link>
            </DropdownItem>
            <DropdownItem
              key="AllServices"
              variant="flat"
              color="danger"
              endContent={<BsArrowUpRightSquare className="HomeArrow" />}
              className="p-0"
              textValue="AllServices"
            >
              <Link
                to="./Services"
                onClick={() => {
                  changeActive(1);
                }}
                style={{ display: "block", padding: "6px 8px" }}
              >
                All Services
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="hidden lg:flex">
          <Link
            className={activeElement === 2 ? "HomeNavLink HomeActive" : "HomeNavLink"}
            to="./Pricing"
            onClick={() => {
              changeActive(2);
            }}
          >
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link
            className={activeElement === 3 ? "HomeNavLink HomeActive" : "HomeNavLink"}
            to="./About"
            onClick={() => {
              changeActive(3);
            }}
          >
            About
          </Link>
        </NavbarItem>

        <Dropdown placement="bottom-end">
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
            <DropdownItem key="profile" className="gap-2" textValue="profile">
              <p className="font-semibold">Edit Profile</p>
            </DropdownItem>
            <DropdownItem key="about" className="hidden sm:block md:hidden p-0" textValue="about">
              <Link
                to="./About"
                onClick={() => {
                  changeActive(3);
                }}
                style={{ display: "block", padding: "6px 8px" }}
              >
                About
              </Link>
            </DropdownItem>
            <DropdownItem key="pricing" className="hidden sm:block lg:hidden p-0" textValue="pricing">
              <Link
                to="./Pricing"
                onClick={() => {
                  changeActive(2);
                }}
                style={{ display: "block", padding: "6px 8px" }}
              >
                Pricing
              </Link>
            </DropdownItem>
            <DropdownItem key="help_and_feedback" textValue="help_and_feedback">
              Help & Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={(e) => routeChangeLanding(e)} textValue="logout">
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

          if (item.name === "Services") {
            return (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Accordion className="p-0" isCompact>
                  <AccordionItem aria-label={item.name} title={item.name} className={className}>
                    <Listbox aria-label="Services" color="danger">
                      <ListboxItem key="SymptomScan" className="p-0" textValue="SymptomScan">
                        <Link
                          style={{ display: "block", padding: "6px 8px" }}
                          to={"./SymptomScan"}
                          onClick={() => {
                            changeActive(0);
                          }}
                        >
                          Symptom Scan
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="FindMyCare" className="p-0" textValue="FindMyCare">
                        <Link
                          style={{ display: "block", padding: "6px 8px" }}
                          to={"./FindMyCare"}
                          onClick={() => {
                            changeActive(0);
                          }}
                        >
                          Find My Care
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="FitnessPal" className="p-0" textValue="FitnessPal">
                        <Link
                          style={{ display: "block", padding: "6px 8px" }}
                          to={"./FitnessPal"}
                          onClick={() => {
                            changeActive(0);
                          }}
                        >
                          Fitness Pal
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="MedMatch360" className="p-0" textValue="MedMatch360">
                        <Link
                          style={{ display: "block", padding: "6px 8px" }}
                          to={"./MedMatch360"}
                          onClick={() => {
                            changeActive(0);
                          }}
                        >
                          Med Match 360
                        </Link>
                      </ListboxItem>
                      <ListboxItem key="AllServices" className="p-0" textValue="AllServices">
                        <Link
                          style={{ display: "block", padding: "6px 8px" }}
                          to={item.to}
                          onClick={() => {
                            changeActive(index);
                          }}
                        >
                          All Services
                        </Link>
                      </ListboxItem>
                    </Listbox>
                  </AccordionItem>
                </Accordion>
              </NavbarMenuItem>
            );
          } else {
            return (
              <NavbarMenuItem key={`${item.name}-${index}`} className={className}>
                <Link
                  className="block"
                  to={item.to}
                  onClick={() => {
                    changeActive(index);
                  }}
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            );
          }
        })}
      </NavbarMenu>
    </Navbar>
  );
};

export default HomeNavBar;
