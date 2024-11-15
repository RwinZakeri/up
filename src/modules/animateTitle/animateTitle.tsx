import { Box, Typography } from "@mui/material";
import AnimateLine from "../animateLine/animateLine";

const AnimateTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box>
      <Typography
        variant="h2"
        className="lg:text-4xl"
        sx={{ fontSize: 22, textAlign: "center", fontWeight: "medium" }}
      >
        {title}
      </Typography>
      <AnimateLine />
      <Typography
        className="text-gray-400 text-lg"
        sx={{ textAlign: "center", paddingY: 1 }}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default AnimateTitle;
