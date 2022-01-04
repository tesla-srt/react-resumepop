import React from "react";

/** export default function Section({ title, subtitle, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
} 

          <!--<img
            src="https://cdn.glitch.me/dad08474-c765-4bb4-a862-08c6e5f18652/resumepop.plain.svg?v=1640418278298"
            className="nav-logo"
            id="logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />-->


**/

type Props = {
  id: string;
  dark: boolean;
  children: React.ReactNode;
} & React.HTMLProps<HTMLButtonElement>;

export const Section = ({ id, children, dark, ...rest }: Props) => {

  return (
    <section {...rest} >
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          {children}
        </div>
      </div>
    </section>
  );
};