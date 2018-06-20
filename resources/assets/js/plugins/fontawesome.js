import Vue from 'vue'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

Vue.component('fa', FontAwesomeIcon)

// import { } from '@fortawesome/fontawesome-free-regular/shakable.es'

import {
  faUser, faUsers, faLock, faSignOutAlt, faCog, faSignInAlt, faUserPlus, faCaretDown,
  faAddressBook, faBriefcase, faHome, faAngleDown, faAngleUp, faAngleLeft, faComments, faQuestionCircle,
  faBuilding, faSitemap, faPlane, faAddressCard, faCalendar
} from '@fortawesome/fontawesome-free-solid/shakable.es'

import {
  faGithub
} from '@fortawesome/fontawesome-free-brands/shakable.es'

fontawesome.library.add(
  faUser, faUsers, faLock, faSignOutAlt, faCog, faGithub, faSignInAlt, faUserPlus, faCaretDown,
  faAddressBook, faBriefcase, faHome, faAngleDown, faAngleUp, faAngleLeft, faComments, faQuestionCircle,
  faBuilding, faSitemap, faPlane, faAddressCard, faCalendar
)
