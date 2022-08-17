import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import styled, { ThemeProvider } from "styled-components";
import { whiteTheme, darkTheme } from "./assets/global/theme";
import { useAppSelector } from "./hooks/reduxHooks";
import Course from "./pages/Course";
import Coplit from "./pages/Coplit";
import Job from "./pages/Job";
import Active from "./pages/course/Active";
import Scheduled from "./pages/course/Scheduled";
import Expired from "./pages/course/Expired";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
`;

function App() {
  const { darkMode } = useAppSelector((state) => state.toggle);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : whiteTheme}>
      <Wrapper className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/coplit" element={<Coplit />} />
          <Route path="/job" element={<Job />} />
          <Route path="/course" element={<Course />}>
            <Route path="/course/active" element={<Active />} />
            <Route path="/course/scheduled" element={<Scheduled />} />
            <Route path="/course/expired" element={<Expired />} />
          </Route>
        </Routes>
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
