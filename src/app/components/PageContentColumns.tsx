import AccordionHeader from "./AccordionHeader";

export interface PageContentColumnsProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

const PageContentColumns: React.FC<PageContentColumnsProps> = function ({
  children,
  header,
}) {
  return (
    <>
      <AccordionHeader>{header}</AccordionHeader>
      <div className="flex flex-col py-4">{children}</div>
    </>
  );
};

export default PageContentColumns;
