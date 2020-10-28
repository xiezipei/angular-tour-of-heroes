import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },            // 默认展示
    { path: 'dashboard', component: DashboardComponent },   // 仪表盘
    { path: 'heroes', component: HeroesComponent },         // 英雄列表
    { path: 'detail/:id', component: HeroDetailComponent }  // 英雄详情
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
