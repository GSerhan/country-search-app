import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import useDebounce from './hooks/useDebounce';

const App: React.FC = () => {
    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const debouncedQuery = useDebounce(query, 1000);

    useEffect(() => {
        const abortController = new AbortController();

        const onSearch = async (searchQuery: string) => {
            if (!searchQuery) {
                setResults([]);
                setError(null); // Clear previous errors
                return;
            }

            setLoading(true);
            setError(null); // Clear previous errors
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${searchQuery}`, {
                    signal: abortController.signal,
                });
                if (!response.ok) {
                    setError('Network response was not ok');
                    setResults([]);
                    return;
                }
                const data = await response.json();
                setResults(data);
            } catch (err) {
                if (err instanceof Error) {
                    if (err.name !== 'AbortError') {
                        setError(err.message);
                    }
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        if (debouncedQuery) {
            onSearch(debouncedQuery);
        } else {
            setResults([]);
            setError(null); // Clear previous errors
        }

        return () => {
            abortController.abort();
        };
    }, [debouncedQuery]);

    return (
        <div className="app">
            <SearchBar onSearch={setQuery} />
            <SearchResults results={results} loading={loading} error={error} />
        </div>
    );
};

export default App;