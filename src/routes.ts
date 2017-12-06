import About from './container/About/Loadable';
import Main from './container/Main/Loadable';

export default [
  { path: '/', exact: true, component: Main },
  { path: '/about', component: About },
];
