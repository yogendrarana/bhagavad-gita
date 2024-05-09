import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(key: string, initialValue: T): T | undefined => {
    const [value, setValue] = useState<T | undefined>(() => {
        try {
            // Check if window exists (indicating browser environment)
            if (typeof window !== 'undefined') {
                const storedValue = localStorage.getItem(key);
                if (typeof storedValue === 'string') {
                    return JSON.parse(storedValue);
                }
                return initialValue;
            }
        } catch (error) {
            console.error(`Error retrieving item from localStorage: ${key}`, error);
            return initialValue;
        }
        return initialValue;
    });

    const HandleStorageChange = () => {
        const newValue = useLocalStorage(key, initialValue);
        if (newValue !== value) {
            setValue(newValue);
        }
    };

    // Update state whenever the key or initialValue changes
    useEffect(() => {

        window.addEventListener('storage', HandleStorageChange);

        return () => window.removeEventListener('storage', HandleStorageChange);
    }, [key, initialValue]);

    return value;
};
