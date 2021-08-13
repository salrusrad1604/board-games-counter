export enum type {
  string = 'string',
  input = 'input',
  checkbox = 'checkbox',
  empty = 'empty',
  main = 'main',
  question = 'question',
  outTable = 'outTable',
}

export type fieldType = type.string | type.input | type.checkbox | type.empty | type.main | type.question | type.outTable;

export type FieldList = keyof Field;

export interface fieldCluedo {
  fieldType: fieldType;
  value?: string | null;
  click?: string;
}

export interface Field {
  main: fieldCluedo;
  my: fieldCluedo;
  one: fieldCluedo;
  two: fieldCluedo;
  three: fieldCluedo;
  four: fieldCluedo;
  five: fieldCluedo;
  six: fieldCluedo;
}

export const initFields: Field[] = [
  {
    main: { fieldType: type.outTable, value: 'Hide', click: 'hideDiv' },
    my: { fieldType: type.empty },
    one: { fieldType: type.input, value: null },
    two: { fieldType: type.input, value: null },
    three: { fieldType: type.input, value: null },
    four: { fieldType: type.input, value: null },
    five: { fieldType: type.input, value: null },
    six: { fieldType: type.input, value: null },
  },
  {
    main: { fieldType: type.question, value: 'КТО?' },
    my: { fieldType: type.empty },
    one: { fieldType: type.empty },
    two: { fieldType: type.empty },
    three: { fieldType: type.empty },
    four: { fieldType: type.empty },
    five: { fieldType: type.empty },
    six: { fieldType: type.empty },
  },
  {
    main: { fieldType: type.main, value: 'ГРИН' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'МАСТАРД' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ОРКИД' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ПИКОК' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ПЛАМ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'СКАРЛЕТ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  ///////////////////////////////////////////////////////////////////////////////////////////
  {
    main: { fieldType: type.question, value: 'ЧЕМ?' },
    my: { fieldType: type.empty },
    one: { fieldType: type.empty },
    two: { fieldType: type.empty },
    three: { fieldType: type.empty },
    four: { fieldType: type.empty },
    five: { fieldType: type.empty },
    six: { fieldType: type.empty },
  },
  {
    main: { fieldType: type.main, value: 'ПОДСВЕЧНИК' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'КИНЖАЛ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'СВИНЦ. ТРУБА' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'РЕВОЛЬВЕР' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ВЕРЕВКА' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ГАЕЧ. КЛЮЧ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  ///////////////////////////////////////////////////////////////////////////////////////////
  {
    main: { fieldType: type.question, value: 'ГДЕ?' },
    my: { fieldType: type.empty },
    one: { fieldType: type.empty },
    two: { fieldType: type.empty },
    three: { fieldType: type.empty },
    four: { fieldType: type.empty },
    five: { fieldType: type.empty },
    six: { fieldType: type.empty },
  },
  {
    main: { fieldType: type.main, value: 'БАЛЬН. ЗАЛ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'БИЛЬЯРДНАЯ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ЗИМНИЙ САД' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'СТОЛОВАЯ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ХОЛЛ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'КУХНЯ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'БИБЛИОТЕКА' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'ГОСТИНАЯ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
  {
    main: { fieldType: type.main, value: 'КАБИНЕТ' },
    my: { fieldType: type.checkbox, value: null },
    one: { fieldType: type.checkbox, value: null },
    two: { fieldType: type.checkbox, value: null },
    three: { fieldType: type.checkbox, value: null },
    four: { fieldType: type.checkbox, value: null },
    five: { fieldType: type.checkbox, value: null },
    six: { fieldType: type.checkbox, value: null },
  },
];