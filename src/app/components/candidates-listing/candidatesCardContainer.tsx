import db from "@/db/db.json";
import HighRateFreeLanceCard from "@/modules/highRateFreeLanceCard/highRateFreeLanceCard";
import type { Freelancer } from "@/types/type";
import { Box } from "@mui/material";
const CandidatesCardContainer = () => {
  const { freeLancers } = db;
  return (
    <Box className="flex flex-wrap w-full md:justify-between flex-col md:flex-row items-center justify-center pt-8">
      {freeLancers?.map((item: Freelancer) => (
        <HighRateFreeLanceCard {...item} />
      ))}
    </Box>
  );
};

export default CandidatesCardContainer;
