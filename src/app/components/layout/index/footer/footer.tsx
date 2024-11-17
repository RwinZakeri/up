import React from "react";
import FooterBoxDetails from "./footerBoxDetails";
import { Box } from "@mui/material";
import FooterInformationBox from "./footerInformationBox";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-lightGreenXXXs px-4 pt-24 pb-20">
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <Image src={Logo} alt="zoben" width={143} height={53} />
            <FooterInformationBox />
          </Box>
        </Box>
        <FooterBoxDetails />
      </Box>
    </footer>
  );
};

export default Footer;
