/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "pages/Landing";
import { LayoutStyles } from "./LayoutStyle";

export default function Layout() {
  const classes = LayoutStyles();

  return (
    <Router>
      <div className={classes.root}>
        <div className={classes.sidebar}></div>
        <div className={classes.container}>
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
        </div>
        <div className={classes.footer}>PhoneNumbers.org</div>
      </div>
    </Router>
  );
}
