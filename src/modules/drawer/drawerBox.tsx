import { useEffect, useState } from "react";
import type { HeaderItemType } from "@/types/type";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

const DrawerBox = () => {
  const [headerItems, setHeaderItems] = useState<HeaderItemType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await import("@/db/db.json");
      setHeaderItems(data.headerItems);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ width: 330 }} role="presentation">
      <List>
        <ListItem
          className="flex gap-2"
          sx={{
            padding: 1,
            gap: "10px",
          }}
        >
          <Button variant="outlined" sx={{ width: "49%" }}>
            ورود / ثبت نام
            <PersonIcon sx={{ margin: 0.5 }} />
          </Button>
          <Button variant="contained" sx={{ width: "49%" }}>
            ارسال آگهی
            <BusinessCenterIcon sx={{ margin: 0.5 }} />
          </Button>
        </ListItem>

        {headerItems?.map((item: HeaderItemType) => (
          <ListItem sx={{ padding: 0 }} key={item.id}>
            {!!item.subMenuHeader?.length ? (
              <Accordion className="w-full rounded-none">
                <AccordionSummary
                  expandIcon={<ArrowDropDownIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: 0, boxShadow: "none" }}>
                  <List sx={{ padding: 0, border: 0 }}>
                    {item.subMenuHeader.map((subMenu) => (
                      <ListItem key={subMenu.id}>
                        <ListItemButton>{subMenu.title}</ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ) : (
              <ListItemButton>{item.title}</ListItemButton>
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DrawerBox;
