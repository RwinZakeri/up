import DreamJobCard from "@/modules/dreamJobCard/dreamJobCard";

import { Box } from "@mui/material";

const DreamJobCardContainer = () => {
  return (
    <Box className="mt-12 standardContainer mx-auto px-4">
      <Box sx={{ display: "flex", gap: 4, flexDirection: "column" }}>
        <DreamJobCard />
        <DreamJobCard />
        <DreamJobCard />
        <DreamJobCard />
      </Box>
    </Box>
  );
};

export default DreamJobCardContainer;
