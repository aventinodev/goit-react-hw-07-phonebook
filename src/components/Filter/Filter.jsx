import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { fetchAllContacts } from 'redux/contacts/contacts-operations';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const onSetFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" value={filter} onChange={onSetFilter} />
    </Label>
  );
};

export default Filter;
