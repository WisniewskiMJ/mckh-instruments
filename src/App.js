import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      name: 'strings',
      imageUrl: '/images/strings.jpg'
    },
    {
      id: 2,
      name: 'brass',
      imageUrl: '/images/brass.jpg'
    },
    {
      id: 3,
      name: 'woodwind',
      imageUrl: '/images/woodwind.jpg'
    },
    {
      id: 4,
      name: 'keys',
      imageUrl: '/images/keys.jpg'
    },
    {
      id: 5,
      name: 'percussion',
      imageUrl: '/images/percussion.jpg'
    }
  ];

  return (
    <div className='categories-container'>
      { categories.map(({ id, name, imageUrl }) => (
        <div key={ id } className='category-container'>
          <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <div className='category-body-container'>
            <h2>{ name }</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
