import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FormService from './FormService';
import {
  replaceService,
} from './redux/actions/actionCreators';

export default function ServiceEdit() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const { name: serviceName, price: servicePrice } = useSelector((state) =>
    state.serviceList.find((o) => o.id === id)
  );

  const [item, setItem] = useState({ name: '', price: '' });

  useEffect(() => {
    setItem({ name: serviceName, price: servicePrice });
  }, [serviceName, servicePrice]);

  const hendleChange = ({ target }) => {
    const { name, value } = target;

    setItem((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  };

  const hendleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(replaceService(id, item.name, item.price));
  };

  return (
    <FormService
      item={item}
      hendleSubmit={hendleSubmit}
      hendleChange={hendleChange}>
      <Link to='/'>Cancel</Link>
    </FormService>
  );
}
