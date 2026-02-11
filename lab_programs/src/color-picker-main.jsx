import React from 'react';
import { createRoot } from 'react-dom/client';
import ColorPicker from './components/ColorPicker/ColorPicker';
import './components/ColorPicker/ColorPicker.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<ColorPicker />);
