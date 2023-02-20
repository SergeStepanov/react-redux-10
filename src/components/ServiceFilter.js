import React from 'react';

function ServiceFilter({ filterService, filter, setFilter, ...props }) {
  const hendleChange = ({ target }) => {
    const { value } = target;
    setFilter(value);
  };

  return (
    <div className='my-2'>
      <input
        type='text'
        name='filter'
        value={filter}
        placeholder='Фильтр услуг'
        autoComplete='off'
        onChange={hendleChange}
      />
    </div>
  );
}

export default ServiceFilter;
