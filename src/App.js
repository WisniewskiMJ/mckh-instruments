const App = () => {

  const categories = [
    {
      id: 1,
      name: 'Strings'
    },
    {
      id: 2,
      name: 'Brass'
    },
    {
      id: 3,
      name: 'Woodwind'
    },
    {
      id: 4,
      name: 'Keys'
    },
    {
      id: 5,
      name: 'Percussion'
    }
  ];

  return (
    <div className='categories-container'>
      { categories.map(({ id, name }) => (
        <div className='category-container' key={ id }>
          {/* <img /> */}
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
