import React from 'react'


const NotFound = (props) => {
  const { staticContext } = props
  staticContext && (staticContext.NOT_FOUND = true)

  return <div>404, sorry!</div>;
};
export default NotFound