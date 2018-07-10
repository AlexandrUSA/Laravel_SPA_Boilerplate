import store from '~/store'

const Home = () => import('~/pages/Home').then(m => m.default || m);
// const Welcome = () => import('~/pages/welcome').then(m => m.default || m)

const Login = () => import('~/pages/Auth/login').then(m => m.default || m);
const PasswordReset = () => import('~/pages/Auth/password/reset').then(m => m.default || m);
const PasswordRequest = () => import('~/pages/Auth/password/email').then(m => m.default || m);

const Settings = () => import('~/pages/Settings/index').then(m => m.default || m);
const AppSettings = () => import('~/pages/AppSettings/index').then(m => m.default || m);

const AdminMessages = () => import('~/pages/Messages/List').then(m => m.default || m);

const AdminBalance = () => import('~/pages/Balance').then(m => m.default || m);
const AdminCalendar = () => import('~/pages/Calendar').then(m => m.default || m);
const AdminChat = () => import('~/pages/Chat').then(m => m.default || m);
const AdminHelp = () => import('~/pages/Help').then(m => m.default || m);

const AdminClients = () => import('~/pages/Clients/list').then(m => m.default || m);
const AdminClientEdit = () => import('~/pages/Clients/editor').then(m => m.default || m);

const AdminVouchers = () => import('~/pages/Vouchers/list').then(m => m.default || m);

const AdminTours = () => import('~/pages/Tours/list').then(m => m.default || m);
const AdminToursEdit = () => import('~/pages/Tours/editor').then(m => m.default || m);

const AdminEmployees = () => import('~/pages/Organization/Employees/list').then(m => m.default || m);
const AdminEmployee = () => import('~/pages/Organization/employees/show').then(m => m.default || m);
const AdminEmployeeEditor = () => import('~/pages/Organization/employees/editor').then(m => m.default || m);
const Positions = () => import('~/pages/Organization/Positions').then(m => m.default || m);
const Departments = () => import('~/pages/Organization/Departments').then(m => m.default || m);

export default [
  {
    path: '/',
    name: 'welcome',
    redirect: { name: 'home' }
  },

  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/password/reset',
    name: 'password.request',
    component: PasswordRequest
  },
  {
    path: '/password/reset/:token',
    name: 'password.reset',
    component: PasswordReset
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/app-settings',
    name: 'AppSettings',
    component: AppSettings
  },
  {
    path: '/balance',
    name: 'balance',
    component: AdminBalance
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: AdminCalendar
  },
  {
    path: '/chat',
    name: 'chat',
    component: AdminChat
  },
  {
    path: '/help',
    name: 'help',
    component: AdminHelp
  },
  {
    path: '/employees',
    name: 'employees',
    component: AdminEmployees,
    props: true
  },
  {
    path: '/employees/create',
    name: 'employeeCreate',
    component: AdminEmployeeEditor
  },
  {
    path: '/employees/archive/:id',
    name: 'employeeArchive',
    component: AdminEmployee,
    props: true
  },
  {
    path: '/employees/:id/edit',
    name: 'employeeEdit',
    component: AdminEmployeeEditor,
    props: true
  },
  {
    path: '/employees/:id',
    name: 'employee',
    component: AdminEmployee,
    props: true
  },
  {
    path: '/tours',
    name: 'tours',
    component: AdminTours,
    props: true
  },
  {
    path: '/tours/create',
    name: 'tourCreate',
    component: AdminToursEdit
  },
  {
    path: '/tours/:id',
    name: 'tourShow',
    component: AdminToursEdit,
    props: true
  },
  {
    path: '/vouchers',
    name: 'vouchers',
    component: AdminVouchers,
    props: true
  },
  {
    path: '/clients',
    name: 'clients',
    component: AdminClients,
    props: true
  },
  {
    path: '/clients/create',
    name: 'clientCreate',
    component: AdminClientEdit,
    meta: {type: 'create'}
  },
  {
    path: '/clients/:id',
    name: 'clientShow',
    component: AdminClientEdit,
    meta: {type: 'edit'},
    props: true
  },
  {
    path: '/clients/:id/edit',
    name: 'clientEdit',
    component: AdminClientEdit,
    props: true
  },
  {
    path: '/positions',
    name: 'positions',
    component: Positions,
    props: true
  },
  {
    path: '/departments',
    name: 'departments',
    component: Departments
  },
  {
    path: '/messages',
    name: 'messages',
    component: AdminMessages,
    props: true
  },
  {
    path: '*',
    component: require('~/pages/Errors/404.vue')
  }
]
