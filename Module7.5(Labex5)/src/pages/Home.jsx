import React from "react";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h3" sx={{ fontWeight: '400' }}>
        Welcome to Bitcoin Financial Dashboard
      </Typography>
    </Box>
  );
}