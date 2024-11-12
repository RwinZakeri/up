import CircleIcon from "@mui/icons-material/Circle";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";
const InnerTitleJobDetail = () => {
  return (
    <Box className="w-full py-44 bg-lightGreenXXXXs text-center">
      <Typography variant="h1" className="text-5xl font-medium">
        جزئیات مشاغل{" "}
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
            <CircleIcon className="text-[8px] text-highGreen" />
          </Typography>
          <Typography>
            <Link
              href="/jobs"
              className="hover:text-highGreen transition-all duration-400"
            >
              جزئیات مشاغل{" "}
            </Link>
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default InnerTitleJobDetail;
