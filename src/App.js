const App = () => {
  const categories = [
    {
      id: 1,
      title: "Cleansers",
    },
    {
      id: 2,
      title: "Toners",
    },
    {
      id: 3,
      title: "Serums",
    },
    {
      id: 4,
      title: "Lotions",
    },
    {
      id: 5,
      title: "Sunscreen",
    },
  ];
  return (
    <div className='categories-container'>
      {categories.map(({ title }) => (
        <div className='category-container'>
          <div className='background-image' />
          {/* <img/> */}
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
