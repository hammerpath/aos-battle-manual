import { ReactNode } from "react";

export interface BoxedLinkProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const BoxedLink: React.FC<BoxedLinkProps> = function ({
  children,
  onClick,
}) {
  return (
    <a href="#" onClick={onClick} className="border border-black p-4">
      {children}
    </a>
  );
};

export default BoxedLink;
