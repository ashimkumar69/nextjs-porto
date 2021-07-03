// react
import React from "react";
// next
import Image from "next/image";
import Link from "next/link";
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
import MuiLink from "@material-ui/core/Link";
// import
import Rgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor:
      theme.palette.type === "dark" && theme.palette.background.paper,
  },
  copyrightText: {
    color:
      theme.palette.type === "light" && Rgba(theme.palette.common.white, 0.7),
  },
  iconsBox: {
    "& > *": {
      marginRight: theme.spacing(0.5),
      "&:last-child": {
        marginRight: 0,
      },
    },
  },
  icon: {
    color:
      theme.palette.type === "light" && Rgba(theme.palette.common.white, 0.7),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
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
                src="/images/logo/footer-logo-01.png"
                alt="logo"
                width={160}
                height={30}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Box flexGrow={1}>
                <Typography
                  variant="body2"
                  component="span"
                  className={classes.copyrightText}
                >
                  Copyright &copy; {year}{" "}
                  <Link href="/login">
                    <MuiLink component="button" variant="inherit">
                      Porto
                    </MuiLink>
                  </Link>{" "}
                  Theme. All Rights Reserve.
                </Typography>
              </Box>

              <Box className={classes.iconsBox}>
                <IconButton aria-label="Facebook" className={classes.icon}>
                  <FacebookIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="Twitter" className={classes.icon}>
                  <TwitterIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="YouTube" className={classes.icon}>
                  <YouTubeIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="Pinterest" className={classes.icon}>
                  <PinterestIcon fontSize="small" />
                </IconButton>

                <IconButton aria-label="GitHub" className={classes.icon}>
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
