import React from 'react';
import Section from '../Section/Section';
import styles from './Template.module.scss';
import { SectionOptionsConfig } from '../../Shared/types/Global.types';
import { config1 } from '../../json-templates/template1';

type Props = {};

const Template: React.FC<Props> = (props: Props): JSX.Element => {
  const config: SectionOptionsConfig[] = [
    {
      fieldLabel: 'Nurse',
      fieldType: 'buttonSelect',
      fieldOptions: ['Nurse A', 'Nurse B', 'Nurse C'],
    },
    {
      fieldLabel: 'MH Checked',
      fieldType: 'buttonSelect',
      fieldOptions: ['No Changes', 'Changes Updated'],
    },
    {
      fieldLabel: 'Addio',
      fieldType: 'text',
      fieldOptions: [],
    },
  ];

  return (
    <div className={styles.container}>
      <Section title="Section Title 1" config={config1} />
      <Section title="Section Title 2" config={config} />
    </div>
  );
};

export default Template;
