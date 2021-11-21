import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid } from "@material-ui/core";
import { getForms } from "../../store/actions/formAction";
import Loader from "../../components/common/Loader";
import CommonCard from "../../components/common/CommonCard/Index";
import CommonBasePage from "../../components/common/CommonBasePage";

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { forms } = useSelector((state) => state?.form);

  useEffect(() => {
    let id = setTimeout(() => {
      dispatch(getForms());
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [dispatch]);

  return (
    <Grid container spacing={3}>
      {loading ? (
        <Grid
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <Loader />
        </Grid>
      ) : forms.length ? (
        forms.map((item) => (
          <Grid style={{ justifyContent: "center" }}>
            <CommonCard key={item.id} form={item} />
          </Grid>
        ))
      ) : (
        <CommonBasePage />
      )}
    </Grid>
  );
}
