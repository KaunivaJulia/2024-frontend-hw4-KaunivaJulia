import { useState } from 'react';
import './Header.css';

export const Header = ({ onSearch }: { onSearch: (query: string) => void }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <header>
            <h3>Julia's feed</h3>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск по заголовкам"
                />
                <button type="submit">
                    <img src="src/assets/free-icon-search-4024513.png" alt="Поиск" />
                </button>
            </form>
        </header>
    );
};
