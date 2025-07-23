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
      <section className="md:col-start-3 col-span-8 p-4 shadow-xl rounded-sm">{children}</section>
    </GridLayout>
  );
};
