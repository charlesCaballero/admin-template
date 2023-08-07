"use client";
import * as React from "react";

import { Box, Button, Typography } from "@mui/material";
import ConfirmationDialog from "@/_components/dialogs/ConfirmationDialog";
import FormDialog from "@/_components/dialogs/FormDialog";

export default function Dialogs() {
  const handleOnClose = () => {};

  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="subtitle1">This is the Dialogs Page</Typography>
      <Box p={1}>
        <ConfirmationDialog
          variant="error"
          onClose={() => handleOnClose}
          label="Confirmation Dialog"
        />
      </Box>
      <Box p={1}>
        <FormDialog
          title="Add User"
          context="Create new user to use your awesome app."
          onClose={handleOnClose}
          label="Open Form"
        />
      </Box>
    </Box>
  );
}
