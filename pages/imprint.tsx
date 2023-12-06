import Footer from "components/footer";
import { NavItem } from "components/NavItem";
import Head from "next/head";
import Container from "../components/container";

const Imprint = () => {
  return (
    <div className="flex flex-col justify-between min-h-screen font-sans text-white bg-black-500">
      <div>
        <nav className="flex items-start justify-end h-16 px-8 py-4">
          <NavItem href="/">Zurück zur Startseite</NavItem>
        </nav>
        <main>
          <Head>
            <title>Firat Özcan | Impressum</title>
          </Head>
          <div className="bg-black-300">
            <Container>
              <section className="max-w-4xl pt-40 prose-sm prose text-white md:prose-lg lg:prose-xl">
                <div>
                  <h1>Informationen nach § 5 TMG</h1>
                  <p>
                    Firat Özcan
                    <br />
                    firatoezcan.com
                    <br />
                    Leonhardstraße 44b
                    <br />
                    38102 Braunschweig
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
              <path d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z" fillRule="evenodd"></path>
            </svg>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Imprint;
