import React from 'react';
import { Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">日本文化クイズ</h1>
        <p className="text-gray-600 mb-8">画像を選んで日本の文化についての知識をテストしましょう！</p>
        <button
          onClick={onStart}
          className="group flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
        >
          <Play className="w-5 h-5" />
          <span>スタート</span>
        </button>
      </div>
    </div>
  );
};