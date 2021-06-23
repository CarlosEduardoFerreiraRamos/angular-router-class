import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { menuList } from "./data";
import { MenuItemEnum } from "./models";

@Injectable()
export class MenuDataStorageService {
  private _menu$ = new BehaviorSubject([]);

  constructor() {
    this.set(MenuItemEnum.ONE);
  }

  public get() {
    return this._menu$.asObservable();
  }

  public set(itemType) {
    this._menu$.next(menuList[itemType]);
  }
}
