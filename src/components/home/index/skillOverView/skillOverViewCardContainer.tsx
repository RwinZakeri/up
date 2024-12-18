// SkillOverViewCardContainer.js
import SkillOverViewCard from "@/modules/overviewCard/overViewCard";
import LayersIcon from "@mui/icons-material/Layers";
import { Box } from "@mui/material";

const SkillOverViewCardContainer = () => {
  return (
    <Box className="py-4 flex flex-wrap mx-auto gap-6 standardContainer items-center justify-center ">
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
      <SkillOverViewCard icon={LayersIcon} />
    </Box>
  );
};

export default SkillOverViewCardContainer;
