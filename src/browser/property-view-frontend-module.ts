/**
 * Generated using theia-extension-generator
 */
import { ContainerModule } from '@theia/core/shared/inversify';
import {PropertyDataService} from "@theia/property-view/lib/browser/property-data-service";
import {FileInfoPropertyDataService} from "./custom-data-service";
import {PropertyViewWidgetProvider} from "@theia/property-view/lib/browser/property-view-widget-provider"
import {FileInfoPropertyViewWidgetProvider} from "./custom-widget-provider";

export default new ContainerModule(bind => {
    bind(PropertyDataService).to(FileInfoPropertyDataService).inSingletonScope();
    bind(PropertyViewWidgetProvider).to(FileInfoPropertyViewWidgetProvider).inSingletonScope();
});
