import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Divider from "@material-ui/core/Divider";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { green, red } from "@material-ui/core/colors";

import { isAnagram } from "../../solutions/3-anagram";

const Anagram = () => {
  const [string1, setString1] = useState("Debit Card");
  const [string2, setString2] = useState("Bad credit");

  return (
    <>
      <Typography variant="h2" style={{ marginTop: "16px" }}>
        Challenge 3: Anagram
      </Typography>
      <Divider variant="fullWidth" style={{ margin: "16px", width: "75%" }} />
      <Typography component="div" align="center">
        <OutlinedInput
          value={string1}
          onChange={e => setString1(e.target.value)}
        />{" "}
        and{" "}
        <OutlinedInput
          value={string2}
          onChange={e => setString2(e.target.value)}
        />
        <Typography variant="h3">are</Typography>
        {isAnagram(string1, string2) ? (
          <Typography variant="h3" color="primary">
            an anagram{" "}
            <CheckCircleIcon fontSize="large" style={{ color: green[500] }} />
          </Typography>
        ) : (
          <Typography variant="h3" color="primary">
            not an anagram{" "}
            <RemoveCircleIcon fontSize="large" style={{ color: red[500] }} />
          </Typography>
        )}
      </Typography>
    </>
  );
};

export default Anagram;
