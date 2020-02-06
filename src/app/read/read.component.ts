import { Component, OnInit } from '@angular/core';
import { interval, pipe,observable, Observable } from 'rxjs';

import { Store } from "@ngrx/store";

import { Tutorial } from "../store/model/model";
import { appState } from '../store/app.state';

import * as TurorialActions from "../store/actions/actions";

@Component({
  selector: "app-read",
  templateUrl: "./read.component.html",
  styleUrls: ["./read.component.css"]
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<appState>) {
    this.tutorials = this.store.select("turorial");
  }

  delTutorial(index:number){
     this.store.dispatch(new TurorialActions.RemoveTutorial(index));
  }
  ngOnInit() {}
}
