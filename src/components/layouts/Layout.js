import React from "react";
import Footer from "./parts/Footer";
import Header from "./parts/Header";

function Layout({ children, loading }) {
  return (
    <>
      <div className="px-5 mx-auto sm:px-24 max-w-6xl bg-romance ">
        <Header loading={loading} />
        <main className="">{children}</main>
        <Footer loading={loading} />
      </div>
    </>
  );
}

export default Layout;
