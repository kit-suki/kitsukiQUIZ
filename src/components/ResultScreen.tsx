import React from 'react';
import { RotateCcw, Trophy, Home } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  score,
  totalQuestions,
  onRestart,
  onHome,
}) => {
  const percentage = (score / totalQuestions) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <Trophy className="w-16 h-16 mx-auto text-yellow-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">クイズ完了！</h2>
        <div className="text-6xl font-bold text-purple-600 mb-4">
          {score}/{totalQuestions}
        </div>
        <p className="text-gray-600 text-lg mb-8">
          正解率: {percentage}%
        </p>
        <div className="flex flex-col gap-4">
          <button
            onClick={onRestart}
            className="group flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <RotateCcw className="w-5 h-5" />
            <span>もう一度挑戦</span>
          </button>
          <button
            onClick={onHome}
            className="group flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105"
          >
            <Home className="w-5 h-5" />
            <span>スタート画面に戻る</span>
          </button>
        </div>
      </div>
    </div>
  );
};