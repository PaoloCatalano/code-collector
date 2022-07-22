import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "../components/Modal";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="main__navbar border">
      <Link href="/">
        <a>
          <Image
            src="/logo/pc_logo.svg"
            alt="PC_Code logo"
            width={50}
            height={50}
          />
        </a>
      </Link>
      <button type="button" onClick={() => setOpen(!open)}>
        <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
      </button>
      <Modal isVisible={open} setVisibility={setOpen} />
    </nav>
  );
}
