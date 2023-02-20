import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeService } from './redux/actions/actionCreators';
import ServiceFilter from './ServiceFilter';
import { filterService } from './filterService';

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newItems, setNewItems] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    filterService(filter.trim(), items, setNewItems);
  }, [filter, items]);

  const hendleRemove = (id) => {
    dispatch(removeService(id));

    navigate('/', { replace: true });
  };

  return (
    <>
      <ServiceFilter
        filterService={filterService}
        filter={filter}
        setFilter={setFilter}
      />

      <ul>
        {newItems.map((item) => (
          <li key={item.id}>
            {`${item.name} ==> ${item.price} |`}{' '}
            <Link to={`/${item.id}/edit`} className='btn' role='button'>
              {'✎'}
            </Link>
            <button
              className='btn-close'
              aria-label='Закрыть'
              onClick={() => hendleRemove(item.id)}></button>
          </li>
        ))}
      </ul>
    </>
  );
}
