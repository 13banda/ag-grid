import React, { memo, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { BeansContext } from '../beansContext';
import { ColumnSortState, HeaderCellCtrl, IHeader, IHeaderCellComp, UserCompDetails } from 'ag-grid-community';
import { CssClasses, isComponentStateless } from '../utils';
import { showJsComp } from '../jsComp';

const HeaderCellComp = (props: {ctrl: HeaderCellCtrl}) => {

    const {context} = useContext(BeansContext);

    const [cssClasses, setCssClasses] = useState<CssClasses>(new CssClasses());
    const [width, setWidth] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [colId, setColId] = useState<string>();
    const [ariaSort, setAriaSort] = useState<ColumnSortState>();
    const [ariaDescribedBy, setAriaDescribedBy] = useState<string>();
    const [userCompDetails, setUserCompDetails] = useState<UserCompDetails>();

    const eGui = useRef<HTMLDivElement>(null);
    const eResize = useRef<HTMLDivElement>(null);
    const userCompRef = useRef<IHeader>();

    const { ctrl } = props;

    useEffect(() => {

        const compProxy: IHeaderCellComp = {
            setWidth: width => setWidth(width),
            addOrRemoveCssClass: (name, on) => setCssClasses(prev => prev.setClass(name, on)),
            setAriaSort: sort => setAriaSort(sort),
            setColId: id => setColId(id),
            setTitle: title => setTitle(title),
            setAriaDescribedBy: value => setAriaDescribedBy(value),
            setUserCompDetails: compDetails => setUserCompDetails(compDetails),
            getUserCompInstance: ()=> userCompRef.current || undefined
        };

        ctrl.setComp(compProxy, eGui.current!, eResize.current!);

    }, []);

    // js comps
    useEffect(() => {
        return showJsComp(userCompDetails, context, eGui.current!, userCompRef);
    }, [userCompDetails]);

    // add drag handling, must be done after component is added to the dom
    useEffect(()=> {
        let userCompDomElement: HTMLElement | undefined = undefined;
        eGui.current!.childNodes.forEach( node => {
            if (node!=null && node!==eResize.current) {
                userCompDomElement = node as HTMLElement;
            }
        });

        ctrl.setDragSource(userCompDomElement);
    }, [userCompDetails]);

    const style = useMemo( ()=> ({
        width: width
    }), [width]);

    const className = useMemo( ()=> 'ag-header-cell ' + cssClasses.toString(), [cssClasses] );

    const userCompStateless = useMemo( ()=> {
        const res = userCompDetails 
                    && userCompDetails.componentFromFramework 
                    && isComponentStateless(userCompDetails.componentClass);
        return !!res;
    }, [userCompDetails]);

    const reactUserComp = userCompDetails && userCompDetails.componentFromFramework;
    const UserCompClass = userCompDetails && userCompDetails.componentClass;

    return (
        <div ref={eGui} className={className} style={style} title={title} col-id={colId} 
                    aria-sort={ariaSort} role="columnheader" unselectable="on" tabIndex={-1}
                    aria-describedby={ariaDescribedBy}>
            { reactUserComp && userCompStateless && <UserCompClass { ...userCompDetails!.params } /> }
            { reactUserComp && !userCompStateless && <UserCompClass { ...userCompDetails!.params } ref={ userCompRef }/> }
            <div ref={eResize} className="ag-header-cell-resize" role="presentation"></div>
        </div>
    );
};

export default memo(HeaderCellComp);
