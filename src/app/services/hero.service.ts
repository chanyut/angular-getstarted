import { Injectable } from '@angular/core';

import { Hero } from '../models/hero'
import { HEROES } from './mock-heroes'

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        // getHeroes could get data from anywhere -- webservice, local storage, or mock data source
        // Here we get heroes data from model-heroes
        return Promise.resolve(HEROES);
    }

    getHeroesWithLatencySimulation(ms :number): Promise<Hero[]> {
        return new Promise( resolve => {
            setTimeout(() => {
                resolve(this.getHeroes())
            }, ms);
        } );
    }
}


