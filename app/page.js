import Link from "next/link";

export default function Home() {
  return (
    <div className="page-position">
      <h2>Home Page</h2>
      <div style={{ width: "50%", marginTop: "20px", lineHeight: "1.5" }}>
        <p>
          This website is serving to be as a portfolio / demo application for{" "}
          <a
            href="https://www.linkedin.com/in/alihankeskin/"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Alihan Keskin
          </a>
          . There are various applications within, you can check them out
          through footer links. There is no responsive design for mobile phones
          yet, but it will be eventually. Other than that, you can enjoy
          applications or{" "}
          <a
            href="https://medium.com/@akeskinw"
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Medium
          </a>{" "}
          posts.
        </p>
        <div style={{ marginTop: "60px" }}>
          <h3 style={{ textAlign: "center" }}>
            <Link href="/color-picker" style={{ textDecoration: "underline" }}>
              Latest App - Color Picker
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
}
