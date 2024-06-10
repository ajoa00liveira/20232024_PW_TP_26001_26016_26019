import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { EventsComponent } from './views/events/events.component';
import { MapComponent } from './views/map/map.component';
import { NewsComponent } from './views/news/news.component';
import { ScheduleComponent } from './views/schedule/schedule.component';
import { ArtComponent } from './views/art/art.component';
import { ContactsComponent } from './views/contacts/contacts.component';






export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent},
    { path: 'events', component: EventsComponent},
    { path: 'map', component: MapComponent},
    { path: 'news', component: NewsComponent},
    { path: 'schedule', component: ScheduleComponent},
    { path: 'art', component:ArtComponent},
    { path: 'contacts', component:ContactsComponent},
    { path: 'page-not-found',component: PageNotFoundComponent },


   
    { path: '**', redirectTo :'page-not-found'} //Tem de ficar por último
];
