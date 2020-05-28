import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    isKaiAdLoad: boolean = false;
    loadKaiAd: (container?: string, callback?: () => void) => void;
    ads: any;
}