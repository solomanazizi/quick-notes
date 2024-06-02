import React, { useState } from 'react';
import './InputText.scss';

type Props = {
  placeholderText: string;
  value?: string;
  onInputChange: (newText: string) => void;
};

const InputText: React.FC<Props> = ({
  placeholderText,
  value,
  onInputChange,
}: Props) => {
  const [text, setText] = useState('');

  const handleChange = (event: any) => {
    const newText = event.target.value;
    setText(newText);
    onInputChange(newText); // Pass the new text value to the parent component
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        value={value}
        placeholder={placeholderText}
      ></input>
    </div>
  );
};

export default InputText;
