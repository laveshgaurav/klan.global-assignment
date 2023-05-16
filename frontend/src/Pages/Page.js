import React, { useEffect } from "react";
import Styles from "./Page.module.scss";

function Page({ children }) {
  const [sidebarActive, setSidebarActive] = React.useState(false);

  useEffect(() => {
    document.body.style.setProperty(
      "overflow",
      sidebarActive ? "hidden" : "auto"
    );
  }, [sidebarActive]);

  return (
    <div className={Styles.Page_Container}>
      <div className={Styles.SideBar_Container}>
        <div className={Styles.Header}>
          <h2>Untitled UI</h2>
          <button
            className={Styles.Hamburger}
            onClick={() => setSidebarActive(!sidebarActive)}
          >
            {/* bars */}
            {sidebarActive ? (
              <i className="fa-solid fa-times"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </button>
        </div>
        <div className={Styles.Search}>
          <i className="fa-solid fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <ul className={sidebarActive && "SideBar_Active"}>
          <li>
            <i className="fa-solid fa-home"></i>
            <span>Home</span>
          </li>
          <li>
            {/* dashboard */}
            <i className="fa-solid fa-chart-bar"></i>
            <span>Dashboard</span>
          </li>
          <li>
            {/* dashboard */}
            <i className="fa-solid fa-folder"></i>
            <span>Projects</span>
          </li>
          <li>
            {/* task */}
            <i className="fa-solid fa-tasks"></i>
            <span>Tasks</span>
          </li>
          <li>
            {/* reporting */}
            <i className="fa-solid fa-chart-pie"></i>
            <span>Reporting</span>
          </li>
        </ul>
      </div>
      <div className={Styles.Page_Container}>{children}</div>
    </div>
  );
}

export default Page;
