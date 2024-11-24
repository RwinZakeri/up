import { CircleNotifications } from "@mui/icons-material";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const InnerTitleAbout = () => {
    
    return ( 
        <Box className="w-full py-44 bg-lightGreenXXXXs text-center">
        <Typography variant="h1" className="text-5xl font-medium">
        درباره ما
        </Typography>
  
        <List className="text-center flex justify-center">
          <ListItem className="justify-center gap-2">
            <Typography>
              <Link
                href="/"
                className="hover:text-highGreen transition-all duration-400"
              >
                خانه
              </Link>
            </Typography>
            <Typography variant="button">
              <CircleNotifications className="text-[8px] text-highGreen" />
            </Typography>
            <Typography>
              <Link
                href="/jobs"
                className="hover:text-highGreen transition-all duration-400"
              >
             درباره ما
              </Link>
            </Typography>
          </ListItem>
        </List>
      </Box>
     );
}
 
export default InnerTitleAbout;