'use client';

import { useState, useEffect } from 'react';
import { ArrowUpDown, RefreshCw, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ShareButton from '@/components/ShareButton';
import { useUrlParams } from '@/hooks/useUrlParams';
import { toast } from 'sonner';

const popularCurrencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
];

const allCurrencies = [
  { code: 'USD', name: 'US Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
  { code: 'GBP', name: 'British Pound', symbol: '£' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
  { code: 'AFN', name: 'Afghan Afghani', symbol: '؋' },
  { code: 'ALL', name: 'Albanian Lek', symbol: 'L' },
  { code: 'AMD', name: 'Armenian Dram', symbol: 'դ' },
  { code: 'ANG', name: 'Netherlands Antillean Guilder', symbol: 'ƒ' },
  { code: 'AOA', name: 'Angolan Kwanza', symbol: 'Kz' },
  { code: 'ARS', name: 'Argentine Peso', symbol: '$' },
  { code: 'AWG', name: 'Aruban Florin', symbol: 'ƒ' },
  { code: 'AZN', name: 'Azerbaijani Manat', symbol: '₼' },
  { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark', symbol: 'KM' },
  { code: 'BBD', name: 'Barbadian Dollar', symbol: '$' },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
  { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв' },
  { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب' },
  { code: 'BIF', name: 'Burundian Franc', symbol: 'FBu' },
  { code: 'BMD', name: 'Bermudan Dollar', symbol: '$' },
  { code: 'BND', name: 'Brunei Dollar', symbol: '$' },
  { code: 'BOB', name: 'Bolivian Boliviano', symbol: '$b' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
  { code: 'BSD', name: 'Bahamian Dollar', symbol: '$' },
  { code: 'BTC', name: 'Bitcoin', symbol: '₿' },
  { code: 'BTN', name: 'Bhutanese Ngultrum', symbol: 'Nu.' },
  { code: 'BWP', name: 'Botswanan Pula', symbol: 'P' },
  { code: 'BYN', name: 'Belarusian Ruble', symbol: 'Br' },
  { code: 'BZD', name: 'Belize Dollar', symbol: 'BZ$' },
  { code: 'CDF', name: 'Congolese Franc', symbol: 'FC' },
  { code: 'CLP', name: 'Chilean Peso', symbol: '$' },
  { code: 'COP', name: 'Colombian Peso', symbol: '$' },
  { code: 'CRC', name: 'Costa Rican Colón', symbol: '₡' },
  { code: 'CUC', name: 'Cuban Convertible Peso', symbol: '$' },
  { code: 'CUP', name: 'Cuban Peso', symbol: '₱' },
  { code: 'CVE', name: 'Cape Verdean Escudo', symbol: '$' },
  { code: 'CZK', name: 'Czech Republic Koruna', symbol: 'Kč' },
  { code: 'DJF', name: 'Djiboutian Franc', symbol: 'Fdj' },
  { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
  { code: 'DOP', name: 'Dominican Peso', symbol: 'RD$' },
  { code: 'DZD', name: 'Algerian Dinar', symbol: 'دج' },
  { code: 'EGP', name: 'Egyptian Pound', symbol: '£' },
  { code: 'ERN', name: 'Eritrean Nakfa', symbol: 'Nfk' },
  { code: 'ETB', name: 'Ethiopian Birr', symbol: 'Br' },
  { code: 'FJD', name: 'Fijian Dollar', symbol: '$' },
  { code: 'FKP', name: 'Falkland Islands Pound', symbol: '£' },
  { code: 'GEL', name: 'Georgian Lari', symbol: '₾' },
  { code: 'GGP', name: 'Guernsey Pound', symbol: '£' },
  { code: 'GHS', name: 'Ghanaian Cedi', symbol: '¢' },
  { code: 'GIP', name: 'Gibraltar Pound', symbol: '£' },
  { code: 'GMD', name: 'Gambian Dalasi', symbol: 'D' },
  { code: 'GNF', name: 'Guinean Franc', symbol: 'FG' },
  { code: 'GTQ', name: 'Guatemalan Quetzal', symbol: 'Q' },
  { code: 'GYD', name: 'Guyanaese Dollar', symbol: '$' },
  { code: 'HKD', name: 'Hong Kong Dollar', symbol: '$' },
  { code: 'HNL', name: 'Honduran Lempira', symbol: 'L' },
  { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn' },
  { code: 'HTG', name: 'Haitian Gourde', symbol: 'G' },
  { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
  { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
  { code: 'ILS', name: 'Israeli New Sheqel', symbol: '₪' },
  { code: 'IMP', name: 'Manx pound', symbol: '£' },
  { code: 'IQD', name: 'Iraqi Dinar', symbol: 'ع.د' },
  { code: 'IRR', name: 'Iranian Rial', symbol: '﷼' },
  { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr' },
  { code: 'JEP', name: 'Jersey Pound', symbol: '£' },
  { code: 'JMD', name: 'Jamaican Dollar', symbol: 'J$' },
  { code: 'JOD', name: 'Jordanian Dinar', symbol: 'JD' },
  { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
  { code: 'KGS', name: 'Kyrgystani Som', symbol: 'лв' },
  { code: 'KHR', name: 'Cambodian Riel', symbol: '៛' },
  { code: 'KMF', name: 'Comorian Franc', symbol: 'CF' },
  { code: 'KPW', name: 'North Korean Won', symbol: '₩' },
  { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'KD' },
  { code: 'KYD', name: 'Cayman Islands Dollar', symbol: '$' },
  { code: 'KZT', name: 'Kazakhstani Tenge', symbol: '₸' },
  { code: 'LAK', name: 'Laotian Kip', symbol: '₭' },
  { code: 'LBP', name: 'Lebanese Pound', symbol: '£' },
  { code: 'LKR', name: 'Sri Lankan Rupee', symbol: '₨' },
  { code: 'LRD', name: 'Liberian Dollar', symbol: '$' },
  { code: 'LSL', name: 'Lesotho Loti', symbol: 'M' },
  { code: 'LTL', name: 'Lithuanian Litas', symbol: 'Lt' },
  { code: 'LVL', name: 'Latvian Lats', symbol: 'Ls' },
  { code: 'LYD', name: 'Libyan Dinar', symbol: 'LD' },
  { code: 'MAD', name: 'Moroccan Dirham', symbol: 'MAD' },
  { code: 'MDL', name: 'Moldovan Leu', symbol: 'lei' },
  { code: 'MGA', name: 'Malagasy Ariary', symbol: 'Ar' },
  { code: 'MKD', name: 'Macedonian Denar', symbol: 'ден' },
  { code: 'MMK', name: 'Myanma Kyat', symbol: 'K' },
  { code: 'MNT', name: 'Mongolian Tugrik', symbol: '₮' },
  { code: 'MOP', name: 'Macanese Pataca', symbol: 'MOP$' },
  { code: 'MRO', name: 'Mauritanian Ouguiya', symbol: 'UM' },
  { code: 'MUR', name: 'Mauritian Rupee', symbol: '₨' },
  { code: 'MVR', name: 'Maldivian Rufiyaa', symbol: 'Rf' },
  { code: 'MWK', name: 'Malawian Kwacha', symbol: 'MK' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$' },
  { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
  { code: 'MZN', name: 'Mozambican Metical', symbol: 'MT' },
  { code: 'NAD', name: 'Namibian Dollar', symbol: '$' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
  { code: 'NIO', name: 'Nicaraguan Córdoba', symbol: 'C$' },
  { code: 'NOK', name: 'Norwegian Krone', symbol: 'kr' },
  { code: 'NPR', name: 'Nepalese Rupee', symbol: '₨' },
  { code: 'NZD', name: 'New Zealand Dollar', symbol: '$' },
  { code: 'OMR', name: 'Omani Rial', symbol: '﷼' },
  { code: 'PAB', name: 'Panamanian Balboa', symbol: 'B/.' },
  { code: 'PEN', name: 'Peruvian Nuevo Sol', symbol: 'S/.' },
  { code: 'PGK', name: 'Papua New Guinean Kina', symbol: 'K' },
  { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
  { code: 'PLN', name: 'Polish Zloty', symbol: 'zł' },
  { code: 'PYG', name: 'Paraguayan Guarani', symbol: 'Gs' },
  { code: 'QAR', name: 'Qatari Rial', symbol: '﷼' },
  { code: 'RON', name: 'Romanian Leu', symbol: 'lei' },
  { code: 'RSD', name: 'Serbian Dinar', symbol: 'Дин.' },
  { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
  { code: 'RWF', name: 'Rwandan Franc', symbol: 'R₣' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼' },
  { code: 'SBD', name: 'Solomon Islands Dollar', symbol: '$' },
  { code: 'SCR', name: 'Seychellois Rupee', symbol: '₨' },
  { code: 'SDG', name: 'Sudanese Pound', symbol: 'ج.س.' },
  { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: '$' },
  { code: 'SHP', name: 'Saint Helena Pound', symbol: '£' },
  { code: 'SLE', name: 'Sierra Leonean Leone', symbol: 'Le' },
  { code: 'SLL', name: 'Sierra Leonean Leone', symbol: 'Le' },
  { code: 'SOS', name: 'Somali Shilling', symbol: 'S' },
  { code: 'SRD', name: 'Surinamese Dollar', symbol: '$' },
  { code: 'STD', name: 'São Tomé and Príncipe Dobra', symbol: 'Db' },
  { code: 'SVC', name: 'Salvadoran Colón', symbol: '$' },
  { code: 'SYP', name: 'Syrian Pound', symbol: '£' },
  { code: 'SZL', name: 'Swazi Lilangeni', symbol: 'E' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿' },
  { code: 'TJS', name: 'Tajikistani Somoni', symbol: 'SM' },
  { code: 'TMT', name: 'Turkmenistani Manat', symbol: 'T' },
  { code: 'TND', name: 'Tunisian Dinar', symbol: 'د.ت' },
  { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'T$' },
  { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
  { code: 'TTD', name: 'Trinidad and Tobago Dollar', symbol: 'TT$' },
  { code: 'TVD', name: 'Tuvaluan Dollar', symbol: '$' },
  { code: 'TWD', name: 'New Taiwan Dollar', symbol: 'NT$' },
  { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh' },
  { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴' },
  { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh' },
  { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U' },
  { code: 'UZS', name: 'Uzbekistan Som', symbol: 'лв' },
  { code: 'VEF', name: 'Venezuelan Bolívar Fuerte', symbol: 'Bs' },
  { code: 'VES', name: 'Venezuelan Bolívar Soberano', symbol: 'Bs.S' },
  { code: 'VND', name: 'Vietnamese Dong', symbol: '₫' },
  { code: 'VUV', name: 'Vanuatu Vatu', symbol: 'VT' },
  { code: 'WST', name: 'Samoan Tala', symbol: 'WS$' },
  { code: 'XAF', name: 'CFA Franc BEAC', symbol: 'FCFA' },
  { code: 'XAG', name: 'Silver Ounce', symbol: 'XAG' },
  { code: 'XAU', name: 'Gold Ounce', symbol: 'XAU' },
  { code: 'XCD', name: 'East Caribbean Dollar', symbol: '$' },
  { code: 'XDR', name: 'Special Drawing Rights', symbol: 'XDR' },
  { code: 'XOF', name: 'CFA Franc BCEAO', symbol: 'CFA' },
  { code: 'XPF', name: 'CFP Franc', symbol: '₣' },
  { code: 'YER', name: 'Yemeni Rial', symbol: '﷼' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
  { code: 'ZMK', name: 'Zambian Kwacha', symbol: 'ZK' },
  { code: 'ZMW', name: 'Zambian Kwacha', symbol: 'ZK' },
  { code: 'ZWL', name: 'Zimbabwean Dollar', symbol: 'Z$' },
];

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const urlParams = useUrlParams();

  // Load data from URL params on mount
  useEffect(() => {
    if (urlParams.amount) setAmount(urlParams.amount);
    if (urlParams.fromCurrency) setFromCurrency(urlParams.fromCurrency);
    if (urlParams.toCurrency) setToCurrency(urlParams.toCurrency);
    
    if (Object.keys(urlParams).length > 1) {
      toast.success('Loaded shared conversion data!');
    }
  }, [urlParams]);
  const fetchExchangeRates = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/exchange-rates?base=${fromCurrency}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setExchangeRates(data.rates);
      setLastUpdated(new Date().toLocaleString());
      
      if (data.fallback) {
        toast.warning('Using offline rates - external APIs unavailable');
      } else {
        toast.success('Exchange rates updated successfully');
      }
      
    } catch (error) {
      console.error('Error fetching exchange rates:', error);
      
      // Provide immediate fallback rates
      const fallbackRates = {
        USD: 1.0000, EUR: 0.9200, GBP: 0.7900, JPY: 149.50, CAD: 1.3600, 
        AUD: 1.5200, CHF: 0.8800, CNY: 7.2400, INR: 83.25, KRW: 1320.00,
        BRL: 5.0500, RUB: 92.50, MXN: 17.15, SGD: 1.3400, HKD: 7.8300,
        NOK: 10.85, SEK: 10.45, DKK: 6.8700, PLN: 4.0200, CZK: 22.85,
        HUF: 360.00, RON: 4.5800, BGN: 1.8000, AED: 3.6700, SAR: 3.7500,
        QAR: 3.6400, KWD: 0.3100, BHD: 0.3770, OMR: 0.3850, JOD: 0.7080,
        EGP: 30.85, ZAR: 18.25, NGN: 775.00, THB: 35.25, PHP: 55.85,
        MYR: 4.6800, IDR: 15650, VND: 24350, TWD: 31.45, NZD: 1.6200,
        PKR: 278.00, BDT: 110.00, LKR: 325.00, TRY: 29.15, UAH: 36.75
      };
      
      setExchangeRates(fallbackRates);
      setLastUpdated(new Date().toLocaleString());
      toast.error('Network error - using offline rates');
    }
    setLoading(false);
  };

  const convertCurrency = () => {
    if (!amount || !exchangeRates[toCurrency]) {
      return;
    }

    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) {
      setResult('Invalid amount');
      return;
    }

    let convertedAmount;
    if (fromCurrency === 'USD') {
      convertedAmount = numAmount * exchangeRates[toCurrency];
    } else if (toCurrency === 'USD') {
      convertedAmount = numAmount / exchangeRates[fromCurrency];
    } else {
      // Convert to USD first, then to target currency
      const usdAmount = numAmount / exchangeRates[fromCurrency];
      convertedAmount = usdAmount * exchangeRates[toCurrency];
    }

    const fromSymbol = allCurrencies.find(c => c.code === fromCurrency)?.symbol || fromCurrency;
    const toSymbol = allCurrencies.find(c => c.code === toCurrency)?.symbol || toCurrency;

    setResult(`${fromSymbol}${numAmount.toLocaleString()} = ${toSymbol}${convertedAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
  };

  const swapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    fetchExchangeRates();
  }, [fromCurrency]);

  useEffect(() => {
    if (amount && exchangeRates[toCurrency]) {
      convertCurrency();
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2" id="currency-converter">
            <DollarSign className="w-5 h-5" />
            <span>Currency Converter</span>
          </CardTitle>
          <CardDescription>
            Convert between 180+ currencies with real-time exchange rates
            {lastUpdated && (
              <span className="block text-xs text-gray-400 mt-1">
                Last updated: {lastUpdated}
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Share Button */}
          <div className="flex justify-end">
            <ShareButton 
              data={{ amount, fromCurrency, toCurrency }}
              toolName="Currency Converter"
            />
          </div>

          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="text-lg"
            />
          </div>

          {/* Currency Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From
              </label>
              <Select value={fromCurrency} onValueChange={setFromCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <div className="font-semibold text-xs text-gray-500 px-2 py-1 bg-gray-50">
                    Top 5 Main Currencies
                  </div>
                  {popularCurrencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.symbol} {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                  <div className="font-semibold text-xs text-gray-500 px-2 py-1 bg-gray-50 mt-2">
                    Other Currencies
                  </div>
                  {allCurrencies
                    .filter(c => !popularCurrencies.find(p => p.code === c.code))
                    .map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                size="icon"
                onClick={swapCurrencies}
                className="rounded-full"
              >
                <ArrowUpDown className="w-4 h-4" />
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To
              </label>
              <Select value={toCurrency} onValueChange={setToCurrency}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <div className="font-semibold text-xs text-gray-500 px-2 py-1 bg-gray-50">
                    Top 5 Main Currencies
                  </div>
                  {popularCurrencies.map((currency) => (
                    <SelectItem key={currency.code} value={currency.code}>
                      {currency.symbol} {currency.code} - {currency.name}
                    </SelectItem>
                  ))}
                  <div className="font-semibold text-xs text-gray-500 px-2 py-1 bg-gray-50 mt-2">
                    Other Currencies
                  </div>
                  {allCurrencies
                    .filter(c => !popularCurrencies.find(p => p.code === c.code))
                    .map((currency) => (
                      <SelectItem key={currency.code} value={currency.code}>
                        {currency.symbol} {currency.code} - {currency.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Refresh Button */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={fetchExchangeRates}
              disabled={loading}
              className="flex items-center space-x-2"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>Refresh Rates</span>
            </Button>
          </div>

          {/* Result */}
          {result && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Conversion Result</h3>
              <p className="text-2xl font-bold text-blue-600">{result}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
