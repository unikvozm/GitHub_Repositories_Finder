import React, { FormEvent, useState, ChangeEvent } from "react";
import { useSelector } from "react-redux";

import { LicenseType } from "../types/LicenseType";
import { ReduxState } from "../types/StateInterfaces";
import Spinner from "../Components/common/spinner";
import { Form } from "../Components/Form";

interface OwnProps {
  sendFormData: (search: string, licence: LicenseType) => void;
}

export default function ReposSearchFormContainer(props: OwnProps) {
  const { sendFormData } = props;
  const loading = useSelector((state: ReduxState) => state.app.loading);

  const [search, setSearch] = useState("");
  const [license, setLicense] = useState(null);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // @ts-ignore
    sendFormData(search, license);
    setSearch("");
    setLicense(null);
  };

  const licenseChangeHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.persist();
    setLicense(LicenseType[e.target.value]);
  };

  const renderOptions = () => {
    return [
      <option key="choose">Choose...</option>,
      // @ts-ignore
      ...Object.keys(LicenseType).map((key: LicenseType) => (
        <option key={LicenseType[key]} selected={license === LicenseType[key]}>{key}</option>
      ))
    ];
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setSearch(e.target.value);
  };

  return (
    <Form
      submitForm={submitForm}
      handleInputChange={handleSearchChange}
      inputValue={search}
      inptLabel="Search"
      inptId="search-input"
      selectLabel="License Type"
      selectId="licence-input"
      handleSelectChange={licenseChangeHandle}
      defaultSelectValue="Choose..."
      renderSelectOptions={renderOptions}
      btnType="submit"
      isBtnDisabled={loading}
      btnValue={
        loading ? (
          <>
            <Spinner />
            Loading...
          </>
        ) : (
          "Load"
        )
      }
    />
  );
}
