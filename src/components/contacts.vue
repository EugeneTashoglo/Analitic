<template>
    <div class="container">
      <div class="content">
        <div class="contacts">
          <h2>Наши контакты</h2>
          <div class="contact-item">
            <img  draggable="false" :src="phoneIcon" alt="number">
            <a :href="phoneNumber">+7 (905) 248-04-47</a>
          </div>
          <div class="contact-item">
            <img   draggable="false":src="emailIcon" alt="mail">
            <a :href="emailAddress">info@analitik-group.ru</a>
          </div>
          <div class="contact-item">
            <img draggable="false":src="locationIcon" alt="location">
            <a :href="locationAddress">ул. Дачная, 8, офис 6</a>
          </div>
          <h2>Мы на карте</h2>
        </div>
        <div class="maps">
          <div class="map" id="yandex-map">
            <!-- Placeholder для карты -->
          </div>
        </div>
      </div>
      <img  draggable="false" class="right-image" :src="rightImage" alt="image">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        phoneIcon: "src/assets/section_contacts/phone.svg",
        emailIcon: "src/assets/section_contacts/email.svg",
        locationIcon: "src/assets/section_contacts/location.svg",
        phoneNumber: "+7 (905) 248-04-47",
        emailAddress: "mailto:info@analitik-group.ru",
        locationAddress: "https://maps.yandex.ru",
        rightImage: "src/assets/section_contacts/contacts_img.png"
      };
    },
    mounted() {
      const script = document.createElement('script');
      script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7fb99550d24478fd05e9097103ce7b581fc3804d08cb1065e1545f248989ff6f&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
      script.async = true;
      document.getElementById('yandex-map').appendChild(script);
    }
  };
  </script>
  
  <style >
  .container {
    display: flex;
  }
  
  .content {
    flex: 1;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .contacts {
    display: flex;
    flex-direction: column;
  }
  
  .contacts h2 {
    font-size: 56px;
  }
  
  .contact-item {
  display: flex;
  align-items: center;
  transition: transform 0.3s; /* анимация при изменении трансформации */
}

.contact-item:hover {
  transform: scale3d(1.3, 1.3, 1.3); /* 3D увеличение размера при наведении */
}

  
  .contact-item a {
    margin: 20px;
    text-decoration: none;
    color: #3D210B;
  }
  
  .contact-item img {
    margin-right: 10px;
    cursor: pointer;
  }

  .right-image {
    width: 951px;  
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.6);    

    height: 1000px;
  }
  
  .map {
    width: 500px;
    height: 400px;
  }
  </style>
  