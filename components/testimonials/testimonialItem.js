// react
import React, { Fragment } from "react";
// next
import Image from "next/image";
// material
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Grid from "@material-ui/core/Grid";

const StyledCardHeader = withStyles({
  root: {
    justifyContent: "center",
  },
  avatar: {
    flex: "0 1 auto",
  },
  content: {
    flex: "0 1 auto",
  },
})(CardHeader);

const useStyles = makeStyles((theme) => ({
  card: {
    transition: "all 300ms ease-in-out",
    "&:hover": {
      cursor: "move",
      transform: "scale(1.04)",
    },
  },
  quote: {
    opacity: 0.1,
    fontSize: "50px",
    backgroundColor: theme.palette.background.default,
  },
}));

function TestimonialsCard() {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography component="div">
              <Box
                my={1}
                color="text.secondary"
                fontSize="body2.fontSize"
                component="p"
                textAlign="center"
              >
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <FormatQuoteIcon className={classes.quote} />
          </Grid>
          <Grid item>
            <Box fontSize="h6.fontSize">
              <StarIcon fontSize="inherit" color="primary" />
              <StarIcon fontSize="inherit" color="primary" />
              <StarIcon fontSize="inherit" color="primary" />
              <StarHalfIcon fontSize="inherit" color="primary" />
              <StarBorderIcon fontSize="inherit" color="primary" />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <StyledCardHeader
        avatar={
          <Avatar aria-label="avatar">
            <Image
              src="/images/testimonials/1.jpg"
              width={50}
              height={50}
              alt="avatar"
            />
          </Avatar>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
    </Card>
  );
}

export default TestimonialsCard;
