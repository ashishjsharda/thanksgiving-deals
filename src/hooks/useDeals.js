import { useState } from 'react';
import { dealsService } from '../services/dealsService';

export const useDeals = () => {
    const [onlineDeals, setOnlineDeals] = useState([]);
    const [localDeals, setLocalDeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchOnlineDeals = async () => {
        try {
            setLoading(true);
            const deals = await dealsService.getOnlineDeals();
            setOnlineDeals(deals);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchLocalDeals = async (zipCode) => {
        try {
            setLoading(true);
            const deals = await dealsService.getLocalDeals(zipCode);
            setLocalDeals(deals);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        onlineDeals,
        localDeals,
        loading,
        error,
        fetchOnlineDeals,
        fetchLocalDeals
    };
};