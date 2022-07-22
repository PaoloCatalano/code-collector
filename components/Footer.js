import Image from "next/image";

export default function Footer() {
  return (
    <footer className="main__footer border">
      <a
        href="http://github.com/PaoloCatalano/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/github.svg"
          alt="PC_Code logo"
          width={30}
          height={30}
        />
      </a>
      <div>
        <Image
          src="/logo/pc_logo.svg"
          alt="PC_Code logo"
          width={30}
          height={30}
        />
        <span> &copy;{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}
