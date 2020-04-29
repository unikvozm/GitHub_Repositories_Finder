import React from "react";

export const Alert = ({ text }: { text: string }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {text}
    </div>
  );
};
