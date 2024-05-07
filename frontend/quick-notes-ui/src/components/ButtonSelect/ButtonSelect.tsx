import React, { SyntheticEvent, useState } from 'react';
import Button from '../Button/Button';
import { v4 as uuidv4 } from 'uuid';
import InputText from '../InputText/InputText';
import styles from './ButtonSelect.module.scss';

type Props = {
  buttonLabels: string[];
};

const ButtonSelect: React.FC<Props> = ({
  buttonLabels,
}: Props): JSX.Element => {
  //State
  const [selectedButton, setSelectedButton] = useState<string>('');
  const [newOption, setNewOption] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');

  //Methods
  const onClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    setSelectedButton((e.target as HTMLButtonElement).id);
  };

  const resetOptions = (): void => {
    setSelectedButton('');
  };

  const addOption = () => {
    console.log('add option');
  };

  const getNewOptionInput = () => {
    setNewOption(true);
  };

  const getSelectedElement = (): JSX.Element => {
    return (
      <div>
        <Button label={selectedButton} onClick={onClick} disabled={true} />
        <Button label="undo" onClick={resetOptions} />
      </div>
    );
  };

  const getAllOptionsElement = (): JSX.Element => {
    return (
      <div>
        {buttonLabels.map((label) => (
          <Button key={uuidv4()} id={label} label={label} onClick={onClick} />
        ))}
        <Button
          label="Add option"
          theme="secondary"
          onClick={getNewOptionInput}
        />
      </div>
    );
  };

  const selectNewOption = () => {
    console.log('new option is');
    setSelectedButton(inputText);
    setNewOption(false);
  };

  const getAddOptionElement = (): JSX.Element => {
    return (
      <span className={styles.row}>
        <InputText onInputChange={onInputTextChange} />
        <Button label="Done" onClick={selectNewOption} />
      </span>
    );
  };

  const onInputTextChange = (textValue: string) => {
    setInputText(textValue);
  };

  const showSelectedButton = (): JSX.Element => {
    return !!selectedButton ? (
      <div>{getSelectedElement()}</div>
    ) : newOption ? (
      <div>{getAddOptionElement()}</div>
    ) : (
      <div>{getAllOptionsElement()}</div>
    );
  };

  return <span>{showSelectedButton()}</span>;
};

export default ButtonSelect;
