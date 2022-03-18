import React, { useEffect, useState } from "react";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import Preloader from "./parts/Preloader";

function Layout({ children }) {
  const [loading, setLoading] = useState(true);

  // hide preloader after 1.5s
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <>
      {loading && <Preloader />}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
