const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.notes
    case 'ADD_NOTE':
      return [action.note, ...state];
    case 'TOGGLE_TODO':
      return state.map( note => {
        if (note.id === action.id)
          return {...note, complete: !note.complete}
        return note
      })
    default:
      return state 
  }
}

export default notes;