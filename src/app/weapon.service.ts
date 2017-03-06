/**
 * Created by kelvin on 06/03/2017.
 */

import {Injectable} from "@angular/core";
@Injectable()
export class WeaponService {
  weapons: [String] = [
    "none",
    "sword",
    "gun",
    "blade"
  ]

  getWeapons(): Promise<[String]> {
    return Promise.resolve(this.weapons);
  }
}
