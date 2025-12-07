import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const DataStorageConverter = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fromUnit, setFromUnit] = useState<string>('MB');
  const [toUnit, setToUnit] = useState<string>('GB');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Conversion factors relative to bytes
  const units: Record<string, number> = {
    bytes: 1,
    KB: 1024,
    MB: 1024 * 1024,
    GB: 1024 * 1024 * 1024,
    TB: 1024 * 1024 * 1024 * 1024
  };

  const unitOptions = ['bytes', 'KB', 'MB', 'GB', 'TB'];

  const convertStorage = () => {
    setError('');
    
    // Validate input
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setError('Please enter a valid number');
      setResult('');
      return;
    }
    
    if (value < 0) {
      setError('Value cannot be negative');
      setResult('');
      return;
    }
    
    // Convert to bytes first
    const bytesValue = value * units[fromUnit];
    
    // Convert to target unit
    const convertedValue = bytesValue / units[toUnit];
    
    setResult(convertedValue.toFixed(6));
  };

  useEffect(() => {
    if (inputValue) {
      convertStorage();
    } else {
      setResult('');
    }
  }, [inputValue, fromUnit, toUnit]);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">Data Storage Converter</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div className="space-y-2">
            <Label htmlFor="inputValue">From</Label>
            <div className="flex gap-2">
              <Input
                id="inputValue"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter value"
              />
              <Select value={fromUnit} onValueChange={setFromUnit}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  {unitOptions.map(unit => (
                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="result">To</Label>
            <div className="flex gap-2">
              <Input
                id="result"
                type="text"
                value={result}
                readOnly
                placeholder="Result"
              />
              <Select value={toUnit} onValueChange={setToUnit}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  {unitOptions.map(unit => (
                    <SelectItem key={unit} value={unit}>{unit}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}
        
        <div className="text-sm text-gray-600">
          <p className="mb-2"><strong>Conversion Formula:</strong></p>
          <p>1 GB = 1024 MB</p>
          <p>1 MB = 1024 KB</p>
          <p>1 KB = 1024 bytes</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataStorageConverter;
