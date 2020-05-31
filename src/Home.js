import React, { useEffect } from 'react'
import { Element, scroller } from 'react-scroll';
import data from './data';
import './styles.css';

const Home = ({ history }) => {
  useEffect(() => {
    const id = localStorage.getItem('itemScroll');
    if (id) {
      const scrollType = {
        duration: 500,
        delay: 50,
        smooth: true, // linear “easeInQuint” “easeOutCubic”
        offset: -20 //Corrimiento con respecto al elemento destino
      };
      scroller.scrollTo(id.toString(), scrollType);
      localStorage.removeItem('itemScroll');
    }
  }, [])

  const handleClick = (idx) => {
    history.push(`/details/${idx}`);
    localStorage.setItem('itemScroll', idx);
  }

  return (
    <div className='container'>
      <span>Lista</span>
      {data.map((item, idx) => (
        <Element key={idx} name={idx.toString()} className='row' onClick={() => handleClick(idx)}>
          <p>{item.nombre}</p>
        </Element>
      ))}
    </div>
  )
}

export default Home;
