import React from 'react';

const menu = ({ item }) => {
  return (
    <div className='section-container'>
      {items.map((menuItem) => {
        const { id, title, img, desc } = menuItem;
        return (
          <article>
            <img src={img} alt={title} className='photo'></img>
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}

    </div>
  );
};

export default menu;