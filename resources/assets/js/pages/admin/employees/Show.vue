<template>
  <div class="employee">
  	<h2>{{ $t('employee') }}</h2>
  		<div class="employee__avatar">
  			<div class="employee__avatar-container">
  				<div class="avatar__overlay">
  					<upload-button :title="avatarMsg" :selectedCallback="uploadPhoto"></upload-button>
  				</div>
  				<img :src="item.avatar" alt="avatar">
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
		data() {
			return {
				item: {}
			}
		},
		computed: {
			avatarMsg() {
				return (this.item.avatar) ? this.$t('change_image') : this.$t('add_image');
			},
			avatar() {
				return (this.item.avatar) ? this.item.avatar : "http://dragene.no/wp-content/uploads/2016/06/default1.jpg"
			}
		},
		created() {
			this.load();
		},
		methods: {
			async load() {
				const { data } = await axios.get('/api/employees/' + this.id);
				this.item = data;
			},
			async uploadPhoto(e) {
		    try {
		    	let formData = new FormData(),
		    			imagefile = document.getElementById('avatar-file').files[0];
		    	if (!imagefile) return;
					formData.append("image", imagefile);
					const { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {
					     headers: {
					       'Content-Type': 'multipart/form-data'
					     }
					 });
					console.log(data)
					this.item.avatar = data;

					// const { data } = await axios.post('/api/employees/' + this.id + '/avatar', formData, {
					//     headers: {
					//       'Content-Type': 'multipart/form-data'
					//     }
					// });
					 		
     //  		this.item.avatar = data;
     //  		console.log(this.item.avatar); 
    		} catch (e) {
      		console.error('Не загрузился сотрудник', e)
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
	.employee {
		-webkit-flex-wrap: wrap;
		-moz-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		-o-flex-wrap: wrap;
		flex-wrap: wrap;
		width: 90%;
		margin: 30px auto;
		padding: 15px;
		border-radius: 5px;
		box-shadow: 0 0 13px rgba(0, 0, 0, .5);
	}
	.employee::before,
	.employee::after {
		content: "";
		display: block;
		clear: both;
	}

	.employee__avatar {	
		width: 30%;
	}

	.employee__avatar-container {
		position: relative;
		width: 100%;
		margin: 0 auto;
		box-shadow: 0 0 13px rgba(0, 0, 0, .5);
		border-radius: 3px;
		overflow: hidden;
	}

	.avatar__overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, .3);
		width: 100%;
		height: 100%;
		opacity: 0;
		transition: opacity .3s;
	}
	.employee__avatar:hover .avatar__overlay  {
		opacity: 1;
	}
	.employee__avatar img {
		display: block;
		width: 100%;
		margin: 0 auto;
	}

	.employee__descr {
		width: 70%;
		padding:  10px 45px;
		font-size: 18px;
	}


</style>
