import store from '~/store'

const Home = () => import('~/pages/home').then(m => m.default || m);
// const Welcome = () => import('~/pages/welcome').then(m => m.default || m)

const Login = () => import('~/pages/auth/login').then(m => m.default || m);
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m);
const PasswordRequest = () => import('~/pages/auth/password/email').then(m => m.default || m);

const Settings = () => import('~/pages/settings/index').then(m => m.default || m);

const AdminDashboard = () => import('~/pages/admin/Dashboard').then(m => m.default || m);
// const AdminEmployees = () => import('~/pages/admin/employees/List').then(m => m.default || m);
const AdminEmployee = () => import('~/pages/admin/employees/Show').then(m => m.default || m);
const AdminEmployeeEdit = () => import('~/pages/admin/employees/Editor').then(m => m.default || m);

// const AdminPositions = () => import('~/pages/admin/positions/List').then(m => m.default || m);
// const AdminDepartments = () => import('~/pages/admin/departments/List').then(m => m.default || m);
const AdminMessages = () => import('~/pages/admin/messages/List').then(m => m.default || m);
const AdminHelpers = () => import('~/pages/admin/helpers/List').then(m => m.default || m);

const AdminClients = () => import('~/pages/admin/clients/List').then(m => m.default || m);
const AdminClient = () => import('~/pages/admin/clients/Show').then(m => m.default || m);
const AdminClientEdit = () => import('~/pages/admin/clients/Editor').then(m => m.default || m);

const Employees = () => import('~/pages/Organization/Employees').then(m => m.default || m);
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
    path: '/employees',
    name: 'employees',
    component: Employees,
    props: true
  },
  {
    path: '/employees/:id',
    name: 'employee',
    component: AdminEmployee,
    props: true
  },
  {
    path: '/employees/:id/edit',
    name: 'employeeEdit',
    component: AdminEmployeeEdit,
    props: true
  },
  {
    path: '/employees/create',
    name: 'employeeCreate',
    component: AdminEmployeeEdit
  },
  {
    path: '/clients',
    name: 'clients',
    component: AdminClients
  },
  {
    path: '/clients/:id',
    name: 'client',
    component: AdminClient,
    props: true
  },
  {
    path: '/clients/:id/edit',
    name: 'clientEdit',
    component: AdminClientEdit,
    props: true
  },
  {
    path: '/clients/create',
    name: 'clientCreate',
    component: AdminClientEdit
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
