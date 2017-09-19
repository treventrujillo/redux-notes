import React from 'react';
import { connect } from 'react-redux';
import { toggleNote } from '../actions/notes';

const styles ={
  complete: { textDecoration: 'line-through', color: 'black' },
  note: { cursor: 'pointer' }
}

const Note = ({ id, name, complete, dispatch }) => (
  <li
    onClick={ () => dispatch(toggleNote(id)) }
    style={complete ? {...styles.complete, ...styles.note} : styles.note }
  >
    {name}
  </li>
)

export default connect()(Note);