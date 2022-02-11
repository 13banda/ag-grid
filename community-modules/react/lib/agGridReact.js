// @ag-grid-community/react v27.0.1
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const agGridReactLegacy_1 = require("./legacy/agGridReactLegacy");
const agGridReactUi_1 = require("./reactUi/agGridReactUi");
class AgGridReact extends react_1.Component {
    constructor() {
        super(...arguments);
        this.setGridApi = (api, columnApi) => {
            this.api = api;
            this.columnApi = columnApi;
        };
    }
    render() {
        const ReactComponentToUse = this.props.suppressReactUi ? agGridReactLegacy_1.AgGridReactLegacy : agGridReactUi_1.AgGridReactUi;
        return react_1.default.createElement(ReactComponentToUse, Object.assign({}, this.props, { setGridApi: this.setGridApi }));
    }
}
exports.AgGridReact = AgGridReact;

//# sourceMappingURL=agGridReact.js.map
