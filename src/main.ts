import './app-root';
import { store } from './store/store';

// Make store available in browser console for debugging
(window as any).store = store;