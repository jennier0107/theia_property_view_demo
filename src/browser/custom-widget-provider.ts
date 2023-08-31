import {injectable} from "@theia/core/shared/inversify";
import {DefaultPropertyViewWidgetProvider} from "@theia/property-view/lib/browser/property-view-widget-provider"
import {FileInfoPropertyViewWidget} from "./custom-content-widget";
import {FileSelection} from "@theia/filesystem/lib/browser/file-selection";
@injectable()
export class FileInfoPropertyViewWidgetProvider extends DefaultPropertyViewWidgetProvider {

    override readonly id = 'fileinfo';
    override readonly label = 'FileInfoPropertyViewWidgetProvider';

    private fileInfoWidget: FileInfoPropertyViewWidget;

    constructor() {
        super();
        this.fileInfoWidget = new FileInfoPropertyViewWidget();
    }

    override canHandle(selection: Object | undefined): number {
        return this.isFileSelection(selection) ? 1 : 0;
    }

    private isFileSelection(selection: Object | undefined): boolean {
        return !!selection && Array.isArray(selection) && FileSelection.is(selection[0]);
    }

    override provideWidget(selection: Object | undefined): Promise<FileInfoPropertyViewWidget> {
        return Promise.resolve(this.fileInfoWidget);
    }

    override updateContentWidget(selection: Object | undefined): void {
        this.getPropertyDataService(selection).then(service => this.fileInfoWidget.updatePropertyViewContent(service, selection));
    }
}
