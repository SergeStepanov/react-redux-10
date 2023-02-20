import React from 'react';

function FormService({ item, hendleChange, hendleSubmit, children, ...props }) {
  return (
    <form onSubmit={hendleSubmit}>
      <input
        type='text'
        name='name'
        onChange={hendleChange}
        value={item.name}
        placeholder='Введите услугу'
        required
      />
      <input
        type='number'
        name='price'
        onChange={hendleChange}
        value={item.price}
        placeholder='Введите стоимость'
        required
      />

      <button type='submit'>Save</button>
      {children}
    </form>
  );
}

export default FormService;
