import { Stack } from "@mui/system";
import React from "react";
import githubLogo from "../../assets/github.png";

const Navbar = () => {
  
  const handleClick = () => {
    window.location.href = "https://github.com/Santanderrrrrrr";
  };
  
  return (
    <>
      <Stack
        className="navBarThing"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img className="githubLogo" src={githubLogo} alt={"github link"} />
        {/* <a
          href="https://github.com/Santanderrrrrrr"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        > */}
          <h2 className="pageHeader" onClick={handleClick}>
            <i>SANTANDERRRRRRR</i>
          </h2>
        {/* </a> */}
      </Stack>
    </>
  );
};

export default Navbar;
