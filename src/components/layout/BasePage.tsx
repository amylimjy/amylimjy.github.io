import React from "react";
import { GridLayout } from "@/components/layout/GridLayout";

export const BasePage = ({
  children,
}: React.ComponentPropsWithoutRef<"div">): React.JSX.Element => {
  return (
    <GridLayout
      id="page__content"
      className={"flex-1 pt-14"}
    >
      <section className="md:col-start-2 col-span-10 p-4 shadow-2xl rounded-sm">{children}</section>
    </GridLayout>
  );
};
