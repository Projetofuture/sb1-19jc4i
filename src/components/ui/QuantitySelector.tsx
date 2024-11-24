import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
}

const QuantitySelector = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center border rounded-lg">
      <button
        onClick={handleDecrease}
        className="p-2 hover:bg-gray-100 rounded-l-lg"
        disabled={quantity <= min}
      >
        <Minus size={16} />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
        className="w-12 text-center border-x focus:outline-none"
      />
      <button
        onClick={handleIncrease}
        className="p-2 hover:bg-gray-100 rounded-r-lg"
        disabled={quantity >= max}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default QuantitySelector;