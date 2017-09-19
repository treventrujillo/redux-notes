import React from 'react';
import { connect } from 'react-redux';
import Note from './Note';

const viewable = (notes, currentFilter) => {
  switch (currentFilter) {
    case 'All':
      return notes;
    case 'Active':
      return notes.filter( t => !t.complete )
    case 'Completed':
      return notes.filter( t => t.complete )
  }
}

const NoteList = ({ notes, filter }) => (
  <ul>
    { viewable(notes, filter).map ( n => <Note key={n.id} {...n} /> ) }
  </ul>
)

const mapStateToProps = (state) => {
  return { notes: state.notes, filter: state.filter }
}

export default connect(mapStateToProps)(NoteList);