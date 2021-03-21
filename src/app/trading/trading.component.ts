import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';
import { timeout } from 'rxjs/operators';
declare const TradingView: any;
@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})
export class TradingComponent implements AfterViewInit {

  selectedCoin = 'BTCUSD';

  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      var temp = new TradingView.widget(
        {
        "width": 1300,
        "height": 610,
        "symbol": "BITSTAMP:BTCUSD",
        "interval": "5",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "in",
        "toolbar_bg": "#f1f3f6",
        "enable_publishing": false,
        "allow_symbol_change": true,
        "watchlist": [
          "BITBAY:BTCUSD",
          "KRAKEN:ETHUSD",
          "BITKUB:BNBTHB",
          "BITKUB:ADATHB",
          "BINGBON:TRXUSDT",
          "BITKUB:DOTTHB",
          "BINANCE:XRPUSDT",
          "GEMINI:UNIUSD",
          "BINANCE:LTCUSDT",
          "BINANCE:LINKUSDT",
          "KRAKEN:BCHUSD",
          "KRAKEN:USDCUSD",
          "KRAKEN:XLMUSD",
          "BINANCE:LUNAUSDT",
          "BINANCE:THETAUSDT",
          "COINBASE:WBTCUSD",
          "BINANCE:DOGEUSDT",
          "OKEX:CROUSDT",
          "BITFINEX:VETUSD",
          "BINANCE:FILUSDT",
          "BINANCE:AAVEUSDT",
          "KRAKEN:ATOMUSD",
          "BINANCE:AVAXUSDT",
          "KRAKEN:TRXUSD",
          "BINANCE:EOSUSDT"
        ],
        "container_id": "tradingview_b0bf0"
      }
        );
        console.log(temp);
    }, 100);

    console.log()
  }
}