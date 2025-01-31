export const fetchCountries = async (query: string, options?: RequestInit): Promise<string[]> => {
    const response = await new Promise<string[]>((resolve) => {
        setTimeout(() => {
            const countries = [
                "United States",
                "Canada",
                "Mexico",
                "United Kingdom",
                "Germany",
                "France",
                "Italy",
                "Spain",
                "Australia",
                "India",
                "China",
                "Japan",
                "Brazil",
                "South Africa",
                "Russia",
                "Argentina",
                "Sweden",
                "Norway",
                "Finland",
                "Denmark",
                "Netherlands",
                "Belgium",
                "Switzerland",
                "Austria",
                "New Zealand",
                "Singapore",
                "Malaysia",
                "Philippines",
                "Thailand",
                "Vietnam",
                "South Korea",
            ];
            const filteredCountries = countries.filter(country =>
                country.toLowerCase().includes(query.toLowerCase())
            );
            resolve(filteredCountries);
        }, 1000);
    });
    return response;
};