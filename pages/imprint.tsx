import { Image } from "components/Image";
import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { FunctionComponent } from "react";
import Container from "../components/container";
import Post from "../types/post";
import Footer from "components/footer";
import { NavItem } from "components/NavItem";

const Imprint = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-black-500 text-white font-sans">
      <div>
        <nav className="h-16 flex justify-end items-start px-8 py-4">
          <NavItem href="/">Zurück zur Startseite</NavItem>
        </nav>
        <main>
          <Head>
            <title>Firat Özcan | Impressum</title>
            <link rel="stylesheet" href="https://unpkg.com/@tailwindcss/typography@0.2.x/dist/typography.min.css" />
          </Head>
          <div className="bg-black-300">
            <Container>
              <section className="text-white pt-40 prose prose-sm md:prose-lg lg:prose-xl max-w-4xl">
                <div>
                  <h1>Informationen nach § 5 TMG</h1>
                  <p>
                    Firat Özcan
                    <br />
                    firatoezcan.com
                    <br />
                    Heinrichstraße 9
                    <br />
                    38259 Salzgitter
                  </p>
                  <h2>Kontakt</h2>
                  <p>
                    Tel.: +49 (0) 162 / 891 7452
                    <br />
                    E-Mail: <a href="mailto:firatoezcan@gmail.com">firatoezcan@gmail.com</a>
                  </p>
                </div>
              </section>
            </Container>
            <svg viewBox="0 0 1695 57" preserveAspectRatio="none" className="fill-current text-black-500 bg-black-300">
              <path
                d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Imprint;
