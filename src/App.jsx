// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Search, MapPin, ExternalLink } from "lucide-react";

// Sample data
const sampleDeals = {
    online: [
        {
            store: "Amazon",
            deals: [
                { item: "Echo Dot (5th Gen)", originalPrice: 49.99, salePrice: 29.99, discount: 40 },
                { item: "Instant Pot Duo", originalPrice: 99.99, salePrice: 59.99, discount: 40 },
            ]
        },
        {
            store: "Nordstrom",
            deals: [
                { item: "Designer Handbag", originalPrice: 395.00, salePrice: 236.99, discount: 40 },
                { item: "Winter Boots", originalPrice: 199.99, salePrice: 129.99, discount: 35 },
            ]
        },
        {
            store: "Walmart",
            deals: [
                { item: "65\" 4K Smart TV", originalPrice: 499.99, salePrice: 349.99, discount: 30 },
                { item: "KitchenAid Mixer", originalPrice: 379.99, salePrice: 259.99, discount: 32 },
            ]
        }
    ],
    local: {
        "12345": [
            {
                store: "Walmart Store #1234",
                location: "123 Main St",
                deals: [
                    { item: "Turkey (20lb)", originalPrice: 49.99, salePrice: 29.99, discount: 40 },
                    { item: "Thanksgiving Dinner Set", originalPrice: 99.99, salePrice: 69.99, discount: 30 }
                ]
            }
        ],
        "94105": [
            {
                store: "Target Store #5678",
                location: "456 Market St",
                deals: [
                    { item: "Holiday Decorations", originalPrice: 79.99, salePrice: 39.99, discount: 50 },
                    { item: "Bakeware Set", originalPrice: 129.99, salePrice: 79.99, discount: 38 }
                ]
            }
        ]
    }
};

// Deal Card Component
// eslint-disable-next-line react/prop-types
const DealCard = ({ deal, store, location }) => {
    const formatPrice = (price) => `$${price.toFixed(2)}`;

    return (
        <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-duration-300 p-4 mb-4">
            <div className="flex justify-between items-start">
                <div>
                    {/* eslint-disable-next-line react/prop-types */}
                    <h3 className="text-lg font-semibold text-gray-800">{deal.item}</h3>
                    <p className="text-sm text-gray-600">{store}</p>
                    {location && (
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {location}
                        </p>
                    )}
                </div>
                <div className="text-right">
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text-gray-500 line-through">{formatPrice(deal.originalPrice)}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text-2xl font-bold text-green-600">{formatPrice(deal.salePrice)}</p>
                    {/* eslint-disable-next-line react/prop-types */}
                    <p className="text-sm font-medium text-red-500">-{deal.discount}% OFF</p>
                </div>
            </div>
        </div>
    );
};

// Search Form Component
// eslint-disable-next-line react/prop-types
const SearchForm = ({ zipCode, setZipCode, onSubmit }) => (
    <form onSubmit={onSubmit} className="flex gap-3 mb-6">
        <input
            type="text"
            placeholder="Enter ZIP code for local deals"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            pattern="[0-9]{5}"
            title="Please enter a valid 5-digit ZIP code"
        />
        <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2 transition-colors"
        >
            <Search className="w-5 h-5" />
            Find Local Deals
        </button>
    </form>
);

// Section Header Component
// eslint-disable-next-line react/prop-types
const SectionHeader = ({ title, className = "" }) => (
    <h2 className={`text-xl font-semibold mb-4 ${className}`}>{title}</h2>
);

function App() {
    const [zipCode, setZipCode] = useState("");
    const [localDeals, setLocalDeals] = useState([]);
    const [showLocal, setShowLocal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sampleDeals.local[zipCode]) {
            setLocalDeals(sampleDeals.local[zipCode]);
            setShowLocal(true);
        } else {
            setLocalDeals([]);
            setShowLocal(true);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                        🦃 Thanksgiving Deals Finder
                    </h1>

                    <SearchForm
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                        onSubmit={handleSubmit}
                    />

                    {showLocal && (
                        <div className="mb-8">
                            <SectionHeader title={`Local Deals in ${zipCode}`} />
                            {localDeals.length > 0 ? (
                                localDeals.map((store, idx) => (
                                    <div key={idx} className="mb-6">
                                        <h3 className="text-lg font-semibold mb-3 text-gray-700">
                                            {store.store}
                                        </h3>
                                        {store.deals.map((deal, dealIdx) => (
                                            <DealCard
                                                key={dealIdx}
                                                deal={deal}
                                                store={store.store}
                                                location={store.location}
                                            />
                                        ))}
                                    </div>
                                ))
                            ) : (
                                <div className="text-gray-600 bg-gray-50 rounded-lg p-4">
                                    No local deals found for this ZIP code. Try 12345 or 94105 for demo deals.
                                </div>
                            )}
                        </div>
                    )}

                    <div>
                        <SectionHeader title="Online Deals" />
                        {sampleDeals.online.map((store, idx) => (
                            <div key={idx} className="mb-6">
                                <h3 className="text-lg font-semibold mb-3 text-gray-700 flex items-center gap-2">
                                    {store.store}
                                    <ExternalLink className="w-4 h-4 text-blue-500" />
                                </h3>
                                {store.deals.map((deal, dealIdx) => (
                                    <DealCard
                                        key={dealIdx}
                                        deal={deal}
                                        store={store.store}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;