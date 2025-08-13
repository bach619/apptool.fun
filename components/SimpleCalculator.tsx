'use client';

import { useState, useEffect, useCallback } from 'react';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ShareButton from '@/components/ShareButton';
import { useUrlParams } from '@/hooks/useUrlParams';
import { toast } from 'sonner';

export default function SimpleCalculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const urlParams = useUrlParams();

  // Format number with thousand separators
  const formatNumber = useCallback((numStr: string) => {
    if (numStr.includes('.')) {
      const parts = numStr.split('.');
      return `${parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${parts[1]}`;
    }
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }, []);

  // Load data from URL params on mount
  useEffect(() => {
    if (urlParams.display) {
      setDisplay(urlParams.display);
      toast.success('Loaded shared calculation!');
    }
  }, [urlParams]);

  const inputNumber = useCallback((num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  }, [display, waitingForOperand]);

  const inputDecimal = useCallback(() => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  }, [display, waitingForOperand]);

  const clear = useCallback(() => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  }, []);

  const backspace = useCallback(() => {
    if (waitingForOperand) return;
    
    setDisplay(prev => {
      if (prev.length === 1 || (prev.length === 2 && prev.startsWith('-'))) {
        return '0';
      }
      return prev.slice(0, -1);
    });
  }, [waitingForOperand]);

  const inputPercent = useCallback(() => {
    const value = parseFloat(display.replace(/,/g, ''));
    const result = value / 100;
    setDisplay(String(result));
  }, [display]);

  const performOperation = useCallback((nextOperation: string) => {
    const inputValue = parseFloat(display.replace(/,/g, ''));

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const result = calculate(previousValue, inputValue, operation);
      setDisplay(String(result));
      setPreviousValue(result);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  }, [display, previousValue, operation]);

  const calculate = useCallback((first: number, second: number, op: string) => {
    switch (op) {
      case '+': return first + second;
      case '-': return first - second;
      case '×': return first * second;
      case '÷': return second !== 0 ? first / second : first;
      default: return second;
    }
  }, []);

  const handleEquals = useCallback(() => {
    if (previousValue === null || operation === null) return;
    
    const inputValue = parseFloat(display.replace(/,/g, ''));
    const result = calculate(previousValue, inputValue, operation);
    
    setDisplay(String(result));
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(true);
  }, [previousValue, operation, display, calculate]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const { key } = event;

    if (/[0-9]/.test(key)) {
      inputNumber(key);
    } else if (key === '.') {
      inputDecimal();
    } else if (key === '+' || key === '-') {
      performOperation(key);
    } else if (key === '*') {
      performOperation('×');
    } else if (key === '/') {
      performOperation('÷');
    } else if (key === 'Enter' || key === '=') {
      handleEquals();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
      clear();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key === '%') {
      inputPercent();
    }
  }, [inputNumber, inputDecimal, performOperation, handleEquals, clear, backspace, inputPercent]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Styling classes
  const baseButtonClass = "h-14 rounded-xl shadow-md transition-all duration-200 active:scale-95 font-medium";
  const numberButtonClass = `${baseButtonClass} bg-white hover:bg-gray-50 text-gray-800 border border-gray-200`;
  const operatorButtonClass = `${baseButtonClass} bg-indigo-100 hover:bg-indigo-200 text-indigo-700`;
  const functionButtonClass = `${baseButtonClass} bg-gray-100 hover:bg-gray-200 text-gray-700`;
  const equalsButtonClass = `${baseButtonClass} bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white`;
  const clearButtonClass = `${baseButtonClass} bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white`;

  return (
    <div className="max-w-md mx-auto p-4">
      <Card className="border-0 shadow-xl rounded-2xl overflow-hidden bg-white">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-center space-x-2 text-indigo-600">
            <Calculator className="w-5 h-5" />
            <span>Modern Calculator</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="flex justify-end">
            <div className="bg-white border border-gray-200 hover:bg-gray-50 rounded-md">
              <ShareButton 
                data={{ display: formatNumber(display) }}
                toolName="Calculator"
              />
            </div>
          </div>

          {/* Display with light background and dark text */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-200">
            <div className="text-right text-4xl font-mono text-gray-800 font-light tracking-wide truncate">
              {formatNumber(display)}
            </div>
          </div>

          {/* Buttons - Final layout with equals button positioned correctly */}
          <div className="grid grid-cols-4 gap-3">
            {/* Row 1 */}
            <Button className={clearButtonClass} onClick={clear}>
              C
            </Button>
            <Button className={functionButtonClass} onClick={backspace}>
              ⌫
            </Button>
            <Button className={functionButtonClass} onClick={inputPercent}>
              %
            </Button>
            <Button 
              className={operatorButtonClass} 
              onClick={() => performOperation('÷')}
            >
              ÷
            </Button>

            {/* Row 2 */}
            <Button className={numberButtonClass} onClick={() => inputNumber('7')}>
              7
            </Button>
            <Button className={numberButtonClass} onClick={() => inputNumber('8')}>
              8
            </Button>
            <Button className={numberButtonClass} onClick={() => inputNumber('9')}>
              9
            </Button>
            <Button 
              className={operatorButtonClass} 
              onClick={() => performOperation('×')}
            >
              ×
            </Button>

            {/* Row 3 */}
            <Button className={numberButtonClass} onClick={() => inputNumber('4')}>
              4
            </Button>
            <Button className={numberButtonClass} onClick={() => inputNumber('5')}>
              5
            </Button>
            <Button className={numberButtonClass} onClick={() => inputNumber('6')}>
              6
            </Button>
            <Button 
              className={operatorButtonClass} 
              onClick={() => performOperation('-')}
            >
              -
            </Button>

            {/* Row 4 */}
            <Button className={numberButtonClass} onClick={() => inputNumber('1')}>
              1
            </Button>
            <Button className={numberButtonClass} onClick={() => inputNumber('2')}>
              2
            </Button>
            <Button className={numberButtonClass} onClick={() => inputNumber('3')}>
              3
            </Button>
            <Button 
              className={operatorButtonClass} 
              onClick={() => performOperation('+')}
            >
              +
            </Button>

            {/* Row 5 - Final layout with equals button to the right of decimal */}
            <Button className={`${numberButtonClass} col-span-2`} onClick={() => inputNumber('0')}>
              0
            </Button>
            <Button className={numberButtonClass} onClick={inputDecimal}>
              .
            </Button>
            <Button 
              className={equalsButtonClass}
              onClick={handleEquals}
            >
              =
            </Button>
          </div>

          <div className="text-center text-xs text-gray-400 pt-2">
            <p>Use keyboard for quick calculations</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}