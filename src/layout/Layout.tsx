/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "pages/Landing";
import { LayoutStyles } from "./LayoutStyle";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";

export default function Layout() {
  const classes = LayoutStyles();

  return (
    <Router>
      <Sidebar />
      <div className={classes.container}>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
