// Type definitions for @ag-grid-community/core v25.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridCompController } from "./gridComp/gridCompController";
import { GridBodyController } from "./gridBodyComp/gridBodyController";
import { RowContainerController } from "./gridBodyComp/rowContainer/rowContainerController";
import { HeaderRootComp } from "./headerRendering/headerRootComp";
import { FakeHorizontalScrollController } from "./gridBodyComp/fakeHorizontalScrollController";
import { BeanStub } from "./context/beanStub";
interface ReadyParams {
    gridCompCon: GridCompController;
    gridBodyCon: GridBodyController;
    centerRowContainerCon: RowContainerController;
    leftRowContainerCon: RowContainerController;
    rightRowContainerCon: RowContainerController;
    bottomCenterRowContainerCon: RowContainerController;
    bottomLeftRowContainerCon: RowContainerController;
    bottomRightRowContainerCon: RowContainerController;
    topCenterRowContainerCon: RowContainerController;
    topLeftRowContainerCon: RowContainerController;
    topRightRowContainerCon: RowContainerController;
    fakeHScrollCon: FakeHorizontalScrollController;
    headerRootComp: HeaderRootComp;
}
export declare class ControllersService extends BeanStub {
    private gridCompCon;
    private gridBodyCon;
    private centerRowContainerCon;
    private leftRowContainerCon;
    private rightRowContainerCon;
    private bottomCenterRowContainerCon;
    private bottomLeftRowContainerCon;
    private bottomRightRowContainerCon;
    private topCenterRowContainerCon;
    private topLeftRowContainerCon;
    private topRightRowContainerCon;
    private fakeHScrollCon;
    private headerRootComp;
    private ready;
    private readyCallbacks;
    private checkReady;
    whenReady(callback: (p: ReadyParams) => void): void;
    private createReadyParams;
    registerFakeHScrollCon(con: FakeHorizontalScrollController): void;
    registerHeaderRootComp(headerRootComp: HeaderRootComp): void;
    registerCenterRowContainerCon(con: RowContainerController): void;
    registerLeftRowContainerCon(con: RowContainerController): void;
    registerRightRowContainerCon(con: RowContainerController): void;
    registerTopCenterRowContainerCon(con: RowContainerController): void;
    registerTopLeftRowContainerCon(con: RowContainerController): void;
    registerTopRightRowContainerCon(con: RowContainerController): void;
    registerBottomCenterRowContainerCon(con: RowContainerController): void;
    registerBottomLeftRowContainerCon(con: RowContainerController): void;
    registerBottomRightRowContainerCon(con: RowContainerController): void;
    registerGridBodyController(con: GridBodyController): void;
    registerGridCompController(con: GridCompController): void;
    getFakeHScrollCon(): FakeHorizontalScrollController;
    getHeaderRootComp(): HeaderRootComp;
    getGridCompController(): GridCompController;
    getCenterRowContainerCon(): RowContainerController;
    getTopCenterRowContainerCon(): RowContainerController;
    getBottomCenterRowContainerCon(): RowContainerController;
    getGridBodyController(): GridBodyController;
}
export {};
