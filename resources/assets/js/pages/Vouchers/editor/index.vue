<template>
	<div class="employee__create">
        <v-card>
          <v-card-title>
            <h2>{{title}} <v-icon class="title__icon">{{titleIcon}}</v-icon></h2>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form" lazyValidation>
							<v-container grid-list-md>
								<v-layout row wrap>
									<v-flex xs4>
										<v-card>
											<v-card-media src="/storage/avatars/no-avatar.jpg" height="200px"></v-card-media>
											<v-card-actions>
												<v-btn flat color="info">Изменить</v-btn>
												<v-btn flat color="error">Удалить</v-btn>
											</v-card-actions>
										</v-card>
									</v-flex>
									<v-flex xs8>
										<v-text-field
											:label="$t('name')"
											v-model="item.name"
											:rules="nameRules"
											:counter="70"
											required
										></v-text-field>
										<v-text-field
										:label="$t('last_name')"
										v-model="item.last_name"
										:rules="nameRules"
										:counter="70"
										required
										></v-text-field>
										<v-text-field
										:label="$t('patronymic')"
										v-model="item.patronymic"
										:counter="70"
										></v-text-field>
										<v-text-field
											:label="$t('email')"
											v-model="item.email"
											:rules="emailRules"
											:counter="70"
											required
										></v-text-field>
										<v-text-field
											:label="$t('phone_number')"
											v-model="item.phone_number"
											:counter="70"
										></v-text-field>
									</v-flex>
								</v-layout>
								<v-layout row wrap>
									<v-flex xs12 sm6>
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
										></v-text-field>
										<v-date-picker v-model="item.birthday" no-title scrollable>
										<v-spacer></v-spacer>
										<v-btn flat color="primary" @click="menu = false">{{ $t('cancel') }}</v-btn>
										<v-btn flat color="primary" @click="$refs.menu.save(date)">{{ $t('ok') }}</v-btn>
										</v-date-picker>
										</v-menu>
									</v-flex>
									<v-flex xs12 sm6>
										<v-select
										label="Пол"
										v-model="item.sex"
										prepend-icon="card_travel"
										:items="['Мужской', 'Женский']"
										></v-select>
									</v-flex>
								</v-layout>
								<v-layout row wrap>
									<v-flex xs12 sm6>
										<v-select
										:label="$t('position')"
										v-model="item.role_id"
										prepend-icon="card_travel"
										:items="positions"
										item-text="display_name"
										item-value="id"
										:rules="[v => !!v || 'Выберите должность']"
										required
										></v-select>
									</v-flex>
									<v-flex xs12 sm6>
										<v-text-field
										:label="$t('salary')"
										v-model="item.salary"
										prepend-icon="attach_money"
										required
										></v-text-field>
									</v-flex>
								</v-layout>
							</v-container>

							<v-dialog
								v-model="hasErrors"
								max-width="800"
							>
								<v-card>
									<v-card-title class="headline">Ошибка валидации данных!</v-card-title>

									<v-card-text>
										 <h3>Во время валидации данных были обнаружены следубщие ошибки:</h3>
									</v-card-text>
									<v-divider></v-divider>
									<v-card-text>
										<ul>
											<li v-for="(error, name) in errors"
													:key="name">
												{{ error[0] }}
											</li>
										</ul>

									</v-card-text>

									<v-card-actions>
										<v-spacer></v-spacer>

										<v-btn
											color="red darken-1"
											flat="flat"
											@click="hasErrors = false"
										>
											OK
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-dialog>

					    <!--<v-text-field-->
					      <!--:label="$t('address')"-->
					      <!--v-model="item.address"-->
					      <!--prepend-icon="home"-->
					      <!--required-->
					    <!--&gt;</v-text-field>-->
							<!--<v-layout row wrap>-->
						    <!--<v-flex xs12>-->
						      <!--<v-menu-->
						        <!--ref="menu"-->
						        <!--lazy-->
						        <!--:close-on-content-click="false"-->
						        <!--v-model="menu"-->
						        <!--transition="scale-transition"-->
						        <!--offset-y-->
						        <!--full-width-->
						        <!--:nudge-right="40"-->
						        <!--min-width="290px"-->
						        <!--:return-value.sync="date"-->
						      <!--&gt;-->
						        <!--<v-text-field-->
						          <!--slot="activator"-->
						          <!--:label="$t('birthday')"-->
						          <!--v-model="item.birthday"-->
						          <!--prepend-icon="event"-->
						          <!--readonly-->
						        <!--&gt;</v-text-field>-->
						        <!--<v-date-picker v-model="item.birthday" no-title scrollable>-->
						          <!--<v-spacer></v-spacer>-->
						          <!--<v-btn flat color="primary" @click="menu = false">{{ $t('cancel') }}</v-btn>-->
						          <!--<v-btn flat color="primary" @click="$refs.menu.save(date)">{{ $t('ok') }}</v-btn>-->
						        <!--</v-date-picker>-->
						      <!--</v-menu>-->
						    <!--</v-flex>-->
						  <!--</v-layout>-->
					    <!--<v-text-field-->
					      <!--:label="$t('phone_number')"-->
					      <!--v-model="item.phone_number"-->
					      <!--prepend-icon="phone_iphone"-->
					      <!--required-->
					    <!--&gt;</v-text-field>-->
					    <v-btn outline color="info"
										 @click.native="save"
										 :disabled="!valid"
										 :loading="pending">{{ $t('ok') }}</v-btn>
            	<v-btn outline color="error" @click.native="close">{{ $t('cancel') }}</v-btn> 
					  </v-form>
          </v-card-text>
        </v-card>
	</div>
</template>

<script src="./scripts.js"></script>

<style scoped>
	.card__title {
		justify-content: center;
	}
	.card__text {
		padding: 0 30px;
	}

	hr {
		margin: 15px 0;
	}
</style>