import React from "react";
import { Stack } from "@mui/material";
import { category } from "../constans";
import Videos from "../video/videos";

// import { main } from "../main";
import colors from "../constans/colors";

function Category({ selectedCategoryHandler, selectedCategory }) {
  return (
    <Stack direction={"row"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => {
        return (
          <button
            key={item.name}
            className="category-btn"
            style={{
              borderRadius: "0",
              backgroundColor:
                item.name === selectedCategory && colors.secondary,
            }}
            onClick={() => selectedCategoryHandler(item.name)}
          >
            <Videos />
            <span
              style={{
                color:
                  item.name === selectedCategory ? "#fff" : colors.secondary,
                marginRight: "23px",
              }}
              className={colors.secondary}
            >
              {item.icon}
            </span>
            <span
              style={{
                color:
                  item.name === selectedCategory ? "#fff" : colors.secondary,
                textDecoration: "none",
              }}
              className={colors.primary}
            >
              {item.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
}

export default Category;
