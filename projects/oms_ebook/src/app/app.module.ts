 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { SuborderDetailComponent } from './suborder-detail/suborder-detail.component';
import { SwitchComponent } from './switch/switch.component';
import { DeleteMainorderComponent } from './delete-mainorder/delete-mainorder.component';
import { ProxyComponent } from './proxy/proxy.component';
import { GroupFuncComponent } from './group-func/group-func.component';
import { MoveGroupComponent } from './move-group/move-group.component';
import { ListFuncComponent } from './list-func/list-func.component';
import { RemarkComponent } from './remark/remark.component';
import { SuborderChangeQtyComponent } from './suborder-change-qty/suborder-change-qty.component';
import { SuborderChangePriceComponent } from './suborder-change-price/suborder-change-price.component';
import { SuborderFilterComponent } from './suborder-filter/suborder-filter.component';
import { SuborderDeleteComponent } from './suborder-delete/suborder-delete.component';
import { ElOrderComponent } from './el-order/el-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { FuturesComponent } from './futures/futures.component';
import { OptionComponent } from './option/option.component';
import { ClientInfoConnectComponent } from './client-info-connect/client-info-connect.component';
import { ClientInfoAccountComponent } from './client-info-account/client-info-account.component';
import { TradeGroupSettingComponent } from './trade-group-setting/trade-group-setting.component';
import { TradeGroupAssociateComponent } from './trade-group-associate/trade-group-associate.component';
import { TraderSettingComponent } from './trader-setting/trader-setting.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PsdComponent } from './psd/psd.component';
import { UserSettingComponent } from './user-setting/user-setting.component';


@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    SuborderDetailComponent,
    SwitchComponent,
    DeleteMainorderComponent,
    ProxyComponent,
    GroupFuncComponent,
    MoveGroupComponent,
    ListFuncComponent,
    RemarkComponent,
    SuborderChangeQtyComponent,
    SuborderChangePriceComponent,
    SuborderFilterComponent,
    SuborderDeleteComponent,
    ElOrderComponent,
    AddOrderComponent,
    FuturesComponent,
    OptionComponent,
    ClientInfoConnectComponent,
    ClientInfoAccountComponent,
    TradeGroupSettingComponent,
    TradeGroupAssociateComponent,
    TraderSettingComponent,
    LoginComponent,
    LogoutComponent,
    PsdComponent,
    UserSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
