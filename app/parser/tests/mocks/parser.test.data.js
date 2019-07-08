const fs = require('fs');

const htmlPageMock = fs.readFileSync('app/parser/tests/mocks/resume-list-first-page.html', 'utf8');
const htmlResumePageMock = fs.readFileSync('app/parser/tests/mocks/resume-page.html', 'utf8');
const htmlResumeWithoutSalaryAndPhotoPageMock = fs.readFileSync('app/parser/tests/mocks/resume-page-without-salary-and-photo.html', 'utf8');
const resumeLinksMock = [
  'https://www.work.ua/resumes/5491825/',
  'https://www.work.ua/resumes/478353/',
  'https://www.work.ua/resumes/3862119/',
  'https://www.work.ua/resumes/3528680/',
  'https://www.work.ua/resumes/5439467/',
  'https://www.work.ua/resumes/5543608/',
  'https://www.work.ua/resumes/2442718/',
  'https://www.work.ua/resumes/5426975/',
  'https://www.work.ua/resumes/5054061/',
  'https://www.work.ua/resumes/3602988/',
  'https://www.work.ua/resumes/5543580/',
  'https://www.work.ua/resumes/2876085/',
  'https://www.work.ua/resumes/5523744/',
  'https://www.work.ua/resumes/3924184/',
];
const resumeCommonDataMock = {
  meta: 'Дубченко Анна Юрьевна, SMM-менеджер, PR-manager шукає роботу у Києві, Одесі. Про себе: 22 роки, вища освіта, досвід роботи 3 роки. Цікавить повна зайнятість, неповна зайнятість, дистанційна робота, ЗП від 20000 грн.',
  photo: {
    alt: '',
    url: 'https://www.work.ua//i.work.ua/sent_photo/3/0/5/3053e5fadf6cb14442aeb06743b07985.jpg'
  },
  fullName: 'Дубченко Анна Юрьевна',
  salary: '1200',
  position: ['PR-manager', 'SMM-менеджер'],
  availability: 'Повна зайнятість, неповна зайнятість, дистанційна робота.',
  personal: {
    age: '22 роки',
    city: 'Одеса',
    relocation: 'Київ'
  },
};

const resumeWithoutPhotoAndSalaryCommonDataMock = {
  meta: 'Ткаченко Виталий Олегович, Разнорабочий шукає роботу у Кривому Розі. Про себе: 18 років, середня спеціальна освіта. Цікавить повна зайнятість.',
  availability: 'Повна зайнятість.',
  photo: {
    url: '',
    alt: ''
  },
  fullName: 'Ткаченко Виталий Олегович',
  salary: '',
  position: ['Разнорабочий'],
  personal: {
    age: '18 років',
    city: 'Кривий Ріг'
  }
};

const resumeDataMock = [
  {
    experience: [
      {
        company: 'Bowl Bar Odessa, Одесса (ресторанный бизнес)',
        description: '-открытие кафе здорового питания\n-разработка меню\n-разработка стратегии продвижения компании в соц. сетях\n-ведение соц.сетей\n-привлечение новых клиентов через соц.сети\n-налаживание новых каналов сбыта\n-работа со СМИ',
        position: 'Co-founder',
        time: 'з 08.2018 по нині'
      },
      {
        company: 'BowlBar, Одеса (ресторанный бизнес)',
        description: '- создание Tone of voice бренда;\n- Pre-production (креатив, идеи, референсы) и post-production (обработка материалов — фотошопы, создание анимаций, витрин, видеоредакторы);\n- контент - план и четкое ему следование;\n- коммуникация с аудиторией – вовлечение, конкурсные механики и другие активации;\n- Influence-маркетинг, работа с лидерами мнений;\n- создание вебсайта на платформе Wordpress;\n- настройка рекламных компаний Facebook Adwords;\n- отслеживание результатов РК;\n- ретаргетинг;\n- создание рекламных материалов ( флаеры, визитки, меню, банеры)\n\n[відкрити контакти](див. вище в блоці «контактна інформація»)',
        position: 'SMM-manager',
        time: 'з 08.2018 по нині'
      },
      {
        company: 'ТМ Фрутим, Киев (Продукты питания)',
        description: '-создание и ведение страниц бренда в социальных сетях\n-организация интерактивов на странице\n-создание фото-, видео- контента\n-работа с лидерами мнения\n-копирайт рекламных текстов\n-повышение узнаваемости бренда\n-установление новых связей с реализаторамм\n\n[відкрити контакти](див. вище в блоці «контактна інформація»)',
        position: 'SMM-менеджер',
        time: 'з 03.2018 по 06.2018'
      },
      {
        company: 'VigoVelix, Киев (Фитнес-студия)',
        description: '-Ведение социальных сетей фитнес-студии\n-настройка рекламных компаний( таргетинг)\n-отслеживание аналитики\n-лидогенерация\n-планирование и отчётность\n-организация и продвижение мероприятий в студии\n-поиск новых корпоративных контактов\n-работа с лидерами мнений\n-налаживание связей и поиск новых партнеров\n\n\nДостигнуто:\n- 40% рост продаж после первого месяца работы\n- коллаборация с лидерами мнения\n- узнаваемость бренда через соц-сети\n- прирост новых клиентов через социальные сети\n- сотрудничество с YARO и IdeaFixbyLacma',
        position: 'Smm-manager, pr-manager',
        time: 'з 08.2017 по 12.2017'
      },
      {
        company: '90-60-90, Киев (Интернет-продвижение)',
        description: 'Ведение спортивного блога\n-ведение социальных сетей: вконтакте( 6 млн ауд.) Инстаграм [відкрити контакти](див. вище в блоці «контактна інформація»)) Ютуб [відкрити контакти](див. вище в блоці «контактна інформація»))\n- создание видео контента (сценарий, съёмка, монтаж, оптимизация видео)\n- создание фото-контента\n- ведение онлайн-марафонов с охватом до [відкрити контакти](див. вище в блоці «контактна інформація») человек\n- организация оффлайн тренировок\n\nДостигнуто:\n- прирост подписчиков на канал [відкрити контакти](див. вище в блоці «контактна інформація») за 8 месяцев)\n- разработка марафонов\n\nСсылки на некоторые ролики:\nhttps://youtu.be/u6xzo0kbQYM\nhttps://youtu.be/n1EQkE607lE\nhttps://youtu.be/5KTf5YuZaAU\nhttps://youtu.be/3uLnEGfZYYc',
        position: 'Контент-менеджер, видео-блоггер',
        time: 'з 10.2016 по 09.2017'
      }
    ]
  },
  {
    education: [
      {
        department: 'Институт международных отношений, Киев',
        profession: 'Международный бизнес, Переводчик английского языка',
        time: 'з 09.2014 по 05.2018',
        type: 'Вища',
        university: 'Кну имени Тараса Шевченка'
      }
    ]
  },
  {
    additionalEducation: [
      'Bazilik, таргетинг (2017, 3 дня)',
      'Bezovets, работа с лидерами мнений (2017, 1 день)',
      'Projector, Digital Marketing (2018)',
      'Udemy, Digital Marketing (2018-2019)',
    ]
  },
  {
    skills: [
      'Навички роботи з комп’ютером',
      'Уверенный пользователь ПК',
      'MC Office',
      'Adobe Premier Pro',
      'Photoshop',
      'Canva',
      'Figma',
      'Wix',
      'Wordpress',
    ]
  },
  {
    languages: [
      'Англійська — просунутий',
      'Іспанська — початковий',
    ]
  },
  {
    additionalInfo: [
      '-интенсив по таргетингу Bazilik',
      '-онлайн курсы по продвижению',
      '-курсы по оптимизации сайта',
      '-интенсив по работе с лидерами мнения'
    ]
  }
];

const resumePageDataMock = {
  meta: 'Дубченко Анна Юрьевна, SMM-менеджер, PR-manager шукає роботу у Києві, Одесі. Про себе: 22 роки, вища освіта, досвід роботи 3 роки. Цікавить повна зайнятість, неповна зайнятість, дистанційна робота, ЗП від 20000 грн.',
  photo: {
    alt: '',
    url: 'https://www.work.ua//i.work.ua/sent_photo/3/0/5/3053e5fadf6cb14442aeb06743b07985.jpg'
  },
  fullName: 'Дубченко Анна Юрьевна',
  salary: '1200',
  position: ['PR-manager', 'SMM-менеджер'],
  availability: 'Повна зайнятість, неповна зайнятість, дистанційна робота.',
  personal: {
    age: '22 роки',
    city: 'Одеса',
    relocation: 'Київ'
  },
  experience: [
    {
      company: 'Bowl Bar Odessa, Одесса (ресторанный бизнес)',
      description: '-открытие кафе здорового питания\n-разработка меню\n-разработка стратегии продвижения компании в соц. сетях\n-ведение соц.сетей\n-привлечение новых клиентов через соц.сети\n-налаживание новых каналов сбыта\n-работа со СМИ',
      position: 'Co-founder',
      time: 'з 08.2018 по нині'
    },
    {
      company: 'BowlBar, Одеса (ресторанный бизнес)',
      description: '- создание Tone of voice бренда;\n- Pre-production (креатив, идеи, референсы) и post-production (обработка материалов — фотошопы, создание анимаций, витрин, видеоредакторы);\n- контент - план и четкое ему следование;\n- коммуникация с аудиторией – вовлечение, конкурсные механики и другие активации;\n- Influence-маркетинг, работа с лидерами мнений;\n- создание вебсайта на платформе Wordpress;\n- настройка рекламных компаний Facebook Adwords;\n- отслеживание результатов РК;\n- ретаргетинг;\n- создание рекламных материалов ( флаеры, визитки, меню, банеры)\n\n[відкрити контакти](див. вище в блоці «контактна інформація»)',
      position: 'SMM-manager',
      time: 'з 08.2018 по нині'
    },
    {
      company: 'ТМ Фрутим, Киев (Продукты питания)',
      description: '-создание и ведение страниц бренда в социальных сетях\n-организация интерактивов на странице\n-создание фото-, видео- контента\n-работа с лидерами мнения\n-копирайт рекламных текстов\n-повышение узнаваемости бренда\n-установление новых связей с реализаторамм\n\n[відкрити контакти](див. вище в блоці «контактна інформація»)',
      position: 'SMM-менеджер',
      time: 'з 03.2018 по 06.2018'
    },
    {
      company: 'VigoVelix, Киев (Фитнес-студия)',
      description: '-Ведение социальных сетей фитнес-студии\n-настройка рекламных компаний( таргетинг)\n-отслеживание аналитики\n-лидогенерация\n-планирование и отчётность\n-организация и продвижение мероприятий в студии\n-поиск новых корпоративных контактов\n-работа с лидерами мнений\n-налаживание связей и поиск новых партнеров\n\n\nДостигнуто:\n- 40% рост продаж после первого месяца работы\n- коллаборация с лидерами мнения\n- узнаваемость бренда через соц-сети\n- прирост новых клиентов через социальные сети\n- сотрудничество с YARO и IdeaFixbyLacma',
      position: 'Smm-manager, pr-manager',
      time: 'з 08.2017 по 12.2017'
    },
    {
      company: '90-60-90, Киев (Интернет-продвижение)',
      description: 'Ведение спортивного блога\n-ведение социальных сетей: вконтакте( 6 млн ауд.) Инстаграм [відкрити контакти](див. вище в блоці «контактна інформація»)) Ютуб [відкрити контакти](див. вище в блоці «контактна інформація»))\n- создание видео контента (сценарий, съёмка, монтаж, оптимизация видео)\n- создание фото-контента\n- ведение онлайн-марафонов с охватом до [відкрити контакти](див. вище в блоці «контактна інформація») человек\n- организация оффлайн тренировок\n\nДостигнуто:\n- прирост подписчиков на канал [відкрити контакти](див. вище в блоці «контактна інформація») за 8 месяцев)\n- разработка марафонов\n\nСсылки на некоторые ролики:\nhttps://youtu.be/u6xzo0kbQYM\nhttps://youtu.be/n1EQkE607lE\nhttps://youtu.be/5KTf5YuZaAU\nhttps://youtu.be/3uLnEGfZYYc',
      position: 'Контент-менеджер, видео-блоггер',
      time: 'з 10.2016 по 09.2017'
    }
  ],
  education: [
    {
      department: 'Институт международных отношений, Киев',
      profession: 'Международный бизнес, Переводчик английского языка',
      time: 'з 09.2014 по 05.2018',
      type: 'Вища',
      university: 'Кну имени Тараса Шевченка'
    }
  ],
  additionalEducation: [
    'Bazilik, таргетинг (2017, 3 дня)',
    'Bezovets, работа с лидерами мнений (2017, 1 день)',
    'Projector, Digital Marketing (2018)',
    'Udemy, Digital Marketing (2018-2019)',
  ],
  skills: [
    'Навички роботи з комп’ютером',
    'Уверенный пользователь ПК',
    'MC Office',
    'Adobe Premier Pro',
    'Photoshop',
    'Canva',
    'Figma',
    'Wix',
    'Wordpress',
  ],
  languages: [
    'Англійська — просунутий',
    'Іспанська — початковий',
  ],
  additionalInfo: [
    '-интенсив по таргетингу Bazilik',
    '-онлайн курсы по продвижению',
    '-курсы по оптимизации сайта',
    '-интенсив по работе с лидерами мнения'
  ]
};


module.exports = {
  htmlResumeWithoutSalaryAndPhotoPageMock,
  resumePageDataMock,
  resumeDataMock,
  resumeCommonDataMock,
  resumeLinksMock,
  htmlResumePageMock,
  htmlPageMock,
  resumeWithoutPhotoAndSalaryCommonDataMock,
};
