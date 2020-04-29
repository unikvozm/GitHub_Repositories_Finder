import React, { ChangeEvent } from "react";

interface OwnProps {
  label: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  id: string;
}

export const TextInput = (props: OwnProps) => {
  const { label, onChange, value, id } = props;

  return (
    <div className="form-group mx-sm-3 mb-2">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type="text"
        className="form-control"
        id={id}
        placeholder={label}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
