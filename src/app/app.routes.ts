import { Routes } from '@angular/router';
import { ROUTE_PATHS } from './core/constants/route-paths.constants';
import { LoginComponent } from './features/login/login.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { AdminDashboardComponent } from './features/admin/admin-dashboard/admin-dashboard.component';
import { UserDetailComponent } from './features/admin/user-detail/user-detail.component';
import { UserDashboardComponent } from './features/user/user-dashboard/user-dashboard.component';
import { ResourceDetailComponent } from './features/user/resource-detail/resource-detail.component';
import { ResourceFormComponent } from './features/user/resource-form/resource-form.component';

export const routes: Routes = [
    { path: ROUTE_PATHS.LOGIN, component: LoginComponent },

    { path: ROUTE_PATHS.ADMIN_DASHBOARD, component: AdminDashboardComponent },
    { path: ROUTE_PATHS.USER_DETAILS, component: UserDetailComponent },

    { path: ROUTE_PATHS.USER_DASHBOARD, component: UserDashboardComponent },
    { path: `${ROUTE_PATHS.RESOURCE.BASE}${ROUTE_PATHS.RESOURCE.NEW}`, component: ResourceFormComponent },
    { path: ROUTE_PATHS.RESOURCE.ID, component: ResourceDetailComponent },
    { path: `${ROUTE_PATHS.RESOURCE.ID}${ROUTE_PATHS.RESOURCE.EDIT}`, component: ResourceFormComponent },

    { path: '', redirectTo: ROUTE_PATHS.LOGIN, pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
