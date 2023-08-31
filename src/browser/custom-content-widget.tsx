import {PropertyViewContentWidget} from "@theia/property-view/lib/browser/property-view-content-widget";
import {ReactWidget} from "@theia/core/lib/browser";
import {FileInfoPropertyObject} from "./custom-data-service";
import {PropertyDataService} from "@theia/property-view/lib/browser/property-data-service";
import * as React from "@theia/core/shared/react";

export class FileInfoPropertyViewWidget extends ReactWidget implements PropertyViewContentWidget {

    static readonly ID = 'file-info-property-view';
    static readonly LABEL = 'File Information';

    protected currentFileInfo: FileInfoPropertyObject;

    constructor() {
        super();
        this.id = FileInfoPropertyViewWidget.ID;
        this.title.label = FileInfoPropertyViewWidget.LABEL;
        this.title.caption = FileInfoPropertyViewWidget.LABEL;
        this.title.closable = false;
        this.node.tabIndex = 0;
    }

    updatePropertyViewContent(propertyDataService?: PropertyDataService, selection?: Object | undefined): void {
        if (propertyDataService) {
            propertyDataService.providePropertyData(selection).then((fileInfo: FileInfoPropertyObject) => this.currentFileInfo = fileInfo);
        }
        this.update();
    }

    protected render(): React.ReactNode {
        return (<div>
            {`Selected node in explorer: ${this.currentFileInfo.name} ${this.currentFileInfo.isDirectory ? '(Directory)' : '(File)'}`
            }
        </div>);
    }
}
