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
            display: "flex",
            alignItems: "center",
            borderRadius: "0",
            backgroundColor:
              item.name === selectedCategory ? colors.secondary : "transparent",
            padding: "20px 15px",
            marginRight: "14px",
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
              color:
                item.name === selectedCategory ? "crimson" : colors.primary,
              textDecoration: "none",
              paddingTop: "3px",
              lineHeight: "1",
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
