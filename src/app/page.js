import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Accordion from "@/components/pagecomp/Accordion";

export default function Home() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/component/accordion" />} />
          <Route path="/component/accordion" element={<Accordion />} />
        </Routes>
      </Router>
    </>
  );
}
