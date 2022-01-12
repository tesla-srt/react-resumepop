import React from "react";

type Props = {
  id: string,
  dark: boolean,
  children: React.ReactNode,
} & React.HTMLProps<HTMLButtonElement>;

export const Section = ({ id, children, dark, ...rest }: Props) => {
  return (
    <section {...rest}>
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          {children}
        </div>
      </div>
    </section>
  );
};
