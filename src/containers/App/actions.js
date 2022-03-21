import {
  SET_TURN,
  REQUEST_DATA,
  INCREMENT_TURN,
  DECREMENT_TURN,
  SET_ANIMAL_INDEX,
} from './constants';

export const setTurn = turn => ({
  type: SET_TURN,
  turn,
});

export const incrementTurn = amount => ({
  type: INCREMENT_TURN,
  amount,
});

export const decrementTurn = (amount = 1) => ({
  type: DECREMENT_TURN,
  amount,
});

export const requestData = () => ({
  type: REQUEST_DATA,
});
export const setAnimalIndex = animalIndex => ({
  type: SET_ANIMAL_INDEX,
  animalIndex,
});
