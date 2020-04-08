import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';


import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HomeComponent } from './home/home.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import rootReducer from './reducers/store';
import { EditorComponent } from './editor/editor.component';
import {INITIAL_STATE, InitialState} from './reducers/reducers.model';
import {SearchPipe} from './util/pipes';

registerLocaleData(en);

@NgModule({
  declarations: [
    HomeComponent,
    SideNavComponent,
    EditorComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgReduxModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [HomeComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<InitialState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
