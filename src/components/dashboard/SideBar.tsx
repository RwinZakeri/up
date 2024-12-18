import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { type_data_menu } from "./data";

interface proptype {
  data: type_data_menu;
}

const SideBar = ({ data }: proptype) => {
  return (
    <Box className="w-[100%]">
      <List>
        {data.map((item) => {
          return (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                maxWidth: "1000px",
                width: "100%",
                transition: "transform 0.3s",
                "&:hover": {
                  bgcolor: "lightblue",
                  "& svg": {
                    transform: "rotateZ(90deg)",
                  },
                },
              }}
            >
              <ListItemButton sx={{ gap: "5px", marginTop: "10px" }}>
                <ListItemIcon>
                  <item.icon sx={{ transition: "transform 0.3s" }} />
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default SideBar;
