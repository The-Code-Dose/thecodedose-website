import React from "react";

const withPadding = (WrappedComponent, id, classes = "") => {
  return (props) => (
    <div className={`px-5 py-14 md:px-10 md:py-24 2xl:px-5 ${classes}`} id={id}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withPadding;
