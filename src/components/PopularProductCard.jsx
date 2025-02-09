import star from "../assets/icons/star.svg";
import PropTypes from "prop-types";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col items-center sm:items-start w-full">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px] object-cover rounded-lg" />
      
      <div className="mt-4 flex items-center gap-2.5">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl text-slate-gray">(4.5)</p>
      </div>
      
      <h3 className="mt-2 text-2xl font-semibold font-palanquin">{name}</h3>
      
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl">
        {price}
      </p>
    </div>
  );
};

PopularProductCard.propTypes = {
  imgURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default PopularProductCard;