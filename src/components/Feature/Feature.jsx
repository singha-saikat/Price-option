import PropTypes from "prop-types";
import { BiCheckSquare } from "react-icons/bi";

const Feature = ({feature}) => {
    return (
        <div>
            <p className="px-4 flex items-center gap-2"><BiCheckSquare className="text-green-400"></BiCheckSquare>{feature}</p>
            
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.object,
  };
export default Feature;