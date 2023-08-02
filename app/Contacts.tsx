import Image from "next/image";
import Link from "next/link";

function Contacts() {
  return (
    <div className="flex flex-row text-white items-center">
      <Link className="mx-3 change-color" href="/">
        <Image
          src="/../public/transparent-github.png"
          width="32"
          height="32"
          alt="GitHub Logo"
        ></Image>
      </Link>
      <Link className="mx-3 change-color" href="/">
        <Image
          src="/../public/transparent-linkedin.png"
          width="32"
          height="32"
          alt="LinkedIn Logo"
        ></Image>
      </Link>
      <Link className="mx-3 change-color" href="/">
        <Image
          src="/../public/transparent-email1.png"
          width="32"
          height="32"
          alt="Email Logo"
        ></Image>
      </Link>
    </div>
  );
}

export default Contacts;
