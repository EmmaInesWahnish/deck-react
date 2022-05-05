import React, { useState, useEffect } from 'react';

const UseApi = () => {
  const [items, setItems] = useState([{}]);
  const [bool, setBoolean] = useState(true);

  useEffect(() => {
    const url='https://api.mercadolibre.com/sites/MLA/search?q=mampara&limit=10';
    fetch(url)
      .then((response) => response.json())
      .then((json) => setItems(() => json.results))
      .catch((err) => console.log(err))
      .finally(() => setBoolean(() => false));
  }, []);

  if (bool) {
    return (
      <div>
        <h1>"Loading ..."</h1>
      </div>
    );
  } else {
    return (
      <div className="flex-container-card py-10">
        <div className="flex-container-card">
          {items.map((item) => {
            return (
              <ul>
                <li key={item.id}>
                  <div>
                    <img src={item.thumbnail} />
                  </div>
                  <div>{item.id}</div>
                  {item.permalink}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }
};

export default UseApi;
