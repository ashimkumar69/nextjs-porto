// react
import React from "react";
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
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import Grid from "@material-ui/core/Grid";
import Rating from "@material-ui/lab/Rating";

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
  rating: {
    color: theme.palette.primary.main,
  },
}));

function TestimonialsCard(props) {
  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardContent>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <Typography
              variant="body1"
              component="p"
              align="center"
              color="textSecondary"
            >
              {props.body}
            </Typography>
          </Grid>
          <Grid item>
            <FormatQuoteIcon className={classes.quote} />
          </Grid>
          <Grid item>
            <Box>
              <Rating
                name="half-rating-read"
                size="small"
                defaultValue={4}
                value={+props.value}
                precision={0.5}
                readOnly
                className={classes.rating}
              />
            </Box>
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <StyledCardHeader
        avatar={
          <Avatar aria-label="avatar">
            <Image
              src={props.headeravatar}
              width={50}
              height={50}
              alt="avatar"
            />
          </Avatar>
        }
        title={props.headertitle}
        subheader={props.headersubtitle}
      />
    </Card>
  );
}

export default TestimonialsCard;
