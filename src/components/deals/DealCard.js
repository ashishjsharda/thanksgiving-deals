
import PropTypes from 'prop-types';
import { MapPin } from 'lucide-react';

const DealCard = ({ deal, store, location }) => {
    const formatPrice = (price) => `$${price.toFixed(2)}`;

    return (
        <div className="mb-4 p-4 border rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-lg">{deal.item}</h3>
                    <p className="text-sm text-gray-600">{store}</p>
                    {location && (
                        <p className="text-sm text-gray-500">
                            <MapPin className="inline w-4 h-4 mr-1" />
                            {location}
                        </p>
                    )}
                </div>
                <div className="text-right">
                    <p className="line-through text-gray-500">{formatPrice(deal.originalPrice)}</p>
                    <p className="text-xl font-bold text-green-600">{formatPrice(deal.salePrice)}</p>
                    <p className="text-sm font-medium text-red-500">-{deal.discount}% OFF</p>
                </div>
            </div>
        </div>
    );
};

// Add PropTypes validation
DealCard.propTypes = {
    deal: PropTypes.shape({
        item: PropTypes.string.isRequired,
        originalPrice: PropTypes.number.isRequired,
        salePrice: PropTypes.number.isRequired,
        discount: PropTypes.number.isRequired,
    }).isRequired,
    store: PropTypes.string.isRequired,
    location: PropTypes.string, // Optional
};

export default DealCard;
