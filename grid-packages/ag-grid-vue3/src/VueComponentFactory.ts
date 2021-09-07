import {createVNode, defineComponent, render} from 'vue';
import {Vue} from 'vue-class-component';
import {AgGridVue} from './AgGridVue';

export class VueComponentFactory {

    private static getComponentDefinition(component: any, parent: AgGridVue) {
        let componentDefinition: any;

        // when referencing components by name - ie: cellRendererFramework: 'MyComponent'
        if (typeof component === 'string') {
            // look up the definition in Vue
            componentDefinition = this.searchForComponentInstance(parent, component);
        } else {
            componentDefinition = {extends: defineComponent({...component})}
        }
        if (!componentDefinition) {
            console.error(`Could not find component with name of ${component}. Is it in Vue.components?`);
        }

        if (componentDefinition.extends && componentDefinition.extends.setup) {
            componentDefinition.setup = componentDefinition.extends.setup;
        }

        return componentDefinition;
    }

    public static createAndMountComponent(component: any, params: any, parent: AgGridVue) {
        const componentDefinition = VueComponentFactory.getComponentDefinition(component, parent);
        if (!componentDefinition) {
            return;
        }

        const {vNode, destroy, el} = this.mount(componentDefinition, {params: Object.freeze(params)}, parent)

        // note that the component creation is synchronous so that componentInstance is set by this point
        return {
            componentInstance: vNode.component.proxy,
            element: el,
            destroy,
        };
    }

    public static mount(component: any, props: any, parent: any) {
        let vNode: any = createVNode(component, props)

        vNode.appContext = parent.$.appContext;

        let el: any = document.createElement('div')
        render(vNode, el)

        const destroy = () => {
            if (el) {
                render(null, el)
            }

            el = null;
            vNode = null;
        }

        return {vNode, destroy, el}
    }

    public static searchForComponentInstance(parent: AgGridVue,
                                             component: any,
                                             maxDepth = 10,
                                             suppressError = false) {
        let componentInstance: any = null;

        let currentParent: Vue<any> = parent.$parent;
        let depth = 0;
        while (!componentInstance &&
        currentParent &&
        currentParent.$options &&
        (++depth < maxDepth)) {
            const currentParentAsThis = currentParent as any;
            componentInstance = currentParentAsThis.$options && currentParentAsThis.$options.components ? currentParentAsThis.$options.components![component as any] : null;
            currentParent = currentParent.$parent;
        }

        // then search in globally registered components of app
        if (!componentInstance) {
            const components = parent.$.appContext.components
            if (components && components[component]) {
                componentInstance = components[component];
            }
        }

        if (!componentInstance && !suppressError) {
            console.error(`Could not find component with name of ${component}. Is it in Vue.components?`);
            return null;
        }
        return componentInstance;
    }
}
