import React from 'react';
import Header from "./common/Header";

const Layout = ({children}) => {
  return (
      <>
        <Header/>
        <div className="container">
          {children}
        </div>
      </>
  );
};

export default Layout;