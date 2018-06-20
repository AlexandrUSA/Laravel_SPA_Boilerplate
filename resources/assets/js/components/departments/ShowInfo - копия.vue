<template>
	    <v-dialog v-model="departmentCreate" max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Новое подразделение</span>
            </v-card-title>
            <v-card-text>
                <v-flex xs12>
                    <v-text-field label="Наименование" v-model="departmentName"></v-text-field>
                </v-flex>
            </v-card-text>
            <v-card-actions>
                <v-btn outline color="info" @click.native="addConfirm">{{ $t('ok') }}</v-btn>
                <v-btn outline color="error" @click.native="addCancel">{{ $t('cancel') }}</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
	
</script>

<style scoped>
	
</style>