import React, { useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { createRandomIntegerArray, quickSort } from "../../solutions/1-sorting";
import { Divider } from "@material-ui/core";

const Sorting = () => {
  const classes = makeStyles(theme => ({
    list: {
      overflow: "auto",
      maxHeight: 300
    },
    listItem: {
      justifyContent: "center"
    },
    divider: {
      margin: theme.spacing(2)
    },
    listWrapper: {
      width: "initial"
    }
  }))();

  const [unsortedArray, setUnsortedArray] = useState(
    createRandomIntegerArray()
  );

  return (
    <>
      <Typography variant="h2">Challenge 1: Sorting</Typography>
      <Button
        color="primary"
        variant="contained"
        onClick={() => setUnsortedArray(createRandomIntegerArray())}
      >
        Generate new integers
      </Button>
      <Grid container item spacing={2} className={classes.listWrapper}>
        <Grid item>
          <Typography variant="h3">Unsorted array</Typography>
          <Divider className={classes.divider} />
          <List dense className={classes.list}>
            {unsortedArray.map(integer => (
              <ListItem className={classes.listItem}>{integer}</ListItem>
            ))}
          </List>
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.divider} />
        <Grid item>
          <Typography variant="h3">Sorted array</Typography>
          <Divider className={classes.divider} />
          <List dense className={classes.list}>
            {quickSort(unsortedArray).map(integer => (
              <ListItem className={classes.listItem}>{integer}</ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};

export default Sorting;
