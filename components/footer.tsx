import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-6 bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex justify-between">
          <p className="">© 2020 Firat Özcan</p>
          <Link href="/imprint">
            <a className="hover:underline">Imprint</a>
          </Link>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
