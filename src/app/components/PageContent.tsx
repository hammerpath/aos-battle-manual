import { ReactNode } from "react";

export interface PageContentProps {
  children: ReactNode;
}

const PageContent: React.FC<PageContentProps> = function ({ children }) {
  return <div className="flex flex-1 p-4">{children}</div>;
};

export default PageContent;
