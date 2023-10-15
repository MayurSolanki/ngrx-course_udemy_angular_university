import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './reducers';


export const selectAuthState =
    createFeatureSelector<AuthState>("auth");


 //
export const isLoggedIn = createSelector(
    selectAuthState,   //same as state => state['auth'] , it select auth state
    auth =>  !!auth.user

);


export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn
);
