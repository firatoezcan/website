import { ReactNode, FunctionComponent } from "react";

type Props = {
  children?: ReactNode;
};

const Container: FunctionComponent<Props> = ({ children }) => {
  return <div className="container mx-auto px-5 relative z-10">{children}</div>;
};

export default Container;
