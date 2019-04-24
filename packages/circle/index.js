import Circle from './src/main'

Circle.install = (Vue) => {
  Vue.component(Circle.name, Circle)
};

export default Circle;