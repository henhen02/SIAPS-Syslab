import React from "react";

export const LoadingPage = () => {
  return (
    <main className="handling-page">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};

export const ErrorPage = () => {
  return (
    <main className="handling-page">
      <p
        style={{
          margin: "auto",
          color: "rgb(38, 37, 103)",
          fontWeight: 600,
        }}
      >
        Error 404 | Halaman tidak ditemukan
      </p>
    </main>
  );
};
