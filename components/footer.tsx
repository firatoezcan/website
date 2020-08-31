import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 font-medium text-md">
      <Container>
        <div className="flex justify-between">
          <p className="">© 2020 Firat Özcan</p>
          <div className="flex flex-wrap justify-end -mx-3">
            <div className="px-3">
              <Link href="/privacy">
                <a className="hover:text-gray-300 transition duration-150 ease-in-out">Datenschutzerklärung</a>
              </Link>
            </div>
            <div className="px-3">
              <Link href="/imprint">
                <a className="hover:text-gray-300 transition duration-150 ease-in-out">Impressum</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
