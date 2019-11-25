<template>
  <v-form v-model="valid">
    <v-containe class="contenido">
         <input id="profile"
    type="file"
    name="attachment"
    class="c-file-input__field js-file-input__field"/>
      <v-img
      id="picture"
      src="https://elintransigente.com/wp-content/uploads/2019/07/Jason-Momoa-1.jpg"
      aspect-ratio="1"
      class="grey lighten-2"
      max-width="400"
      max-height="300"
    ></v-img>

      <v-text-field
        label="Nombre completo"
        name="fullname"
        placeholder="Jason Momoa"
        v-model="formModel.name"
        v-validate="'required'"
        data-vv-name="fullname"
        :error-messages="errors.collect('fullname')"
        required
      ></v-text-field>
      <v-text-field
        label="Correo Electronico"
        placeholder="jason@gmail.com"
        name="email"
        v-validate="'required|email'"
        data-vv-name="email"
        :error-messages="errors.collect('email')"
        v-model="formModel.email"
        required
      ></v-text-field>
      <v-text-field
        label="Telefono"
        placeholder="(###) ### - ####"
        v-validate="'required'"
        data-vv-name="phone"
        :error-messages="errors.collect('phone')"
        v-model="formModel.phone"
        mask="phone"
        required
      ></v-text-field>
       <v-text-field
        label="Celular"
        placeholder="(###) ### - ####"
        v-validate="'required'"
        data-vv-name="cellphone"
        :error-messages="errors.collect('cellphone')"
        v-model="formModel.cellphone"
        mask=""
        required
      ></v-text-field>
       <v-text-field
        label="Domicilio"
        placeholder="Colonia, calle, #"
        v-validate="'required'"
        data-vv-name="address"
        :error-messages="errors.collect('address')"
        v-model="formModel.address"
        mask=""
        required
      ></v-text-field>
       <v-text-field
        label="Codigo postal"
        placeholder="35000"
        v-validate="'required'"
        data-vv-name="cp"
        :error-messages="errors.collect('cp')"
        v-model="formModel.cp"
        mask=""
        required
      ></v-text-field>
      <v-subheader class="pa-0 mt-3">Informacion adicional</v-subheader>
      <v-select
        :items="states"
        v-validate="'required'"
        data-vv-name="state"
        :error-messages="errors.collect('state')"
        v-model="formModel.state"
        label="Estado"
        auto
        required
        item-text="name"
        item-value="id"
      ></v-select>
      <v-select
        :items="cities"
        v-validate="'required'"
        data-vv-name="city"
        :error-messages="errors.collect('city')"
        v-model="formModel.city"
        label="Ciudad"
        required
        auto
        item-text="name"
        item-value="id"
      ></v-select>
      <!--Numero de licencia-->
    <v-text-field
      label="Numero de licencia"
        v-validate="'required'"
        data-vv-name="licence"
        :error-messages="errors.collect('licence')"
      v-model="formModel.licence"
      required
    ></v-text-field>
    <div class="form-btn">
      <v-btn outline @click="submit" color="primary">Enviar</v-btn>
      <v-btn outline @click="clear">Limpiar</v-btn>
    </div>
   </v-containe>
  </v-form>
</template>

<script>
import Countries from '@/api/country';
export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    formModel: {
      country: null,
    },
    countries: Countries,
    states: [
      { name: 'Durango', abbr: 'FL', id: 1, country_id: 1 },
      { name: 'Ciudad de mexico', abbr: 'GA', id: 2, country_id: 1 },
      { name: 'Monterrey', abbr: 'NE', id: 3, country_id: 1 },
      { name: 'Jalisco', abbr: 'CA', id: 4, country_id: 1 },
    ],
    cities: [
      { name: 'Victoria de Durango', abbr: 'NY', id: 1, country_id: 1 },
      { name: 'Santiago Papasquiaro', abbr: 'TA', id: 2, country_id: 1 },
      { name: 'Gomez Palacio', abbr: 'SF', id: 3, country_id: 1 },
    ],
    valid: true,

  }),
  mounted () {
    this.$validator.localize('en', this.dictionary);
  },
  methods: {
    submit () {
      this.$validator.validateAll();
    },
    clear () {
      this.formModel = {};
      this.$validator.reset();
    }
  }
};
</script>

<style>
#profile{
  position: absolute;
  margin-left: 220px;
  margin-top: 176px;
}
#picture{
  height: 200px;
  width: 200px;
}
</style>
