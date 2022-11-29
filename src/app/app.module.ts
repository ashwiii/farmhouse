import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SitelayoutModule } from './sitelayout/sitelayout.module';
import { RegisterComponent } from './register/register.component';
import { FarmhousesComponent } from './farmhouses/farmhouses.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SingleElementComponent } from './single-element/single-element.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    FarmhousesComponent,
    GalleryComponent,
    ActivitiesComponent,
    ContactusComponent,
    LoginComponent,
    SingleElementComponent,
    FilterPipe,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SitelayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
