import { NgModule } from "@angular/core";
import {MatInputModule} from "@angular/material/input"
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatIconModule} from "@angular/material/icon"
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatListModule} from "@angular/material/list"
import {MatButtonModule} from "@angular/material/button"


@NgModule({
exports:[
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule
]
})
export class MaterialModule{}
