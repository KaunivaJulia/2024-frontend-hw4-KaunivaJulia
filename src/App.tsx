
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Feed } from './components/Feed/Feed';
import Post from './components/Post/Post';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ThemeToggle'; 
import { useState } from 'react';
import './index.css';

function App() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        console.log('Search query:', query);
    };

    return (
        <ThemeProvider>
            <Router>
                <Header onSearch={handleSearch} />
                <Routes>
                    <Route path="/" element={<Feed searchQuery={searchQuery} />} />
                    <Route path="/post/:id" element={<Post />} />
                </Routes>
                <ThemeToggle /> {/* Добавьте переключатель темы */}
            </Router>
        </ThemeProvider>
    );
}

export default App;
