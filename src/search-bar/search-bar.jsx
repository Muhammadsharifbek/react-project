// import React from 'react'
//  import { Search } from '@mui/icons-material'
//  import { Paper, IconButton  } from '@mui/material'
//  import colors from "/src/constans/colors";
// // import {SearchBar} ""

// function SearchBar() {
//   return (
//    <Paper
//    component={"form"}
//    sx={{border: `1px solid ${colors.secondary}`, pl:22, boxShadow: "none"}}
//    >

//     <iput type="text" placeholder="Search..." className="searchBar"/>
//     <IconButton>
//     <Search/>
//     </IconButton>

//    </Paper>
//   )
// }

// export default SearchBar

import React from "react";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import colors from "/src/constans/colors";

function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: "none" }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="searchBar"
        style={{ flex: 1, border: "none", outline: "none", padding: "8px" }}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
