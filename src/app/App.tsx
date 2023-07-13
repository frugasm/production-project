import React, { Suspense } from 'react'
import './styles/index.scss'
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';;
import { useTheme } from './providers/ThemeProvider';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', { selected: false, hovered: true }, [theme])}>
      <button onClick={toggleTheme}>{theme === Theme.DARK ? 'Светлая тема' : 'Темная тема'}</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  )
}

export default App;