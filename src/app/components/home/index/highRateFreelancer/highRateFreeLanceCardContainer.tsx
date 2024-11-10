import db from "@/db/db.json";
import HighRateFreeLanceCard from "@/modules/highRateFreeLanceCard/highRateFreeLanceCard";
import type { Freelancer } from "@/types/type";
import { Box } from "@mui/material";

const HighRateFreeLanceCardContainer = () => {
  const { freeLancers } = db;
  return (
    <Box className="pt-8 flex items-center flex-wrap gap-10 justify-center">
      {freeLancers?.map((item: Freelancer) => (
        <HighRateFreeLanceCard {...item} />
      ))}
    </Box>
  );
};

export default HighRateFreeLanceCardContainer;
