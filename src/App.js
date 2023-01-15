import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Homepage from "./pages/Homepage";
import GiftSuggestion from "./pages/GiftSuggestion";
import SignupPrompt from "./pages/SignupPrompt";
import { theme } from "./components/Theme";
import SignupPage from "./pages/SignupPage";
import WelcomePage from "./pages/WelcomePage";
import WishlistPage from "./pages/WishlistPage";
import InterestPage from "./pages/InterestsPage";
import MainPage from "./pages/MainPage";

const wrapper = {
  [theme.breakpoints.up('xl')]: {
    minWidth: '96rem'
  },
  [theme.breakpoints.up('lg')]: {
    minWidth: '75rem'
  },
  [theme.breakpoints.up('md')]: {
    minWidth: '56.25rem'
  },
  [theme.breakpoints.up('sm')]: {
    minWidth: '37.5rem'
  },
  [theme.breakpoints.up('xs')]: {
    minWidth: '22rem'
  },
}

function App() {
  return (
    <Box sx={wrapper}>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/gift-suggestion" element={<GiftSuggestion/>} />
        <Route path="/signup-prompt" element={<SignupPrompt/>} />
        <Route path="/sign-up" element={<SignupPage/>} />
        <Route path="/welcome" element={<WelcomePage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/interests" element={<InterestPage/>} />
        <Route path="/main-page" element={<MainPage/>} />
      </Routes>
    </Box>
  );
}

export default App;
