"use client";
import { Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const DashBoard = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  });
  return (
    <Box>
      <h1>hello world</h1>
    </Box>
  );
};

export default DashBoard;
