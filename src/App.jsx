import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// import { Button, Stack } from "@mui/material";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./main/main.jsx";
import Channel from "./channel/channel.jsx";
import Navbar from "./navbar/navbar.jsx";
import Search from "./search/search.jsx";
import videoDeail from "./videoDetail/videoDetail.jsx";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Router>
          <Routes>
            <Route path="/channel/:id" element={<Channel />} />
            <Route path="/" element={<Main />} />
            <Route path="/search/:id" element={Search} />
            <Route path="/videoDetail/:id" element={videoDeail} />
          </Routes>
        </Router>
      </div>
      {/* <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </>
  );
}

export default App;
