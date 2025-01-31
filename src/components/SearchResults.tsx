import React from 'react';

interface SearchResultsProps {
    results: any[];
    loading: boolean;
    error: string | null;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, loading, error }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (results.length === 0) {
        return <p>Please enter a search query to find results.</p>;
    }

    return (
        <div className="search-results">
            {results.map((result, index) => (
                <div key={index}>
                    {/* Render result details here */}
                    <p>{result.name.common}</p>
                </div>
            ))}
        </div>
    );
};

export default SearchResults;