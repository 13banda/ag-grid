import { UserCompDetails, UserComponentFactory } from "../../../components/framework/userComponentFactory";
import { Autowired, PostConstruct, PreDestroy } from "../../../context/context";
import { Column } from "../../../entities/column";
import { Beans } from "../../../rendering/beans";
import { removeAriaSort, setAriaDescribedBy, setAriaSort } from "../../../utils/aria";
import { setDisplayed } from "../../../utils/dom";
import { RefSelector } from "../../../widgets/componentAnnotations";
import { AbstractHeaderCellComp } from "../abstractCell/abstractHeaderCellComp";
import { HeaderCellCtrl, IHeaderCellComp } from "./headerCellCtrl";
import { IHeaderComp } from "./headerComp";

export class HeaderCellComp extends AbstractHeaderCellComp<HeaderCellCtrl> {

    private static TEMPLATE = /* html */
        `<div class="ag-header-cell" role="columnheader" unselectable="on" tabindex="-1">
            <div ref="eResize" class="ag-header-cell-resize" role="presentation"></div>
        </div>`;

    @Autowired('userComponentFactory') private userComponentFactory: UserComponentFactory;
    @Autowired('beans') protected beans: Beans;

    @RefSelector('eResize') private eResize: HTMLElement;

    protected readonly column: Column;
    protected readonly pinned: string | null;

    private headerComp: IHeaderComp | undefined;
    private headerCompGui: HTMLElement | undefined;
    private headerCompVersion = 0;

    constructor(ctrl: HeaderCellCtrl) {
        super(HeaderCellComp.TEMPLATE, ctrl);
        this.column = ctrl.getColumnGroupChild() as Column;
        this.pinned = ctrl.getPinned();
    }

    public getColumn(): Column {
        return this.column;
    }

    @PostConstruct
    private postConstruct(): void {

        const eGui = this.getGui();

        const setAttribute = (name: string, value: string | null | undefined, element?: HTMLElement) => {
            const actualElement = element ? element : eGui;
            if (value != null && value != '') {
                actualElement.setAttribute(name, value);
            } else {
                actualElement.removeAttribute(name);
            }
        };

        const compProxy: IHeaderCellComp = {
            focus: ()=> this.getFocusableElement().focus(),
            setWidth: width => eGui.style.width = width,
            addOrRemoveCssClass: (cssClassName, on) => this.addOrRemoveCssClass(cssClassName, on),
            setResizeDisplayed: displayed => setDisplayed(this.eResize, displayed),
            setAriaSort: sort => sort ? setAriaSort(eGui, sort) : removeAriaSort(eGui),
            setColId: id => setAttribute('col-id', id),
            setTitle: title => setAttribute('title', title),
            setAriaDescribedBy: value => setAriaDescribedBy(eGui, value),
            setCompDetails: compDetails => this.setCompDetails(compDetails),
            getUserCompInstance: ()=> this.headerComp
        };

        this.ctrl.setComp(compProxy, this.getGui(), this.eResize);

        const selectAllGui = this.ctrl.getSelectAllGui();
        this.eResize.insertAdjacentElement('afterend', selectAllGui);
    }

    @PreDestroy
    private destroyHeaderComp(): void {
        if (this.headerComp) {
            this.getGui().removeChild(this.headerCompGui!);
            this.headerComp = this.destroyBean(this.headerComp);
            this.headerCompGui = undefined;
        }
    }

    private setCompDetails(compDetails: UserCompDetails): void {
        this.headerCompVersion++;

        const versionCopy = this.headerCompVersion;

        const callback = this.afterHeaderCompCreated.bind(this, this.headerCompVersion);
        this.userComponentFactory.createInstanceFromCompDetails(compDetails)!.then( comp => {
            this.afterHeaderCompCreated(versionCopy, comp);
        });
    }

    private afterHeaderCompCreated(version: number, headerComp: IHeaderComp): void {

        if (version != this.headerCompVersion || !this.isAlive()) {
            this.destroyBean(headerComp);
            return;
        }

        this.destroyHeaderComp();

        this.headerComp = headerComp;
        this.headerCompGui = headerComp.getGui();
        this.getGui().appendChild(this.headerCompGui);
        this.ctrl.setDragSource(this.headerCompGui!);
    }
}
