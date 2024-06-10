import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { EventsComponent } from './views/events/events.component';
import { NewsComponent } from './views/news/news.component';
import { ArtComponent } from './views/art/art.component';
import { ContactsComponent } from './views/contacts/contacts.component';
import { FossilsComponent} from './views/fossils/fossils.component';
import { EgyptComponent } from './views/egypt/egypt.component';
import { TicketsComponent } from './views/tickets/tickets.component';
import { EvaluationComponent } from './views/evaluation/evaluation.component';
import {ExhibitionsComponent } from './views/exhibitions/exhibitions.component';








export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent},
    { path: 'events', component: EventsComponent},
    { path: 'news', component: NewsComponent},
    { path: 'art', component:ArtComponent},
    { path: 'contacts', component:ContactsComponent},
    { path: 'page-not-found',component: PageNotFoundComponent },
    { path: 'fossils', component: FossilsComponent},
    { path: 'egypt', component: EgyptComponent},
    { path: 'tickets', component: TicketsComponent},
    { path: 'evaluation', component: EvaluationComponent},
    { path: 'exhibitions', component: ExhibitionsComponent},






   
    { path: '**', redirectTo :'page-not-found'} //Tem de ficar por último
];
