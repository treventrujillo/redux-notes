import React from 'react';
import { connect } from 'react-redux';

const FilterLink = ({ children, filter, dispatch }) => {
  if(children === filter) {
    return (
      <span>{children}</span>
    )
  } else {
    return (
      <a
        href={`#${children}`}
        onClick={ () => dispatch({ type: 'SET_FILTER', filter: children })
    }
     >
      {children}
    </a>
    )
  }
}

const mapStateToProps = (state) => {
  return { filter: state.filter }
}

export default connect(mapStateToProps)(FilterLink);