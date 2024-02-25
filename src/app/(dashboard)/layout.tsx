import { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  //   cosnt;

  return <div>{children}</div>;
};

export default Layout;
// 2.21;
