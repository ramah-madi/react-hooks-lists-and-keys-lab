import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const mapedLinks = links.map(element => {
    return <a key={element} href={`#${element}`}>{element}</a>
  })

  return <nav>{mapedLinks}</nav>;
}

export default NavBar;
