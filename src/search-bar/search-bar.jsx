import React, { useState } from "react";
import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import colors from "/src/constans/colors";

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    if (value.trim()) {
      navigate(`/search/${value.trim()}`);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={submitHandler}
      sx={{
        border: `1px solid ${colors.secondary}`,
        pl: 2,
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        className="searchBar"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        style={{
          flex: 1,
          border: "none",
          outline: "none",

          padding: "8px",
        }}
      />
      <IconButton type="submit">
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
