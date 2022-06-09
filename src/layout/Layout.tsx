import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing } from "pages/Landing";
import { LayoutStyles } from "./LayoutStyle";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout() {
  const classes = LayoutStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Sidebar/>
        <div className={classes.container}>
          <Header />
          <Routes>
            <Route path='/' element={<Landing />} />
          </Routes>
          <div className={classes.footer}>PhoneNumsbers.org</div>
        </div>
      </div>
    </Router>
  );
}
