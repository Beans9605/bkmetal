import React, { useEffect, useReducer, useState } from "react";
import {
  Drawer,
  useMediaQuery,
  useTheme,
  List,
  ListSubheader,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  ListItem,
} from "@mui/material";
import { MainSidebarElements, MainSidebarElement } from "@utils/common";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HyphenLogo from "@assets/img/hyphenLogoSizeUp.png";
import Image from "next/image";
import { sidebarOpenState } from "@utils/recoil";

const drawerWidth = 240;

interface OpenList {
  type: string;
  isOpen: boolean;
}

const Sidebar = () => {
  const router = useRouter();

  const openReducer = (state: OpenList[], action: string) => {
    return state.map((state) =>
      state.type === action
        ? { type: state.type, isOpen: !state.isOpen }
        : state
    );
  };

  const [openCollase, openDispatch] = useReducer(
    openReducer,
    MainSidebarElements.filter((element) => element.innerElement).map(
      (element): OpenList => {
        return {
          type: element.labelText,
          isOpen: false,
        };
      }
    )
  );

  const handleSubListOpen = (type: string) => {
    openDispatch(type);
  };

  const theme = useTheme();
  const upperSize = useMediaQuery(theme.breakpoints.up("md"));

  const [drawerOpen, setDrawerOpen] = useRecoilState(sidebarOpenState);

  return (
    <Drawer
      variant={"temporary"}
      anchor="right"
      open={drawerOpen}
      onClose={() => setDrawerOpen(false)}
    >
      <List component="nav">
        {MainSidebarElements.map(
          (mainElement: MainSidebarElement, index: number) => {
            return (
              <React.Fragment key={index}>
                <ListItemButton
                  onClick={() => handleSubListOpen(mainElement.labelText)}
                >
                  {mainElement?.labelIcon && (
                    <ListItemIcon>{<mainElement.labelIcon />}</ListItemIcon>
                  )}
                  <ListItemText
                    primaryTypographyProps={{ fontFamily: "Pretendard" }}
                    primary={mainElement.labelText}
                  />
                  {openCollase.find(
                    (openCollase) => openCollase.type === mainElement.labelText
                  ) &&
                    (openCollase.find(
                      (openCollase) =>
                        openCollase.type === mainElement.labelText
                    )?.isOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    ))}
                </ListItemButton>
                <Collapse
                  in={
                    openCollase.find(
                      (open) => open.type === mainElement.labelText
                    )?.isOpen
                  }
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {mainElement.innerElement &&
                      mainElement.innerElement.map((element, index: number) => (
                        <ListItem key={index} disablePadding>
                          <ListItemButton
                            onClick={() =>
                              element?.link && router.push(element?.link)
                            }
                          >
                            {element.labelIcon && (
                              <ListItemIcon>
                                {<element.labelIcon />}
                              </ListItemIcon>
                            )}
                            <ListItemText
                              primary={element.labelText}
                              primaryTypographyProps={{
                                fontFamily: "Pretendard",
                              }}
                              inset={element?.labelIcon ? false : true}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))}
                  </List>
                </Collapse>
              </React.Fragment>
            );
          }
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
