class DataSource {
  static searchMenu(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        const menus = responseJson.meals;
        if (menus) {
          return Promise.resolve(menus);
        }
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject(`${keyword} tidak ditemukan`);
      });
  }
}

export default DataSource;
