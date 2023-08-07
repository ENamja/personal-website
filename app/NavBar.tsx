"use client";

import Contacts from "./Contacts";
import Dropdown from "./Dropdown";

const _GITHUB_LINK = "https://github.com/ENamja";
const _LINKEDIN_LINK = "https://www.linkedin.com/in/elisha-nam/";
const _EMAIL_LINK = "mailto:namelisha@gmail.com";

function NavBar() {
  return (
    <div>
      <Dropdown></Dropdown>
      <Contacts></Contacts>
    </div>
  );
}

export default NavBar;
