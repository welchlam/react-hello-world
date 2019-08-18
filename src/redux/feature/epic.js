import { Actions as FeatureActions } from './actions';
import { addUser } from "../user/actions";
import {delay, filter, mapTo} from 'rxjs/operators';
import {ofType} from "redux-observable";

export const addUserEpic = action$ => action$.pipe(
    ofType(FeatureActions.ADD_FEATURE),
    delay(1000),
    mapTo(addUser('user A'))
);

/*export const addUserEpic = action$ => action$.pipe(
    filter(action => action.type === FeatureActions.ADD_FEATURE),
    mapTo(action => {
        const {payload: {id}} = action;
        const user = 'user ' + id;
        const nextAction = addUser(user);
        console.log(nextAction);
        return [nextAction];
    })
);*/

/*export const addUserEpic = action$ => action$.pipe(
    filter(action => action.type === FeatureActions.ADD_FEATURE),
    mapTo(addUser('user A'))
);*/


/*export const addUserEpic = action$ => action$.pipe(
    filter(action => action.type === FeatureActions.ADD_FEATURE),
    mapTo({
        type: 'ADD_USER',
        payload: {
            user: 'user A'
        }
    })
);
}*/
