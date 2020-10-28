import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// 模拟数据服务器
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';

// 按钮
import { NzButtonModule } from 'ng-zorro-antd/button';

// 菜单
import { NzMenuModule } from 'ng-zorro-antd/menu';

// 引入图标
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
// 全部引入（不推荐）
// import * as AllIcons from '@ant-design/icons-angular/icons';
// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
// 按需引入（推荐）
import { PieChartOutline, UnorderedListOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [ PieChartOutline, UnorderedListOutline ];

// 间距
import { NzSpaceModule } from 'ng-zorro-antd/space';

// 布局
import { NzLayoutModule } from 'ng-zorro-antd/layout';

import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeroesComponent } from './heroes/heroes.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroSearchComponent,
  ],
  imports: [
    NzButtonModule,
    NzMenuModule,
    NzIconModule.forRoot(icons),
    NzSpaceModule,
    NzLayoutModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
