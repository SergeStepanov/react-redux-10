import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { removeService } from './redux/actions/actionCreators';

export default function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hendleRemove = (id) => {
    dispatch(removeService(id));
    
    navigate('/', { replace: true });
  };

  return (
    <ul>
      {items.map((item) => (
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
  );
}
