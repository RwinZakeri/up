import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const BeautifulLoading: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #00ca99, #00ca99)",
        color: "#fff",
      }}
    >
      <CircularProgress
        size={80}
        thickness={4.5}
        sx={{
          color: "#fff",
          animation: "spin 2s linear infinite",
        }}
      />
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          fontWeight: "bold",
          animation: "fadeIn 1.5s ease-in-out infinite",
        }}
      >
        در حال بارگزاری صفحه لطفا کمی صبر کنید ):
      </Typography>
      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        @keyframes fadeIn {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </Box>
  );
};

export default BeautifulLoading;
