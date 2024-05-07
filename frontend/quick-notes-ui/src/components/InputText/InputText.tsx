import React, { useState } from 'react';
import './InputText.scss';

type Props = {
  onInputChange: (newText: string) => void;
};

const InputText: React.FC<Props> = ({ onInputChange }: Props) => {
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
        placeholder="Type new option here..."
      ></input>
    </div>
  );
};

export default InputText;
