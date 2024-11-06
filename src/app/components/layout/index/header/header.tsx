"use client";
import Logo from "@/assets/images/logo.png";
import DrawerComponent from "@/modules/drawer/DrawerComponent";
import NavItems from "@/modules/layout/header/navItems/navItems";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 px-4 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-mainWhite" : "bg-transparent"
      }`}
    >
      <Box
        className="standardContainer"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "10px", md: "0px" },
          boxShadow: "none", // Removed box shadow completely
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Image src={Logo} alt="zoben" width={143} height={53} />
          <NavItems />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 1 }} className="hidden lg:flex">
            <Button
              variant="outlined"
              size="large"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              ورود / ثبت نام
              <PersonIcon sx={{ margin: 0.5 }} />
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{ display: { xs: "none", md: "block" } }}
            >
              ارسال آگهی
              <BusinessCenterIcon sx={{ margin: 0.5 }} />
            </Button>
          </Box>
          <DrawerComponent />
        </Box>
      </Box>
    </header>
  );
};

export default Header;
