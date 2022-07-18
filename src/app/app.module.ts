import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DropdownItemComponent } from './components/dropdown-item/dropdown-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HighlightsComponent } from './components/highlights/highlights.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HighlightItemComponent } from './components/highlight-item/highlight-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { ProfileModalComponent } from './components/profile-modal/profile-modal.component';
import { WishlistListComponent } from './components/wishlist-list/wishlist-list.component';
import { ProductCardComponent } from './product-card/product-card.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailsComponent,
    WishlistComponent,
    AdminComponent,
    NavbarComponent,
    DropdownItemComponent,
    FooterComponent,
    CarouselComponent,
    HighlightsComponent,
    HighlightItemComponent,
    ProductInfoComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ProfileInfoComponent,
    ProfileModalComponent,
    WishlistListComponent,
    ProductCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



