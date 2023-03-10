import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box } from "@mui/material"; //Box is a Simple div element from MUI

// import components
import {
  Feed,
  ChannelDetail,
  Navbar,
  SearchFeed,
  VideoDetail,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />

        {/* Routes for our components */}
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
