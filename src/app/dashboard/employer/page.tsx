"use client";
import DashboardInfoBox from "@/components/(dashboard)/dashboardInfoBox/dashboardInfoBox";
import PageHeadPath, {
  pathType,
} from "@/components/(dashboard)/page-head-title/pageHeadTitle";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { Box, Paper } from "@mui/material";

const EmployerDashboard = () => {
  const path: pathType[] = [
    { title: "hello", address: "string" },
    { title: "hello 2", address: "/" },
  ];

  return (
    <Box>
      <PageHeadPath title="سلام آروین جان خوش آمدید" path={path} />
      {/* <Box className="w-full bg-blue-100 flex items-center justify-between">
        {Array.from({ length: 3 }).map(() => {
          return;
        })}
      </Box> */}
      <Box className="flex gap-4 my-10">
        <DashboardInfoBox
          icon={<BookmarksIcon className="text-3xl text-mainWhite" />}
          quantity={78}
          title="payam"
          color={`#2b2b2b`}
        />
        <DashboardInfoBox
          icon={<BookmarksIcon className="text-3xl text-mainWhite" />}
          quantity={78}
          title="payam"
          color={`#2b2b2b`}
        />
        <DashboardInfoBox
          icon={<BookmarksIcon className="text-3xl text-mainWhite" />}
          quantity={78}
          title="payam"
          color={`#2b2b2b`}
        />
        <DashboardInfoBox
          icon={<BookmarksIcon className="text-3xl text-mainWhite" />}
          quantity={78}
          title="payam"
          color={`#2b2b2b`}
        />
      </Box>

      <Paper>hello world</Paper>
    </Box>
  );
};

export default EmployerDashboard;
