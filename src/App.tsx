import React from "react";
import Resume from "./components/resume/Resume.tsx";
import Header from "./components/details/Header.tsx";
import Footer from "./components/details/Footer.tsx";
import { ThemeProvider } from "./hooks/useTheme.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Header />
      <Resume />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
