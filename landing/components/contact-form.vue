<template>
                        <form action="" method="POST" class="send-form pt-3" @submit.prevent="handleSubmit">
                            <input type="hidden" class="email-template" name="email_template" value="Normal Form">
                            <div class="mb-3" v-show="basic">
                                <label for="package_name" class="form-label">Wo wollen Sie Bewertungen löschen?</label>
                                <select v-model="form.Where"
                                required
                                name="package_name"
                                id="package_name"
                                class="form-select"
                                aria-label="Default select example">
                                    <option value="Google Basic">Google Basic</option>
                                    <option value="Google Bronze">Google Bronze</option>
                                    <option value="Google Silber">Google Silber</option>
                                    <option value="Google Gold">Google Gold</option>
                                </select>
                            </div>
                            <div class="row justify-content-between align-items-center">
                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="full_name" class="form-label">Wie erreichen wir Sie?</label>
                                        <input
                                        v-model="form.Name"
                                        required
                                        minlength="3"
                                        maxlength="100"
                                        type="text"
                                        class="form-control shadow-none"
                                        id="full_name"
                                        name="full_name"
                                        aria-describedby="Ihr Name"
                                        placeholder="Ihr Name">
                                    </div>
                                </div>
                                <div class="col-md-6 align-self-md-end">
                                    <div class="mb-3">
                                        <input
                                        v-model="form.Email"
                                        required
                                        minlength="3"
                                        maxlength="150"
                                        type="email"
                                        class="form-control shadow-none"
                                        id="email"
                                        name="email"
                                        aria-describedby="E Mail"
                                        placeholder="E-Mail">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <input
                                v-model="form.Phone"
                                required
                                minlength="3"
                                maxlength="20"
                                type="tel"
                                class="form-control shadow-none"
                                id="phone_number"
                                name="phone_number"
                                aria-describedby="Telefon"
                                placeholder="Telefon (für Rückfragen)">
                            </div>
                            <div class="mb-4">
                                <input
                                v-model="form.Company"
                                type="text"
                                class="form-control shadow-none"
                                id="company_name"
                                name="company_name"
                                aria-describedby="Unternehmens"
                                placeholder="Name Ihres Unternehmens">
                            </div>
                            <div class="mb-4">
                                <div class="form-check">
                                    <input
                                    required
                                    class="form-check-input shadow-none"
                                    type="checkbox"
                                    id="check_privacy_policy"
                                    name="check_privacy_policy">
                                    <label class="form-check-label fw-500 fs-08">
                                        Ich habe die <span data-bs-toggle="modal" data-bs-target="#modal-daten" class="text-decoration-underline pointer">Datenschutzerklärung</span> gelesen und bin mit dieser einverstanden.
                                    </label>
                                </div>
                            </div>
                            <input class="d-none" name="form_id" value="4" readonly>
                            <div class="w-100 px-2 text-center">
                                <button type="submit" class="btn-sender-text btn btn-warning fw-bold w-100 py-3 fs-5" id="jetzt-analysieren-2">Jetzt Analysieren</button>
                            </div>
                        </form>
</template>
<script>
/*eslint-disable*/
export default {
    name:'contact-form',
    props:{
        basic:{
            type:Boolean,
            default:true
        }
    },
    data() {
      return {
        form: {
          Where:"Google Basic",
          Name: "",
          Email: "",
          Phone: "",
          Company: "",
        },
      };
    },
    methods: {
      handleSubmit: async function() {
        const formData = new FormData();

        for (let [key, value] of Object.entries(this.form)) {
          formData.append(key, value);
        }

        await this.$yaskaApi.$post("/customer/messages",formData).then(({ data }) => {
            Swal.fire(
            'Thanks!',
            'Message Sent!',
            'success'
            )
          })
          .catch((e) => {
            //window.location.href = e.response.data.redirect;
          });
       
      }
    }
}
</script>