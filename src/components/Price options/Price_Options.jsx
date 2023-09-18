// import PropTypes from 'prop-types';
import Price_option from "../Price Option/Price_option";

const priceOptions = [
  {
    id: "GYM001",
    name: "Fitness Paradise",
    price: 50,
    "features": [
        "Indoor Pool",
        "Sauna",
        "Personal Trainers",
        "Yoga Classes",
        "Dietary Consultations"
      ],
  },
  {
    id: "GYM002",
    name: "Health Haven",
    price: 60,
    "features": [
        "Access to gym facilities",
        "Full range of workout equipment",
        "24/7 gym access",
        "Personal training sessions",
        "Access to sauna and spa",
        "Access to locker room",
        "Towel service",
        "Nutrition counseling",
        "Group fitness classes"
      ],
  },
  {
    id: "GYM003",
    name: "Strength Studio",
    price: 45,
    "features": [
        "Access to gym facilities",
        "Full range of workout equipment",
        "24/7 gym access",
        "Personal training sessions",
        "Access to sauna and spa",
        "Access to locker room",
        "Towel service"
    ],
  },
  {
    id: "GYM004",
    name: "Wellness World",
    price: 55,
    "features": [
        "Access to gym facilities",
        "Full range of workout equipment",
        "Extended gym hours",
        "Group fitness classes",
        "Access to locker room"
    ],
  },
  {
    id: "GYM005",
    name: "Active Life Gym",
    price: 70,
    "features": [
        "Access to gym facilities",
        "Standard workout equipment",
        "Limited gym hours",
        "Access to locker room"
    ],
  },
];

const Price_Options = () => {
  return (
    <div>
      <h2 className="text-4xl mt-4 text-center mb-8 ">Best price in the town</h2>
      <div className="grid md:grid-cols-3 gap-4 m-4">
        {priceOptions.map((option) => (
          <Price_option key={option.id} option={option}></Price_option>
        ))}
      </div>
    </div>
  );
};
// Price_Options.prototype ={
//     Price_Options : PropTypes.object.isRequired
// }

export default Price_Options;
