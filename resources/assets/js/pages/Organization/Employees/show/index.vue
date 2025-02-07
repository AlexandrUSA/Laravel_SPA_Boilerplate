<template>
		<v-container grid-list-md class="employee">
			<v-layout row wrap>
				<v-flex xs12>
					<h2>{{ $t('employee') }}</h2>
				</v-flex>
				<v-flex xs3>
					<v-card class="employee__avatar-container">
						<v-card-media :src="item.avatar" height="250px"></v-card-media>
					</v-card>
				</v-flex>
				<v-flex xs9>
					<div class="employee__descr">
						<v-form v-model="valid"
										ref="form"
										lazy-validation
						>
							<v-text-field
								v-if="item.deleted_at"
								label="Дата увольнения"
								v-model="item.deleted_at"
								disabled>
							</v-text-field>
							<v-text-field
								:label="$t('name')"
								v-model="item.name"
								disabled
							></v-text-field>
							<v-text-field
								:label="$t('last_name')"
								v-model="item.last_name"
								disabled
							></v-text-field>
							<v-text-field
								:label="$t('patronymic')"
								v-model="item.patronymic"
								disabled
							></v-text-field>
							<v-text-field
								:label="$t('position')"
								v-model="item.position.display_name"
								prepend-icon="work"
								disabled
							></v-text-field>
							<v-text-field
								:label="$t('phone_number')"
								v-model="item.phone_number"
								prepend-icon="phone_iphone"
								disabled
							></v-text-field>
							<v-text-field
								:label="$t('salary')"
								v-model="item.salary"
								prepend-icon="attach_money"
								disabled
							></v-text-field>
							<v-text-field
								:label="$t('address')"
								v-model="item.address"
								prepend-icon="home"
								disabled
							></v-text-field>
							<div class="buttons">
								<v-btn large
											 v-if="this.$route.name === 'employee'"
											 :to="{ name: 'employeeEdit' }"
											 :disabled="!valid">
									Изменить даные
								</v-btn>
								<v-btn large
											 v-else
											 @click="removeFromHistory">
									Стереть данные
								</v-btn>
								<v-btn large @click="back">
									Назад
								</v-btn>
							</div>
						</v-form>
					</div>
				</v-flex>
			</v-layout>
		</v-container>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	import axios from 'axios';
	export default {
		middleware: ['auth', 'organisation'],
		props: {
			id: {
				type: [Number, String],
				required: true
			}
		},
		data() {
			return {
				disabled: true,
				date: null,
	      menu: false,
	      modal: false,
	      name: '',
	      valid: true,
	      defaultItem: {},
	      nameRules: [
	        v => !!v || 'Введите значение',
	        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',
	      ],
	      emailRules: [
	        v => !!v || 'Введите E-mail',
	        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Не валидный E-mail'
	      ]
			}
		},
		computed: {
			...mapGetters({
				employee: 'employees/employee',
				items: 'employees/employees',
				positions: 'positions/positions',
				user: 'auth/user'
			}),
      item () {
				const data = {};
				for (let key in this.employee) {
				  data[key] = this.employee[key] || 'Нет данных'
				}
				data.position = this.positions.find(el => +el.id === +this.employee.role_id) || {}
				if (this.employee.avatar) {
          data.avatar = '/img/' + this.employee.avatar
				} else {
          data.avatar = '/storage/avatars/no-avatar.jpg'
        }
				return data
      },
			buttonText() {
				return !this.disabled ? "Обновить" : "Изменить данные";
			}
		},
		methods: {
			...mapActions({
				changeItem: 'employees/edit',
				updateUser: 'auth/updateUser',
				getOne: 'employees/loadOne',
        getArchiveOne: 'employees/getArchiveOne',
        removeFromArchive: 'employees/removeFromArchive'
			}),
			userUpdate() {
				const newUser = Object.assign({}, this.user);
				newUser.name = this.item.first_name;
				this.updateUser(newUser);
			},
			buttonAction() {
				if (!this.disabled) {
					this.changeItem(this.item);
					if (+this.item.user_id === +this.user.id) {
						this.userUpdate()
					}
				}
				this.defaultItem = Object.assign({}, this.item);
				this.disabled = !this.disabled;		
			},
      removeFromHistory() {
			  this.removeFromArchive(this.item.id);
			  this.$router.replace({name: 'employees'});
			},
			back() {	
				if (this.disabled) return this.$router.go(-1);
				for(let key in this.item) {
					this.item[key] = this.defaultItem[key]
				}
				this.disabled = !this.disabled;						
			},
		},
		created () {
		  if (this.$route.name === 'employeeArchive') {
		    this.getArchiveOne(this.$route.params.id);
			} else {
		    this.getOne(this.$route.params.id);
			}
		}
	}
</script>

<style scoped>
	* {
		box-sizing: border-box;;
		font-family: 'Roboto', sans-serif;
	}

	h2 {
		flex-basis: 100%;
		text-align: center;
	}

	p,
	.employee,
	.avatar__overlay {
		display: -webkit-flex;
		display: -moz-flex;
		display: -ms-flex;
		display: -o-flex;
		display: flex;
	}

	p {
		justify-content: space-between;
		margin: 0;
		padding: 10px;
		transition: background-color .3s;
	}

	p:hover {
		background-color: rgba(255, 255, 255, .1);
	}
</style>
