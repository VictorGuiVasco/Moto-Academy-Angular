import { Injectable } from '@angular/core';
import { HEROES } from './heroes/mocks/Hero.mocks';
import { Hero } from './Hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroesMock(): Observable<Hero[]> {
    const hero = of(HEROES);
    this.messageService.add('hero service: fetched heroes');
    return hero;
  }
}
