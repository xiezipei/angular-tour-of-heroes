import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/Hero';
import { HEROES } from 'src/app/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    isSpinning = false;

    constructor(
        private heroService: HeroService,
        private messageService: MessageService,
        private message: NzMessageService
    ) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    /**
     * 获取英雄列表
     */
    getHeroes(): void {
        this.isSpinning = true;
        this.heroService.getHeroes().subscribe(heroes => {
            this.heroes = heroes;
            this.isSpinning = false;
        });
    }

    /**
     * 添加英雄
     * @param name 英雄名称
     */
    add(name: string): void {
        name = name.trim();
        if (!name) { return; }
        this.isSpinning = true;
        this.heroService.addHero({ name } as Hero).subscribe(hero => {
            this.isSpinning = false;
            this.message.success(`新增英雄'${name}'成功！`);
            this.heroes.push(hero);
            this.getHeroes();
        });
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
