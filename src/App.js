import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Homepage from "./pages/Homepage";
import GiftSuggestion from "./pages/GiftSuggestion";
import SignupPrompt from "./pages/SignupPrompt";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/gift-suggestion" element={<GiftSuggestion/>} />
        <Route path="/signup-prompt" element={<SignupPrompt/>} />
      </Routes>
    </Box>
  );
}

export default App;
