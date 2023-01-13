import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { CreateToolComponent } from './components/create-tool/create-tool.component';
import { EditToolComponent } from './components/edit-tool/edit-tool.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { SearchComponent } from './components/search/search.component';
import { ToolDetailsComponent } from './components/tool-details/tool-details.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "products", component: ProductsComponent },
  { path: "create", component: CreateToolComponent },
  { path: "details/:id", component: ToolDetailsComponent },
  { path: "edit/:id", component: EditToolComponent },
  { path: "search", component: SearchComponent },
  { path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
