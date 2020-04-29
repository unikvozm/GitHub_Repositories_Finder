import React, { FunctionComponent } from "react";

interface OwnProps {
  type: "button" | "submit" | "reset";
  addClass?: string;
  disabled?: boolean;
}

export const Button: FunctionComponent<OwnProps> = ({
  type,
  children,
  addClass,
  disabled
}) => (
  <button
    type={type}
    className={`btn btn-outline-primary btn-block ${addClass}`}
    disabled={disabled}
  >
    {children}
  </button>
);
