import store from '~/store'

const Home = () => import('~/pages/home').then(m => m.default || m);
// const Welcome = () => import('~/pages/welcome').then(m => m.default || m)

const Login = () => import('~/pages/auth/login').then(m => m.default || m);
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m);
const PasswordRequest = () => import('~/pages/auth/password/email').then(m => m.default || m);

const Settings = () => import('~/pages/settings/index').then(m => m.default || m);

const AdminDashboard = () => import('~/pages/admin/Dashboard').then(m => m.default || m);
const AdminMessages = () => import('~/pages/admin/messages/List').then(m => m.default || m);
const AdminHelpers = () => import('~/pages/admin/helpers/List').then(m => m.default || m);

const AdminBalance = () => import('~/pages/Balance').then(m => m.default || m);
const AdminCalendar = () => import('~/pages/Calendar').then(m => m.default || m);
const AdminChat = () => import('~/pages/Chat').then(m => m.default || m);
const AdminHelp = () => import('~/pages/Help').then(m => m.default || m);

const AdminClients = () => import('~/pages/Clients/list').then(m => m.default || m);
const AdminClientEdit = () => import('~/pages/Clients/editor').then(m => m.default || m);

const AdminVouchers = () => import('~/pages/Vouchers/list').then(m => m.default || m);
const AdminVoucher = () => import('~/pages/Vouchers/list').then(m => m.default || m);
const AdminVoucherEdit = () => import('~/pages/Vouchers/editor').then(m => m.default || m);

const AdminTours = () => import('~/pages/Tours/list').then(m => m.default || m);
const AdminToursEdit = () => import('~/pages/Tours/editor').then(m => m.default || m);

// const AdminProviders = () => import('~/pages/Clients/list').then(m => m.default || m);
// const AdminProvidersEdit = () => import('~/pages/Clients/editor').then(m => m.default || m);

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
    path: '/dashboard',
    name: 'dashboard',
    component: AdminDashboard,
    children: []
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
    path: '/employees/:id',
    name: 'employee',
    component: AdminEmployee,
    props: true
  },
  {
    path: '/employees/archive/:id',
    name: 'employeeArchive',
    component: AdminEmployee,
    props: true
  },
  {
    path: '/tours',
    name: 'tours',
    component: AdminTours
  },
  {
    path: '/tours/create',
    name: 'toursCreate',
    component: AdminToursEdit
  },
  {
    path: '/tours/:id',
    name: 'toursShow',
    component: AdminToursEdit,
    props: true
  },
  {
    path: '/vouchers',
    name: 'vouchers',
    component: AdminVouchers
  },
  {
    path: '/vouchers/create',
    name: 'voucherCreate',
    component: AdminVoucherEdit
  },
  {
    path: '/vouchers/:id',
    name: 'voucherShow',
    component: AdminVoucher,
    props: true
  },
  {
    path: '/clients',
    name: 'clients',
    component: AdminClients
  },
  {
    path: '/clients/create',
    name: 'clientCreate',
    component: AdminClientEdit,
    meta: {type: 'create'}
  },
  {
    path: '/clients/:id',
    name: 'client',
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
    component: AdminMessages
  },  {
    path: '/helpers',
    name: 'helpers',
    component: AdminHelpers
  },
  {
    path: '*',
    component: require('~/pages/errors/404.vue')
  }
]
