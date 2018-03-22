import axios from 'axios'
import store from '~/store'
import router from '~/router'
import swal from 'sweetalert2'
import i18n from '~/plugins/i18n'

/**
 *  Глобальный перехватчик AJAX запроса на сервер для его обработки
 */
axios.interceptors.request.use(request => {
  // Получаем токен из хранилища
  const token = store.getters['auth/token']
  // Если токе получен(юзер авторизован) - записываем в заголовки
  if (token) {
    request.headers.common['Authorization'] = `Bearer ${token}`
  }

  // Получаем язык пользователя
  const locale = store.getters['lang/locale']
  if (locale) { // И записываем в заголовки
    request.headers.common['Accept-Language'] = locale
  }

  // для вебсокетов на будущее
  // request.headers['X-Socket-Id'] = Echo.socketId()

  return request
})

/**
 * Перехватчик AJAX ответов
 */
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {  // Если внутренняя ошибка сервера - оповещаем пользователя
    swal({
      type: 'error',
      title: i18n.t('error_alert_title'),
      text: i18n.t('error_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    })
  }

  if (status === 401 && store.getters['auth/check']) {  // Если отказанов доступе
    swal({
      // Оповещаем о истечении срока сессии и необходимости заново авторизироватся
      type: 'warning',
      title: i18n.t('token_expired_alert_title'),
      text: i18n.t('token_expired_alert_text'),
      reverseButtons: true,
      confirmButtonText: i18n.t('ok'),
      cancelButtonText: i18n.t('cancel')
    }).then(async () => {
      // После чего делаем логаут и переводим его на страницу авторизации
      await store.dispatch('auth/logout')
      router.push({ name: 'login' })
    })
  }

  return Promise.reject(error)
})
