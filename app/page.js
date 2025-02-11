import Link from "next/link";

export default function Home() {
  return (
    <div className="page-position">
      <h2 className="mt-5 text-3xl xl:text-4xl">Home Page</h2>
      <div className="mt-5 max-w-[80%] xl:max-w-[50%] leading-normal">
        <p className=" mb-10 text-lg leading-relaxed">
          This website is serving to be as a portfolio / demo application for{" "}
          <a
            href="https://www.linkedin.com/in/alihankeskin/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Alihan Keskin
          </a>
          . There are various applications within, you can check them out
          through header links. There is responsive (enough) design for mobile
          phones. Other than that, you can enjoy applications or{" "}
          <a
            href="https://medium.com/@akeskinw"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Medium
          </a>{" "}
          posts.
        </p>
        <div className="mt-16">
          <h3 className="text-center text-xl xl:text-2xl mb-10">
            <Link href="/qr-app" className="underline">
              1 - QR App
            </Link>
          </h3>
          <h3 className="text-center text-xl xl:text-2xl mb-10">
            <Link href="/map-app" className="underline">
              2 - Map App
            </Link>
          </h3>
          <h3 className="text-center text-xl xl:text-2xl">
            <Link href="/pokemon-app?page=1" className="underline">
              3 - Pokedex
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
