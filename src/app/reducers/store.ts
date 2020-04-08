import {ADD_NOTES, DELETE_NOTES, EDIT_NOTE, SEARCH_NOTE} from '../actions/constants';
import {InitialState} from './reducers.model';

export default function rootReducer(state: InitialState, action): InitialState {
    switch (action.type) {
        case ADD_NOTES:
            if (!action.note.id) {
                const notes = [];
                action.note.id = new Date().getTime();
                notes.push(action.note);
                state.notes.map((x) => {
                    notes.push(x);
                });
                state.editIndex = action.note;
                state.searchText = '';
                return Object.assign({}, state, {
                    notes
                });
            } else {
                return Object.assign({}, state, {
                    notes: state.notes.concat([])
                });
            }
        case EDIT_NOTE:
            return Object.assign({}, state, {
                editIndex: action.editIndex
            });
        case DELETE_NOTES:
            state.editIndex = {
                id: null,
                note_text: '',
                timestamp: new Date()
            };
            state.searchText = '';
            return Object.assign({}, state, {
                notes: state.notes.filter(t => t.id !== action.id),
            });
        case SEARCH_NOTE:
            return Object.assign({}, state, {
                searchText: action.searchText,
            });
    }
    return state;
}
