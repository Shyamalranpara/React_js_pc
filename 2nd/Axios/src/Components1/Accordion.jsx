import React, { useEffect, useState } from 'react';
import faq from '../API/faq';
import { FAQ } from './FAQ';

const Accordion = () => {
  const [data, setData] = useState([]);
  const [active, setActiveId] = useState(false);

  const handlebtn = (id) => {
    setActiveId((prev) => (prev === id ? false : id));
  };

  useEffect(() => {
    setData(faq);
  }, []);

  return (
    <div>
      <h1>The Accordion</h1>
      <ul>
        {data.map((el) => (
          <FAQ
            key={el.id}
            el={el}
            isactive={active === el.id}
            onToggle={() => handlebtn(el.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
