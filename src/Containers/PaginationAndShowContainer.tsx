import React from "react";
import Paging from "../Components/Paging";
import { useSelector } from "react-redux";
import { ReduxState } from "../types/StateInterfaces";
import { ShowEntries } from "../Components/ShowEntries";

interface OwnProps {
  sendPer_page: (per_page: number) => void;
  sendPage: (page: number) => void;
}

const PaginationAndShowContainer = (props: OwnProps) => {
  const { sendPage, sendPer_page } = props;

  const page = useSelector((state: ReduxState) => state.form.page);
  const per_page = useSelector((state: ReduxState) => state.form.per_page);
  const items_count = useSelector(
    (state: ReduxState) => state.form.items_count
  );

  const calculateNumberOfPages = () => Math.ceil(items_count / per_page);

  const handlePer_pageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.persist();
    sendPer_page(Number(e.target.value));
  };

  const onPageChange = (newPage: number) => {
    sendPage(newPage);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <Paging
        selectedPage={page}
        numberOfPages={calculateNumberOfPages()}
        onPageChange={onPageChange}
      />

      <ShowEntries
        id="per_page-input"
        handlePer_pageChange={handlePer_pageChange}
      />
    </div>
  );
};

export default PaginationAndShowContainer;
