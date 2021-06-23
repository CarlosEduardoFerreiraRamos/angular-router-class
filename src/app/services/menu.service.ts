import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { menuList } from "./data";
import { MenuItemEnum } from "./models";

@Injectable()
export class MenuService {
  private _menu$ = new BehaviorSubject<any[]>([]);

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
