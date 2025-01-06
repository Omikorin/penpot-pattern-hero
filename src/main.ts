import Alpine from 'alpinejs';
import { PatternHero } from './pattern-hero';
import './style.css';

const initializeApp = () => {
  new PatternHero();
};

document.addEventListener('DOMContentLoaded', () => initializeApp());

window.Alpine = Alpine;

Alpine.start();

// theme handling
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get('theme') ?? 'light';

// listen plugin.ts messages
window.addEventListener('message', (event) => {
  if (event.data.source === 'penpot') {
    document.body.dataset.theme = event.data.theme;
  }
});

declare global {
  interface Window {
    Alpine: typeof Alpine;
  }
}
