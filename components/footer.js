// react
import React from "react";
// next
import Image from "next/image";
// redux
import { useSelector } from "react-redux";
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
import Link from "@material-ui/core/Link";
// import
import Rgba from "color-to-rgba";

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor:
      theme.palette.type === "dark" && theme.palette.background.paper,
  },
  copyrightBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
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

  const { footerLogo, footerBrand, icons } = useSelector(
    (state) => state.footer.footer
  );

  const year = new Date().getFullYear();

  const componentIcon = (index) => {
    let icon;
    switch (index) {
      case 0:
        return (icon = <FacebookIcon fontSize="small" />);
      case 1:
        return (icon = <TwitterIcon fontSize="small" />);
      case 2:
        return (icon = <YouTubeIcon fontSize="small" />);
      case 3:
        return (icon = <PinterestIcon fontSize="small" />);
      case 4:
        return (icon = <GitHubIcon fontSize="small" />);
    }
    return icon;
  };

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
              <Image src={footerLogo} alt="logo" width={160} height={30} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box className={classes.copyrightBox}>
              <Box flexGrow={1}>
                <Typography
                  variant="body2"
                  component="span"
                  className={classes.copyrightText}
                >
                  Copyright &copy; {year}{" "}
                  <Link href={footerBrand.path} variant="inherit">
                    {footerBrand.name}
                  </Link>{" "}
                  Theme. All Rights Reserve.
                </Typography>
              </Box>

              <Box className={classes.iconsBox}>
                {icons.map((item, index) => (
                  <React.Fragment key={item.id}>
                    <IconButton
                      aria-label={item.name}
                      className={classes.icon}
                      href={item.path}
                    >
                      {componentIcon(index)}
                    </IconButton>
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
