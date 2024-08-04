import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/resume/Resume.tsx';
import Header from './components/details/Header.tsx';
import Footer from './components/details/Footer.tsx';
import { ThemeProvider } from './hooks/useTheme.tsx';
import './App.css';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
