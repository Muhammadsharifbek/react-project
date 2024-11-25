import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Stack, Typography, Container } from "@mui/material";
import Category from "../category/category";
import { AppService } from "../service/apiService";
import Videos from "../video/videos";

import colors from "../constans/colors";
const Main = () => {
  const [selectedCategory, setSelectetCategory] = useState("New");

  const selectedCategoryHandler = (category) => setSelectetCategory(category);
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const data = await AppService.fetching(
  //         `search?part=snippet&q=${selectedCategory}`
  //       );
  //       console.log("API javobi:", data); // To‘liq javobni tekshiring
  //       if (data.items) {
  //         setVideos(data.items);
  //       } else {
  //         console.error("API responseda 'items' topilmadi:", data);
  //       }
  //     } catch (error) {
  //       console.error("API so‘rovda xatolik yuz berdi:", error);
  //     }
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await AppService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        console.log("API javobi:", data); // To‘liq javobni tekshiring
        if (data.items) {
          setVideos(data.items); // API dan kelgan ma'lumotni holatga saqlash
        } else {
          console.error("API responseda 'items' topilmadi:", data);
        }
      } catch (error) {
        console.error("API so‘rovda xatolik yuz berdi:", error);
      }
    };
    getData();
  }, [selectedCategory]); // `selectedCategory` o'zgarganda useEffect qayta ishlaydi

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

            <Videos videos={videos} />
          </Container>
        </Box>
      </Stack>
    </Link>
  );
};

export default Main;

// useEffect(() => {
//   const getData = async () => {
//     try {
//       const data = await AppService.fetching("search");
//       setVideos(data.item);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   getData();
// }, []);
