import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For static export compatibility, use hardcoded base currency
    const baseCurrency = 'USD';
    
    // Try multiple free APIs in order of preference
    const apis = [
      // ExchangeRate-API (most reliable free API)
      `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`,
      // Fixer.io free tier
      `https://api.fixer.io/latest?base=${baseCurrency}`,
      // Open Exchange Rates alternative
      `https://open.er-api.com/v6/latest/${baseCurrency}`,
    ];
    
    for (const apiUrl of apis) {
      try {
        console.log(`Trying API: ${apiUrl}`);
        const response = await fetch(apiUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (compatible; Exchange Rate API)',
          },
          // Add timeout
          signal: AbortSignal.timeout(10000), // 10 second timeout
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(`API ${apiUrl} succeeded`);
          return NextResponse.json({
            rates: data.rates,
            base: data.base || baseCurrency,
            date: data.date || new Date().toISOString().split('T')[0],
            success: true,
            source: apiUrl
          });
        } else {
          console.log(`API ${apiUrl} returned status: ${response.status}`);
        }
      } catch (apiError) {
        console.log(`API ${apiUrl} failed:`, apiError);
        continue;
      }
    }
    
    // If all APIs fail, return fallback rates
    throw new Error('All exchange rate APIs failed');
    
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    
    // Return comprehensive fallback rates based on recent market data
    const fallbackRates = {
      // Major currencies
      USD: 1.0000, EUR: 0.9200, GBP: 0.7900, JPY: 149.50, CAD: 1.3600, 
      AUD: 1.5200, CHF: 0.8800, CNY: 7.2400, INR: 83.25, KRW: 1320.00,
      
      // Other popular currencies
      BRL: 5.0500, RUB: 92.50, MXN: 17.15, SGD: 1.3400, HKD: 7.8300,
      NOK: 10.85, SEK: 10.45, DKK: 6.8700, PLN: 4.0200, CZK: 22.85,
      HUF: 360.00, RON: 4.5800, BGN: 1.8000, HRK: 6.9300, RSD: 107.50,
      
      // Middle East & Africa
      AED: 3.6700, SAR: 3.7500, QAR: 3.6400, KWD: 0.3100, BHD: 0.3770,
      OMR: 0.3850, JOD: 0.7080, EGP: 30.85, ZAR: 18.25, NGN: 775.00,
      
      // Asia Pacific
      THB: 35.25, PHP: 55.85, MYR: 4.6800, IDR: 15650, VND: 24350,
      TWD: 31.45, NZD: 1.6200, PKR: 278.00, BDT: 110.00, LKR: 325.00,
      
      // Americas
      CLP: 920.00, COP: 4050, PEN: 3.7500, ARS: 350.00, UYU: 39.50,
      
      // Crypto (for reference)
      BTC: 0.000023, ETH: 0.00041,
      
      // Commodities currencies
      TRY: 29.15, UAH: 36.75, KZT: 465.00, UZS: 12250,
    };
    
    return NextResponse.json({
      rates: fallbackRates,
      base: 'USD',
      date: new Date().toISOString().split('T')[0],
      success: false,
      fallback: true,
      error: 'Using offline rates - all external APIs unavailable'
    });
  }
}
