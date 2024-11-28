import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Categories from './Categories'
import Menu from './Menu'
import items from './data'

function App() {
  const = [menuItems, setMenuItems] = useState(items);
  const = [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    const newItem = item.filter((item) => item.category === category);
    setMenuItems(newItem);
  };

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Set menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems}/>
        <Menu item={menuItems}/>
      </section>
    </main>
  )

}

export default App
