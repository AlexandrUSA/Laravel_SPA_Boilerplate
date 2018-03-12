<template>
  <div class="employee">
  	<h2>{{ $t('employee') }}</h2>
  		<div class="employee__avatar">
  			<div class="employee__avatar-container">
  				<div class="avatar__overlay">
  					<upload-button :title="avatarMsg" :selectedCallback="uploadPhoto"></upload-button>
  				</div>
  				<img :src="avatar" :alt="item.first_name">
  			</div>	
			</div>
	  	<div class="employee__descr">
	  		<p class="employee__text">
	  			<b>{{ $t('name') }}:</b> <i>{{item.first_name}}</i>
	  		</p>
	  		<v-divider></v-divider>
	  		<p class="employee__text">
	  			<b>{{ $t('last_name') }}:</b> <i>{{item.last_name}}</i>
	  		</p>
	  		<v-divider></v-divider>
	  		<p class="employee__text">
	  			<b>{{ $t('patronymic') }}:</b> <i>{{item.patronymic ? item.patronymic : ''}}</i>
	  		</p>
	  		<v-divider></v-divider>
	  		<p class="employee__text">
	  			<b>{{ $t('position') }}:</b> <i>{{item.position}}</i>
	  		</p>
	  		<v-divider></v-divider>
	  		<p class="employee__text">
	  			<b>{{ $t('phone_number') }}:</b> <i>{{item.phone_number}}</i>
	  		</p>
	  		<v-divider></v-divider>
	  		<p class="employee__text">
	  			<b>{{ $t('salary') }}:</b> <i>{{item.salary}} руб.</i>
	  		</p>
	  		<v-divider></v-divider>
	  		<p class="employee__text">
	  			<b>{{ $t('address') }}:</b> <i>{{item.address}}</i>
	  		</p>
	  		<v-divider></v-divider>
	  		<p class="employee__text">
	  			<b>{{ $t('birthday') }}:</b> <i>{{item.birthday}}</i>
	  		</p>
	  		<v-btn
				    block
				    :to="{name: 'employeeEdit', params: {id: item.id, employee: item}}"
				  >
					{{ $t('change_data') }}
				</v-btn>
	  </div>
  </div>		
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	import axios from 'axios';
	export default {
		props: {
			id: {
				type: [Number, String],
				required: true
			}
		},
		computed: {
			...mapGetters({
				item: 'AdminEmployees/employee'
			}),
			avatarMsg() {
				return (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');
			},
			avatar() {
				return (this.item.avatar) ? this.item.avatar : "/storage/avatars/no-avatar.jpg"
			}
		},
		beforeRouteEnter (to, from, next) {
    	next(vm => vm.$store.dispatch('AdminEmployees/loadOne', vm.id));
  	},
		methods: {
			async load() {
				const { data } = await axios.get('/api/employees/' + this.id);
				this.item = data;
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
