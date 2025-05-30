"use client";
import Logo from "@/assets/images/logo.png";
import DrawerComponent from "@/modules/drawer/DrawerComponent";
import NavItems from "@/modules/layout/header/navItems/navItems";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
// const BusinessCenterIcon = dynamic(
//   () => import("@mui/icons-material/BusinessCenter"),
//   { ssr: false }
// );
import PersonIcon from "@mui/icons-material/Person";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const exactPath = path.split("/")[2];
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

  const loginHandler = () => {
    router.push("/auth");
  };

  return (
    <header
      className={`w-full fixed top-0 px-4 left-0 z-50 
         transition-all duration-300 ${
           isScrolled || exactPath === "admin"
             ? "bg-mainWhite shadow-md"
             : "bg-transparent"
         }`}
    >
      <Box
        className={` p-3 lg:p-0 ${
          exactPath === "admin" ? "w-full mx-auto" : "xl:w-11/12  mx-auto"
        } `}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "none",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "40px" }}>
          <Link href={"/"}>
            <Image src={Logo} alt="zoben" width={143} height={53} />
          </Link>
          <NavItems />
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ display: "flex", gap: 1 }} className="hidden lg:flex">
            <Button
              onClick={loginHandler}
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
              ثبت پروژه
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
