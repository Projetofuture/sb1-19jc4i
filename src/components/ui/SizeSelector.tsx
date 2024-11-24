import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onChange: (size: string) => void;
}

const SizeSelector = ({ sizes, selectedSize, onChange }: SizeSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Selecione o Tamanho:</h3>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className={`py-2 border rounded transition-colors ${
              selectedSize === size
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-gray-400'
            }`}
            onClick={() => onChange(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SizeSelector;