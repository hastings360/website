import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RelaxWorkspaceComponent } from './relax-workspace/relax-workspace.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CanvasComponent } from './canvas/canvas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent, data: {title: 'Larry Hastings'}},
  { path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  { path: 'portfolio', component: PortfolioComponent, data: {title: 'Portfolio'}},
  { path: 'about', component: AboutComponent, data: {title: 'About'}},
  { path: 'relax-workspace', component: RelaxWorkspaceComponent, data: {title: 'Relax and Work'}},
  { path: 'canvas', component: CanvasComponent, data: {title: 'Canvas'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
