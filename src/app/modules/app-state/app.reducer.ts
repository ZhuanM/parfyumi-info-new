import { Action, createReducer, on } from '@ngrx/store';
import { GetFragrancesSuccess } from './actions';
import { IAppState } from './interfaces';

const initalAppState: IAppState = {
    allFragrances: []
}

const appReducer = createReducer(
    initalAppState,
    on(GetFragrancesSuccess, (state, action) => {
        return {
            ...state,
            allFragrances: action.payload
        }
    })
)

export function reducer(state: IAppState | undefined, action: Action) {
    return appReducer(state, action);
}
