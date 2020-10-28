import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(
        private heroService: HeroService,
        private messageService: MessageService
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    /**
     * 获取选中的英雄
     * @param hero 选中英雄对象
     */
    onSelected(hero: Hero): void {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id=$${hero.id}`);
    }

    /**
     * 获取英雄列表
     */
    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }
}
