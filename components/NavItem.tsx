import Link, { LinkProps } from "next/link";
import { FunctionComponent } from "react";

export const NavItem: FunctionComponent<LinkProps> = (props) => {
  return (
    <Link {...props}>
      <a className="ml-8 font-medium text-lg hover:text-gray-300 transition duration-150 ease-in-out">{props.children}</a>
    </Link>
  );
};
