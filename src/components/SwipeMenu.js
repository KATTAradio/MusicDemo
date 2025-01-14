import React, { useState, useContext, useEffect, useCallback } from "react";

import {
  SwipeableDrawer,
  Avatar,
  Divider,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link as MaterialLink
} from "@material-ui/core";

import {
  AccountCircle,
  Feedback,
  Info,
  FreeBreakfast,
  People,
  Settings
} from "@material-ui/icons";

import { motion, AnimatePresence } from "framer-motion";

import { Link } from "react-router-dom";

import { GlobalContext } from "./GlobalState";
import "./darkMode.css";
import moon from "../images/moon-solid.svg";
import sun from "../images/sun-solid.svg";

const SwipeMenu = () => {
  const [{ menuOpen, themeSelectValue }, dispatch] = useContext(GlobalContext);

  const setMenuOpen = data => {
    dispatch({ type: "setMenuOpen", snippet: data });
  };

  const setThemeSelectValue = useCallback(
    data => {
      dispatch({ type: "setThemeSelectValue", snippet: data });
    },
    [dispatch]
  );

  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    if (themeSelectValue === "Dark") {
      setIsNight(true);
    } else {
      setIsNight(false);
    }
  }, [themeSelectValue]);

  const changeTheme = theme => {
    setThemeSelectValue(theme);
    localStorage.setItem("selectedTheme", theme);
  };

  const handleThemeToggle = () => {
    if (!isNight) {
      changeTheme("Dark");
      setIsNight(false);
    } else {
      changeTheme("Default");
      setIsNight(true);
    }
  };

  return (
    <SwipeableDrawer
      open={menuOpen}
      onClose={() => setMenuOpen(false)}
      onOpen={() => setMenuOpen(true)}
    >
      <div style={{ width: "300px" }}>
        <div
          style={{
            margin: "35px",
            position: "relative",
            width: "30px",
            height: "30px"
          }}
        >
          <AnimatePresence>
            <motion.img
              key={isNight ? sun : moon}
              initial={{ scale: 0 }}
              animate={{ scale: 1.5, rotate: "360deg" }}
              exit={{ scale: 0 }}
              // transition={{ duration: 0.5 }}
              src={isNight ? sun : moon}
              onClick={() => handleThemeToggle()}
              className="dayNightToggleBtn"
              alt="sun moon icon"
            />
          </AnimatePresence>
        </div>

        <Divider />

        <List
          component="nav"
          className={"pinkLists"}
          onClick={() => setMenuOpen(false)}
        >
          <ListItem button component={Link} to="/settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem
            button
            component={MaterialLink}
            target="blank"
            href="https://pollywoodwale.com/"
          >
            <ListItemIcon>
              <svg
                width="24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="website"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill=" #FFFFFF"
              >
                <path d="M29.27 0l373.81 0c16.11,0 29.27,13.16 29.27,29.27l0 90.8c-2.23,-1.1 -4.49,-2.14 -6.77,-3.13l-2.03 -0.92c-3.56,-1.47 -7.17,-2.82 -10.83,-4.02l0 -30.06 0.14 0 -392.03 0 0 221.61c0,4.5 3.6,8.09 8.09,8.09l193.04 0c0.54,1.42 1.1,2.83 1.69,4.24 1.97,4.78 4.23,9.48 6.73,14.09l-201.11 0c-16.11,0 -29.27,-13.19 -29.27,-29.27l0 -271.43c0,-16.11 13.16,-29.27 29.27,-29.27zm335.71 140.37c31.07,0 60.75,12.29 82.72,34.27 30.33,30.33 41.62,75.06 29.4,116.14 -2.84,9.53 -6.86,18.55 -11.88,26.89l45.3 49.38c2.09,2.27 1.95,5.82 -0.33,7.91l-33.26 30.38c-2.27,2.08 -5.81,1.92 -7.89,-0.35l-43.34 -47.67c-18.35,11.18 -39.23,17.01 -60.72,17.01 -31.07,0 -60.75,-12.3 -82.71,-34.27 -10.76,-10.75 -19.45,-23.64 -25.39,-37.98 -18.13,-43.67 -7.82,-94.22 25.4,-127.44 10.74,-10.76 23.63,-19.45 37.96,-25.39 13.8,-5.73 28.92,-8.88 44.74,-8.88zm66 50.98c-26.64,-26.64 -67.02,-34.65 -101.71,-20.29 -62.25,25.78 -76.57,106.06 -30.31,152.28 26.69,26.62 66.99,34.67 101.72,20.29 34.93,-14.5 57.63,-48.47 57.63,-86.29 0,-12.66 -2.5,-24.74 -7.04,-35.69 -4.74,-11.4 -11.68,-21.69 -20.29,-30.3zm-380.5 -80.99l272.03 0c-5.46,1.59 -10.83,3.48 -16.07,5.65l0.03 0.06c-9.35,3.87 -18.21,8.63 -26.46,14.15 -8.34,5.57 -16.07,11.93 -23.11,18.95l-0.12 0.12c-11.99,12.02 -21.69,25.72 -28.97,40.43l-177.33 0c-3.65,0 -6.65,-2.99 -6.65,-6.65l0 -66.06c0,-3.66 2.99,-6.65 6.65,-6.65zm-6.65 106.26l173.71 0c-1,3.61 -1.87,7.26 -2.6,10.93 -0.31,1.53 -0.59,3.07 -0.85,4.61l-170.26 0 0 -15.54zm0 42.37l168.17 0c0.05,5.17 0.37,10.36 0.95,15.54l-169.12 0 0 -15.54zm331.38 -226.09c7.99,0 14.46,6.47 14.46,14.46 0,7.98 -6.47,14.46 -14.46,14.46 -7.98,0 -14.46,-6.48 -14.46,-14.46 0.04,-7.99 6.51,-14.46 14.46,-14.46zm-97.95 0c7.98,0 14.46,6.47 14.46,14.46 0,7.98 -6.48,14.46 -14.46,14.46 -7.99,0 -14.46,-6.48 -14.46,-14.46 0,-7.99 6.47,-14.46 14.46,-14.46zm48.98 0c7.98,0 14.45,6.47 14.45,14.46 0,7.98 -6.47,14.46 -14.45,14.46 -7.99,0 -14.47,-6.48 -14.47,-14.46 0,-7.99 6.48,-14.46 14.47,-14.46z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem button component={Link} to="/donate">
            <ListItemIcon>
              <FreeBreakfast />
            </ListItemIcon>
            <ListItemText primary="Desi World Radio" />
          </ListItem>
          <ListItem button component={Link} to="/contributors">
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Creator" />
          </ListItem>
          <ListItem
            button
            component={MaterialLink}
            target="blank"
            href="https://instagram.com/sidhujashanjot"
          >
            <ListItemIcon>
              <svg
                width="24"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="instagram"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                fill="#FFFFFF"
              >
                <path d="M16,46h18c6.6,0,12-5.4,12-12V16c0-6.6-5.4-12-12-12H16C9.4,4,4,9.4,4,16v18C4,40.6,9.4,46,16,46z" />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Instagram" />
          </ListItem>
          <ListItem button component={Link} to="/privacy">
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="Privacy & Policy" />
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default SwipeMenu;
