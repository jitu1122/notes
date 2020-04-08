import {Component, OnInit} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {EDIT_NOTE} from '../actions/constants';
import {InitialState} from '../reducers/reducers.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @select() notes;
  @select() editIndex;
  @select() searchText;
  isCollapsed = false;
  searchTextObs = '';
  id = null;

  constructor(private ngRedux: NgRedux<InitialState>) {
    this.editIndex.subscribe((t) => {
      this.id = t.id;
    });
    this.searchText.subscribe((t) => {
      this.searchTextObs = t;
    });
  }

  ngOnInit() {
  }

  onMenuItemClick(index) {
    this.ngRedux.dispatch({type: EDIT_NOTE, editIndex: index});
  }
}
