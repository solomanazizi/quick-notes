import React, { useState } from 'react';
import styles from './EditTemplatePage.module.scss';
import Button from '../../Components/Button/Button';
import InputText from '../../Components/InputText/InputText';
import EditSection from '../../Components/EditSection/EditSection';
import { v4 as uuidv4 } from 'uuid';

type Props = {};

const EditTemplatePage: React.FC<Props> = ({}: Props): JSX.Element => {
  //State
  const [sections, setSections] = useState<string[]>([]);
  const [inputText, setInputText] = useState<string>('');

  //Methods
  const inputTextChange = (textValue: string) => {
    setInputText(textValue);
  };

  const addSection = () => {
    setSections([...sections, inputText]);
    setInputText('');
  };

  const deleteSection = (index: number) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  return (
    <div className={styles.container}>
      {sections.map((section, index) => {
        return (
          <EditSection
            sectionTitle={section}
            onDeleteSection={() => deleteSection(index)}
            key={uuidv4()}
          />
        );
      })}
      <span className={styles.row}>
        <InputText
          placeholderText="Type section name here..."
          value={inputText}
          onInputChange={inputTextChange}
        />
        <Button label="+ Add Section" onClick={addSection} />
      </span>
    </div>
  );
};

export default EditTemplatePage;
