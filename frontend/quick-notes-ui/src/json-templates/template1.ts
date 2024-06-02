import { SectionOptionsConfig } from '../Shared/types/Global.types';

export const config1: SectionOptionsConfig[] = [
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
