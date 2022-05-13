import React, { useContext } from "react";
import { AppContext } from "../App";
import {Box} from "@mui/material";

const Results = () => {
  const [appData] = useContext(AppContext);

  return (
    <Box
                  height="500px"
                  display="flex" 
                  flexDirection="column"
                  justifyContent="center"
                  color="#251D3A"
                  alignItems="center"
                >

    <div>
     <h2> Results:</h2>
      {Object.entries(appData.answers).map(([currentIndex, answer]: any) => (
        <p key={currentIndex}>{answer.value}</p>
      ))}
    </div></Box>
  );
};

export default Results;