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
						      v-model="item.position_id"
						      prepend-icon="card_travel"
						      :items="positions"
						      item-text="title"
	          			item-value="id"
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
							</v-menu>
						</v-flex>
					</v-layout>
					<div class="buttons">
						<v-btn large
									 v-if="!item.deleted_at"
									 @click="buttonAction()"
									 :disabled="!valid">
						{{ buttonText }}
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
  </div>		
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
				item: 'employees/employee',
				items: 'employees/employees',
				positions: 'positions/positions',
				user: 'auth/user'
			}),
			buttonText() {
				return !this.disabled ? "Обновить" : "Изменить данные";
			},
			avatar() {
				return (this.item.avatar) ? this.item.avatar : "/storage/avatars/no-avatar.jpg"
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
					this.$store.commit('employees/edit', this.item)
    		} catch (e) {
      		console.error('Не загрузился аватар', e)
    		}	
			}
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
