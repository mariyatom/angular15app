import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { SESSION_SERVICE_TOCKEN } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public dialog: MatDialog, private storage: SessionStorageService, public router: Router,) { }
  /**
   * Sets the tocken to storage
   * @param token
   */
  private setToken(token: string) {
    this.storage.set(SESSION_SERVICE_TOCKEN, token);
  }
  /**
   * Returnt the tocken from storage
   * @returns
   */
  public getToken(): string {
    return this.storage.get(SESSION_SERVICE_TOCKEN);
  }
  /**
   * Validates the tocken
   * @param token
   */
  public validateToken(token: string) {
    /** To Do validates the tocken if neceessary.*/
    this.setToken(token);
  }
}
