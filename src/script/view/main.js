/* eslint-disable no-use-before-define */
import '../component/menu-list';
import '../component/search-bar';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const menuListElement = document.querySelector('menu-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchMenu(searchElement.value);
      renderResult(result);
    } catch (message) {
      // eslint-disable-next-line no-use-before-define
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    menuListElement.menus = results;
  };

  const fallbackResult = (message) => {
    menuListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
