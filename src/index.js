import Circle from '../packages/circle/index';
import Close from '../packages/close/index';

const components = [
  Circle,
  Close
];

const install = (Vue) => {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Circle,
  Close
};
