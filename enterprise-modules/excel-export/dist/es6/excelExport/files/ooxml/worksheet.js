import { _ } from '@ag-grid-community/core';
import columnFactory from './column';
import rowFactory from './row';
import mergeCell from './mergeCell';
import { ExcelXlsxFactory } from '../../excelXlsxFactory';
import { getExcelColumnName } from '../../assets/excelUtils';
var updateColMinMax = function (col, min, range, prevCol) {
    if (!col.min) {
        col.min = min;
        col.max = min + range;
        return;
    }
    var currentMin = min;
    if (prevCol) {
        currentMin = Math.max(currentMin, prevCol.min);
    }
    col.min = Math.max(col.min, currentMin);
    col.max = Math.max(col.max, currentMin + range);
};
var getMergedCells = function (rows, cols) {
    var mergedCells = [];
    rows.forEach(function (currentRow, rowIdx) {
        var cells = currentRow.cells;
        var merges = 0;
        currentRow.index = rowIdx + 1;
        var lastCol;
        cells.forEach(function (currentCell, cellIdx) {
            var min = cellIdx + merges + 1;
            var start = getExcelColumnName(min);
            var outputRow = rowIdx + 1;
            if (currentCell.mergeAcross) {
                merges += currentCell.mergeAcross;
                var end = getExcelColumnName(cellIdx + merges + 1);
                mergedCells.push("" + start + outputRow + ":" + end + outputRow);
            }
            if (!cols[min - 1]) {
                cols[min - 1] = {};
            }
            updateColMinMax(cols[min - 1], min, merges, lastCol);
            lastCol = cols[min - 1];
            currentCell.ref = "" + start + outputRow;
        });
    });
    return mergedCells;
};
var getPageOrientation = function (orientation) {
    if (!orientation || (orientation !== 'Portrait' && orientation !== 'Landscape')) {
        return 'portrait';
    }
    return orientation.toLocaleLowerCase();
};
var getPageSize = function (pageSize) {
    if (pageSize == null) {
        return 1;
    }
    var positions = ['Letter', 'Letter Small', 'Tabloid', 'Ledger', 'Legal', 'Statement', 'Executive', 'A3', 'A4', 'A4 Small', 'A5', 'A6', 'B4', 'B5', 'Folio', 'Envelope', 'Envelope DL', 'Envelope C5', 'Envelope B5', 'Envelope C3', 'Envelope C4', 'Envelope C6', 'Envelope Monarch', 'Japanese Postcard', 'Japanese Double Postcard'];
    var pos = positions.indexOf(pageSize);
    return pos === -1 ? 1 : (pos + 1);
};
var addColumns = function (columns) {
    return function (children) {
        if (columns.length) {
            children.push({
                name: 'cols',
                children: columns.map(columnFactory.getTemplate)
            });
        }
        return children;
    };
};
var addSheetData = function (rows) {
    return function (children) {
        if (rows.length) {
            children.push({
                name: 'sheetData',
                children: rows.map(rowFactory.getTemplate)
            });
        }
        return children;
    };
};
var addMergeCells = function (mergeCells) {
    return function (children) {
        if (mergeCells.length) {
            children.push({
                name: 'mergeCells',
                properties: {
                    rawMap: {
                        count: mergeCells.length
                    }
                },
                children: mergeCells.map(mergeCell.getTemplate)
            });
        }
        return children;
    };
};
var addPageMargins = function (margins) {
    return function (children) {
        var _a = margins.top, top = _a === void 0 ? 0.75 : _a, _b = margins.right, right = _b === void 0 ? 0.7 : _b, _c = margins.bottom, bottom = _c === void 0 ? 0.75 : _c, _d = margins.left, left = _d === void 0 ? 0.7 : _d, _e = margins.header, header = _e === void 0 ? 0.3 : _e, _f = margins.footer, footer = _f === void 0 ? 0.3 : _f;
        children.push({
            name: 'pageMargins',
            properties: {
                rawMap: { bottom: bottom, footer: footer, header: header, left: left, right: right, top: top }
            }
        });
        return children;
    };
};
var addPageSetup = function (pageSetup) {
    return function (children) {
        if (pageSetup) {
            children.push({
                name: 'pageSetup',
                properties: {
                    rawMap: {
                        horizontalDpi: 0,
                        verticalDpi: 0,
                        orientation: getPageOrientation(pageSetup.orientation),
                        paperSize: getPageSize(pageSetup.pageSize)
                    }
                }
            });
        }
        return children;
    };
};
var replaceHeaderFooterTokens = function (value) {
    var map = {
        '&[Page]': '&P',
        '&[Pages]': '&N',
        '&[Date]': '&D',
        '&[Time]': '&T',
        '&[Tab]': '&A',
        '&[Path]': '&Z',
        '&[File]': '&F'
    };
    _.iterateObject(map, function (key, val) {
        value = value.replace(key, val);
    });
    return value;
};
var getHeaderPosition = function (position) {
    if (position === 'Center') {
        return 'C';
    }
    else if (position === 'Right') {
        return 'R';
    }
    return 'L';
};
var applyHeaderFontStyle = function (headerString, font) {
    if (!font) {
        return headerString;
    }
    headerString += '&amp;&quot;';
    headerString += font.fontName || 'Calibri';
    if (font.bold !== font.italic) {
        headerString += font.bold ? ',Bold' : ',Italic';
    }
    else if (font.bold) {
        headerString += ',Bold Italic';
    }
    else {
        headerString += ',Regular';
    }
    headerString += '&quot;';
    if (font.size) {
        headerString += "&amp;" + font.size;
    }
    if (font.strikeThrough) {
        headerString += '&amp;S';
    }
    if (font.underline) {
        headerString += "&amp;" + (font.underline === 'Double' ? 'E' : 'U');
    }
    if (font.color) {
        headerString += "&amp;K" + font.color.replace('#', '').toUpperCase();
    }
    return headerString;
};
var processHeaderFooterContent = function (content) {
    return content.reduce(function (prev, curr) {
        var pos = getHeaderPosition(curr.position);
        var output = applyHeaderFontStyle(prev + "&amp;" + pos, curr.font);
        return "" + output + _.escapeString(replaceHeaderFooterTokens(curr.value));
    }, '');
};
var buildHeaderFooter = function (headerFooterConfig) {
    var rules = ['all', 'first', 'even'];
    var headersAndFooters = [];
    rules.forEach(function (rule) {
        var headerFooter = headerFooterConfig[rule];
        var namePrefix = rule === 'all' ? 'odd' : rule;
        if (!headerFooter || (!headerFooter.header && !headerFooter.footer)) {
            return;
        }
        _.iterateObject(headerFooter, function (key, value) {
            var nameSuffix = "" + key.charAt(0).toUpperCase() + key.slice(1);
            if (value) {
                headersAndFooters.push({
                    name: "" + namePrefix + nameSuffix,
                    properties: {
                        rawMap: {
                            'xml:space': 'preserve'
                        }
                    },
                    textNode: processHeaderFooterContent(value)
                });
            }
        });
    });
    return headersAndFooters;
};
var addHeaderFooter = function (headerFooterConfig) {
    return function (children) {
        if (!headerFooterConfig) {
            return children;
        }
        var differentFirst = headerFooterConfig.first != null ? 1 : 0;
        var differentOddEven = headerFooterConfig.even != null ? 1 : 0;
        children.push({
            name: 'headerFooter',
            properties: {
                rawMap: {
                    differentFirst: differentFirst,
                    differentOddEven: differentOddEven
                }
            },
            children: buildHeaderFooter(headerFooterConfig)
        });
        return children;
    };
};
var addDrawingRel = function (currentSheet) {
    return function (children) {
        if (ExcelXlsxFactory.worksheetImages.get(currentSheet)) {
            children.push({
                name: 'drawing',
                properties: {
                    rawMap: {
                        'r:id': 'rId1'
                    }
                }
            });
        }
        return children;
    };
};
var worksheetFactory = {
    getTemplate: function (params) {
        var worksheet = params.worksheet, currentSheet = params.currentSheet, _a = params.margins, margins = _a === void 0 ? {} : _a, pageSetup = params.pageSetup, headerFooterConfig = params.headerFooterConfig;
        var table = worksheet.table;
        var rows = table.rows, columns = table.columns;
        var mergedCells = (columns && columns.length) ? getMergedCells(rows, columns) : [];
        var createWorksheetChildren = _.compose(addColumns(columns), addSheetData(rows), addMergeCells(mergedCells), addPageMargins(margins), addPageSetup(pageSetup), addHeaderFooter(headerFooterConfig), addDrawingRel(currentSheet));
        var children = createWorksheetChildren([]);
        return {
            name: "worksheet",
            properties: {
                prefixedAttributes: [{
                        prefix: "xmlns:",
                        map: {
                            r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships"
                        }
                    }],
                rawMap: {
                    xmlns: "http://schemas.openxmlformats.org/spreadsheetml/2006/main"
                }
            },
            children: children
        };
    }
};
export default worksheetFactory;
