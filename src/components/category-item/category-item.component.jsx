import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
	const { name, imageUrl } = category;
	return (
		<div className="category-container">
			<div
				className="background-image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="category-body-container">
				<h2>{name}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
