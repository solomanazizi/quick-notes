export type SectionOptionsConfig = {
    fieldLabel: string;
    fieldType: FieldTypes;
    fieldOptions: string[];
  }

export type FieldTypes = 'buttonSelect' | 'dropdownSelect' | 'text';