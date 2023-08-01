"use client";
import * as React from "react";

import { Box, Button, Typography } from "@mui/material";

export default function Dialogs() {
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="subtitle1">This is the Dialogs Page</Typography>
      <Box>
        <Button variant="contained">Confirmation Dialog</Button>
      </Box>
      <Box>
        <Button variant="contained">Form Dialog</Button>
      </Box>
    </Box>
  );
}
