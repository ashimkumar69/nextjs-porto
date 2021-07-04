// react
import React from "react";
// material
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright &copy; {new Date().getFullYear()}{" "}
      <Link href="/login" variant="inherit">
        Porto
      </Link>{" "}
      Theme. All Rights Reserve.
    </Typography>
  );
}

export default Copyright;
