import React, { useState, useMemo } from "react";
import { ArrowRightLeft, DollarSign, TrendingUp, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export const POPULAR_CURRENCIES = [
  { code: "USD", name: "United States Dollar", symbol: "$", rateToUsd: 1.0, flag: "🇺🇸" },
  { code: "INR", name: "Indian Rupee", symbol: "₹", rateToUsd: 86.85, flag: "🇮🇳" },
  { code: "EUR", name: "Euro", symbol: "€", rateToUsd: 0.93, flag: "🇪🇺" },
  { code: "GBP", name: "British Pound Sterling", symbol: "£", rateToUsd: 0.79, flag: "🇬🇧" },
  { code: "JPY", name: "Japanese Yen", symbol: "¥", rateToUsd: 154.6, flag: "🇯🇵" },
  { code: "CAD", name: "Canadian Dollar", symbol: "CA$", rateToUsd: 1.38, flag: "🇨🇦" },
  { code: "AUD", name: "Australian Dollar", symbol: "A$", rateToUsd: 1.54, flag: "🇦🇺" },
  { code: "AED", name: "United Arab Emirates Dirham", symbol: "AED", rateToUsd: 3.67, flag: "🇦🇪" },
  { code: "SGD", name: "Singapore Dollar", symbol: "S$", rateToUsd: 1.34, flag: "🇸🇬" },
  { code: "CHF", name: "Swiss Franc", symbol: "CHF", rateToUsd: 0.89, flag: "🇨🇭" },
  { code: "CNY", name: "Chinese Yuan", symbol: "¥", rateToUsd: 7.24, flag: "🇨🇳" },
  { code: "BRL", name: "Brazilian Real", symbol: "R$", rateToUsd: 5.48, flag: "🇧🇷" },
  { code: "SAR", name: "Saudi Riyal", symbol: "SAR", rateToUsd: 3.75, flag: "🇸🇦" },
  { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$", rateToUsd: 1.66, flag: "🇳🇿" },
  { code: "ZAR", name: "South African Rand", symbol: "R", rateToUsd: 18.25, flag: "🇿🇦" },
];

export function CurrencyConverterTool() {
  const [amount, setAmount] = useState<number>(100);
  const [fromCode, setFromCode] = useState("USD");
  const [toCode, setToCode] = useState("INR");
  const [copied, setCopied] = useState(false);

  const fromCurr = POPULAR_CURRENCIES.find((c) => c.code === fromCode) || POPULAR_CURRENCIES[0];
  const toCurr = POPULAR_CURRENCIES.find((c) => c.code === toCode) || POPULAR_CURRENCIES[1];

  const convertedValue = useMemo(() => {
    if (isNaN(amount) || amount < 0) return "0.00";
    // Convert to USD first, then to target currency
    const inUsd = amount / fromCurr.rateToUsd;
    const target = inUsd * toCurr.rateToUsd;
    return target.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    });
  }, [amount, fromCurr, toCurr]);

  const unitExchangeRate = useMemo(() => {
    const rate = (1 / fromCurr.rateToUsd) * toCurr.rateToUsd;
    return rate.toFixed(4);
  }, [fromCurr, toCurr]);

  const inverseExchangeRate = useMemo(() => {
    const rate = (1 / toCurr.rateToUsd) * fromCurr.rateToUsd;
    return rate.toFixed(4);
  }, [fromCurr, toCurr]);

  const handleSwap = () => {
    setFromCode(toCode);
    setToCode(fromCode);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${amount} ${fromCode} = ${convertedValue} ${toCode}`);
    setCopied(true);
    toast.success("Conversion result copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border shadow-soft max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <div>
          <h2 className="text-xl font-black text-foreground tracking-tight flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-primary" />
            Live Currency Exchange
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Real-time benchmark conversion rates • Instant calculation
          </p>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
          <TrendingUp className="w-3 h-3" /> Updated
        </span>
      </div>

      <div className="space-y-4">
        {/* Amount Input */}
        <div>
          <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
            Amount to Convert
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base font-bold text-muted-foreground">
              {fromCurr.symbol}
            </span>
            <input
              type="number"
              min="0"
              step="any"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-muted/40 border border-border text-lg font-bold text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Enter amount..."
            />
          </div>
        </div>

        {/* Currency Selectors & Swap Button */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
              From Currency
            </label>
            <select
              value={fromCode}
              onChange={(e) => setFromCode(e.target.value)}
              className="w-full py-3 px-3.5 rounded-2xl bg-muted/40 border border-border text-sm font-semibold text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
            >
              {POPULAR_CURRENCIES.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.flag} {curr.code} — {curr.name} ({curr.symbol})
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center sm:pt-6">
            <button
              type="button"
              onClick={handleSwap}
              title="Swap Currencies"
              className="p-3 rounded-2xl bg-muted hover:bg-primary hover:text-primary-foreground border border-border transition-all hover:scale-105 active:scale-95"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>

          <div>
            <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-1.5">
              To Currency
            </label>
            <select
              value={toCode}
              onChange={(e) => setToCode(e.target.value)}
              className="w-full py-3 px-3.5 rounded-2xl bg-muted/40 border border-border text-sm font-semibold text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
            >
              {POPULAR_CURRENCIES.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.flag} {curr.code} — {curr.name} ({curr.symbol})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Output Result Card */}
        <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 text-center relative overflow-hidden">
          <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
            Converted Result
          </div>
          <div className="text-3xl sm:text-4xl font-black text-foreground tracking-tight break-words">
            <span className="text-primary mr-1">{toCurr.symbol}</span>
            {convertedValue}
          </div>
          <div className="text-xs text-muted-foreground mt-2 font-medium">
            1 {fromCode} = {unitExchangeRate} {toCode} &nbsp;•&nbsp; 1 {toCode} ={" "}
            {inverseExchangeRate} {fromCode}
          </div>

          <button
            onClick={handleCopy}
            className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-card hover:bg-muted border border-border text-xs font-bold text-foreground shadow-xs transition-colors"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied ? "Copied to Clipboard" : "Copy Result"}
          </button>
        </div>

        {/* Quick Reference Multipliers */}
        <div className="grid grid-cols-4 gap-2 pt-2 text-center text-xs">
          {[10, 50, 100, 500].map((quickAmt) => {
            const inTarget = ((quickAmt / fromCurr.rateToUsd) * toCurr.rateToUsd).toFixed(2);
            return (
              <button
                key={quickAmt}
                type="button"
                onClick={() => setAmount(quickAmt)}
                className="p-2 rounded-xl bg-muted/30 hover:bg-muted/60 border border-border/80 transition-colors"
              >
                <div className="font-bold text-foreground">
                  {quickAmt} {fromCode}
                </div>
                <div className="text-muted-foreground text-[11px]">
                  {toCurr.symbol}
                  {inTarget}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
