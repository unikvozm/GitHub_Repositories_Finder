import React, { FunctionComponent } from "react";

interface OwnProps {
  addClass?: string;
  label: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
}

export const Select: FunctionComponent<OwnProps> = ({
  addClass,
  label,
  id,
  onChange,
  defaultValue,
  children
}) => {
  return (
    <div className={`form-group mx-sm-3 mb-2 ${addClass}`}>
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="form-control"
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {children}
      </select>
    </div>
  );
};
