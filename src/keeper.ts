export interface KeeperElements {
  button: HTMLButtonElement;
  statusEl: HTMLDivElement;
  usageEl: HTMLDivElement;
}

const PAYLOAD_URL = 'payload.txt';

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function initKeeper(elements: KeeperElements): void {
  const { button, statusEl, usageEl } = elements;

  // Immediate visual feedback to confirm the click handler is wired up.
  const handleClick = async (): Promise<void> => {
    button.disabled = true;
    statusEl.textContent = 'Downloading...';
    usageEl.textContent = '';

    try {
      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(2, 10);
      const url = `${PAYLOAD_URL}?t=${timestamp}&r=${randomStr}`;

      const response = await fetch(url, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          Pragma: 'no-cache'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const blob = await response.blob();
      const bytes = blob.size;

      statusEl.textContent = 'Done';
      usageEl.textContent = `Consumed ${formatBytes(bytes)}`;
    } catch (err) {
      statusEl.textContent = 'Failed';
      usageEl.textContent = err instanceof Error ? err.message : 'Unknown error';
    } finally {
      button.disabled = false;
    }
  };

  button.addEventListener('click', handleClick);

  // Fallback: if addEventListener somehow failed, wire up onclick directly.
  button.onclick = handleClick;
}
