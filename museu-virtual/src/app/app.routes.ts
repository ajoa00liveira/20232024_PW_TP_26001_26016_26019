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
import { ExArtComponent } from './views//exhibitions/ex-art/ex-art.component';
import { ExFossilsComponent } from './views//exhibitions/ex-fossils/ex-fossils.component';
import { ExEgyptComponent } from './views//exhibitions/ex-egypt/ex-egypt.component';


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
    { path: 'exhibition', 
        children: [
            { path: 'art', component: ExArtComponent},
            { path: 'fossils', component: ExFossilsComponent},
            { path: 'egypt', component: ExEgyptComponent},
            { path: '', redirectTo :'/', pathMatch: 'full'} //Os outros caminhos (child) de exhibition vão para o home
        ],
    },
   
    { path: '**', redirectTo :'page-not-found'} //Tem de ficar por último
];
