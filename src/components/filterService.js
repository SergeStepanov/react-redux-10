export const filterService = (filterText, filterArr, funcSetArr) => {
  if (!filterText) return funcSetArr(filterArr);

  return funcSetArr(
    filterArr.filter(({ name }) =>
      name.toLowerCase().includes(filterText.toLowerCase())
    )
  );
};
