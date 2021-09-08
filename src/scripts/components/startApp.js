import domBuilder from './domBuilder';
import navBar from './navBar';
import logoutButton from './logoutButton';
import navigationEvents from './events/navigationEvents';
import getAllVocabTerms from '../helpers/data/vocabCardsData';
import showVocabCards from './showVocabCards';
import filterButtons from './filterButtons';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  filterButtons();
  navigationEvents();
  getAllVocabTerms().then((words) => showVocabCards(words));
};

export default startApp;
