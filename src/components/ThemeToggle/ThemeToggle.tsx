
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px',
                backgroundColor: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
        </button>
    );
};

export default ThemeToggle;
