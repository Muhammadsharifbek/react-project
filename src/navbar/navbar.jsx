import React from "react";
import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

import colors from "../constans/colors";
import SearchBar from "../search-bar/search-bar";

const App = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: colors.primary,

        // Use MUI color keys or valid CSS colors
      }}
    >
      <nav>
        <img src="/src/assets/react.svg" alt="logo" />
      </nav>

      <SearchBar />
      <Box />
    </Stack>
  );
};

export default App;

//  // Assuming colors is correctly imported

// const Navbar = () => {
//   return (
//     <Stack
//       direction={"row"}
//       alignItems={"center"}
//       justifyContent={"space-between"}
//       p={2}
//       sx={{
//         position: "sticky",
//         top: 0,
//         zIndex: 999,
//         backgroundColor: colors.primary
//       }}
//     >
//       {/* Logo */}
//       <img src="/src/assets/react.svg" alt="logo" />

//       {/* Placeholder for SearchBar */}
// <SearchBar/>

//       <Box/>

//     </Stack>
//   );
// };

// export default Navbar;
