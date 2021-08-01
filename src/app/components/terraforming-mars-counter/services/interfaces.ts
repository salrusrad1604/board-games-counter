export enum ResourceNames {
  credits = 'credits',
  steel = 'steel',
  titan = 'titan',
  plant = 'plant',
  energy = 'energy',
  heat = 'heat',
  rating = 'rating',
}

export interface ResourceCounter {
  resourceType: string;
  resourceMakeCount: number;
  resourceProdCount: number;
  minMakeCount: number;
  minProdCount: number;
  imgSrc: string;
}

export const ratingInit = 20;
export const makePrefix = 'make';
export const prodPrefix = 'prod';

export const resourcesInit = [
  {
    resourceType: ResourceNames.credits,
    resourceMakeCount: 0,
    resourceProdCount: 0,
    minMakeCount: 0,
    minProdCount: -5,
    imgSrc: 'assets/terraforming-mars/mega-credits.jpg',
  },
  {
    resourceType: ResourceNames.steel,
    resourceMakeCount: 0,
    resourceProdCount: 0,
    minMakeCount: 0,
    minProdCount: 0,
    imgSrc: 'assets/terraforming-mars/steel.jpg',
  },
  {
    resourceType: ResourceNames.titan,
    resourceMakeCount: 0,
    resourceProdCount: 0,
    minMakeCount: 0,
    minProdCount: 0,
    imgSrc: 'assets/terraforming-mars/titan.jpg',
  },
  {
    resourceType: ResourceNames.plant,
    resourceMakeCount: 0,
    resourceProdCount: 0,
    minMakeCount: 0,
    minProdCount: 0,
    imgSrc: 'assets/terraforming-mars/plant.jpg',
  },
  {
    resourceType: ResourceNames.energy,
    resourceMakeCount: 0,
    resourceProdCount: 0,
    minMakeCount: 0,
    minProdCount: 0,
    imgSrc: 'assets/terraforming-mars/energy.jpg',
  },
  {
    resourceType: ResourceNames.heat,
    resourceMakeCount: 0,
    resourceProdCount: 0,
    minMakeCount: 0,
    minProdCount: 0,
    imgSrc: 'assets/terraforming-mars/heat.jpg',
  },
];
