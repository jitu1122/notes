import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {InitialState, INotes} from '../reducers/reducers.model';
import {ADD_NOTES} from '../actions/constants';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, OnChanges {
  @select() notes;
  @select() editIndex;

  noteDataCurrent = {} as INotes;

  constructor(private ngRedux: NgRedux<InitialState>) {
    this.editIndex.subscribe((t) => {
      this.noteDataCurrent = t;
    });
  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  onTextChange() {
    this.noteDataCurrent.timestamp = new Date();
    this.ngRedux.dispatch({type: ADD_NOTES, note: this.noteDataCurrent});
    // this.noted_data.push(this.noteDataCurrent);
    // localStorage.setItem('note',JSON.stringify(this.noted_data));
  }

}
