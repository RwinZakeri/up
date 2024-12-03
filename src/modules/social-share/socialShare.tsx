import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, List, ListItem } from "@mui/material";
import Link from "next/link";
const SocialShare = () => {
  return (
    <List className="flex gap-2">
      <ListItem sx={{ padding: 0, margin: 0, display: "flex", width: "auto" }}>
        <Button sx={{ padding: 0, minWidth: "auto" }} className="rounded-full">
          <Box className="bg-gray-300/20 group hover:bg-highGreen transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full">
            <Link href={""} passHref>
              <InstagramIcon className="text-2xl transition-all duration-300 group-hover:text-mainWhite text-gray-500" />
            </Link>
          </Box>
        </Button>
      </ListItem>
      <ListItem sx={{ padding: 0, margin: 0, display: "flex", width: "auto" }}>
        <Button sx={{ padding: 0, minWidth: "auto" }} className="rounded-full">
          <Box className="bg-gray-300/20 group hover:bg-highGreen transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full">
            <Link href={"/"} passHref>
              <FacebookIcon className="text-2xl transition-all duration-300 group-hover:text-mainWhite text-gray-500" />
            </Link>
          </Box>
        </Button>
      </ListItem>
      <ListItem sx={{ padding: 0, margin: 0, display: "flex", width: "auto" }}>
        <Button sx={{ padding: 0, minWidth: "auto" }} className="rounded-full">
          <Box className="bg-gray-300/20 group hover:bg-highGreen transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-full">
            <Link href={"/"} passHref>
              <TwitterIcon className="text-2xl transition-all duration-300 group-hover:text-mainWhite text-gray-500" />
            </Link>
          </Box>
        </Button>
      </ListItem>
    </List>
  );
};

export default SocialShare;
