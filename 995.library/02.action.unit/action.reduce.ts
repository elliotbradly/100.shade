import * as clone from "clone-deep";
import * as Act from "./action.action";
import { ActionModel } from "./action.model";
import * as Buzz from "./action.buzzer";
import State from "../99.core/state";

export function reducer(model: ActionModel = new ActionModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_ACTION:
 return Buzz.updateAction(clone(model), act.bale, state);

 case Act.INIT_ACTION:
 return Buzz.initAction(clone(model), act.bale, state);

 default:
 return model;
 }
}
