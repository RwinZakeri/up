import db from "@/db/db.json";
import HighRateFreeLanceCard from "@/modules/highRateFreeLanceCard/highRateFreeLanceCard";
import type { Freelancer } from "@/types/type";
import { Box } from "@mui/material";

const HighRateFreeLanceCardContainer = () => {
  const { freeLancers } = db;
  return (
    <Box className="pt-8 flex items-center flex-wrap gap-10 lg:gap-2 justify-between flex-col px-8 md:px-0 md:flex-row">
      {freeLancers?.map((item: Freelancer) => (
        <HighRateFreeLanceCard {...item} />
      ))}
    </Box>
  );
};

export default HighRateFreeLanceCardContainer;
