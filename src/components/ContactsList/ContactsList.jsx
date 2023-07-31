import { FiUserMinus } from 'react-icons/fi';
import {
  List,
  Item,
  ItemWrapper,
  DeleteButton,
  NameSpan,
  NumberSpan,
} from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';
import { useEffect } from 'react';

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
        )
      : [];
  };

  const filteredContacts = getFilteredContacts();

  return (
    !!filteredContacts.length && (
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <ItemWrapper>
              <NameSpan>{name}:</NameSpan> <NumberSpan>{phone}</NumberSpan>
            </ItemWrapper>
            <DeleteButton
              type="button"
              onClick={() => handleDeleteContact(id)}
              aria-label="Delete contact"
            >
              <FiUserMinus />
            </DeleteButton>
          </Item>
        ))}
      </List>
    )
  );
};

export { ContactsList };
