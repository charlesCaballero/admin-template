"use client";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default function Loading() {
  

  return (
      <Box
        sx={{
          width: "100%",
          position: "absolute",
          top: 0,
          zIndex: 99999,
        }}
      >
        <LinearProgress
          sx={{
            height: 5,
          }}
          color="primary"
        />
      </Box>
    )
}
