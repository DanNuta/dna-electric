import React, { PropsWithChildren } from "react";

import { Paper } from "@mui/material";

export const CustomPaper: React.FC = ({ children }: PropsWithChildren) => {
  return (
    <Paper elevation={0} square>
      {children}
    </Paper>
  );
};
