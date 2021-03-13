import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const Page = React.forwardRef(({ children, title, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Page.defaultProps = {
  title: '',
};

Page.displayName = 'Page';

export default Page;
