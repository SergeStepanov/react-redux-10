import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  REPLACE_SERVICE,
} from '../actions/actionTypes';

const initialState = [
  { id: nanoid(), name: 'Замена стекла', price: 21000 },
  { id: nanoid(), name: 'Замена дисплея', price: 25000 },
  { id: nanoid(), name: 'Замена аккумулятора', price: 4000 },
  { id: nanoid(), name: 'Замена микрофона', price: 2500 },
  { id: nanoid(), name: 'Ремонт стекла', price: 213000 },
  { id: nanoid(), name: 'Ремонт дисплея', price: 250030 },
  { id: nanoid(), name: 'Ремонт аккумулятора', price: 34000 },
  { id: nanoid(), name: 'Ремонт микрофона', price: 42500 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];

    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);

    case REPLACE_SERVICE:
      return (() => {
        const { id, name, price } = action.payload;
        const serviceIndex = state.findIndex((o) => o.id === id);
        const newState = [
          ...state.slice(0, serviceIndex),
          { id, name, price },
          ...state.slice(serviceIndex + 1),
        ];

        return newState;
      })();

    default:
      return state;
  }
}
