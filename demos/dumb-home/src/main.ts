import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';




platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


    // <SCRIPT>alert('sn8ked')</SCRIPT>
  // <img src="assets/duck.jpg" onload="alert('sn8ked')" >