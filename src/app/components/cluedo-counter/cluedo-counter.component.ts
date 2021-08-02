import { Component } from '@angular/core';

enum type {
  string = 'string',
  input = 'input',
  checkbox = 'checkbox',
  empty = 'empty',
  main = 'main',
  question = 'question',
  outTable = 'outTable',
}
type fieldType = type.string | type.input | type.checkbox | type.empty | type.main | type.question | type.outTable;

type FieldList = keyof Fields;

interface fieldCluedo {
  fieldType: fieldType;
  value?: string;
}

export interface Fields {
  main: fieldCluedo;
  my: fieldCluedo;
  one: fieldCluedo;
  two: fieldCluedo;
  three: fieldCluedo;
  four: fieldCluedo;
  five: fieldCluedo;
  six: fieldCluedo;
}

const Fields: Fields[] = [
  {
    main: { fieldType: type.outTable, value: 'ИГРОКИ' },
    my: { fieldType: type.empty },
    one: { fieldType: type.input, value: '' },
    two: { fieldType: type.input, value: '' },
    three: { fieldType: type.input, value: '' },
    four: { fieldType: type.input, value: '' },
    five: { fieldType: type.input, value: '' },
    six: { fieldType: type.input, value: '' },
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
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'МАСТАРД' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ОРКИД' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ПИКОК' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ПЛАМ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'СКАРЛЕТ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
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
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'КИНЖАЛ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'СВИНЦ. ТРУБА' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'РЕВОЛЬВЕР' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ВЕРЕВКА' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ГАЕЧ. КЛЮЧ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
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
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'БИЛЬЯРДНАЯ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ЗИМНИЙ САД' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'СТОЛОВАЯ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ХОЛЛ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'КУХНЯ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'БИБЛИОТЕКА' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'ГОСТИНАЯ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
  {
    main: { fieldType: type.main, value: 'КАБИНЕТ' },
    my: { fieldType: type.checkbox, value: '' },
    one: { fieldType: type.checkbox, value: '' },
    two: { fieldType: type.checkbox, value: '' },
    three: { fieldType: type.checkbox, value: '' },
    four: { fieldType: type.checkbox, value: '' },
    five: { fieldType: type.checkbox, value: '' },
    six: { fieldType: type.checkbox, value: '' },
  },
];

@Component({
  selector: 'app-cluedo-counter',
  templateUrl: './cluedo-counter.component.html',
  styleUrls: ['./cluedo-counter.component.scss'],
})
export class CluedoCounterComponent {
  fieldTypeEnum = type;
  // displayedColumns: string[] = ['main'];
  dataSource = Fields;

  displayedColumns: FieldList[] = ['main', 'my', 'one', 'two', 'three', 'four', 'five', 'six'];
  // displayedColumns: FieldList[] = ['main', 'my', 'one', 'two'];

  constructor() {}
}
