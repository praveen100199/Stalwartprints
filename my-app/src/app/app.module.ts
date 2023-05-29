import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselComponent } from './carousel/carousel.component';
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
import { CatalogueComponent } from './catalogue/catalogue.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { PolysterTshirtsComponent } from './t-shirts/polyster-tshirts/polyster-tshirts.component';
import { CottonTshirtsComponent } from './t-shirts/cotton-tshirts/cotton-tshirts.component';
import { PoloTshirtsComponent } from './t-shirts/polo-tshirts/polo-tshirts.component';
import { ShirtsComponent } from './shirts/shirts.component';
import { HoodiesComponent } from './hoodies/hoodies.component';
import { OtherItemsComponent } from './accessories/other-items/other-items.component';


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
    TShirtsComponent,
    PolysterTshirtsComponent,
    CottonTshirtsComponent,
    PoloTshirtsComponent,
    ShirtsComponent,
    HoodiesComponent,
    OtherItemsComponent
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
