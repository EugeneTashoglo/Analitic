<template>
    <div class="services-section" id="service">
      <div class="services-header">
        <img class="services-logo" :src="sectionLogo" alt="Services Logo"  draggable="false">
        <h2>{{ sectionTitle }}</h2>
      </div>
      <div class="services-grid">
        <div v-for="(service, index) in services" :key="index" class="service-item">
          <img  draggable="false" :src="service.image" :alt="'Service ' + (index + 1) + ' Logo'" class="service-image" :style="{ width: imageSize, height: 'auto' }">
          <p :style="{ fontSize: textSize + 'px' }">{{ service.name }}</p>
          <p v-if="showPrice[index]" class="service-price show">{{ service.price }}</p>
          <p v-else class="service-price">{{ service.price }}</p>
        </div>
      </div>
      <button class="price-button" @click="toggleSize">{{ priceButtonText }}</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sectionTitle: "Физическим лицам",
        sectionLogo: "src/assets/section_individ/section_logo.png",
        services: [
          { image: "src/assets/section_individ/Zhil_dela_1.png", name: "Жилищные дела", price: "от 45000 руб." },
          { image: "src/assets/section_individ/family_2.png", name: "Семейные дела", price: "от 45000 руб." },
          { image: "src/assets/section_individ/nasledstvo_3.png", name: "Наследство", price: "от 50000 руб." },
          { image: "src/assets/section_individ/bankrotstvo_4.png", name: "Банкротство", price: "договорная цена" },
          { image: "src/assets/section_individ/dolgi_g.png", name: "Взыскание долгов", price: "договорная цена" },
          { image: "src/assets/section_individ/prava_potreb.png", name: "Защита прав потребителей", price: "договорная цена" },
        ],
        priceButtonText: "Прайс",
        imageSize: '100px',
        textSize: 24,
        isSmall: false, // флаг для отслеживания состояния кнопки
        showPrice: Array(6).fill(false), // Initialize an array to track whether price is shown for each service
      };
    },
    methods: {
      toggleSize() {
        this.isSmall = !this.isSmall; // изменяем состояние кнопки
        if (this.isSmall) {
          this.imageSize = '50px'; // изменяем размер изображений
          this.textSize = 18; // изменяем размер текста
        } else {
          this.imageSize = '100px'; // возвращаем начальный размер изображений
          this.textSize = 24; 
        }
        setTimeout(() => {
          this.showPrice = this.showPrice.map(val => !val);
        }, 0); 
      }
    }
  };
  </script>
  
  <style scoped>
  .service-image, .service-item p {
    transition: width 0.5s ease, font-size 0.5s ease;
  }


.service-price {
  font-size: 18px;
  margin-top: 5px;
  color: #3D210B;
  opacity: 0;
  position: relative;
}

.service-price::after {
  content: '';
  display: block;
  position: absolute;
  bottom: -2px; /* Вы можете изменить это значение в зависимости от желаемого отступа */
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #3D210B; /* Цвет подчеркивания */
}

.service-price.show {
  animation: fadeIn 2s ease forwards;

}

.service-price.hide {
  animation: fadeOut 2s ease forwards;
}


  .services-section {
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.6);

    background-color: #E4E1DC;
  }
  
  .services-logo {
    width: 80px;
    height: 67px;
  }
  
  .services-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .services-header h2 {
    font-size: 38px;
    color: #3D210B;
    margin-top: -10px;
    margin-right: 10px;
  }
  
  .services-grid {
    font-weight: 500px;
    color: #3D210B;
    font-size: 24px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    font-weight: 700;
  }
  
  .service-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 200px;
    border: 3px solid #3D210B; /* Добавляем границу */
    padding: 10px; /* Добавляем отступы вокруг содержимого */
  }
  
  .service-image {
    margin-top: 10px;
    width: 100px;
    height: auto;
  }
  
  .service-item p {
    text-align: center;
  }
  
  .price-button {
    margin-top: 20px;
    width: 200px;
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #970E0E;
    cursor: pointer;
  transition:  background-color 0.3s;;

  }
  
  .price-button:hover {
    background-color: #750b0b;
  }
  @keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes fadeOut {
  0% { opacity: 1; }
  100% { opacity: 0;  }
}
  </style>
  