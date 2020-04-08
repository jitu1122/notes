import {Component, OnDestroy, OnInit} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import {ADD_NOTES, DELETE_NOTES, EDIT_NOTE, SEARCH_NOTE} from '../actions/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @select() notes;
  @select() editIndex;
  toDelete = null;
  searchText = '';
  isCollapsed = false;
  constructor(private ngRedux: NgRedux<any>) {
    this.notes.subscribe((t) => {
      localStorage.setItem('notes', JSON.stringify(t));
      t.map((x, i) => {
        if (i === x.length) {
          this.ngRedux.dispatch({type: EDIT_NOTE, editIndex: x});
        }
      });
    });
    this.editIndex.subscribe((t) => {
      this.toDelete = t;
    });
  }

  ngOnInit() {
  }
  onNewClick() {
    this.ngRedux.dispatch({type: ADD_NOTES, note: {
        id: null,
        note_text: 'New Note!',
        timestamp: new Date()
      } });
  }
  onDeleteClick() {
    this.ngRedux.dispatch({type: DELETE_NOTES, id: this.toDelete.id });
  }
  searchNote() {
    this.ngRedux.dispatch({type: SEARCH_NOTE, searchText: this.searchText });
  }
  ngOnDestroy() {
  }
}
