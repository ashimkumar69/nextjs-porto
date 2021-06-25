// react
import React from "react";
// next
import Image from "next/image";
// material
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PinterestIcon from "@material-ui/icons/Pinterest";
import GitHubIcon from "@material-ui/icons/GitHub";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
// import
import clsx from "clsx";
import Rgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor:
      theme.palette.type === "dark" ? theme.palette.background.paper : "",
  },
  copyright: {
    color:
      theme.palette.type === "dark"
        ? Rgba(theme.palette.common.white, 0.7)
        : Rgba(theme.palette.common.white, 0.54),
  },
  icons: {
    "& > *": {
      marginRight: theme.spacing(0.5),
      "&:last-child": {
        marginRight: 0,
      },
    },

    "& .MuiIconButton-root": {
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
      },
    },
  },
}));

function Footer() {
  // style
  const classes = useStyles();
  const year = new Date().getFullYear();
  return (
    <Box
      component="section"
      py={10}
      bgcolor="secondary.main"
      className={classes.paper}
    >
      <Container maxWidth="lg">
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Image
                src="/images/logo/logo-01.png"
                alt="logo"
                width={160}
                height={30}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Box flexGrow={1}>
                <Typography>
                  <Box
                    fontSize="body2.fontSize"
                    component="span"
                    className={classes.copyright}
                  >
                    Copyright &copy; {year} My Theme. All Rights Reserve.
                  </Box>
                </Typography>
              </Box>

              <Box className={clsx(classes.copyright, classes.icons)}>
                <IconButton aria-label="Facebook" color="inherit">
                  <FacebookIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="Twitter" color="inherit">
                  <TwitterIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="YouTube" color="inherit">
                  <YouTubeIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="Pinterest" color="inherit">
                  <PinterestIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="GitHub" color="inherit">
                  <GitHubIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
