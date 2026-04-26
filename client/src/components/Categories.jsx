const categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Health & Beauty",
  "Sports",
  "Toys",
  "Computing",
  "Gaming",
  "Garden & Outdoors",
  "Office",
  "Appliances",
];

function Categories() {
  return (
    <div className="px-4 overflow-x-auto flex gap-4">

      {categories.map((cat, index) => (
        <div
          key={index}
          className="bg-gray-800 px-5 py-3 rounded-xl whitespace-nowrap cursor-pointer hover:bg-gray-700"
        >
          {cat}
        </div>
      ))}

    </div>
  );
}

export default Categories;