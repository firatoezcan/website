import { Image } from "components/Image";
import Head from "next/head";
import { useState } from "react";
import Container from "../components/container";
import Footer from "components/footer";
import { NavItem } from "components/NavItem";
import { Input, Textarea } from "components/Form";

const Index = () => {
  const [hasSentForm, setHasSentForm] = useState(false);
  const [catIsLoading, setCatIsLoading] = useState(false);
  const [randomCat, setRandomCat] = useState();

  const getNewRandomCat = async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/search").then((r) => r.json());
    return res[0].url;
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-black-500 text-white font-sans">
        <div>
          <nav className="h-16 flex justify-end items-start px-8 py-4">
            {!hasSentForm && <NavItem href="#contact">Kontakt</NavItem>}
            {hasSentForm && <NavItem href="#cat-sim">ZUM KATZENSIMULATOR</NavItem>}
          </nav>
          <main>
            <Head>
              <title>Firat Özcan | Homepage</title>
            </Head>
            <div className="bg-black-500">
              <Container>
                <section className="Home mb-40">
                  <Image
                    src="static/Firat-2.jpg"
                    className="block rounded-full w-64 sm:w-80 mx-auto transform translate-y-40 -mt-40 overflow-hidden"
                  />
                </section>
              </Container>
              <svg viewBox="0 0 1695 57" preserveAspectRatio="none" className="fill-current text-black-300 bg-black-500">
                <path
                  d="M0 23c135.4 19 289.6 28.5 462.5 28.5C721.9 51.5 936.7 1 1212.2 1 1395.8.9 1556.7 8.3 1695 23v34H0V23z"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="bg-black-300">
              <Container>
                <section className="About max-w-2xl mx-auto leading-normal">
                  <h1 className="pt-2 text-4xl sm:text-5xl font-bold">Firat Özcan</h1>
                  <h2 className="text-xl sm:text-2xl font-medium mb-4">Fullstack Javascript Entwickler</h2>
                  <p className="text-xl sm:text-2xl font-semibold">Hey, ich bin Firat 👋</p>
                  <p className="text-base sm:text-xl">
                    Ich bin ein freiberuflicher React.js und Node.js Consultant aus dem ruhigen Salzgitter
                  </p>
                  <p className="text-base sm:text-xl">Wenn du ein Projekt für mich hast, dann schreib mir doch einfach direkt hier</p>
                  <p className="text-base sm:text-xl mb-3">
                    Ansonsten kannst du dir für den Anfang auch direkt meinen Lebenslauf herunterladen
                  </p>
                  <a
                    className="p-2 mt-2 inline-block text-base sm:text-xl hover:text-gray-300 transition duration-150 ease-in-out border-2 border-opacity-50 border-gray-400 focus:outline-none focus:border-opacity-100"
                    target="_blank"
                    href="/static/Firat Özcan Lebenslauf Deutsch.pdf"
                  >
                    Jetzt herunterladen
                  </a>
                </section>
              </Container>

              <div className="relative mt-16">
                <Container>
                  <div className="w-full max-w-2xl mx-auto">
                    {!hasSentForm && (
                      <form
                        id="contact"
                        onSubmit={async (event) => {
                          event.preventDefault();
                          const data = ([...event.currentTarget.elements] as Array<HTMLInputElement>).reduce(
                            (acc, { id, value }) => ({ ...acc, [id]: value }),
                            {}
                          );
                          const headers = new Headers();
                          headers.append("Content-Type", "application/json");
                          await fetch("https://enzql28h64jifyn.m.pipedream.net", {
                            method: "POST",
                            headers,
                            mode: "cors",
                            body: JSON.stringify(data),
                          });
                          const newCat = await getNewRandomCat();
                          setRandomCat(newCat);
                          setHasSentForm(true);
                        }}
                        className="flex sm:-mx-6 flex-wrap"
                      >
                        <div className="mb-4 w-full sm:w-1/2 sm:px-6">
                          <Input id="firstName" label="Vorname" placeholder="Firat" required />
                        </div>
                        <div className="mb-4 w-full sm:w-1/2 sm:px-6">
                          <Input id="lastName" label="Nachname" placeholder="Özcan" required />
                        </div>
                        <div className="mb-4 w-full sm:w-1/2 sm:px-6">
                          <Input id="email" label="E-Mail" placeholder="firat.oezcan@gmail.com" required />
                        </div>
                        <div className="mb-4 w-full sm:w-1/2 sm:px-6">
                          <Input id="phone" label="Telefonnummer" placeholder="0123 456 789" required />
                        </div>
                        <div className="mb-4 w-full sm:px-6">
                          <Textarea
                            id="message"
                            label="Deine Nachricht"
                            placeholder="Hey Firat, nett dich kennenzulernen. Ich hab ein tolles Projekt für dich!"
                            required
                          />
                        </div>
                        <div className="mb-4 w-full text-right sm:px-6">
                          <button
                            type="submit"
                            className="p-2 mt-2 inline-block text-base sm:text-xl hover:text-gray-300 transition duration-150 ease-in-out border-2 border-opacity-50 border-gray-400 focus:outline-none focus:border-opacity-100"
                          >
                            Nachricht versenden
                          </button>
                        </div>
                      </form>
                    )}
                    {hasSentForm && (
                      <div id="cat-sim">
                        <h2 className="text-3xl font-medium mb-1">Vielen Dank für deine Nachricht!</h2>
                        <p className="text-base sm:text-xl mb-3">
                          Solange du auf eine Antwort wartest, kannst du dir hier zufällige Katzenbilder anschauen
                        </p>
                        <img src={randomCat} alt="Absolut süße Katze, alle Katzen sind süß" className="h-80 block" />
                        <button
                          onClick={async () => {
                            if (catIsLoading) return;
                            setCatIsLoading(true);
                            const newCat = await getNewRandomCat();
                            setRandomCat(newCat);
                            setCatIsLoading(false);
                          }}
                          className="p-2 mt-4 inline-block text-base sm:text-xl hover:text-gray-300 transition duration-150 ease-in-out border-2 border-opacity-50 border-gray-400 focus:outline-none focus:border-opacity-100"
                        >
                          NEUE KATZE BITTE!!!
                        </button>
                        <p className="text-base sm:text-xl mt-2">Liebe Grüße aus dem Dorfe ❤</p>
                      </div>
                    )}
                  </div>
                </Container>
                <svg
                  viewBox="0 0 1695 563"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 fill-current text-black-500 bg-black-300"
                >
                  <path
                    d="M603.6 456C869 387.4 1019 248.1 1242.5 155A3601.5 3601.5 0 0 1 1695 .2V563H0v-5c225.5-22.2 426.7-56.2 603.6-102z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Index;
