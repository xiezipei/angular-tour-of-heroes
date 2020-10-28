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
}
