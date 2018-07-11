<template>
	<div class="employee__create">
        <v-card>
          <v-card-title>
            <h2>{{title}}</h2>
          </v-card-title>
          <v-card-text>
            <v-form v-model="valid" ref="form">
							<v-container grid-list-md>
								<v-layout row wrap>
									<v-flex xs12>
										<h3><v-icon>person</v-icon> {{ $t('personal_data') }}</h3>
									</v-flex>
									<v-flex xs4>
										<v-text-field
											:label="$t('name')"
											v-model="item.first_name"
											:rules="nameRules"
											:counter="70"
											required
											clearable
										></v-text-field>
									</v-flex>
									<v-flex xs4>
										<v-text-field
										:label="$t('last_name')"
										v-model="item.last_name"
										:rules="nameRules"
										:counter="70"
										required
										clearable
										></v-text-field>
									</v-flex>
									<v-flex xs4>
										<v-text-field
										:label="$t('patronymic')"
										v-model="item.patronymic"
										:counter="70"
										clearable
										></v-text-field>
									</v-flex>
									<v-flex xs6>
										<v-text-field
											:label="$t('email')"
											v-model="item.email"
											:rules="emailRules"
											:counter="70"
											clearable
										></v-text-field>
									</v-flex>
									<v-flex xs6>
										<v-text-field
											:label="$t('phone_number')"
											v-model="item.phone_number"
											:counter="70"
											required
											clearable
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
										prepend-icon="pregnant_woman"
										:items="['Мужской', 'Женский']"
										></v-select>
									</v-flex>
								</v-layout>
								<v-layout row wrap>
									<v-flex xs12>
										<h3><v-icon>location_city</v-icon> {{ $t('address') }}</h3>
									</v-flex>
									<v-flex xs12 sm3>
										<v-text-field
											:label="$t('country')"
											v-model="item.country"
											required
											clearable
										></v-text-field>
									</v-flex>
									<v-flex xs12 sm3>
										<v-text-field
											:label="$t('city')"
											v-model="item.city"
											required
											clearable
										></v-text-field>
									</v-flex>
									<v-flex xs12 sm4>
										<v-text-field
											:label="$t('street')"
											v-model="item.street"
											required
											clearable
										></v-text-field>
									</v-flex>
									<v-flex xs12 sm2>
									<v-text-field
										:label="$t('number')"
										v-model="item.number"
										required
										clearable
									></v-text-field>
								</v-flex>
								</v-layout>
							</v-container>

							<!-- Диалог для вывода ошибок -->
							<errors-list :hasErrors="hasErrors"
													 :errors="errors"
													 @CloseErrors="hasErrors = false"/>

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
</style>