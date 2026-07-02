# Keep SIM

A minimal PWA to keep your SIM card active by consuming ~100KB of mobile data with a single tap.

## Features

- Single-tap SIM keeping
- PWA: install to home screen, works offline (UI only)
- Shows consumed data size after each operation
- No tracking, no accounts, no server
- Free to deploy on GitHub Pages

## Usage

1. Install on your phone (add to home screen)
2. Turn off Wi-Fi, turn on mobile data
3. Open Keep SIM
4. Tap **Keep SIM**
5. Check your balance to confirm the charge

## Deploy

### Option 1: Use this template

Click **Use this template** → create repository → enable GitHub Pages (Settings → Pages → Source: GitHub Actions).

### Option 2: Manual deploy

```bash
npm install
npm run build
# Deploy the `dist/` folder to any static host
```

## Development

```bash
npm install
npm run dev
```

## License

MIT
