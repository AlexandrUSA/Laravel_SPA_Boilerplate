# Laravel_SPA_CRM

## Что есть
- Laravel 5.6
- Vue, VueRouter, Vuex, VueI18n
- Login, register, password reset
- JWT Authentication 
- 2 языка (eng, rus)
- Vuetify + Font Awesome 5 (модульный) + Bootstrap 4 (по умолчанию отключен)

## Установка

- Скопировать репозиторий
- `composer install`
- Изменить `.env` по свою БД
- `php artisan key:generate` + `php artisan jwt:secret`
- `php artisan migrate`
- `php artisan storage:link`
- `yarn` / `npm install`

## Использование

#### Development

```bash
npm run watch
```
#### Production

```bash
npm run production
```
