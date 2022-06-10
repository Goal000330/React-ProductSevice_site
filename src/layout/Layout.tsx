/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "pages/Landing/Landing";
import { Account } from "pages/Account/Account";
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
          <Route path='/account' element={<Account />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
