"use client";
import * as React from "react";

import { Box, Button, Typography } from "@mui/material";
import ConfirmationDialog from "@/_components/dialogs/ConfirmationDialog";

export default function Dialogs() {

  const handleOnClose = () => {

  }

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="subtitle1">This is the Dialogs Page</Typography>
      <Box p={1}>
        <ConfirmationDialog variant="warning" onClose={()=>handleOnClose} label="Confirmation Dialog"/>
      </Box>
      <Box p={1}>
        <Button variant="contained">Form Dialog</Button>
      </Box>
    </Box>
  );
}
