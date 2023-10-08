import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Ion } from 'cesium';
import { AppModule } from './app/app.module';

declare var window: any;
window['CESIUM_BASE_URL'] = '/assets/cesium/';

Ion.defaultAccessToken = '<your cesium-ion token here>';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
