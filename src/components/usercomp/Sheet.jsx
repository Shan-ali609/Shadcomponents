import React, { useContext } from "react";
import Alertdialogreuse from "@/components/pagecomp/Alertdialogreuse";
import { AppStateContext } from "../contextApi/AppState";
export default function Sheet() {
  const { shetcond } = useContext(AppStateContext);
  return (
    <>
      <div className="fixed  inset-y-0 top-0 right-0 dark:bg-black  bg-white bg-opacity-90 z-50"></div>
      <Alertdialogreuse
        nameprop="open"
        sheetcond={true}
        dialprop={true}
        shetcond={shetcond}
      />
    </>
  );
}
