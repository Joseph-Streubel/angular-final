import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateToolComponent } from './components/create-tool/create-tool.component';
import { EditToolComponent } from './components/edit-tool/edit-tool.component';
import { ToolDetailsComponent } from './components/tool-details/tool-details.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SearchComponent } from './components/search/search.component';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CreateToolComponent,
    EditToolComponent,
    ToolDetailsComponent,
    HomeComponent,
    AboutComponent,
    NotfoundComponent,
    ProductsComponent,
    NavigationPageComponent,
    SearchbarComponent,
    SearchComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatSortModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
