export interface INotes {
    id: number;
    note_text: string;
    timestamp: Date;
}
export interface InitialState {
    notes: INotes[];
    editIndex: INotes;
    createNew: boolean;
    searchText: string;
}
let fromLocalStore = JSON.parse(localStorage.getItem('notes'));
if (fromLocalStore && fromLocalStore.length > 0) {
    fromLocalStore.map((t) => {
        t.timestamp = new Date(t.timestamp);
    });
} else {
    fromLocalStore = [];
}
export const INITIAL_STATE: InitialState = {
    notes: fromLocalStore,
    editIndex: {
        id: null,
        note_text: '',
        timestamp: new Date()
    },
    createNew: true,
    searchText: ''
};
