<template>
  <div
    class="w-full max-w-[351px] md:max-w-[768px] lg:max-w-[1224px] px-3 mx-auto mt-8 mb-4 text-black font-bold"
  >
    <div
      class="md:flex md:flex-row-reverse md:justify-end md:gap-x-10"
    >
      <div>
        <div class="relative z-20 md:mt-10">
          <h3
            class="text-sm leading-[14px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] relative z-20"
          >
            Индивидуальный подход:
          </h3>
          <img
            class="absolute z-[19] w-[83px] md:w-[191px] lg:w-[285px] left-0 top-3 md:top-6 lg:top-9"
            src="../assets/images/title-decoration.svg"
            alt="Подчеркивание заголовка"
          />
        </div>
        <p
          class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-[28px] mt-1 md:mt-2 font-medium"
        >
          Мы работаем с каждым клиентом, <br />
          учитывая его уникальные потребности
        </p>
      </div>

      <img
        src="../assets/images/advantages-image1.jpg"
        alt=""
        class="w-[153px] md:w-[302px] lg:w-[450px] ml-auto md:ml-0 mt-1 md:scale-x-[-1]"
      />
    </div>
    <div
      class="-mt-6 mb-5 bg-orange py-1 -ml-6 pl-6 max-w-[242px] md:mt-2 lg:mt-4 md:mb-0 md:ml-auto md:max-w-[413px] md:py-8 md:pl-3 lg:max-w-[588px] lg:-mr-16 lg:pb-[51px] lg:pt-10"
    >
      <div class="relative z-20">
        <h3
          class="text-sm leading-[14px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] relative z-20"
        >
          Высокое качество:
        </h3>
        <img
          class="absolute z-[19] w-[83px] md:w-[191px] lg:w-[285px] left-0 top-3 md:top-6 lg:top-9"
          src="../assets/images/title-decoration.svg"
          alt="Подчеркивание заголовка"
        />
      </div>
      <p
        class="text-[9px] leading-none md:text-[15px] md:leading-[18px] lg:text-[23px] lg:leading-[28px] mt-3 font-medium"
      >
        Мы соблюдаем строгие стандарты качества, <br />
        чтобы ваша одежда была не только красивой, <br />
        но и долговечной
      </p>
    </div>
    <div class="md:flex md:flex-row-reverse md:justify-end md:gap-x-10 md:-mt-5 lg:-mt-8 md:items-end">
      <div class="flex items-end md:block md:mb-5">
        <div class="relative z-20 pb-1">
          <h3
            class="md:hidden text-sm leading-[14px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] relative z-20"
          >
            Оперативность
          </h3>
          <h3
            class="md:hidden text-sm leading-[14px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] relative z-20"
          >
            и гибкость
          </h3>
          <h3
            class="hidden md:block text-sm leading-[14px] md:text-[26px] md:leading-[31px] lg:text-[38px] lg:leading-[46px] relative z-20"
          >
            Оперативность и гибкость
          </h3>
          <img
            class="absolute z-[19] w-[83px] md:w-[191px] lg:w-[285px] left-0 top-3 md:top-6 lg:top-9"
            src="../assets/images/title-decoration.svg"
            alt="Подчеркивание заголовка"
          />
        </div>
        <p
          class="hidden md:block text-[15px] leading-[18px] lg:text-[23px] lg:leading-[28px] mt-1 font-medium"
        >
          Мы специализируемся на мелкосерийном<br />
          производстве, что позволяет быстро<br />
          адаптироваться, выпускать партии без задержек
        </p>
        <img
          src="../assets/images/advantages-image2.jpg"
          alt=""
          class="w-[153px] md:hidden md:w-[302px] lg:w-[450px] ml-auto mt-1"
        />
      </div>
      <p class="text-[9px] leading-none mt-1 font-medium md:hidden">
        Мы специализируемся на мелкосерийном<br />
        производстве, что позволяет быстро<br />
        адаптироваться, выпускать партии без задержек
      </p>
      <img
        src="../assets/images/advantages-image2.jpg"
        alt=""
        class="hidden md:block w-[302px] lg:w-[450px]"
      />
    </div>
  </div>
</template>

<script>

export default {
  computed: {
    titleDecoration() {
      return [
        'absolute',
        'z-[19]',
        'w-[97px]',
        'left-1/2',
        '-translate-x-1/2',
        'bottom-0',
        'md:left-0',
        'md:translate-x-0',
        'md:w-[206px]',
        'md:-bottom-2',
        'md:w-[307px]'
      ]
    }
  }
}
</script>
