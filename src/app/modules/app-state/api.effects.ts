import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { GetFragrances, GetFragrancesSuccess } from './actions';
import { switchMap } from 'rxjs/operators';
import { Fragrances } from 'src/app/utils/constants';
import { of } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class ApiEffects {

    constructor(private actions$: Actions) { }

    public getAllFragrances$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(GetFragrances),
            switchMap(() => {
                const allFragrances = Fragrances.fragrances;
                return of(GetFragrancesSuccess({ payload: allFragrances }));
            })
        )
    });
}