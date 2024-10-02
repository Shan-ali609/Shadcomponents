import React from "react";
import Alertdialog from "./Alertdialog";

export default function Dialog({ sheetcond }) {
  return (
    <>
      <Alertdialog nameprop={true} sheetcond={sheetcond} />
    </>
  );
}
