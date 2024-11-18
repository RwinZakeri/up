import React from "react";
import FooterBoxDetails from "./footerBoxDetails";
import { Box } from "@mui/material";
import FooterInformationBox from "./footerInformationBox";
import Logo from "@/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import FooterSocialMedia from "./footerSocialMedia";

const Footer = () => {
  return (
    <footer className="bg-lightGreenXXXs px-4 pt-24 pb-20">
      <Box className="standardContainer">
        <Box className="flex justify-between">
          <Box>
            <Box className="flex flex-col gap-10">
              <Image src={Logo} alt="zoben" width={143} height={53} />
              <FooterInformationBox />
            </Box>
          </Box>
          <FooterBoxDetails />
        </Box>
        <Box className="flex justify-between mt-20">
          <Box>
            کپی رایت © 1400 زوبن. تمام حقوق قالب محفوظ است. طراحی توسط
            <Link href="#" className="text-lightGreen">
              Arvin
            </Link>
          </Box>
          <FooterSocialMedia />
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
