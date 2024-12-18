import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import Link from "next/link";

const FooterSocialMedia = () => {
  const dbFooterSocialMedia = [
    { id: 1, icon: <FacebookIcon /> },
    { id: 2, icon: <InstagramIcon /> },
    { id: 3, icon: <TwitterIcon /> },
    { id: 4, icon: <LinkedInIcon /> },
  ];
  return (
    <Box className="flex gap-4">
      {dbFooterSocialMedia.map((item) => (
        <Link href="#">{item.icon}</Link>
      ))}
    </Box>
  );
};

export default FooterSocialMedia;
