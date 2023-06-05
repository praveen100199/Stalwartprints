import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselComponent } from './dashboard/carousel/carousel.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { CatalogueComponent } from './dashboard/catalogue/catalogue.component';
import { AccessoriesComponent } from './dashboard/accessories/accessories.component';
import { HighlightsComponent } from './dashboard/highlights/highlights.component';
import { OurCustomersComponent } from './dashboard/our-customers/our-customers.component';
import { FooterComponent } from './common/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BestSellersComponent } from './dashboard/best-sellers/best-sellers.component';
import { TestimonialsComponent } from './dashboard/testimonials/testimonials.component';
import { PolysterTshirtsComponent } from './products/polyster-tshirts/polyster-tshirts.component';
import { CottonTshirtsComponent } from './products/cotton-tshirts/cotton-tshirts.component';
import { PoloTshirtsComponent } from './products/polo-tshirts/polo-tshirts.component';
import { ShirtsComponent } from './products/shirts/shirts.component';
import { HoodiesComponent } from './products/hoodies/hoodies.component';
import { OtherItemsComponent } from './products/other-items/other-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonComponent } from './common/common.component';
import { ProductsComponent } from './products/products.component';
import { RegistrationComponent } from './loginDetails/registration/registration.component';
import { LoginComponent } from './loginDetails/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CatalogueComponent,
    AccessoriesComponent,
    HighlightsComponent,
    OurCustomersComponent,
    FooterComponent,
    BestSellersComponent,
    TestimonialsComponent,
    PolysterTshirtsComponent,
    CottonTshirtsComponent,
    PoloTshirtsComponent,
    ShirtsComponent,
    HoodiesComponent,
    OtherItemsComponent,
    DashboardComponent,
    CommonComponent,
    ProductsComponent,
    RegistrationComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MdbCheckboxModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MatButtonModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
