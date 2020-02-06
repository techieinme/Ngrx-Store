import { Component, OnInit } from '@angular/core';


import { Store } from "@ngrx/store"; //store
import { appState } from "../store/app.state"; //appstate
import { Tutorial } from "../store/model/model"; //model
import * as TutorialActions from "../store/actions/actions";// actions
import { Observable } from "rxjs"; // obserable


@Component({
  selector: "app-write",
  templateUrl: "./write.component.html",
  styleUrls: ["./write.component.css"]
})
export class WriteComponent implements OnInit {
  constructor(private store: Store<appState>) {}

  ngOnInit() {}

  addTutorial(name, url) {
    this.store.dispatch(new TutorialActions.AddTutorial({name:name,url:url}))
  }


}
