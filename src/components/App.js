import React from "react";
import Sorting from "./solutions/Sorting";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <Container>
      <Grid container direction="column" alignItems="center">
        <Sorting />
      </Grid>
    </Container>
  );
}

export default App;
