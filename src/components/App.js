import React from "react";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Sorting from "./solutions/Sorting";
import Palindrome from "./solutions/Palindrome";
import Anagram from "./solutions/Anagram";

function App() {
  return (
    <Container>
      <Grid container direction="column" alignItems="center">
        <Sorting />
        <Palindrome />
        <Anagram />
      </Grid>
    </Container>
  );
}

export default App;
