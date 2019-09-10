<template>

  <div class="home">
    <h1> Adopt a New Best Friend Today!</h1>
    {{ getAllCats.length}}
    {{ animalsCount }}
    <button class="btn btn-primary" @click="togglePetForm"> {{ message }}</button>
    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">

      <b-form-group id="input-group-1" label="Pet's Name:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Species:" label-for="input-2">
        <b-form-select
          id="input-2"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-3" label="Pet's Age" label-for="input-3">
        <b-form-input
          id="input-3"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>

  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'home',
    data() {
      return {
        message: "Add New Pet",
        showPetForm: false,
        formData: {
          name: '',
          age: 0,
          species: null
        }
      }
    },
    computed: {
      ...mapGetters([
        'getAllCats',
        'animalsCount'
      ])
    },
    methods: {
      ...mapActions([
        'addPet'
      ]),

      togglePetForm() {
        this.showPetForm = !this.showPetForm
        if(this.showPetForm) {
          this.message = "Cancel"
        }
        else {
          this.message = "Add New Pet"
        }
      },
      handleSubmit() {
        const { name, age, species} = this.formData
        const payload = {

          species,
          pet: {
            name,
            age
          }
        }
        this.addPet(payload)

        //reset form after Submit
        this.formData = {
          name: '',
          age: 0,
          species: null
        }
        this.showPetForm = false
        this.message = "Add New Pet"
      }
    }
  }

</script>
