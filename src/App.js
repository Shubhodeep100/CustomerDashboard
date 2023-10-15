import { React, useState } from "react";

import Leftsidebar from "./components/Leftsidebar";
import Greeting from "./components/Greeting";
import Cards from "./components/Cards";
import Customers from "./components/Customers";
import Overview from "./components/Overview";
import ProdTable from "./components/ProdTable";
import "./App.css";

function App() {
  const [openSidebarToggle, setopenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setopenSidebarToggle(!openSidebarToggle); // Close the sidebar by setting state to false
  };
  return (
    <div className="App">
      <main className="flex flex-row">
        <Leftsidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />

        <div className="flex flex-col gap-6">
          <Greeting OpenSidebar={OpenSidebar} />
          <Cards />
          <div className="flex flex-wrap groupover">
            <Overview />
            <Customers />
          </div>

          {/* <ProductTable /> */}
          {/* <ProdTable /> */}
          <ProdTable/>
        </div>
      </main>
    </div>
  );
}

export default App;
