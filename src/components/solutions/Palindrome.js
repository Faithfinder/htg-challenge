import React, { useState, useEffect, useMemo } from "react";

import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Divider from "@material-ui/core/Divider";

import { getPalindromes } from "../../solutions/2-palindrome";

const Palindrome = () => {
  const [min, setMin] = useState(100);
  const [max, setMax] = useState(999);
  const [palindromeArray, setPalindromeArray] = useState([]);

  const getPalindromesMemo = useMemo(() => getPalindromes(min, max), [
    min,
    max
  ]);

  useEffect(() => {
    const getData = async () => {
      setPalindromeArray(await getPalindromesMemo);
    };
    getData();
  }, [getPalindromesMemo]);

  return (
    <>
      <Typography variant="h2" style={{ marginTop: "16px" }}>
        Challenge 2: Palindrome
      </Typography>
      <Divider variant="fullWidth" style={{ margin: "16px", width: "75%" }} />
      <Typography component="div" align="center">
        <Typography variant="h3">
          The largest palindrome in range from
        </Typography>
        <br />
        <OutlinedInput
          value={min}
          onChange={e => setMin(e.target.value)}
        /> to{" "}
        <OutlinedInput value={max} onChange={e => setMax(e.target.value)} />{" "}
        <Typography variant="h3">is</Typography>
        <Typography variant="h3" color="primary">
          {palindromeArray.reduce((a, b) => {
            return Math.max(a, b);
          }, 0)}
        </Typography>
      </Typography>
    </>
  );
};

export default Palindrome;
