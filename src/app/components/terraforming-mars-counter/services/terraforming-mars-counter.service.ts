import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { makePrefix, prodPrefix, ratingInit, ResourceCounter, ResourceNames, resourcesInit } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class TerraformingMarsCounterService {
  KEY_STORAGE = 'TERRAFORMING_MARS';
  rating = new BehaviorSubject<number>(ratingInit);
  resources = new BehaviorSubject<ResourceCounter[]>(JSON.parse(JSON.stringify(resourcesInit)));

  selectResource: string = ResourceNames.rating;

  constructor() {
    this.getData();
  }

  private _setData() {
    localStorage.setItem(this.KEY_STORAGE, JSON.stringify({ rating: this.rating.value, resources: this.resources.value }));
  }

  private getData() {
    if (localStorage.getItem(this.KEY_STORAGE)) {
      const data = JSON.parse(localStorage.getItem(this.KEY_STORAGE) as string);
      this.rating.next(data.rating);
      this.resources.next(data.resources);
    }
  }

  setSelectResource(selectResource: string): void {
    this.selectResource = selectResource;
  }

  incrementDecrementMake(value: number): void {
    if (this.selectResource === ResourceNames.rating) {
      const curVal = this.rating.value;
      this.rating.next(curVal + value);
      this._setData();
      return;
    }

    if (this.selectResource != null) {
      const newValue = JSON.parse(JSON.stringify(this.resources.value));
      this.resources.next(
        JSON.parse(
          JSON.stringify(
            newValue.map((v: ResourceCounter) => {
              if (prodPrefix == this.selectResource.slice(0, prodPrefix.length)) {
                if (v.resourceType === this.selectResource.slice(prodPrefix.length)) {
                  v.resourceProdCount = v.resourceProdCount + value;
                }
                if (v.resourceProdCount < v.minProdCount) {
                  v.resourceProdCount = v.minProdCount;
                }
              }

              if (makePrefix == this.selectResource.slice(0, makePrefix.length)) {
                if (v.resourceType === this.selectResource.slice(makePrefix.length)) {
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
    this.resources.next(newValue);
    this._setData();
  }

  reset(): void {
    this.resources.next(resourcesInit);
    this.rating.next(ratingInit);
    this._setData();
  }
}
