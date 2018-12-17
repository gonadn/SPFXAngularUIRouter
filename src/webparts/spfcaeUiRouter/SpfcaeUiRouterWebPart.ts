import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SpfcaeUiRouterWebPart.module.scss';
import * as strings from 'SpfcaeUiRouterWebPartStrings';

// polyfill for ES5 code as doesn't include native implementation for customElements
import '@webcomponents/custom-elements/src/native-shim';
// polyfill for browsers that don't support shadowDom & customElements (IE & Edge)
import '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce';
// polyfill required when using JIT compilation (not required for AOT)
import 'core-js/es7/reflect';

// required when using JIT compilation (not required for AOT)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { AppModule } from './app/app.module';

export interface ISpfcaeUiRouterWebPartProps {
  description: string;
}

export default class SpfcaeUiRouterWebPart extends BaseClientSideWebPart<ISpfcaeUiRouterWebPartProps> {

  constructor(){
    super();
  }
  
  public render(): void {
    platformBrowserDynamic().bootstrapModule(AppModule, { ngZone: 'noop' }).then(() => {
      this.domElement.innerHTML = `<app-pmeika message="${this.properties.description}"></app-pmeika>`;

      const element = this.domElement.getElementsByTagName('app-pmeika')[0];
      element.addEventListener('elementButtonClick', (event: any) => {
        alert(event.detail);
      });
    });
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
