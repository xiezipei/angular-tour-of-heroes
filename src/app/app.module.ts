import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// 引入ng-zorro
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';

// 1. 按钮
import { NzButtonModule } from 'ng-zorro-antd/button';

// 2. 菜单
import { NzMenuModule } from 'ng-zorro-antd/menu';

// 3. 引入图标
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
// 全部引入（不推荐）
// import * as AllIcons from '@ant-design/icons-angular/icons';
// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };
// const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);
// 按需引入（推荐）
import { PieChartOutline, UnorderedListOutline, ArrowLeftOutline } from '@ant-design/icons-angular/icons';
const icons: IconDefinition[] = [PieChartOutline, UnorderedListOutline, ArrowLeftOutline];

// 4. 间距
import { NzSpaceModule } from 'ng-zorro-antd/space';

// 5. 布局
import { NzLayoutModule } from 'ng-zorro-antd/layout';

// 6. 面包屑
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';

// 7. 页头
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';

// 8. 走马灯
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

// 9. 输入框
import { NzInputModule } from 'ng-zorro-antd/input';

// 10. 列表
import { NzListModule } from 'ng-zorro-antd/list';

// 11. 分割线
import { NzDividerModule } from 'ng-zorro-antd/divider';

// 12. 表格
import { NzTableModule } from 'ng-zorro-antd/table';

// 13. 加载中
import { NzSpinModule } from 'ng-zorro-antd/spin';

// 14. 全局提示
import { NzMessageModule } from 'ng-zorro-antd/message';

// 15. 描述列表
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

// 模拟数据服务器
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// 自定义组件
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
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
        NzBreadCrumbModule,
        NzPageHeaderModule,
        NzCarouselModule,
        NzInputModule,
        NzListModule,
        NzDividerModule,
        NzTableModule,
        NzSpinModule,
        NzMessageModule,
        NzDescriptionsModule,
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
