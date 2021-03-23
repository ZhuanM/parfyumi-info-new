import { createAction, props } from '@ngrx/store';
import { Fragrance } from '../common/models/fragrance/fragrance';

export enum ParfyumiInnerActionTypes {
    GetFragrancesSuccess = "[App] Get Fragrances Success"
}

export enum ParfyumiHttpActionTypes {
    GetFragrances = "[App] Get Fragrances",
}

//HTTP
export const GetFragrances = createAction(ParfyumiHttpActionTypes.GetFragrances);

//DATA
export const GetFragrancesSuccess = createAction(ParfyumiInnerActionTypes.GetFragrancesSuccess, props<{ payload: Array<Fragrance> }>());