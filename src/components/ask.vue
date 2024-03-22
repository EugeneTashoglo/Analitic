<template>
  <div class="container">
      <img class="left-image" :src="imageSrc" alt="image"  draggable="false">
    <div class="form-container">
      <h2>{{ formTitle }}</h2>
      <p>{{ formDescription }}</p>
      <div class="form">
        <input type="text" :placeholder="namePlaceholder" id="name" class="input-field"><br>
        <input type="text" :placeholder="phonePlaceholder" id="phone" class="input-field"><br>
        <input type="text" :placeholder="emailPlaceholder" id="email" class="input-field"><br>
        <input type="text" :placeholder="problemPlaceholder" id="problem" style="  height: 100px ; " class="input-field">
      </div>
      <div class="politic">
        <p>
  Нажимая кнопку отправить, вы выражаете согласие на передачу и 
  обработку <br> персональных данных в соответствии с  
  <a href="#" style="text-decoration: underline;   color: #3D210B;">политикой конфиденциальности</a>.
</p>
        <button>{{ buttonText }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageSrc: "src/assets/section_ask/ask_me_img.png",
      formTitle: "Задайте нам вопрос",
      formDescription: "Мы ответим вам в кратчайшие сроки",
      namePlaceholder: "Ваше имя",
      phonePlaceholder: "Телефон",
      emailPlaceholder: "E-mail",
      problemPlaceholder: "Опишите вашу проблему",
      buttonText: "Отправить"
    };
  }
};
</script>

<style >
body {
  color: #3D210B;
}

.container {
  display: flex;
  justify-content: center; /* Центрирование содержимого */
  align-items: center;

}
.form-container {
  flex: 1;
  display: flex;
  flex-direction: column; /* Выравнивание содержимого по вертикали */
  align-items: center;
text-align: center;
}
.form-container h2 {
  display: flex;
  font-size: 46px;
  margin-bottom: -10px;
}
.form-container p{
 font-size: 20px;
 
}
.left-image {
  width: 952px;  
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.6);

  height: 1000px;
}

.input-field {
  width: 500px; /* Ширина инпутов */
  background-color: #F6F5F3;
  padding: 10px; /* Отступы */
  border-radius: 5px; /* Загругление углов */
  margin-bottom: 10px; /* Отступ снизу */
  color: #9E9085; /* Цвет текста */
  border: 1px solid #3D210B; /* Тонкая граница */
  
}

.politic p{

  margin-top: 30px;
  font-size: 12px;
}
.politic button {
  font-family: 'Source Serif 4', serif;
  margin-top: 50px;
  width: 190px;
  font-size: 25px;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #970E0E;
  cursor: pointer;
  transition:  background-color 0.3s;;

}

.politic button:hover {
  background-color: #750b0b;

}

/* Дополнительные стили по необходимости */
</style>
