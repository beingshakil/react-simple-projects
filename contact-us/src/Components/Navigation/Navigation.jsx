import styles from './Navigation.module.css'

const navigation = () => {

  console.log(styles)

  return (
    <nav className= {`${styles.navigation} container`}>
      <div className='logo'>
        <img src="/images/nike.png" alt="logo" />
      </div>

      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
};

export default navigation;