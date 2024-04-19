import { Stack } from "@mui/material";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Bookings from "./pages/Bookings";
import Destinations from "./pages/Destinations";
import Flights from "./pages/Flights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Destinations />
      <Flights />
      <Bookings />
      <Stack mt={20} mb={10}>
        <About />
      </Stack>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
