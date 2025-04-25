import CategoryList from "./components/category-list/category-list.component";

const App = () => {

  const categories = [
    {
      id: 1,
      name: "strings",
      imageUrl: "/images/strings.jpg",
    },
    {
      id: 2,
      name: "brass",
      imageUrl: "/images/brass.jpg",
    },
    {
      id: 3,
      name: "woodwind",
      imageUrl: "/images/woodwind.jpg",
    },
    {
      id: 4,
      name: "keys",
      imageUrl: "/images/keys.jpg",
    },
    {
      id: 5,
      name: "percussion",
      imageUrl: "/images/percussion.jpg",
    },
  ];

  return <CategoryList categories={categories} />;
};

export default App;
