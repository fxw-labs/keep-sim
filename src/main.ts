import './style.css';
import { initKeeper } from './keeper';

const button = document.getElementById('keepBtn') as HTMLButtonElement | null;
const statusEl = document.getElementById('status') as HTMLDivElement | null;
const usageEl = document.getElementById('usage') as HTMLDivElement | null;

if (button && statusEl && usageEl) {
  initKeeper({ button, statusEl, usageEl });
} else {
  // Surface a visible error if the DOM elements are missing.
  const missing: string[] = [];
  if (!button) missing.push('keepBtn');
  if (!statusEl) missing.push('status');
  if (!usageEl) missing.push('usage');
  document.body.insertAdjacentHTML(
    'beforeend',
    `<div style="color:#f87171;padding:1rem">Init error: missing ${missing.join(', ')}</div>`
  );
}
