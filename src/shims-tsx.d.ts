/*
 * @abstract:
 * @version:
 * @Author: bhabgs
 * @Date: 2019-11-05 16:22:07
 * @LastEditors: bhabgs
 * @LastEditTime: 2019-12-06 10:45:05
 */
import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
    interface ComponentOptions<V extends Vue> {
      [propName: string]: any;
    }
  }

  namespace Tabs {
    interface TabsVue extends Vue {
      active: string;
    }
  }
}

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    [propName: string]: any;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $Zutil: any;
  }
}
