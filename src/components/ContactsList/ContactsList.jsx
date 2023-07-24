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
import { deleteContact } from 'redux/contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(state => state.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onDeleteContact = id => {
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
        {filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <ItemWrapper>
              <NameSpan>{name}:</NameSpan> <NumberSpan>{number}</NumberSpan>
            </ItemWrapper>
            <DeleteButton
              type="button"
              onClick={() => onDeleteContact(id)}
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
