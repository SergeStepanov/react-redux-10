import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormService from './FormService';
import {
  addService,
  resetServiceField,
  changeServiceField,
} from './redux/actions/actionCreators';

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();
  
  const hendleChange = ({ target }) => {
    const { name, value } = target;

    dispatch(changeServiceField(name, value));
  };

  const hendleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(addService(item.name, item.price));
    dispatch(resetServiceField());
  };

  return (
    <FormService
      item={item}
      hendleSubmit={hendleSubmit}
      hendleChange={hendleChange}
    />
  );
}
