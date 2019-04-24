import Circle from '../packages/circle/index';

const components = [
  Circle
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
  Circle
};
