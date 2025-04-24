# 🪙 CryptoPulse – Real-Time Crypto Price Tracker

CryptoPulse is a responsive React + Redux Toolkit application that simulates real-time crypto price tracking. It mimics live updates like CoinMarketCap using mock WebSocket behavior and Redux state management.

## 🎯 Features

- 📊 Real-time updates of 5 crypto assets (BTC, ETH, USDT, etc.)
- 🔄 Simulated WebSocket using `setInterval` to randomly change price, % change, and 24h volume
- 💹 Responsive UI with a data table on desktop and stacked cards on mobile
- 🎨 Color-coded % changes (green = positive, red = negative)
- 📈 7-day static sparkline chart for each asset
- 🌐 All state managed via Redux Toolkit (no local state)
- ⚡ Optimized with selectors to prevent unnecessary re-renders

---

## 🛠️ Tech Stack

- **React** – UI library
- **Redux Toolkit** – State management
- **Tailwind CSS** – Utility-first styling
- **Mock WebSocket** – Simulated real-time data

---

## 📐 Architecture

```text
src/
├── assets/              # Logos and static chart images
├── components/          # Table, Card, Header, etc.
├── features/crypto/     # Redux slice, selectors, mock service
├── store/               # configureStore
├── utils/               # Random price simulation
└── App.jsx              # Main layout + routing
