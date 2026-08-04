import { useEffect, useState } from 'react';
import type { Theme } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('light'); // valeur par défaut sécurisée
  const [mounted, setMounted] = useState(false);

  // Applique le thème dès que possible côté client
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme: Theme =
      saved === 'dark' || saved === 'light'
        ? saved
        : systemDark
        ? 'dark'
        : 'light';

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Applique la classe + sauvegarde à chaque changement de thème
  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Améliore le rendu natif (scrollbars, inputs, etc.)
    root.style.colorScheme = theme;

    localStorage.setItem('theme', theme);
  }, [theme, mounted]);

  // Écoute les changements de préférence système (si l'utilisateur n'a pas forcé un thème)
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem('theme');
      // On ne change automatiquement que s'il n'y a pas de préférence sauvegardée
      if (!saved) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Empêche le rendu incorrect pendant l'hydratation
  if (!mounted) {
    return {
      theme: 'light' as Theme,
      toggleTheme: () => {},
      mounted: false,
    };
  }

  return {
    theme,
    toggleTheme,
    mounted: true,
  };
}