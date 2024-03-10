// ［1］アプリ起動に必要なモジュールをインポート
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


// ［2］モジュールを起動
platformBrowserDynamic().bootstrapModule(AppModule);
