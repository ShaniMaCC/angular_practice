import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { ClientInfoAccountComponent } from './client-info-account/client-info-account.component';
import { ClientInfoConnectComponent } from './client-info-connect/client-info-connect.component';
import { DeleteMainorderComponent } from './delete-mainorder/delete-mainorder.component';
import { ElOrderComponent } from './el-order/el-order.component';
import { FuturesComponent } from './futures/futures.component';
import { GroupFuncComponent } from './group-func/group-func.component';
import { ListFuncComponent } from './list-func/list-func.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MoveGroupComponent } from './move-group/move-group.component';
import { OptionComponent } from './option/option.component';
import { Page1Component } from './page1/page1.component';
import { ProxyComponent } from './proxy/proxy.component';
import { PsdComponent } from './psd/psd.component';
import { RemarkComponent } from './remark/remark.component';
import { SuborderChangePriceComponent } from './suborder-change-price/suborder-change-price.component';
import { SuborderChangeQtyComponent } from './suborder-change-qty/suborder-change-qty.component';
import { SuborderDeleteComponent } from './suborder-delete/suborder-delete.component';
import { SuborderDetailComponent } from './suborder-detail/suborder-detail.component';
import { SuborderFilterComponent } from './suborder-filter/suborder-filter.component';
import { SwitchComponent } from './switch/switch.component';
import { TradeGroupAssociateComponent } from './trade-group-associate/trade-group-associate.component';
import { TradeGroupSettingComponent } from './trade-group-setting/trade-group-setting.component';
import { TraderSettingComponent } from './trader-setting/trader-setting.component';
import { UserSettingComponent } from './user-setting/user-setting.component';

const routes: Routes = [
  {path:'',redirectTo:'page1',pathMatch:'full'},
  {path:'page1',component:Page1Component},
  {path:'suborder_detail',component:SuborderDetailComponent},
  {path:'switch',component:SwitchComponent},
  {path:'delete_mainorder',component:DeleteMainorderComponent},
  {path:'proxy',component:ProxyComponent},
  {path:'group_func',component:GroupFuncComponent},
  {path:'move_group',component:MoveGroupComponent},
  {path:'list_func',component:ListFuncComponent},
  {path:'remark',component:RemarkComponent},
  {path:'change_qty',component:SuborderChangeQtyComponent},
  {path:'change_price',component:SuborderChangePriceComponent},
  {path:'filter',component:SuborderFilterComponent},
  {path:'suborder_delete',component:SuborderDeleteComponent},
  {path:'el_order',component:ElOrderComponent},
  {path:'add_order',component:AddOrderComponent},
  {path:'futures',component:FuturesComponent},
  {path:'option',component:OptionComponent},
  {path:'clientInfo_connect',component:ClientInfoConnectComponent},
  {path:'clientInfo_account',component:ClientInfoAccountComponent},
  {path:'traderGroup_setting',component:TradeGroupSettingComponent},
  {path:'traderGroup_associate',component:TradeGroupAssociateComponent},
  {path:'trader_setting',component:TraderSettingComponent},
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'psd',component:PsdComponent},
  {path:'user_setting',component:UserSettingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration:'enabled',
    anchorScrolling:'enabled',
    scrollOffset:[0,0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
