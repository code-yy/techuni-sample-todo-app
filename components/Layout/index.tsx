import { FC, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

type Props = {
  children: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] grid-cols-[100%] min-h-screen">
      <Header />
      <main className="px-96">{children}</main>
      <Footer />
    </div>
  );
};
