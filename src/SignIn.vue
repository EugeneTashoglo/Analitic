<template>
    <div class="login-page">
      <div class="content-wrapper">
        <div class="image-section">
          <img class="logoImg" src="@/assets/header/logo.png" alt="logo">
          <p>copyright © 2011-2024. все права защищены <br> <a href="">политика конфиденциальности</a></p>
  
        </div>
        
        <div class="form-section">
          <button class="back-button">Назад</button>
          <form class="register-form" @submit.prevent="register">
            <h2>РЕГИСТРАЦИЯ</h2>
            <input type="text" class="form-input" v-model="user.surname" placeholder="Ваша фамилия" required>
            <input type="text" class="form-input" v-model="user.name" placeholder="Ваше имя" required>
            <input type="text" class="form-input" v-model="user.patronymic" placeholder="Ваше отчество">
            <input type="tel" class="form-input" v-model="user.phone" placeholder="Телефон" required>
            <input type="email" class="form-input" v-model="user.email" placeholder="E-mail" required>
            <input type="password" class="form-input" v-model="user.password" placeholder="Придумайте пароль" required>
            <input type="password" class="form-input" v-model="user.confirmPassword" placeholder="Повторите пароль" required>
            <button class="create" type="submit">СОЗДАТЬ АККАУНТ</button>
            <p>Нажимая кнопку, вы выражаете согласие на передачу и <br> обработку персональных данных</p>
            <a class="message">У меня уже есть аккаунт</a>
          </form>
        </div>
      </div>
    </div>
  </template>
  
    
    <script>
    export default {
      data() {
        return {
          user: {
            surname: '',
            name: '',
            patronymic: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
          }
          
        };
      },
      methods: {
        register() {
          // Тут будет логика регистрации пользователя
          console.log(this.user);
          // После регистрации, возможно, вы захотите перенаправить пользователя на другую страницу
        }
      }
    };
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');
    .body{
      font-family: 'Source Serif 4', serif;
    margin: 0px;
    padding: 0px;
    }
    .content-wrapper {
    display: flex;
    height: 100vh; /* Полная высота видового экрана */
  }
  .logoImg{
    width: 500px;
    height: 100px;
  }
  .image-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center; /* Центрирование содержимого по вертикали */
    align-items: center; /* Центрирование содержимого по горизонтали */
    background-image: url('@/assets/section_contacts/contacts_img.png');
    background-size: cover;
    background-position: center;
  }
  
  
  
  p {
    color: white;
    text-align: center; /* Выравнивание текста по центру */
    width: 100%; /* Ширина текста на всю ширину блока */
    padding: 10px; /* Добавление внутренних отступов */
  }
  p a{
    color: white;
  text-decoration: none;
  }
  .form-section {
    flex: 1; /* Takes half of the space */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; /* Centers the form vertically */
    padding: 20px;
  }
  .message{
    cursor: pointer;
  }
  .register-form {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centers the form elements horizontally */
    width: 100%; /* Adjust the width as necessary */
  }
  .register-form p{
    color:  #3D210B;
  }
  .form-input {
    width: 470px; /* Width of inputs */
    background-color: #F6F5F3;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    color: #9E9085;
    border: 1px solid #3D210B;
    font-size: 15px;
  }
  
  .back-button, .create {
    width: auto; /* Adjust width as needed */
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: #970E0E;
    transition: background-color 0.3s;
    cursor: pointer;
    font-size: 15px; /* Adjust font size */
  }
  
  .create {
    font-size: 20px;
  }
  </style>