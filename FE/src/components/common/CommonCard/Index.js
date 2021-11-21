import {
  Card,
  makeStyles,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import React from "react";
import { useHistory } from "react-router";
import { styles } from "./styles";

const useStyles = makeStyles(styles);
const CommonCard = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const { _id, formName, createdAt, formUrl } = props.form;
  console.log("props", props);
  return (
    <Grid item style={{ margin: "10px" }} key={_id}>
      <Card
        className={classes.root}
        onClick={() => history.push(`/question/${_id}/preview`)}
      >
        <CardHeader
          style={{ textTransform: "capitalize" }}
          title={formName}
          subheader={moment(createdAt).format("DD/MM/YYYY hh:mm")}
        />
        <CardMedia
          className={classes.media}
          image={`${process.env.PUBLIC_URL}/images/form-preview-icon.png`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This form get {0} Reasponse so far...
          </Typography>
          <Typography variant="h6" color="textPrimary" component="p">
            <Link href={formUrl} target="_blank">
              Access From URL
            </Link>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CommonCard;
