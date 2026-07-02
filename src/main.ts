import './style.css';
import { initKeeper } from './keeper';

const button = document.getElementById('keepBtn') as HTMLButtonElement;
const statusEl = document.getElementById('status') as HTMLDivElement;
const usageEl = document.getElementById('usage') as HTMLDivElement;

initKeeper({ button, statusEl, usageEl });
