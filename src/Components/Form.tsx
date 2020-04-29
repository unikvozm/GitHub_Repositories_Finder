import React, { FormEvent, ChangeEvent, ReactFragment } from "react";
import { TextInput } from "./common/textInput";
import { Select } from "./common/select";
import { Button } from "./common/button";

interface OwnProps {
  submitForm: (e: FormEvent<HTMLFormElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  inptLabel: string;
  inptId: string;
  selectLabel: string;
  selectId: string;
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultSelectValue: string;
  renderSelectOptions: any;
  btnType: "button" | "submit" | "reset";
  isBtnDisabled: boolean;
  btnValue: ReactFragment | string;
}
export const Form = (props: OwnProps) => {
  const {
    submitForm,
    handleInputChange,
    inputValue,
    inptLabel,
    inptId,
    selectLabel,
    selectId,
    handleSelectChange,
    defaultSelectValue,
    renderSelectOptions,
    btnType,
    isBtnDisabled,
    btnValue
  } = props;

  return (
    <form onSubmit={submitForm}>
      <TextInput
        label={inptLabel}
        id={inptId}
        onChange={handleInputChange}
        value={inputValue}
      />

      <Select
        label={selectLabel}
        id={selectId}
        onChange={handleSelectChange}
        defaultValue={defaultSelectValue}
      >
        {renderSelectOptions()}
      </Select>

      <Button type={btnType} disabled={isBtnDisabled}>
        {btnValue}
      </Button>
    </form>
  );
};
