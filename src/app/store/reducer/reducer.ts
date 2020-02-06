import { Action } from "@ngrx/store";
import { Tutorial } from "../model/model";
import * as TutorialActions from "../actions/actions";


const initialState: Tutorial = {
  name: "Initial Tutorial",
  url: "http: //google.com"
};


export function reducer( state:Tutorial[]= [initialState],action:TutorialActions.Actions){
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
          return [...state,action.payload];
      break;
    case TutorialActions.REMOVE_TUTORIAL:
          state.splice(action.payload,1);
          return state;

    default:
      return state;
  }
}
