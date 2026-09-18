import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../components/ui/ThemeProvider';

export default function useKeyboardShortcuts(setShowShortcuts) {
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handler = (e) => {
      // Don't fire shortcuts when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT') return;

      switch (e.key.toLowerCase()) {
        case 'd':
          toggleTheme();
          break;
        case 'h':
          navigate('/');
          break;
        case '?':
          setShowShortcuts((prev) => !prev);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate, toggleTheme, setShowShortcuts]);
}
