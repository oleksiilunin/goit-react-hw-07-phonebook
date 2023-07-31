import { AppContainer } from './App.styled';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactsList } from 'components/ContactsList';
import { GlobalStyles } from 'components/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';
import Loader from 'components/Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Header headerTitle="Phonebook" />
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactsList />
      </Section>

      <GlobalStyles />
      <ToastContainer />
    </AppContainer>
  );
}

export default App;
