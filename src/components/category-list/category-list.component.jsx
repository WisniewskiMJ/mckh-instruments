import CategoryItem from "../category-item/category-item.component";
import "./category-list.styles.scss";

const CategoryList = () => {
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

	return (
		<div className='category-list-container'>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default CategoryList;
