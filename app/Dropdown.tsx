import Link from "next/link";

function Dropdown() {
  return (
    <a className="text-[#49c5b6]" href="#click">
      <h1>Menu</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </a>
  );
}

export default Dropdown;
