import React from 'react';
import styles from './EditSection.module.scss';
import Icon from '../Icon/Icon';

type Props = {
  sectionTitle: string;
  onDeleteSection: () => void;
};

const EditSection: React.FC<Props> = ({
  sectionTitle,
  onDeleteSection,
}: Props): JSX.Element => {
  const onEditTitleClick = () => {
    console.log('edit click');
  };

  const onAddFieldClick = () => {
    console.log('add click');
  };

  return (
    <div className={styles.container}>
      <h1>
        <span className={styles.row}>
          {sectionTitle}
          <Icon iconName="edit" onIconClick={onEditTitleClick} />
          <Icon iconName="delete" onIconClick={onDeleteSection} />
        </span>
      </h1>
      <span className={styles.row}>
        <Icon iconName="add" onIconClick={onAddFieldClick} />
        <span>add field</span>
      </span>
    </div>
  );
};

export default EditSection;
