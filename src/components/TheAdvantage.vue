<template>
  <section class="section section--advantages mt-9" id="ADVANTAGES">
    <div class="advantages-title-wrapper">
      <div class="container">
        <div class="section-inner">
          <div class="advantages-info">
            <div class="relative z-20">
              <h2 class="inline-block text-[21px] leading-none relative z-20">
                Почему мы?
              </h2>
              <img
                class="absolute z-[19] w-[155px] h-[12px] left-1/2 -translate-x-1/2 -bottom-1"
                src="../assets/images/title-decoration.svg"
                alt="Подчеркивание заголовка"
              />
            </div>
            <h2 class="inline-block text-[21px] leading-none relative z-20">
              Наши преимущества
            </h2>
            <RouterLink to="/prices">
              <BaseButton
                :name="arrow"
                class="flex mx-auto mt-[26px] md:mt-[60px] px-9"
                >Услуги
              </BaseButton>
            </RouterLink>
          </div>
          <div class="section-image"></div>
        </div>
      </div>
    </div>
    <div class="advantages-list">
      <div class="container">
        <div class="advantages-list-item">
          <div class="advantages-item-info">
            <h3 class="advantages-item-title">
              <span>Индивидуальный подход:</span>
            </h3>
            <p class="advantages-item-description">
              Мы работаем с каждым клиентом, <br />
              учитывая его уникальные потребности.
            </p>
          </div>
          <div class="advantages-item-image"></div>
        </div>
        <div class="advantages-list-item advantages-list-item--orange-back">
          <div class="advantages-item-info">
            <h3 class="advantages-item-title">
              <span>Высокое качество:</span>
            </h3>
            <p class="advantages-item-description">
              Мы соблюдаем строгие стандарты качества, <br />
              чтобы ваша одежда была не только красивой, <br />
              но и долговечной.
            </p>
          </div>
        </div>
        <div class="advantages-list-item">
          <div class="advantages-item-info">
            <h3 class="advantages-item-title">
              <span>Оперативность и гибкость:</span>
            </h3>
            <p class="advantages-item-description">
              Мы специализируемся на мелкосерийном <br />
              производстве, что позволяет быстро<br />адаптироваться, выпускать
              партии без задержек.
            </p>
          </div>
          <div class="advantages-item-image"></div>
        </div>
      </div>
    </div>
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

export default {
  components: {
    BaseButton,
  },
}
</script>
