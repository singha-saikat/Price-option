import PropTypes from "prop-types";

import Feature from "../Feature/Feature";

const Price_option = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-sky-600 rounded-lg text-white p-4 flex flex-col">
      <div className="text-center mt-4">
        <span className="text-6xl">{price}</span>
        <span className="text-2xl">/mon</span>
      </div>
      <h1 className="text-center text-2xl mt-4 mb-4">{name}</h1>
      <div className="flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-purple-600 w-full p-2 mt-4 rounded-md font-bold">Buy Now</button>
      </div>
    </div>
  );
};
Price_option.propTypes = {
  option: PropTypes.object,
};

export default Price_option;
