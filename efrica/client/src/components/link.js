import React from "react";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper"; 
import { Box } from "@mui/system";
const App = () => {
   return (
      <div>
         <h3>
            {" "}
            Using the <i> Link </i> Component of the Material UI to add links with the Paper component {" "}
         </h3>
         <Link href = "#" underline = "none">
            <Box
               Sx = {{
                  "& > :not(style)": {
                     m: 1,
                     width: 100,
                     height: 100,
                  },
               }}
               >
               <Paper elevation = {24}> This is a link! </Paper>
            </Box>
         </Link>
      </div>
   );
};
export default App;