import React, { useState } from 'react';
import styles from './Section.module.scss';
import ButtonSelect from '../ButtonSelect/ButtonSelect';
import { SectionOptionsConfig } from '../../Shared/types/Global.types';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button/Button';

type Props = {
  title: string;
  subTitle?: string;
  config: SectionOptionsConfig[];
};

const Section: React.FC<Props> = ({
  title,
  subTitle,
  config,
}: Props): JSX.Element => {
  //State
  const [emptyLine, setEmptyLine] = useState<boolean>(false);

  //Methods
  const getButtonSelect = (fieldConfig: SectionOptionsConfig): JSX.Element => {
    return (
      <div className={styles.field}>
        <span className={styles.fieldLabel}>{fieldConfig.fieldLabel} :</span>
        <span className={styles.fieldControl}>
          <ButtonSelect buttonLabels={fieldConfig.fieldOptions} />
        </span>
      </div>
    );
  };

  const getOptionsField = (fieldConfig: SectionOptionsConfig): JSX.Element => {
    switch (fieldConfig.fieldType) {
      case 'buttonSelect':
        return getButtonSelect(fieldConfig);
      default:
        return <div>default option</div>;
    }
  };

  const getNewOptionInput = () => {
    setEmptyLine(true);
  };

  return emptyLine ? (
    <div>empty line</div>
  ) : (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>

      {config.map((option) => (
        <div key={uuidv4()}>{getOptionsField(option)}</div>
      ))}

      <Button label="+ Add Line" onClick={getNewOptionInput} />
    </div>
  );
};

export default Section;
