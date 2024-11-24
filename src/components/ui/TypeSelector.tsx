import React from 'react';

interface ProductType {
  id: string;
  name: string;
  desc: string;
}

interface TypeSelectorProps {
  types: ProductType[];
  selectedType: string;
  onChange: (typeId: string) => void;
}

const TypeSelector = ({ types, selectedType, onChange }: TypeSelectorProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Selecione a opção de Camiseta:</h3>
      <div className="grid grid-cols-1 gap-4">
        {types.map((type) => (
          <button
            key={type.id}
            className={`p-4 border rounded-lg text-left transition-colors ${
              selectedType === type.id
                ? 'border-black'
                : 'border-gray-200 hover:border-gray-400'
            }`}
            onClick={() => onChange(type.id)}
          >
            <p className="font-medium">{type.name}</p>
            <p className="text-gray-600 text-sm">{type.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TypeSelector;