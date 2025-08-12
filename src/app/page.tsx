import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section style={{ textAlign: "left", padding: "20px" }}>
        <h1 style={{ color: "#FF6969", fontSize: "56px", marginBottom: "16px" }}>About Me</h1>
        <p style={{ maxWidth: "600px", lineHeight: 1.5 }}>
          My name is Mohammad Kamal , I am a software engineer from Indonesia with experience in mobile development, web development, computer vision, and natural language processing.
        </p>
        <p>Previously, I worked as a Mobile Developer in <a href="https://www.linkedin.com/company/dptsi-its/" className="hyperlink">DPTSI</a> . </p>
        <p>Check out some of my <Link href="/portfolio" className="hyperlink">Projects</Link> </p>
      </section>
    </main>
  );
}


