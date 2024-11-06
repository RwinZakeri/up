"use client";
import MenuIcon from "@mui/icons-material/Menu"; // Adjust import based on your setup
import { Box, Button, Drawer } from "@mui/material";
import { useState } from "react";
import DrawerBox from "./drawerBox";

function ResponsiveDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box className="block lg:hidden">
      <Button onClick={() => setIsDrawerOpen(true)} className="h-full text-2xl">
        <MenuIcon sx={{ fontSize: "40px" }} /> {/* Increased size */}
      </Button>
      <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <DrawerBox />
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
