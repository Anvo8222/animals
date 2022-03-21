import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const makeSelectGlobal = () => createSelector(selectGlobal, state => state);

const makeSelectTurn = () => createSelector(selectGlobal, state => state.turn);

const makeAnimalIndex = () =>
  createSelector(selectGlobal, state => state.animalIndex);
export { makeSelectGlobal, makeSelectTurn, makeAnimalIndex };
