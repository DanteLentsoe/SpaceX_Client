import React, { useState } from "react";
import {
  HeaderContainer,
  HeaderColorModeIcon,
  LogoDrawerHeader,
  NavBarItems,
  NavLinks,
} from "./styles";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerBody,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../../assets/images/spaceX_Logo.jpeg";

const Header = () => {
  const history = useHistory();
  const { toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const placement = "left"; //drawer prop
  const [darkColorIcon, setDarkColorIcon] = useState("dark");
  const hamBugerIconColor = useColorModeValue("gray.100", "gray.900");
  return (
    <>
      <HeaderContainer>
        <Link to="/">
          <img
            src={Logo}
            alt="SpaceX Logo"
            height="60px"
            style={imgStyles}
          ></img>
        </Link>
        <HeaderColorModeIcon>
          {" "}
          {darkColorIcon === "dark" ? (
            <MoonIcon
              fontSize="26px"
              style={iconStyles}
              onClick={() => {
                toggleColorMode();
                setDarkColorIcon("light");
              }}
            />
          ) : null}
          {darkColorIcon === "light" ? (
            <SunIcon
              fontSize="26px"
              style={iconStyles}
              onClick={() => {
                toggleColorMode();
                setDarkColorIcon("dark");
              }}
            />
          ) : null}
          <Button
            // colorScheme="blue"
            background={hamBugerIconColor}
            onClick={() => {
              onOpen();
            }}
          >
            <HamburgerIcon />
          </Button>
        </HeaderColorModeIcon>
      </HeaderContainer>
      {/* @ts-ignore */}
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <LogoDrawerHeader
            onClick={() => {
              onClose();
            }}
          >
            <DrawerHeader borderBottomWidth="1px">
              <Link to="/">
                {" "}
                <img src={Logo} alt="SpaceX Logo" style={imgStyles}></img>
              </Link>
            </DrawerHeader>
          </LogoDrawerHeader>

          <DrawerBody>
            <div>
              {darkColorIcon === "dark" ? (
                <MoonIcon
                  fontSize="26px"
                  style={iconStyles}
                  color="white"
                  onClick={() => {
                    toggleColorMode();
                    setDarkColorIcon("light");
                  }}
                />
              ) : null}
              {darkColorIcon === "light" ? (
                <SunIcon
                  fontSize="26px"
                  color="white"
                  style={iconStyles}
                  onClick={() => {
                    toggleColorMode();
                    setDarkColorIcon("dark");
                  }}
                />
              ) : null}
            </div>

            <NavBarItems
              onClick={() => {
                onClose();
                history.push("/");
              }}
            >
              <Link to="/">
                {" "}
                <NavLinks> Home</NavLinks>{" "}
              </Link>
            </NavBarItems>
            <div>
              {" "}
              <NavBarItems
                onClick={() => {
                  onClose();
                  history.push("/about");
                }}
              >
                <Link to="/about">
                  <NavLinks>About</NavLinks>
                </Link>
              </NavBarItems>
            </div>
            <div>
              <NavBarItems
                onClick={() => {
                  onClose();
                  history.push("/contact");
                }}
              >
                <Link to="/contact">
                  <NavLinks>Contact</NavLinks>
                </Link>
              </NavBarItems>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;

const imgStyles = {
  maxHeight: "60px",
  alignItems: "center",
  justifyContent: "center",
};

const iconStyles = {
  cursor: "pointer",
  marginRight: "10px",
};
