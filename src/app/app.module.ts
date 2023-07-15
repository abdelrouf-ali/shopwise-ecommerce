import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HeroCarouselComponent } from './hero-carousel/hero-carousel.component';
import { SuppServicesComponent } from './supp-services/supp-services.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SaleSectionComponent } from './sale-section/sale-section.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MultiItemCarouselComponent } from './multi-item-carousel/multi-item-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    NavbarComponent,
    ProductDetailsComponent,
    RegisterComponent,
    LoginComponent,
    CartComponent,
    HeroCarouselComponent,
    SuppServicesComponent,
    FooterComponent,
    SaleSectionComponent,
    UserProfileComponent,
    MultiItemCarouselComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    CarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
