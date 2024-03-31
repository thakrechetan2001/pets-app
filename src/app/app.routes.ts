import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { FirstComponent } from './pages/first/first.component';

export const routes: Routes = [

    {'path': 'home', component: HomeComponent},
    {'path': 'about', component: ServiceComponent},
    {'path': 'service', component: FirstComponent}
    
];
