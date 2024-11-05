"use client";
import db from "@/db/db.json";
import type { headerItemType } from "@/types/type";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, List, ListItem, Typography } from "@mui/material";

const NavItems = () => {
  const { headerItems } = db;

  return (
    <Box
      component="nav"
      className="w-full"
      sx={{
        display: { xs: "none", sm: "none", md: "block" }, // hidden on mobile and tablet, block on desktop
      }}
    >
      <List
        className="w-fit"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { sm: "15px", md: "25px" },
          padding: "0px",
        }}
      >
        {headerItems.map((item: headerItemType) => (
          <ListItem
            className="w-fit px-2 cursor-pointer relative"
            key={item.id}
            sx={{
              padding: "0px",
              py: "30px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              position: "relative", // for positioning the submenu
              "&:hover .submenu": {
                display: "block", // display submenu on hover
              },
              "&:hover .mainText, &:hover .icon": {
                color: "blue", // change main item text and icon color on hover
              },
            }}
          >
            <Typography
              className="mainText"
              variant="body2"
              sx={{ cursor: "pointer", transition: "color 0.2s ease" }}
            >
              {item?.title}
            </Typography>
            {!!item?.subMenuHeader?.length && (
              <KeyboardArrowDownIcon
                className="icon"
                sx={{ transition: "color 0.2s ease" }}
              />
            )}

            {!!item?.subMenuHeader?.length && (
              <Box
                className="submenu"
                sx={{
                  display: "none", // initially hidden
                  position: "absolute",
                  top: "100%", // position it right below the main item
                  left: 0,
                  bgcolor: "white",
                  boxShadow: 3,
                  borderRadius: 1,
                  zIndex: 10,
                  mt: 0,
                  minWidth: "150px",
                  borderTop: "3px solid blue", // add blue top border
                }}
              >
                <List sx={{ padding: 0 }}>
                  {item.subMenuHeader.map((subMenu) => (
                    <ListItem
                      key={subMenu.id}
                      sx={{
                        padding: "8px 16px",
                        cursor: "pointer",
                        "&:hover .submenuText": {
                          color: "blue", // change submenu item text color on hover
                        },
                        "&:hover": {
                          bgcolor: "grey.200", // highlight submenu item background on hover
                        },
                      }}
                    >
                      <Typography
                        className="submenuText"
                        variant="body2"
                        sx={{ transition: "color 0.2s ease" }}
                      >
                        {subMenu.title}
                      </Typography>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NavItems;
