import { Injectable } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService
  ) { }

  /**
   * 获取英雄列表
   */
  getHeroes(): Observable<Hero[]> {
    // 服务中嵌套服务
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  /**
   * 获取特定英雄
   * @param id 英雄id
   */
  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
