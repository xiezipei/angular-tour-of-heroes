import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, data: { breadcrumb: '仪表盘' } },   // 默认
    { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: '仪表盘' } },   // 仪表盘
    { path: 'heroes', component: HeroesComponent, data: { breadcrumb: '英雄列表' } },         // 英雄列表
    { path: 'heroes/detail/:id', component: HeroDetailComponent, data: { breadcrumb: '英雄详情' } }  // 英雄详情
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
