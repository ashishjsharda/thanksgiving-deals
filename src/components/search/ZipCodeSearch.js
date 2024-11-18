import PropTypes from 'prop-types'; // Import PropTypes
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const ZipCodeSearch = ({ onSubmit, value, onChange }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
            <Input
                type="text"
                placeholder="Enter ZIP code for local deals"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                pattern="[0-9]{5}"
                title="Please enter a valid 5-digit ZIP code"
                className="flex-1"
            />
            <Button type="submit" variant="default" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Find Local Deals
            </Button>
        </form>
    );
};

// Add propTypes to validate props
ZipCodeSearch.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default ZipCodeSearch;
