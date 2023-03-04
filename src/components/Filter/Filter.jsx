import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Label, Input } from './Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
