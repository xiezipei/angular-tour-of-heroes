import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor(
        private route: ActivatedRoute,
        private heroService: HeroService,
        private location: Location,  // 一个Angular服务，用来与浏览器打交道（要手动导入）
        private message: NzMessageService
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    /**
     * 获取英雄详情
     */
    getHero(): void {
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id).subscribe(hero => this.hero = hero);
    }

    /**
     * 导航回到上一个视图
     */
    goBack(): void {
        this.location.back();
    }

    /**
     * 保存修改
     */
    save(): void {
        this.heroService.updateHero(this.hero).subscribe(() => {
            this.message.success('保存成功！');
        });
    }
}
