const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <div className="m-4">
      <h2 className="text-xl">Featured List {Date.now()}</h2>
      <ul className="my-2">
        {featuredProducts.map((item) => (
          <li key={item.id}>
            {item.icon} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FeaturedProducts;
