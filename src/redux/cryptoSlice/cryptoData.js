// data/cryptoData.js
import bit from '../../assets/bitcoin.png'
import bnb from '../../assets/bnb.png'
import etherum from '../../assets/etherum.png'
import solana from '../../assets/solana.png'
import tether from '../../assets/tether.png'
import xrp from '../../assets/xrp.png'
import chart from '../../assets/chart.svg'
import chartDown from '../../assets/chart down.svg'
const cryptoData = [
    {
        name: 'Bitcoin',
        symbol: 'BTC',
        logo: bit,
        price: 93000,
        hour: 0.431,
        day: 11.22,
        week: 11.5,
        marketCap: 1800000000000,
        volume: 43000000000,
        supply: '19.8M BTC',
        chart: chart,
    },
    {
        name: 'Ethereum',
        symbol: 'ETH',
        logo: etherum,
        price: 1800,
        hour: 0.62,
        day: 3.12,
        week: 13,
        marketCap: 217000000000,
        volume: 23000000000,
        supply: '120M ETH',
        chart: chart,
    },
    {
        name: 'Tether',
        symbol: 'USDT',
        logo: tether,
        price: 1.78,
        hour: 0.4,
        day: 0.5,
        week: 0.01,
        marketCap: 85000000000,
        volume: 36000000000,
        supply: '85B USDT',
        chart: chartDown,
    },
    {
        name: 'XRP',
        symbol: 'XRP',
        logo: xrp,
        price: 2.55,
        hour: 0.24,
        day: -1.15,
        week: 2.5,
        marketCap: 29000000000,
        volume: 1800000000,
        supply: '52B XRP',
        chart: chart,
    },
    {
        name: 'BNB',
        symbol: 'BNB',
        logo: bnb,
        price: 250,
        hour: -0.44 ,
        day: 2.24,
        week: 6.9,
        marketCap: 38500000000,
        volume: 1200000000,
        supply: '153M BNB',
        chart: chartDown,
    },
    {
        name: 'Solana',
        symbol: 'SOL',
        logo: solana,
        price: 90,
        hour: 1.14,
        day: 4.43,
        week: 15,
        marketCap: 39000000000,
        volume: 2200000000,
        supply: '430M SOL',
        chart: chart,
    },
];

export default cryptoData;
