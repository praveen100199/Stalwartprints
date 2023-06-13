import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ShirtsComponent } from './products/shirts/shirts.component';
import { PolysterTshirtsComponent } from './products/polyster-tshirts/polyster-tshirts.component';
import { CottonTshirtsComponent } from './products/cotton-tshirts/cotton-tshirts.component';
import { PoloTshirtsComponent } from './products/polo-tshirts/polo-tshirts.component';
import { HoodiesComponent } from './products/hoodies/hoodies.component';
import { OtherItemsComponent } from './products/other-items/other-items.component';
import { RegistrationComponent } from './loginDetails/registration/registration.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent},
  { path: 'products#shirts', component: ShirtsComponent },
  { path: 'products#cottontshirts', component: CottonTshirtsComponent },
  { path: 'products#polotshirts', component: PoloTshirtsComponent },
  { path: 'products#polystershirts', component: PolysterTshirtsComponent },
  { path: 'products#hoodies', component: HoodiesComponent },
  { path: 'registration', component:  RegistrationComponent},
  {path:'otheritems', component: OtherItemsComponent},
  // { path:'otheritems#bags', component: OtherItemsComponent },
  // { path:'otheritems#bottles', component: OtherItemsComponent},
  // { path:'otheritems#caps', component: OtherItemsComponent },
  // { path:'otheritems#pens', component: OtherItemsComponent},
  // { path:'otheritems#badges', component: OtherItemsComponent },
  // { path:'otheritems#idcards', component: OtherItemsComponent},
  // { path:'otheritems#cups', component: OtherItemsComponent },
  // { path:'otheritems#stoneframes', component: OtherItemsComponent},
  // { path:'otheritems#pillows', component: OtherItemsComponent},
  // { path:'otheritems#hello', component: OtherItemsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
