import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";

import Repos from "../Containers/ReposContainer";
import { ReduxState, FormState } from "../types/StateInterfaces";
import { LicenseType } from "../types/LicenseType";
import {
  updateLicense,
  updateSearch,
  updatePage,
  updatePerPage
} from "../redux/actions/formActions";
import { fetchRepos } from "../redux/actions/reposActions";
import PaginationAndShowContainer from "../Containers/PaginationAndShowContainer";
import ReposSearchFormContainer from "../Containers/ReposSearchFormContainer";

const mapStateToProps = (state: ReduxState) => {
  return state.form;
};

const mapDispatchToProps = {
  fetchRepos,
  updateLicense,
  updateSearch,
  updatePage,
  updatePerPage
};

interface mapDispatchToPropsInterface {
  fetchRepos: (frmdetails: FormState) => void;
  updateLicense: (license: LicenseType) => void;
  updatePage: (page: number) => void;
  updateSearch: (search: string) => void;
  updatePerPage: (per_page: number) => void;
}

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & mapDispatchToPropsInterface;

const SearchReposPage = (props: Props) => {
  const { page, per_page, search, license, items_count } = props;

  const frmdetails = {
    search,
    license,
    page,
    per_page
  };

  const fetchingRepos = () => {
    props.fetchRepos(frmdetails);
  };

  useEffect(fetchingRepos, []);

  const submitForm = (newSearch: string, newLicense: LicenseType) => {
    if (newLicense !== license) {
      props.updateLicense(newLicense);
      frmdetails.license = newLicense;
    }
    if (newSearch !== search) {
      props.updateSearch(newSearch);
      frmdetails.search = newSearch;
    }
    frmdetails.page = 1;
    props.updatePage(1);
    fetchingRepos();
  };

  const sendPage = (newPage: number) => {
    if (page !== newPage) {
      props.updatePage(newPage);
      frmdetails.page = newPage;

      if (items_count) {
        fetchingRepos();
      }
    }
  };

  const updatePer_page = (newPer_page: number) => {
    if (per_page !== newPer_page) {
      props.updatePerPage(newPer_page);
      frmdetails.per_page = newPer_page;

      if (items_count) {
        frmdetails.page = 1;
        props.updatePage(1);
        fetchingRepos();
      }
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Top Github JS Repositories</h1>
      <ReposSearchFormContainer sendFormData={submitForm} />
      <br />
      <PaginationAndShowContainer
        sendPer_page={updatePer_page}
        sendPage={sendPage}
      />
      <Repos />
    </div>
  );
};

export default connector(SearchReposPage);
