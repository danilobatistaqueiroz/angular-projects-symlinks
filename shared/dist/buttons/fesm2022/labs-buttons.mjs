import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class ButtonsService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonsService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class ButtonsComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: ButtonsComponent, isStandalone: true, selector: "lib-buttons", ngImport: i0, template: `
    <p>
      buttons works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: ButtonsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-buttons', standalone: true, imports: [], template: `
    <p>
      buttons works!
    </p>
  ` }]
        }] });

class FancyButtonComponent {
    fancy() {
        throw new Error('Method not implemented.');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: FancyButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.10", type: FancyButtonComponent, isStandalone: true, selector: "lib-fancy-button", ngImport: i0, template: "<button type=\"button\">fancy-button worked now!</button>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.10", ngImport: i0, type: FancyButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-fancy-button', standalone: true, imports: [], template: "<button type=\"button\">fancy-button worked now!</button>\n" }]
        }] });

/*
 * Public API Surface of buttons
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonsComponent, ButtonsService, FancyButtonComponent };
//# sourceMappingURL=labs-buttons.mjs.map
