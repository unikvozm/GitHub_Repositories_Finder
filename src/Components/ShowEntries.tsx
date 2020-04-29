import React from "react";
import { Select } from "./common/select";

interface OwnProps {
  id: string;
  handlePer_pageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const ShowEntries = (props: OwnProps) => {
  const { id, handlePer_pageChange } = props;

  const renderPer_pageOptions = () => {
    const options = [10, 30, 50, 100];
    return options.map((key: number) => <option key={key}>{key}</option>);
  };

  return (
    <Select
      addClass="form-inline"
      label="Show: "
      id={id}
      defaultValue="30"
      onChange={handlePer_pageChange}
    >
      {renderPer_pageOptions()}
    </Select>
  );
};
