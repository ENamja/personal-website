"use client";

import Contacts from "./Contacts";
import Dropdown from "./Dropdown";

function NavBar() {
  return (
    <div className="flex justify-between my-4 mx-12">
      <Dropdown></Dropdown>
      <Contacts></Contacts>
    </div>
  );
}

export default NavBar;
