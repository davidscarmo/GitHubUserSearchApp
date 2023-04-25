import { atom } from 'recoil'

export const themeState = atom({
  key: 'themeState',
  default:
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'),
})
