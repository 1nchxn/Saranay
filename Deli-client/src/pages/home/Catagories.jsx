import React from "react";
const categoryItems = [
  {
    id: 1,
    title: "Burger",
    des: "(10 Dishes)",
    image: "/images//home/category/burgers.png",
  },
  {
    id: 2,
    title: "Rice Bowls",
    des: "(10 Dishes)",
    image: "/images//home/category/Rice bowls.png",
  },
  {
    id: 3,
    title: "Desserts",
    des: "(10 Dishes)",
    image: "/images//home/category/dessert.png",
  },
  {
    id: 4,
    title: "All",
    des: "(40 Dishes)",
    image: "/images//home/category/Drinks.png",
  },
];

const Categories = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto x1:px-24 px-4 py-16">
      <div className="text-center">
        <p className="text-orange uppercase tracking-wide font-medium text-lg">
          Customer Favorites
        </p>
        <h2 className="text-4xl md:text-5xl font-bold my-2 md:leading-snug leading-snug">
          Popular Categories
        </h2>
      </div>
      {/* Categories Card */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-around items-center mt-12">
        {categoryItems.map((item, i) => (
          <div
            key={i}
            className="shadow-lg rounded-md bg-white p-6 px-5 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 duration-300 transition-all"
          >
            <div className="flex w-full mx-auto items-center justify-center">
              <img
                src={item.image}
                alt=""
                className='bg-[#FF4433"]p-5 rounded-full w-28 h-28'
              />
            </div>
            <div className="mt-5 space-y-1">
              <h5>{item.title}</h5>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
