var columnDefs = [
    { headerName: "#", colId: "rowNum", valueGetter: "node.id" },
    { field: "athlete", minWidth: 170 },
    { field: "age" },
    { field: "country" },
    { field: "year" },
    { field: "date" },
    { field: "sport" },
    { field: "gold" },
    { field: "silver" },
    { field: "bronze" },
    { field: "total" }
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: null,
    defaultColDef: {
        editable: true,
        sortable: true,
        flex: 1,
        minWidth: 100,
        filter: true,
        resizable: true
    },
    onFirstDataRendered: onFirstDataRendered
};

function onFirstDataRendered(params) {
    // obtain reference to input element
    var myInput = document.getElementById("my-input");

    // intercept key strokes within input element
    myInput.addEventListener("keydown", function(event) {
        // code for Tab key
        var tabKeyCode = 9;

        // ignore non Tab key strokes
        if (event.keyCode !== tabKeyCode) return;

        // prevents tabbing into the url section
        event.preventDefault();

        // scrolls to the first row
        params.api.ensureIndexVisible(0);

        // scrolls to the first column
        var firstCol = params.columnApi.getAllDisplayedColumns()[0];
        params.api.ensureColumnVisible(firstCol);

        // sets focus into the first grid cell
        params.api.setFocusedCell(0, firstCol);

    }, true);
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    agGrid.simpleHttpRequest({ url: 'https://www.ag-grid.com/example-assets/olympic-winners.json' })
        .then(function(data) {
            gridOptions.api.setRowData(data);
        });
});
