import React, { useEffect, useState } from "react";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import Preloader from "./parts/Preloader";

function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  // hide preloader after
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading && <Preloader />}
      <div className="px-5 mx-auto sm:px-24 max-w-6xl bg-romance ">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
