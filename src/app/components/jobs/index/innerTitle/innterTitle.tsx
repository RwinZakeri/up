import type { InnerTitleInfo } from "@/types/type";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

const InnerTitle = ({ innerTitleInfo }: { innerTitleInfo: InnerTitleInfo }) => {
  return (
    <Box className="py-44 bg-lightGreenXXXXs text-center">
      <Typography variant="h1" className="text-5xl font-medium">
        {innerTitleInfo.title}
      </Typography>

      <List className="text-center flex justify-center">
        <ListItem className="justify-center gap-2">
          <Typography>
            <Link
              href={innerTitleInfo.mainRouteAddress}
              className="hover:text-highGreen transition-all duration-400"
            >
              {innerTitleInfo.mainRouteTitle}
            </Link>
          </Typography>
          <Typography variant="button">
            <CircleIcon className="text-[8px] text-highGreen" />
          </Typography>
          <Typography>
            <Link
              href={innerTitleInfo.currentAddress}
              className="hover:text-highGreen transition-all duration-400"
            >
              {innerTitleInfo.current}
            </Link>
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default InnerTitle;
