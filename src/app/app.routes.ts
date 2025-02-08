import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

import { authGuard } from './guards/auth.guards';
import { grammaireCategories } from './data/grammaire-data';


import { TableauDeBordComponent } from './pages/tableau-de-bord/tableau-de-bord.component';
import { LoggedInLayoutComponent } from './layouts/logged-in-layout/logged-in-layout.component';

import { VocabulaireComponent } from './pages/vocabulaire/vocabulaire.component';
import { VocabulaireOfficialComponent } from './pages/vocabulaire-official/vocabulaire-official.component';
import { VocabulaireCommunityComponent } from './pages/vocabulaire-community/vocabulaire-community.component';
import { VocabulaireTestComponent } from './pages/vocabulaire-test/vocabulaire-test.component';

import { GrammaireComponent } from './pages/grammaire/grammaire.component';
import { PresentComponent } from './pages/grammaire-pages/present/present.component';
import { PasseComposeComponent } from './pages/grammaire-pages/passe-compose/passe-compose.component';
import { ImparfaitComponent } from './pages/grammaire-pages/imparfait/imparfait.component';
import { FuturSimpleComponent } from './pages/grammaire-pages/futur-simple/futur-simple.component';
import { FuturProcheComponent } from './pages/grammaire-pages/futur-proche/futur-proche.component';
import { PasseSimpleComponent } from './pages/grammaire-pages/passe-simple/passe-simple.component';
import { ConditionnelPresentComponent } from './pages/grammaire-pages/conditionnel-present/conditionnel-present.component';
import { SubjonctifPresentComponent } from './pages/grammaire-pages/subjonctif-present/subjonctif-present.component';

export const routes: Routes = [
    { path:'', component: HomeComponent},
    { path:'login', component: LoginComponent},
    { path:'sign-up', component: SignUpComponent},

    {
        path: 'home',
        component: LoggedInLayoutComponent,
        canActivate: [authGuard],
        children: [
            { path: '', component: TableauDeBordComponent},

            { path: 'vocabulaire', component: VocabulaireComponent},
            { path: 'vocabulaire/official', component: VocabulaireOfficialComponent},
            { path: 'vocabulaire/community', component: VocabulaireCommunityComponent},
            { path: 'vocabulaire/test', component: VocabulaireTestComponent},


            { path: 'grammaire', component: GrammaireComponent},
            { path: 'grammaire/present', component: PresentComponent},
            { path: 'grammaire/passe-compose', component: PasseComposeComponent},
            { path: 'grammaire/imparfait', component: ImparfaitComponent},
            { path: 'grammaire/futur-simple', component: FuturSimpleComponent},
            { path: 'grammaire/futur-proche', component: FuturProcheComponent},
            { path: 'grammaire/passe-simple', component: PasseSimpleComponent},
            { path: 'grammaire/conditionnel-present', component: ConditionnelPresentComponent},
            { path: 'grammaire/subjonctif-present', component: SubjonctifPresentComponent},
            { path: 'grammaire/present', component: PresentComponent},
        ]
    }
];