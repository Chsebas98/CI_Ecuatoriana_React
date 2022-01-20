import { Alert, Stack } from "@mui/material";
import React from "react";

export default function Notification(props) {
  const [notify, setNotify] = props;

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="success">
        {notify.message}
      </Alert>
    </Stack>
  );
}
