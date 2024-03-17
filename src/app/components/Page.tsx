import { ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
}

export const Page: React.FC<PageProps> = function ({ children }) {
  return <div className="flex size-full flex-col p-4">{children}</div>;
};
