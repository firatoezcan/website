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
          </Head>
          <div className="bg-black-300">
            <Container>
              <section className="Home pt-40">
                <div>
                  <h3 className="pt-2 text-3xl font-bold">Informationen nach § 5 TMG</h3>
                  <p className="text-xl mb-1">Firat Özcan</p>
                  <p className="text-xl mb-1">firatoezcan.com</p>
                  <p className="text-xl mb-1">Heinrichstraße 9</p>
                  <p className="text-xl mb-1">38259 Salzgitter</p>
                  <h3 className="pt-2 text-3xl font-bold">Kontakt</h3>
                  <p className="text-xl mb-1">Tel.: +49 (0) 162 / 891 7452</p>
                  <p className="text-xl mb-1">
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
