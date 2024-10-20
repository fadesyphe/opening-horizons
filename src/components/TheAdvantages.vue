<template>
  <section class="section section--advantages mt-9">
    <TheAdvantagesMain />
    <TheAdvantagesFirstList />
    <div class="advantages-list advantages-list--green-back">
      <div class="container">
        <div class="advantages-text-container">
          <div class="advantages-list-item">
            <h3 class="advantages-item-title">
              <span>Доступные цены:</span>
            </h3>
            <p class="advantages-item-description">
              Мы предлагаем конкурентоспособные <br />
              цены без ущерба для качества.
            </p>
          </div>
          <div class="advantages-list-item">
            <h3 class="advantages-item-title">
              <span>Опыт и профессионализм:</span>
            </h3>
            <p class="advantages-item-description">
              Наша небольшая команда состоит из <br />
              опытных специалистов, которые <br />
              гарантируют отличный результат.
            </p>
          </div>
          <div class="advantages-list-item advantages-list-item--back">
            <h3 class="advantages-item-title">
              <span>Уникальные</span>
            </h3>
            <br />
            <h3 class="advantages-item-title">современные дизайны</h3>
            <p class="advantages-item-description">
              Мы предлагаем стильные, <br />
              современные решения для детской одежды.
            </p>
          </div>
          <div class="advantages-list-item">
            <h3 class="advantages-item-title">
              <span>Доверие и надёжность</span>
            </h3>
            <p class="advantages-item-description">
              Мы строим долгосрочные отношения <br />
              с нашими клиентами, основанные на честности,<br />прозрачности и
              выполнении всех обязательств.
            </p>
          </div>
        </div>
      </div>
      <div class="advantages-list-background"></div>
    </div>
  </section>
</template>

<script>
import BaseButton from './BaseButton.vue'
import TheAdvantagesMain from "./TheAdvantagesMain.vue"
import TheAdvantagesFirstList from "./TheAdvantagesFirstList.vue"

export default {
  components: {
    BaseButton,
    TheAdvantagesMain,
    TheAdvantagesFirstList,
  },
}
</script>
