<template>
  <HeaderApp></HeaderApp>
  <h2>Форма для данных</h2>
  <div class="page">
   <form action="#" name="form" id="form">
    <label name="form" class="label_form"
    >
      <span style="color: #d8380e">Клиент:</span></label
    >
    <label name="input_form_name" class="label_form">
      <input
          type="text"
          required
          pattern="[A-Z][A-z]+"
          placeholder="Введите имя"
          autocomplete="off"
          class="input_form"
          name="input_form_name"
      />
    </label>
    <label name="input_form_last_name" class="label_form">
      <input
          type="text"
          required
          autocomplete="off"
          pattern="[A-Z][A-z]+"
          placeholder="Введите фамилию"
          class="input_form"
          name="input_form_last_name"
      />
    </label>
    <label name="input_form_email" class="label_form">
      <input
          type="email"
          required
          autocomplete="off"
          placeholder="Введите email"
          class="input_form"
          name="input_form_email"
      />
    </label>
    <div>
      <label for="checkbox_m" style="font-weight: bold">
        М
        <input
            type="radio"
            class="type"
            id="checkbox_m"
            name="gender_selection"
            checked
        />
      </label>
      <label for="checkbox_f" style="font-weight: bold">
        Ж
        <input
            type="radio"
            class="type"
            id="checkbox_f"
            name="gender_selection"
        />
      </label>
    </div>
    <button type="submit" id="btn" style="color: white">
      <span style="font-size: 20px">Отправить</span>
    </button>
  </form>
  </div>
  <ClearBooth></ClearBooth>
  <FooterApp></FooterApp>
</template>
<script>
import HeaderApp from "@/components/HeaderApp";
import FooterApp from "@/components/FooterApp";
import ClearBooth from "@/components/ClearBooth";
export default {
  components: {ClearBooth, FooterApp, HeaderApp},
};
</script>
<style>
#form {
  margin-top: 79px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 400px;
}

.input_form {
  margin: 10px 0 0 20px;
  border: 1px solid grey;
  border-radius: 5px 5px;
  padding: 5px;
  height: 35px;
  width: 400px;
  background-color: #f4f4f4;
  font-size: 16px;
  /* font-family: Montserrat; */
  /* box-shadow: 0 1px 5px 0 black; */
}
.input_form:hover {
  /* border: 2px solid grey; */
  /* box-shadow: 0 1px 5px 0 grey; */
}
.input_form:focus-visible {
  /* border: 2px solid grey; */
  /* box-shadow: 0 1px 5px 0 grey; */
  outline: none;
}
.checkbox_f {
  color: red;
}
.input_form:valid {
  /* box-shadow: 0 1px 5px 0 green; */
  border: 2px solid green;
}
.input_form:focus-visible:invalid {
  /* box-shadow: 0 1px 5px 0 red; */
  /*border: 2px solid red; */
}
label[name="input_form_name"] {
  width: 400px;
}
label[name="input_form_last_name"] {
  width: 400px;
}
label[name="input_form_email"] {
  width: 400px;
}
label[name="form"] {
  font-size: 28px;
  margin-top: -10px;
}
.label_form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: 0.06em;
  text-align: left;
  font-weight: bold;
  /* text-shadow: 1px 2px 2px black; */
}

#btn {
  margin-top: 10px;
  padding: 20px 130px;
  background-color: #d8380e;
  text-align: center;
  border-radius: 50px 50px;
  outline: none;
  border: none;
  /* box-shadow: 0 2px 3px 1px black; */
}
#btn:hover {
  background-color: #fe633b;
}
#btn:active {
  background-color: dimgray;
  box-shadow: 0 2px 3px 1px white;
}
@media (max-width: 980px) {
  #form {
    margin: 220px 0 0 0;
  }
}
@media (max-width: 415px) {
  .label_form {
    width: 400px;
    margin: 0;
  }
}
</style>

