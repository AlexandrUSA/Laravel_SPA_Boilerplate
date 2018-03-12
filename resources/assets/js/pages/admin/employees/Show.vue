<template>
  <div class="employee">
  	<h2>{{ $t('employee') }}</h2>
  		<div class="employee__avatar">
  			<div class="employee__avatar-container">
  				<div class="avatar__overlay">
  					<upload-button :title="$t('change_image')" :selectedCallback="uploadPhoto"></upload-button>
  				</div>
  				<img :src="avatar" :alt="item.first_name">
  			</div>	
			</div>
	  	<div class="employee__descr">
	  		<v-text-field
					      :label="$t('name')"
					      v-model="item.first_name"
					      :counter="70"
					      required
					      :disabled="disabled"
				></v-text-field>
					    <v-text-field
					      :label="$t('last_name')"
					      v-model="item.last_name"
					      :rules="nameRules"
					      :counter="70"
					      required
					      :disabled="disabled"
				></v-text-field>
				<v-text-field
					      :label="$t('patronymic')"
					      v-model="item.patronymic"
					      :rules="nameRules"
					      :counter="70"
					      :disabled="disabled"
				></v-text-field>
				<v-select
					      :label="$t('position')"
					      v-model="item.position"
					      prepend-icon="card_travel"
					      :items="positions"
					      :rules="[v => !!v || 'Выберите должность']"
					      required
					      :disabled="disabled"
				></v-select>
	  		<v-text-field
					      :label="$t('phone_number')"
					      v-model="item.phone_number"
					      prepend-icon="phone_iphone"
					      required
					      :disabled="disabled"
				></v-text-field>
				<v-text-field
					      :label="$t('salary')"
					      v-model="item.salary"
					      prepend-icon="attach_money"
					      required
					      :disabled="disabled"
				></v-text-field>
				<v-text-field
					      :label="$t('address')"
					      v-model="item.address"
					      prepend-icon="home"
					      required
					      :disabled="disabled"
				></v-text-field>
				<v-layout row wrap>
					<v-flex xs12>
						<v-menu
						  ref="menu"
						  lazy
						  :close-on-content-click="false"
						  v-model="menu"
						  transition="scale-transition"
						  offset-y
						  full-width
						  :nudge-right="40"
						  min-width="290px"
						  :return-value.sync="date"
						>
						  <v-text-field
						    slot="activator"
						    :label="$t('birthday')"
						    v-model="item.birthday"
						    prepend-icon="event"
						    readonly
						    :disabled="disabled"
						  ></v-text-field>
						  <v-date-picker v-if="!disabled" v-model="item.birthday" no-title scrollable>
						    <v-spacer></v-spacer>
						    <v-btn flat color="primary" @click="menu = false">{{ $t('cancel') }}</v-btn>
						    <v-btn flat color="primary" @click="$refs.menu.save(date)">{{ $t('ok') }}</v-btn>
						  </v-date-picker>
						</v-menu>
					</v-flex>
				</v-layout>
				<div class="buttons">
					<v-btn large @click="buttonAction()">
					{{ buttonText }}
					</v-btn>
					<v-btn large @click="back">
					Назад
					</v-btn>
				</div>
	  		
	  </div>
  </div>		
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	import axios from 'axios';
	export default {
		middleware: 'auth',
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
	      valid: false,
	      defaultItem: {},
	      nameRules: [
	        v => !!v || 'Введите значение',
	        v => (v && v.length > 1) || 'Имя должно содержать минимум 2 буквы',
	      ],
	      emailRules: [
	        v => !!v || 'Введите E-mail',
	        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Не валидный E-mail'
	      ],
	      positions: [
	        'Старший сотрудник',
	        'Бухгалтер',
	        'Директор',
	        'Сотрудник'
	      ],
			}
		},
		computed: {
			...mapGetters({
				item: 'employees/employee'
			}),
			buttonText() {
				return !this.disabled ? "Обновить" : "Изменить данные";
			},
			avatar() {
				return (this.item.avatar) ? this.item.avatar : "/storage/avatars/no-avatar.jpg"
			}
		},
		// Загрузка пользователя перед монтированием компонента
		beforeRouteEnter (to, from, next) {
    	next(vm => vm.$store.dispatch('employees/loadOne', vm.id));
  	},
		methods: {
			...mapActions({
				changeItem: 'employees/edit',
			}),
			buttonAction() {
				if (!this.disabled) {
					this.changeItem(this.item);
				}
				this.defaultItem = Object.assign({}, this.item);
				this.disabled = !this.disabled;		
			},
			back() {	
				if (this.disabled) return this.$router.go(-1);
				for(let key in this.item) {
					this.item[key] = this.defaultItem[key]
				}
				this.disabled = !this.disabled;						
			},
			async uploadPhoto(e) {
				const imagefile = document.getElementById('avatar-file').files[0];
				if (!imagefile) return;
		    try {
		    	let formData = new FormData();    				    	
					formData.append("image", imagefile);
					const { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {
					     headers: {
					       'Content-Type': 'multipart/form-data'
					     }
					 });
					this.item.avatar = data;
    		} catch (e) {
      		console.error('Не загрузился аватар', e)
    		}	
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
