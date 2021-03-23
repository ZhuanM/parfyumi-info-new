import { createSelector } from '@ngrx/store';
import { IAppState } from './interfaces';

export interface AppState {
    appState: IAppState
}

export const appState = (state: AppState) => state.appState;

export const getAllFragrances = createSelector(
    appState,
    (state: IAppState) => {
        return state?.allFragrances;
    }
)