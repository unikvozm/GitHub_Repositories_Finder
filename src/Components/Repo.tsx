import React from "react";
import { CardType } from "../types/RepoTypes";

export const Repo = (props: CardType) => {
  const {
    name,
    fullName,
    authorLogin,
    url,
    license,
    created_at,
    stars,
    language
  } = props;
  return (
    <div
      className="card mb-4"
      style={{ maxWidth: "223px", margin: "0 auto", border: "2px solid gray" }}
    >
      <div className="card-header">★ {stars} </div>
      <div className="card-body">
        <h5 className="card-title">
          <a href={url} target="blank">
            {name}
          </a>
        </h5>
        <p className="card-text">{fullName}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" key={authorLogin}>
          Author: {authorLogin}
        </li>
        <li className="list-group-item" key={language}>
          {language}
        </li>
        <li className="list-group-item" key={license}>
          License: {license}
        </li>
        <li className="list-group-item" key={created_at}>
          Created at: {created_at}
        </li>
      </ul>
    </div>
  );
};
