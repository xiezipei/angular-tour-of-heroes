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
    // selectedHero: Hero;
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
    // onSelected(hero: Hero): void {
    //     this.selectedHero = hero;
    //     this.messageService.add(`HeroesComponent: Selected hero id=$${hero.id}`);
    // }

    /**
     * 获取英雄列表
     */
    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

    /**
     * 添加英雄
     * @param name 英雄名称
     */
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.heroService.addHero({ name } as Hero).subscribe(hero => this.heroes.push(hero));
    }

    /**
     * 删除英雄
     * @param hero 英雄对象
     */
    delete(hero: Hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
        this.heroService.deleteHero(hero).subscribe();
    }
}
