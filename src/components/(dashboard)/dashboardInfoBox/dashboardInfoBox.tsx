import { Box, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

const DashboardInfoBox = ({
  title,
  quantity,
  icon,
  color,
}: {
  title: string;
  quantity: number;
  color: string;
  icon: ReactNode;
}) => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    if (quantity > num) {
      const interval = setInterval(() => {
        setNum((prevNum) => {
          if (prevNum < quantity) {
            return prevNum + 1;
          } else {
            clearInterval(interval);
            return prevNum;
          }
        });
      }, 10);

      // Cleanup function to avoid multiple intervals
      return () => clearInterval(interval);
    }
  }, [num, quantity]);

  return (
    <Box
      className={` w-1/4 h-24 flex items-center justify-center gap-4 rounded-lg p-6 box-content`}
      sx={{ bgcolor: color }}
    >
      <Box className="text-xl">{icon}</Box>
      <Box className="text-center space-y-2">
        <Typography className="text-2xl text-whiteSmoke font-bold">
          {title}
        </Typography>
        <Typography className="text-3xl font-extrabold text-mainWhite">
          {num}
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardInfoBox;
