fetch('https://trending-searches.wb.ru/api?itemsPerPage=150&offset=0&period=month&query=&sort=desc')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.data.list);
  });
