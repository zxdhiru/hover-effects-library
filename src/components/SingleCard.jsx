import React, { useState } from 'react';
import { useParams } from 'react-router';
import { effects } from './effects';

const SingleCard = () => {
  const { effectName } = useParams();
  const effect = effects.find((effect) => effect.name === effectName);

  const [tailwindCopied, setTailwindCopied] = useState(false);
  const [vanillaCopied, setVanillaCopied] = useState(false);

  const copyToClipboard = (text, setCopiedState) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 5000);
  };

  return (
    <div className="text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-1">Effect: {effectName}</h1>
      <p className="text-xl text-center mb-8">{effect?.description}</p>
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 bg-white rounded-lg p-16 shadow-xl">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div
            className={`bg-gray-400 rounded-lg p-6 flex justify-center items-center w-full max-w-sm h-40 text-xl font-semibold border border-gray-800/25 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl ${effect?.className}`}
          >
            {effectName}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="bg-gray-50 text-gray-800 p-6 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Tailwind ClassName</h2>
            <div className="flex items-center gap-4">
              <p className="text-lg font-mono bg-gray-100 p-4 rounded-lg border border-gray-300 flex-1 flex justify-between items-center">
                {effect?.className || "Effect not found"}
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none"
                onClick={() =>
                  copyToClipboard(effect?.className || "Effect not found", setTailwindCopied)
                }
              >
                {tailwindCopied ? "Copied!" : "Copy"}
              </button>
              </p>
            </div>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-indigo-700">Vanilla CSS</h2>
            <div className="flex items-center gap-4">
              <p className="text-lg font-mono bg-gray-100 p-4 rounded-lg border border-gray-300 flex-1 flex justify-between items-center">
                {effect?.vanillaCSS || "Vanilla CSS not available"}
              <button
                className="bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 focus:outline-none"
                onClick={() =>
                  copyToClipboard(effect?.vanillaCSS || "Vanilla CSS not available", setVanillaCopied)
                }
              >
                {vanillaCopied ? "Copied!" : "Copy"}
              </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
