import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className={"footer bg-yellow-400 mt-10 "}>
        <span className="text-xl">
          All Rights Reserved ©{" "}
          <Link href={"/"} className="italic">
            ardelon.com
          </Link>
        </span>
        <div className="flex gap-8">
          <Link
            href="https://medium.com/@akeskinw"
            target="_blank"
            className="text-xl magnify-a-bit"
          >
            Blog
          </Link>
          <Link
            href="https://www.linkedin.com/in/alihankeskin/"
            target="_blank"
            className="text-xl magnify-a-bit"
          >
            Contact
          </Link>
          <Link
            href="/sitemap.xml"
            target="_blank"
            className="text-xl magnify-a-bit"
          >
            Site Map
          </Link>
        </div>
      </footer>
    </>
  );
}

export default Footer;
