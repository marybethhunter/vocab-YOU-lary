import domBuilder from './domBuilder';
import navBar from './navBar';
import logoutButton from './logoutButton';
import navigationEvents from './events/navigationEvents';
import { getAllVocabTerms } from '../helpers/data/vocabCardsData';
import showVocabCards from './showVocabCards';
import filterButtons from './filterButtons';
import { domClickEvents, domSubmitEvents } from './events/domEvents';
import sortDropdown from './sortDropdown';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  filterButtons();
  sortDropdown();
  navigationEvents(user.uid);
  domSubmitEvents(user.uid);
  domClickEvents(user.uid);
  getAllVocabTerms(user.uid).then((words) => showVocabCards(words));
};

export default startApp;
