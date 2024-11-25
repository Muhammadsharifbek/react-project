import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Container } from "@mui/material";
import Category from "../category/category";

import colors from "../constans/colors";
const main = () => {
  const [selectedCategory, setSelectetCategory] = useState("New");

  const selectedCategoryHandler = (category) => setSelectetCategory(category);

  return (
    <Link to="/">
      <Stack>
        <Category
          selectedCategoryHandler={selectedCategoryHandler}
          selectedCategory={selectedCategory} // pass selectedCategory state to Category component
        />
        <Box p={4} sx={{ height: "9vh" }}>
          <Container maxWidth={"90%"}>
            <Typography variant={"m4"} fontWeight={"bold"} mb={2}>
              <span className="new-video" style={{ color: colors.secondary }}>
                {selectedCategory} Videos
              </span>
            </Typography>
            <br />
            video
          </Container>
        </Box>
      </Stack>
    </Link>
  );
};

export default main;
