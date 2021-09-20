'use strict';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-alpine.css';
import { AgGridReact } from '@ag-grid-community/react';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import React, { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useRef, useState, useCallback } from 'react';
import { render } from 'react-dom';

const SortingHeader = memo((props) => {

    const [sortState, setSortState] = useState();

    const onClick = useCallback( ()=> {
        props.progressSort();
    });

    useEffect( ()=> {
        const listener = () => {
            if (props.column.isSortAscending()) {
                setSortState('ASC');
            } else if (props.column.isSortDescending() ) {
                setSortState('DESC');
            } else {
                setSortState(undefined);
            }
        };

        props.column.addEventListener('sortChanged', listener);

        return ()=> props.column.removeEventListener('sortChanged', listener);;
    }, []);

    return (
        <span className="my-header" onClick={onClick}>
            <img src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif" className="my-spinner"/>
            {props.displayName} {sortState}
        </span>
    );
});

const MyGroupHeader = memo((props) => {

    const [expanded, setExpanded] = useState();
    const {columnGroup} = props;
    const expandable = columnGroup.isExpandable();
    const originalColumnGroup = columnGroup.getOriginalColumnGroup();

    const onExpandClicked = useCallback( ()=> props.setExpanded(!columnGroup.isExpanded()), []);

    useEffect( ()=> {
        const listener = ()=> {
            setExpanded(columnGroup.isExpanded());
        };
        listener();
        originalColumnGroup.addEventListener('expandedChanged', listener);
        return ()=> originalColumnGroup.removeEventListener('expandedChanged', listener);
    }, []);

    const showExpandJsx = ()=> (
        <button onClick={onExpandClicked} className="my-expand">
            { expanded ? '<' : '>' }
        </button>
    );

    return (
        <span className="my-group-header">
            <img src="https://d1yk6z6emsz7qy.cloudfront.net/static/images/loading.gif" className="my-spinner"/>
            { props.displayName }
            { expandable && showExpandJsx() }
        </span>
    );
});

function GridExample() {

    // never changes, so we can use useMemo
    const modules = useMemo( ()=> [ClientSideRowModelModule, RangeSelectionModule, RowGroupingModule, RichSelectModule], []);

    // never changes, so we can use useMemo
    const columnDefs = useMemo( ()=> [
        {
            headerName: 'Group A',
            headerGroupComponentFramework: MyGroupHeader,
            children: [
                { field: 'athlete', headerComponentFramework: SortingHeader },
                { field: 'age', headerComponentFramework: SortingHeader },
            ]
        },
        {
            headerName: 'Group B',
            headerGroupComponentFramework: MyGroupHeader,
            children: [
                { field: 'country' },
                { field: 'year' },
                { field: 'date', columnGroupShow: 'open' },
                { field: 'sport', columnGroupShow: 'open' }
            ]
        },
    ], []);

    // never changes, so we can use useMemo
    const defaultColDef = useMemo( ()=> ({
        resizable: true,
        sortable: true
    }), []);

    // changes, needs to be state
    const [rowData, setRowData] = useState();

    // gets called once, no dependencies, loads the grid data
    useEffect( ()=> {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then( resp => resp.json())
            .then( data => setRowData(data));
    }, []);

    return (
        <AgGridReact 

            // turn on AG Grid React UI
            reactUi="true"

            // all other properties as normal...
            className="ag-theme-alpine"
            animateRows="true"
            modules={modules}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            rowData={rowData}
        />
    );
}

render(<GridExample></GridExample>, document.querySelector('#root'));
