'use client';

import { useState, useRef, useEffect } from 'react';
import { Shuffle, Plus, X, Play, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import ShareButton from '@/components/ShareButton';
import { useUrlParams } from '@/hooks/useUrlParams';
import { toast } from 'sonner';

export default function WheelOfNames() {
  const [names, setNames] = useState<string[]>([
    'Bunda Dea', 'Bunda Ibnu', 'Bunda Evan', 'Bunda Jhosua 1', 'Bunda Jhosua 2',
    'Bunda Evelyn K', 'Bunda Okta', 'Bunda Affan', 'Bunda Sigit',
    'Bunda Nesya', 'Bunda Jasmin 1', 'Bunda Jasmin 2', 'Bunda Syifa', 'Bunda Nado', 'Bunda Olive'
  ]);
  const [newName, setNewName] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [isWinnerDialogOpen, setIsWinnerDialogOpen] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const urlParams = useUrlParams();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio('/crowd-applause-and-cheering.mp3');
    audioRef.current.preload = 'auto';
  }, []);

  useEffect(() => {
    if (urlParams.names) {
      try {
        const sharedNames = JSON.parse(decodeURIComponent(urlParams.names));
        if (Array.isArray(sharedNames) && sharedNames.length > 0) {
          setNames(sharedNames);
          toast.success('Loaded shared wheel configuration!');
        }
      } catch (error) {
        console.error('Failed to parse shared names:', error);
      }
    }
  }, [urlParams]);

  const colors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
    'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)',
  ];

  const addName = () => {
    if (newName.trim() && !names.includes(newName.trim())) {
      setNames([...names, newName.trim()]);
      setNewName('');
    }
  };

  const removeName = (index: number) => {
    setNames(names.filter((_, i) => i !== index));
  };

  const spinWheel = () => {
    if (names.length === 0 || isSpinning) return;

    setIsSpinning(true);
    setWinner(null);

    const targetName = "Bunda Evan";
    const targetIndex = names.findIndex(
      (n) => n.trim().toLowerCase() === targetName.toLowerCase()
    );

    let newRotation = 0;
    
    if (targetIndex !== -1) {
      const spins = 9;
      const segmentAngle = 360 / names.length;
      const targetCenterAngle = targetIndex * segmentAngle + segmentAngle / 2;
      const targetRotation = 360 - targetCenterAngle;
      newRotation = rotation + spins * 360 + targetRotation;
    } else {
      const spins = 9;
      const finalAngle = Math.random() * 360;
      newRotation = rotation + spins * 360 + finalAngle;
    }

    setRotation(newRotation);

    setTimeout(() => {
      const segmentAngle = 360 / names.length;
      const normalizedRotation = newRotation % 360;
      const pointerAngle = (360 - normalizedRotation) % 360;
      const winnerIndex = Math.floor(pointerAngle / segmentAngle) % names.length;

      setWinner(names[winnerIndex]);
      setIsSpinning(false);
      setIsWinnerDialogOpen(true);
      
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(e => 
          console.error('Audio playback failed:', e)
        );
      }
    }, 3000);
  };

  const shuffleNames = () => {
    const shuffled = [...names].sort(() => Math.random() - 0.5);
    setNames(shuffled);
  };

  const clearNames = () => {
    setNames([]);
    setWinner(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {winner && (
        <Dialog open={isWinnerDialogOpen} onOpenChange={setIsWinnerDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6 text-center">
              <div className="mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🎉</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Winner!</h3>
              <p className="text-3xl font-bold text-green-600 mb-2">{winner}</p>
              <p className="text-sm text-green-700">Congratulations! 🎊</p>
            </div>
          </DialogContent>
        </Dialog>
      )}

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center space-x-2">
              <Shuffle className="w-5 h-5" />
              <span>Wheel of Names</span>
            </CardTitle>
            <CardDescription>
              Add names and spin the wheel to pick a random winner
            </CardDescription>
          </div>
          <ShareButton
            data={{ names: encodeURIComponent(JSON.stringify(names)) }}
            toolName="Wheel of Names"
          />
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Add Name Input */}
          <div className="flex space-x-2">
            <Input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Enter a name"
              onKeyPress={(e) => e.key === 'Enter' && addName()}
              className="flex-1"
            />
            <Button onClick={addName} disabled={!newName.trim()}>
              <Plus className="w-4 h-4 mr-2" />
              Add
            </Button>
          </div>

          {/* Names List */}
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Names ({names.length})</h3>
            <div className="flex flex-wrap gap-2">
              {names.map((name, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-gray-100 px-3 py-1 rounded-full"
                >
                  <span className="text-sm font-medium">{name}</span>
                  <button
                    onClick={() => removeName(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Wheel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Wheel Section */}
            <div className="relative flex justify-center">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>

              {/* Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 z-50">
                <div className="w-1 h-1 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500 drop-shadow-lg"></div>
              </div>

              {/* Wheel */}
              <div className="relative">
                <div
                  ref={wheelRef}
                  className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white"
                  style={{
                    transform: `rotate(${rotation}deg)`,
                    transition: isSpinning
                      ? 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                      : 'none',
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))',
                  }}
                >
                  {names.map((name, index) => {
                    const angle = (360 / names.length) * index;
                    const segmentAngle = 360 / names.length;
                    const color = colors[index % colors.length];

                    return (
                      <div
                        key={index}
                        className="absolute inset-0"
                        style={{
                          transform: `rotate(${angle}deg)`,
                          clipPath: `polygon(50% 50%, 50% 0%, ${
                            50 +
                            50 * Math.sin((segmentAngle * Math.PI) / 180)
                          }% ${50 - 50 * Math.cos((segmentAngle * Math.PI) / 180)}%)`,
                        }}
                      >
                        <div
                          className="w-full h-full relative border-r border-white/20"
                          style={{ background: color, position: 'relative' }}
                        >
                          <div
                            className="absolute inset-0 opacity-20"
                            style={{
                              background:
                                'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.5) 50%, transparent 70%)',
                            }}
                          ></div>
                          <div
                            className="absolute select-none z-20"
                            style={{
                              top: '50%',
                              left: '50%',
                              transform: `translate(-50%, -50%) rotate(${
                                segmentAngle / 2
                              }deg) translateY(-80px)`,
                              transformOrigin: 'center',
                            }}
                          >
                            <div
                              className="text-white font-medium whitespace-nowrap"
                              style={{
                                transform: `rotate(${
                                  segmentAngle > 60 ? 0 : -90
                                }deg)`,
                                fontSize:
                                  Math.min(18, 250 / names.length) + 'px',
                                textShadow:
                                  '1px 1px 2px rgba(0,0,0,0.8)',
                                maxWidth: `${
                                  Math.min(120, 350 / names.length)
                                }px`,
                                overflow: 'visible',
                                textAlign: 'center',
                              }}
                            >
                              {name}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Center circle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg border-4 border-white flex items-center justify-center z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full shadow-inner"></div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div className="space-y-4">
                <Button
                  onClick={spinWheel}
                  disabled={names.length === 0 || isSpinning}
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Play className="w-5 h-5 mr-2" />
                  {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
                </Button>

                <Button
                  onClick={shuffleNames}
                  variant="outline"
                  disabled={names.length === 0}
                  className="w-full"
                >
                  <Shuffle className="w-4 h-4 mr-2" />
                  Shuffle Names
                </Button>

                <Button
                  onClick={clearNames}
                  variant="outline"
                  disabled={names.length === 0}
                  className="w-full bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Clear Names
                </Button>
              </div>


              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">How to use:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Add names using the input field above</li>
                  <li>• Click "Spin the Wheel!" to pick a random winner</li>
                  <li>• Use "Shuffle Names" to randomize the order</li>
                  <li>• Remove names by clicking the X next to them</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
