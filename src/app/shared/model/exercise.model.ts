import { Set } from './set.model';

export interface Exercise {
    id: string;
    name: string;
    set: Set[],
    lastIncrease: string;
  }