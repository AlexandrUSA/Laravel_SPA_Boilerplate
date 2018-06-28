import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faUser, faUsers, faArchive, faLock, faSignOutAlt, faCog, faSignInAlt, faUserPlus, faCaretDown,
  faAddressBook, faBriefcase, faHome, faAngleDown, faAngleUp, faAngleLeft, faComments, faQuestionCircle,
  faBuilding, faSitemap, faPlane, faAddressCard, faCalendar, faDollarSign
} from '@fortawesome/fontawesome-free-solid/shakable.es'

import {
  faGithub
} from '@fortawesome/fontawesome-free-brands/shakable.es'

Vue.component('fa', FontAwesomeIcon)

fontawesome.library.add(
  faUser, faUsers, faArchive, faLock, faSignOutAlt, faCog, faGithub, faSignInAlt, faUserPlus, faCaretDown,
  faAddressBook, faBriefcase, faHome, faAngleDown, faAngleUp, faAngleLeft, faComments, faQuestionCircle,
  faBuilding, faSitemap, faPlane, faAddressCard, faCalendar, faDollarSign
)
