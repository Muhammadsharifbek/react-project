// import React from "react";
// import { Stack } from "@mui/material";
// import { category } from "../constans";
// import Videos from "../video/videos";

// // import { main } from "../main";
// import colors from "../constans/colors";

// function Category({ selectedCategoryHandler, selectedCategory }) {
//   return (
//     <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
//       {category.map((item) => {
//         return (
//           <button
//             key={item.name}
//             className="category-btn"
//             style={{
//               borderRadius: "0",
//               backgroundColor:
//                 item.name === selectedCategory && colors.secondary,
//             }}
//             onClick={() => selectedCategoryHandler(item.name)}
//           >
//             <Videos />
//             <span
//               style={{
//                 color:
//                   item.name === selectedCategory ? "#fff" : colors.secondary,
//                 marginRight: "23px",
//               }}
//               className={colors.secondary}
//             >
//               {item.icon}
//             </span>
//             <span
//               style={{
//                 color:
//                   item.name === selectedCategory ? "#fff" : colors.secondary,
//                 textDecoration: "none",
//               }}
//               className={colors.primary}
//             >
//               {item.name}
//             </span>
//           </button>
//         );
//       })}
//     </Stack>
//   );
// }

// export default Category;

import React from "react";
import { Stack } from "@mui/material";
import { category } from "../constans";
import Videos from "../video/videos";
import colors from "../constans/colors";

function Category({ selectedCategoryHandler, selectedCategory }) {
  return (
    <Stack
      direction="row"
      sx={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        padding: "10px",
        textDecoration: "none",
      }}
    >
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            borderRadius: "0",
            backgroundColor:
              item.name === selectedCategory ? colors.secondary : "transparent",
            padding: "10px 15px",
            marginRight: "10px",
            border: "none",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => selectedCategoryHandler(item.name)}
        >
          <Videos />
          <span
            style={{
              color: item.name === selectedCategory ? "#999" : colors.secondary,
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            {item.icon}
          </span>
          <span
            style={{
              color: item.name === selectedCategory ? "#fff" : colors.primary,
              textDecoration: "none",
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Category;
