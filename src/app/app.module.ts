import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownItemComponent } from './components/dropdown-item/dropdown-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HighligthsComponent } from './components/highligths/highligths.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsListComponent,
    ProductDetailsComponent,
    WishlistComponent,
    AdminComponent,
    NavbarComponent,
    DropdownItemComponent,
    FooterComponent,
    CarouselComponent,
    HighligthsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



