import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaladeComponent } from './salade/salade.component';
import { ViandeComponent } from './viande/viande.component';
import { PoissonComponent } from './poisson/poisson.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgerComponent } from './burger/burger.component';
import { BoissonComponent } from './boisson/boisson.component';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'salades', component: SaladeComponent },
  { path: 'viandes', component: ViandeComponent },
  { path: 'poissons', component: PoissonComponent },
  { path: 'pizzas', component: PizzaComponent },
  { path: 'burgers', component: BurgerComponent },
  { path: 'boissons', component: BoissonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
