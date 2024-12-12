import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { generation, makePrefix, prodPrefix, ratingInit, ResourceCounter, ResourceNames, resourcesInit } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class TerraformingMarsCounterService {
  KEY_STORAGE = 'TERRAFORMING_MARS';
  COUNT_NUMBER_KEY_STORAGE = `${this.KEY_STORAGE}_COUNT_NUMBER`;
  PEOPLE_KEY_STORAGE = `${this.KEY_STORAGE}_PEOPLE`;
  initCounterNumber = [1, 5, 10];
  rating = new BehaviorSubject<number>(ratingInit);
  generation = new BehaviorSubject<number>(generation);
  resources = new BehaviorSubject<ResourceCounter[]>(JSON.parse(JSON.stringify(resourcesInit)));
  selectResource = new BehaviorSubject<string>(ResourceNames.rating);

  constructor() {
    this._getData();
  }

  private _setData() {
    localStorage.setItem(this.KEY_STORAGE, JSON.stringify({ rating: this.rating.value, resources: this.resources.value, generation: this.generation.value }));
  }

  private _getData() {
    if (localStorage.getItem(this.KEY_STORAGE)) {
      const data = JSON.parse(localStorage.getItem(this.KEY_STORAGE) as string);
      this.rating.next(data.rating);
      this.generation.next(data.generation);
      this.resources.next(data.resources);
    }
  }

  setSelectResource(selectResource: string): void {
    this.selectResource.next(selectResource);
  }

  incrementDecrementMake(value: number): void {
    const serRes = this.selectResource.value;
    if (serRes === ResourceNames.rating) {
      const curVal = this.rating.value;
      this.rating.next(curVal + value);
      this._setData();
      return;
    }

    if (serRes != null) {
      const newValue = JSON.parse(JSON.stringify(this.resources.value));
      this.resources.next(
        JSON.parse(
          JSON.stringify(
            newValue.map((v: ResourceCounter) => {
              if (prodPrefix == serRes.slice(0, prodPrefix.length)) {
                if (v.resourceType === serRes.slice(prodPrefix.length)) {
                  v.resourceProdCount = v.resourceProdCount + value;
                }
                if (v.resourceProdCount < v.minProdCount) {
                  v.resourceProdCount = v.minProdCount;
                }
              }

              if (makePrefix == serRes.slice(0, makePrefix.length)) {
                if (v.resourceType === serRes.slice(makePrefix.length)) {
                  v.resourceMakeCount = v.resourceMakeCount + value;
                }
                if (v.resourceMakeCount < v.minMakeCount) {
                  v.resourceMakeCount = v.minMakeCount;
                }
              }

              return v;
            }),
          ),
        ),
      );
    }
    this._setData();
  }

  pruduce(): void {
    const newValue = JSON.parse(JSON.stringify(this.resources.value));

    newValue.filter((v: ResourceCounter) => v.resourceType === ResourceNames.heat)[0].resourceMakeCount =
      newValue.filter((v: ResourceCounter) => v.resourceType === ResourceNames.heat)[0].resourceMakeCount +
      newValue.filter((v: ResourceCounter) => v.resourceType === ResourceNames.energy)[0].resourceMakeCount;

    newValue.filter((v: ResourceCounter) => v.resourceType === ResourceNames.energy)[0].resourceMakeCount = 0;

    newValue.filter((v: ResourceCounter) => v.resourceType === ResourceNames.credits)[0].resourceMakeCount =
      newValue.filter((v: ResourceCounter) => v.resourceType === ResourceNames.credits)[0].resourceMakeCount + this.rating.value;

    newValue.map((v: ResourceCounter) => {
      v.resourceMakeCount = v.resourceMakeCount + v.resourceProdCount;
      return v;
    });

    this.generation.next(this.generation.value + 1);
    this.resources.next(newValue);

    this._setData();
  }

  reset(): void {
    this.resources.next(resourcesInit);
    this.rating.next(ratingInit);
    this.generation.next(generation);
    this._setData();
  }

  getCountNumber() {
    if (localStorage.getItem(this.COUNT_NUMBER_KEY_STORAGE)) {
      const data = JSON.parse(localStorage.getItem(this.COUNT_NUMBER_KEY_STORAGE) as string);
      return data.length === 0 ? this.initCounterNumber : data;
    }
    return this.initCounterNumber;
  }

  getPeople() {
    if (localStorage.getItem(this.PEOPLE_KEY_STORAGE)) {
      const data = JSON.parse(localStorage.getItem(this.PEOPLE_KEY_STORAGE) as string);
      return data.length === 0 ? [] : data;
    }
    return [];
  }

  setCounterNumber(cnAr: number[]) {
    localStorage.setItem(this.COUNT_NUMBER_KEY_STORAGE, JSON.stringify(cnAr));
  }

  setPeople(people: string[]) {
    localStorage.setItem(this.PEOPLE_KEY_STORAGE, JSON.stringify(people));
  }

  getPeopleByGeneration(generation: number) {
    const peoples = this.getPeople();

    if (peoples.length === 0) {
      return '';
    }


    return this.getValue(peoples, generation - 1);
  }

  getValue(arr: string[], diff: number) {
    let newIndex = (diff) % arr.length;
    if (newIndex < 0)
      newIndex = arr.length + newIndex;
    return arr[newIndex];
  }
}