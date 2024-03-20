<template>
  <div>
    <section class="upsection">
      <header class="header">
        <div class="hrefheader">
          <img class="imglogo" :src="logoSrc" :alt="logoAlt">
          <a :href="link1">главная</a>
          <a :href="link2">о компании</a>
          <a :href="link3">услуги</a>
          <a :href="link4">контакты</a>
          <div class="number">{{ phoneNumber }}</div>
          <div class="profile">
            <img :src="profileImgSrc" :alt="profileImgAlt">
            <button>{{ loginText }}</button>
          </div>
        </div>
        <div class="maininfo">
          <h1>ПРОФЕССИОНАЛЬНАЯ <br> ПОМОЩЬ В РЕШЕНИИ<br> ЮРИДИЧЕСКИХ ПРОБЛЕМ</h1>
          <h2>ЭФФЕКТИВНОЕ БУХГАЛТЕРСКОЕ ОБСЛУЖИВАНИЕ</h2>
          <button>ОСТАВИТЬ ЗАЯВКУ</button>
        </div>
      </header>
    </section>
    <info />
    <individ />
    <entity/>
  </div>
</template>


<!-- Стили -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap');
body {
  font-family: 'Source Serif 4', serif;
  margin: 0px;
  padding: 0px;
}
.upsection {
  height: 110vh; 
  background-image: url('src/assets/header/main_bg.png');
  background-size: cover;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.6);

}
.hrefheader{
  display: flex;
  flex-direction: row; 
  align-items: center; 
  margin-left: 10px;
}
.hrefheader a{
margin-right: 60px;
}
.header {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
}
.profile {
  margin-left: 60px;
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
}
.profile img {
  height: 40px;
  width: 40px;
  margin-bottom: 10px; 
}
.profile button {
  width: 70px;
 height: 30px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #970E0E;
}
.imglogo{
  margin-left: 100px;
  height: 90px;
  width: 350px;
  margin-right: 500px;
}
.header img,
.header .hrefheader a,
.header ,
.header .profile img {
  color: #3D210B;
  text-decoration: none;
}
.number {
  position: relative;
  color: white;
  background-color: #970E0E;
  height: 100px;
  width: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.6);
}
.maininfo{
  position: relative;
  top: 200px;
  right: 450px;
}
.maininfo h1{
  font-size: 50px;
}
.maininfo h2 {
  font-size: 25px; 
  font-weight: 350; 
  margin-bottom: 20px; 
}
.maininfo button{
  font-family: 'Source Serif 4', serif;
  margin-top: 50px;
  width:260px;
  font-size: 20px;
 height: 80px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #970E0E;
}

</style>
<!-- Скрипты -->
<script>
// Импортируем ваши компоненты
import info from './components/info.vue';
import individ from './components/individ.vue';
import entity from './components/entity.vue';
export default {
  components: {
    info,
    individ,
    entity,
  },
  data() {
    return {
      logoSrc: 'src/assets/header/logo.png',
      logoAlt: 'Company Logo',
      link1: 'https://example.com/link1',
      link2: 'https://example.com/link2',
      link3: 'https://example.com/link3',
      link4: 'https://example.com/link4',
      phoneNumber: '+7 (4012) 37-72-97',
      profileImgSrc: 'src/assets/header/UserAccount.png',
      profileImgAlt: 'Profile Picture',
      loginText: 'Войти',
    };
  },
};
</script>
