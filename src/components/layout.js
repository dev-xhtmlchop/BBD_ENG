import React from 'react';
import { Helmet } from 'react-helmet';
 
 
 
const Layout = ({ children, pageTitle, pageDescription  }) => (
   
  <React.Fragment>
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Helmet>
     
    <React.Fragment>
      {children}
    </React.Fragment>
   
  </React.Fragment>
);

export default Layout;