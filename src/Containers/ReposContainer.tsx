import React from "react";
import { CardType } from "../types/RepoTypes";
import { Repo } from "../Components/Repo";
import { useSelector } from "react-redux";
import { ReduxState } from "../types/StateInterfaces";
import { Alert } from "../Components/common/Alert";

const Repos = () => {
  const repos = useSelector((state: ReduxState) => state.repos.repos);
  const alert = useSelector((state: ReduxState) => state.app.alert);

  if (!repos.length) {
    return (
      <>
        <p className="text-center">There is no repository</p>
        {alert && <Alert text={alert} />}
      </>
    );
  }

  return (
    <div className="container">
      <div className="card-group" style={{ justifyContent: "center" }}>
        {repos.map((repo: CardType, ind: number) => {
          return (
            <React.Fragment key={repo.id}>
              {ind % 2 === 0 ? (
                <div className="w-100 d-none d-sm-block d-md-none" />
              ) : null}
              {ind % 3 === 0 ? (
                <div className="w-100 d-none d-md-block d-lg-none" />
              ) : null}
              {ind % 4 === 0 ? (
                <div className="w-100 d-none d-lg-block d-xl-none" />
              ) : null}
              {ind % 5 === 0 ? (
                <div className="w-100 d-none d-xl-block" />
              ) : null}
              <Repo {...repo} key={repo.id} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Repos;
