const LANGUAGES = {
	bg: 'bg',
	en: 'en'
};

const RESOLUTIONS = {
	xs: 450,
	sm: 680,
	md: 980,
	bootstrapXS: 768,
	bootstrapSM: 992,
	bootstrapMD: 1200,
	smTopSellers: 640,
	mdTopSellers: 1000,
};

const FORM_VALIDATION = {
	bg: {
		requiredField: 'Това поле е задължително.',
		validMail: 'Моля, въведете валиден имейл.',
	},
	en: {
		requiredField: 'This field is required.',
		validMail: 'Please, enter a valid email.',
	}
};

const MENU = {
	bg: {
		home: 'Начало',
		projects: 'Проекти',
		services: 'Услуги',
		aboutUs: 'За нас',
		careers: 'Кариери',
		contact: 'Контакт',
		clients: 'Клиенти',
		categories: 'Категории',
		sections: 'Секциии',
		login: 'Логин',
		logout: 'Изход'
	},
	en: {
		home: 'Home',
		projects: 'Projects',
		services: 'Services',
		aboutUs: 'About Us',
		careers: 'Careers',
		contact: 'Contact',
		clients: 'Clients',
		categories: 'Categories',
		sections: 'Sections',
		login: 'Login',
		logout: 'Logout'
	}
};

const CREATE_PROJECT_INPUTS = {
	bg: {
		name: 'Име на проекта',
		description: 'Описание',
		info: 'Информация',
		infoSections: 'Инфо секции',
		client: 'Клиент',
		year: 'Година',
		textSectionName: 'Име на секцията',
		textBG: 'Текст БГ',
		textEN: 'Текст EN',
		webPage: 'Уеб страница',
		isStar: 'Топ проект',
		isBlocked: 'Блокиран',
		category: 'Категория',
		thumbnail: 'Тъмбнейл',
		largeThumbnail: 'Голям тъмбнейл',
		images: 'Изображения',
		videos: 'Видеа'
	},
	en: {
		name: 'ProjectSimple name',
		description: 'Description',
		info: 'Main Info',
		infoSections: 'Info Sections',
		client: 'Client',
		year: 'Year',
		textSectionName: 'Text Section Name',
		textBG: 'Text BG',
		textEN: 'Text EN',
		webPage: 'Web Page',
		isStar: 'Top ProjectSimple',
		isBlocked: 'Blocked',
		category: 'Category',
		thumbnail: 'Thumbnail',
		largeThumbnail: 'Large Thumbnail',
		images: 'Images',
		videos: 'Videos'
	}
};

const CATEGORY_INPUTS = {
	bg: {
		name: 'Име на категорията',
	},
	en: {
		name: 'Category name',
	}
};

const CLIENT_INPUTS = {
	bg: {
		name: 'Име на клиента',
	},
	en: {
		name: 'Client name',
	}
};

const SECTION_INPUTS = {
	bg: {
		name: 'Име на секцията',
	},
	en: {
		name: 'Section name',
	}
};

const BUTTONS = {
	bg: {
		create: 'Създай',
		edit: 'Редакция',
		send: 'Изпрати',
		saveChanges: 'Запази промените',
		add: 'Добави',
		delete: 'Изтриване',
		clear: 'Изчисти',
		info: 'Инфо',
		cancel: 'Отказ',
		view: 'Разгледай',
		confirm: 'OK',
		close: 'Затвори',
		addSection: 'Добави секция',

		// Home
		seeWhatWeDo: 'Вижте какво правим',
		readMore: 'Прочетете повече',
		seeProject: 'Към проекта',
		playWithAudio: 'Пусни със звук',

		createProject: 'Нов проект',
		createClient: 'Нов клиент',
		createCategory: 'Нова категория',
		createSection: 'Създай секция',

		more: 'Повече'
	},
	en: {
		create: 'Create',
		edit: 'Edit',
		send: 'Send',
		saveChanges: 'Save Changes',
		add: 'Add',
		delete: 'Delete',
		clear: 'Clear',
		info: 'Info',
		cancel: 'Cancel',
		view: 'View More',
		confirm: 'OK',
		close: 'Close',
		addSection: 'Add Section',

		// Home
		seeWhatWeDo: 'See what we do',
		readMore: 'Read more',
		seeProject: 'View this project',
		playWithAudio: 'Play with audio',

		createProject: 'New ProjectSimple',
		createClient: 'New Client',
		createCategory: 'New Category',
		createSection: 'Create Section',

		more: 'More'
	}
};

const CONFIRM_DIALOG_MESSAGES = {
	bg: {
		confirmDeleteProject: 'Желаете ли да изтриете този проект?',
		confirmDelete: 'Изтриване?',
		confirmDeleteSection: 'Изтриване на секцията?',
	},
	en: {
		confirmDeleteProject: 'Delete this project?',
		confirmDelete: 'Confirm delete',
		confirmDeleteSection: 'Delete section?',
	}
};

const NOTIFICATIONS = {
	bg: {
		projectCreated: 'Проектът беше създаден.',
		projectDeleted: 'Проектът беше изтрит.',

		categoryCreated: 'Категорията е създадена.',
		categoryDeleted: 'Категорията беше изтрита.',

		clientCreated: 'Клиентът е създаден.',
		clientDeleted: 'Клиентът беше изтрит.',

		sectionCreated: 'Секцията е създадена',
		sectionDeleted: 'Секцията беше изтрита',

		successEdit: 'Успешна редакция.',

		selectSectionName: 'Моля, изберете име на секция.',

		messageSent: 'Съобшението беше изпратено.',
		messageError: 'Грешка. Моля, опитайто отново.',

		fieldsRequired: 'Моля, попълнете следните полета:',

		deleteForbidden: 'Изтриването е забранено!.',

	},
	en: {
		projectCreated: 'ProjectSimple created.',
		projectDeleted: 'ProjectSimple deleted.',

		categoryCreated: 'Category created.',
		categoryDeleted: 'Category deleted.',

		clientCreated: 'Client created.',
		clientDeleted: 'Client deleted.',

		sectionCreated: 'Section created',
		sectionDeleted: 'Section deleted',

		successEdit: 'Successful edit.',

		selectSectionName: 'Please, select section name.',

		messageSent: 'Message sent.',
		messageError: 'Error sending your message.',

		fieldsRequired: 'Please, fill out these fields:',
	}
};

const ADMIN_PAGES_TEXT = {
	project: {
		bg: {
			thumbnail: 'Тъмбнейл',
			largeThumbnail: 'Голям тъмбнейл',
			cover: 'Корица',
			images: 'Изображения',
			videos: 'Видеа',
			editProject: 'Редакция на проект',
			createProject: 'Създаване на проект',
			allProjects: 'Всички проекти'
		},
		en: {
			thumbnail: 'Thumbnail',
			largeThumbnail: 'Large Thumbnail',
			cover: 'Cover',
			images: 'Images',
			videos: 'Videos',
			editProject: 'Edit ProjectSimple',
			createProject: 'Create New ProjectSimple',
			allProjects: 'All Projects'
		}
	},
	client: {
		bg: {
			clients: 'Клиенти',
			editClient: 'Редакция на клиент',
			createClient: 'Създаване на клиент',
			allClients: 'Всички клиенти'
		},
		en: {
			clients: 'Clients',
			editClient: 'Edit Client',
			createClient: 'Create New Client',
			allClients: 'All Clients'
		}
	},
	category: {
		bg: {
			categories: 'Категории',
			editCategory: 'Редакция на категория',
			createCategory: 'Създаване на категория',
			allCategories: 'Всички категории'
		},
		en: {
			categories: 'Categories',
			editCategory: 'Edit Category',
			createCategory: 'Create New Category',
			allCategories: 'All Categories'
		}
	},
	section: {
		bg: {
			sections: 'Секции',
			editSection: 'Редакция на инфо секция',
			createSection: 'Създаване на инфо секция',
			allSection: 'Всички секции'
		},
		en: {
			sections: 'Sections',
			editSection: 'Edit Info Section',
			createSection: 'Create New Info Section',
			allSection: 'All Sections'
		}
	}

};

const USER_PAGES_TEXT = {

	home: {
		bg: {
			title: 'Ние виждаме истории във всичко.<br/>Решаваме проблеми като ги разказваме.',
			subtitle: '',

			sections: {

				ourAim: {
					name: 'Нашата цел',
					headline: 'Нашата цел е да създаваме и комуникираме бранд истории,<br/> които работят за вашата публика и бизнес.',
				},

				ourPhilosophy: {
					name: 'Нашата философия',
					headline: 'Story - Telling & Experience',

					sections: {
						creativity: {
							title: 'Водени от креативността',
							text: 'Ние сме пристрастени към качественото изпълнение на поставените задачи. Вярваме, че големите брандове са изградени върху силни и докосващи истории.<br/> В една такава бранд история креативността трябва да бъде навсякъде, дори и в най-дребния детайл. Амбиция за най-добрата креативност води всички нас.'
						},
						strategy: {
							title: 'Запленени от стратегията',
							text: 'Ние вярваме, че успехът идва, когато си наясно какво правиш. Креативната стратегия трябва да има ясни и измерими цели, поставени в Бранд Концепцията.'
						},
						system: {
							title: 'Вярващи в системата',
							text: 'От първия ден, в който започнем да работим заедно, през всеки следващ, през всички идеи, разработки и одобрени кампании, ние се опитваме да работим като едно, да дишаме като един организъм. Вярваме, че синхронът е много важен, за да се свържат всички елементи и да видим първоначалната си идея, реализирана възможно най-добре.'
						},
						experience: {
							title: 'Влюбени в историята & преживяването',
							text: 'Ние обичаме да създаваме бранд истории, в които фокусът не е продукт. Продуктът за нас е част от историята. Това, което е важно са ХОРАТА. Вярваме, че нашата индустрия трябва да се насочи към създаване на смислени, ценностни и вдъхновяващи истории и преживявания за хората.'
						},
					}
				},

				services: {
					name: 'Услуги',
					headline: 'Ние помагаме на нашите клиенти да изградят своята Бранд Концепция и да я интегрират успешно в комуникациите си. <p class="smaller">Важно е, не какво ние казваме на хората, посредством всички сигнали, които брандът ни изпраща, а в какво хората <span class="accent">вярват.</span></p>',
					text: ''
				},

				projects: {
					name: 'Проекти',
					headline: '',
					text: ''
				},

				quote: {
					quoteText: '„Всичко, което правиш трябва да предизвиква чувство и емоция. Тъга, страх, усмивка, щастие, смях... Има ли ги в публиката, постигнал си много!“',
					author: 'Теофана Преславска'
				},

				aboutUs: {
					name: 'За нас',
					headline: 'Ние създаваме светове и изграждаме силни образи, които носят собствен дух и характер.' +
						'<p class="smaller">Addict е първата „brand storytelling“ агенция в България.<br/>Разказването на истории е в кръвта ни.</p> ',
					text: ''
				}
			},
		},

		en: {
			title: 'We see stories in everything. We solve problems as we tell them.',
			subtitle: '',

			sections: {

				ourAim: {
					name: 'Our aim',
					headline: 'Our aim is to create and communicate brand stories,<br/> that work for your audience and business.',
				},

				ourPhilosophy: {
					name: 'Our philosophy',
					headline: 'Story - Telling & Experience',

					sections: {
						creativity: {
							title: 'Driven by creativity',
							text: 'Ние сме пристрастени към качественото изпълнение на поставените задачи. Вярваме, че големите брандове са изградени върху силни и докосващи истории.<br/> В една такава бранд история креативността трябва да бъде навсякъде, дори и в най-дребния детайл. Амбиция за най-добрата креативност води всички нас.'
						},
						strategy: {
							title: 'Passionate about strategy',
							text: 'Ние вярваме, че успехът идва, когато си наясно какво правиш. Креативната стратегия трябва да има ясни и измерими цели, поставени в Бранд Концепцията.'
						},
						system: {
							title: ' Believing in the system',
							text: 'От първия ден, в който започнем да работим заедно, през всеки следващ, през всички идеи, разработки и одобрени кампании, ние се опитваме да работим като едно, да дишаме като един организъм. Вярваме, че синхронът е много важен, за да се свържат всички елементи и да видим първоначалната си идея, реализирана възможно най-добре.'
						},
						experience: {
							title: 'In love with the story',
							text: 'Ние обичаме да създаваме бранд истории, в които фокусът не е продукт. Продуктът за нас е част от историята. Това, което е важно са ХОРАТА. Вярваме, че нашата индустрия трябва да се насочи към създаване на смислени, ценностни и вдъхновяващи истории и преживявания за хората.n'
						},
					}
				},

				services: {
					name: 'Services',
					headline: 'Ние помагаме на нашите клиенти да изградят своята Бранд Концепция и да я интегрират успешно в комуникациите си. <br/> <span class="smaller">Важно е, не какво ние казваме на хората, посредством всички сигнали, които брандът ни изпраща, а в какво хората <span class="accent">вярват.</span></span>',
					text: ''
				},

				projects: {
					name: 'Projects',
					headline: '',
					text: ''
				},

				quote: {
					quoteText: '„Всичко, което правиш трябва да предизвиква чувство и емоция. Тъга, страх, усмивка, щастие, смях... Има ли ги в публиката, постигнал си много!“',
					author: 'Теофана Преславска'
				},

				aboutUs: {
					name: 'About us',
					headline: 'Ние създаваме светове и изграждаме силни образи, които носят собствен дух и характер. <br/>' +
						'<span class="smaller">Addict е първата „brand storytelling“ агенция в България.<br/>Разказването на истории е в кръвта ни.</span> ',
					text: ''
				}
			}
		}
	},

	aboutUs: {
		bg: {
			title: 'Извън зоната на комфорт.<br/>В търсене на необикновени неща.',
			subtitle: 'Нашата работа е да изкараме хората от зоната им на комфорт и да ги накараме да правят необикновени неща.',

			sections: {

				quote: {
					quoteText: '„Научих, че хората ще забравят какво си казал, хората ще забравят какво си направил, но хората никога няма да забравят как си ги накарал да се почувстват.“',
					author: 'Мая Анджелоу',
				},

				storyArchetypes: {

					theMonster: {
						title: '1. Убий Чудовището или как доброто победи злото.',
						text: '<p>Съдбата неслучайно ни събра преди 11 години и 6 месеца. На корицата на известно списание видях най-готиния телбод, който съм виждала някога. Да, правилно прочетохте „телбод“. Е, така ни защипа, че от тогава до сега все заедно... реклами, проекти, щуротии, криейтив, абе лудница. За любовта в рекламата няма невъзможни неща.</p>' +
							'<p>Специални благодарности на Голямата Компания Сдружение Топливо, която ще остане завинаги в сърцата ни. Години, в които  изградихме бранда, години, в които брандът ни отвърна с нужната слава. И после изведнъж, от нищото дойде Чудовището. Чудовището винаги идва когато е време за промяна и носи възможността да опиташ нови неща.</p>' +
							'<p>Така се роди  Addict. Първата brand storytelling агенция в България.</p>',
						accent: 'За любовта в рекламата няма невъзможни неща'
					},

					reborn: {
						title: '2. Прераждането или когато решиш да отвориш нова страница.',
						text: '<p>Затварянето на една врата винаги води до отваряне на друга. Лошото е, че това го разбираш чак след като затвориш първата.</p>' +
							'<p>Най-големите компании са изградени от силни истории за преодолени страхове. Ние обичаме да разказваме истории за Големите брандове и преодолените страхове, за брандовете, които имат какво да кажат на света, брандовете, които искат не просто да продават, а да бъдат харесвани от своите клиенти, брандовете, зад които седят Големите Сърца и Умове.</p>' +
							'<p>Човешкото в историята за компанията е бъдещето на маркетинга. Защото на хората им писна от тъпи реклами. Защото на хората им писна от недомислени продукти. Защото на хората им писна от „хладнокръвни“ мениджъри, които гонейки финансов просперитет изгонват човешкото от  компанията.</p>',
						accent: ''
					},

					ragsToRiches: {
						title: '3. От дрипи към богатство, с дъх на пшеница и ръж',
						text: '<p>Addict започна от нулата. Онази кръглата нула.</p>' +
							'<p>Не знаеш накъде, но знаеш как. Не знаеш, че „storytelling”- а е последният писък на модата в маркетинга в световен мащаб, но знаеш, че точно в това си най-добър. Не знаеш колко ще е трудно, но знаеш, че точно ти ще опиташ. Johnny Walker е в кръвта ти. Не усещането за уискито, а за Бранда. Брандът, който е пример в световната маркетингова литература за изграждане на история със сюжет „от дрипи към богатство“ и който ще те води по пътя с думите си „Keep Walking”.</p>' +
							'<p>Вдъхновяващ е примерът на големите. Големите брандове, които с всички свои действия и послания крещят: „Ако не го почувстваш, няма да го запомниш“. И тогава инстинктивно се замисляш... Важно е кой разказва ТВОЯТА История.</p>',
						accent: 'Johnny Walker е в кръвта ти.<br/>Не усещането за уискито, а за Бранда.'
					},

					theQuest: {
						title: '4. The Quest. Търсенето',
						text: '<p>Човек среща друг човек в живота си и иска да сподели своята история, за да изгради „връзка“. В света на бизнеса и маркетинга е същото. Компанията изгражда връзка със своя клиент. „Най-властимащият човек в света е разказвачът. Разказвачът, който задава визията, добавя стойността и определя дневния ред на темите на едно цяло общество.“ казва Стив Джобс, в подкрепа на бранд историите, които е разказал Уолт Дисни, за да изгради точно „тази връзка“.</p>' +
							'<p>Addict е първата „brand storytelling” агенция в България. Доста търсихме, но се намерихме. Ние обичаме да разказваме истории.</p>',
						accent: ''
					},

					tragedy: {
						title: '5. Трагедията или Шекспир в рекламата',
						text: '<p>От гръцките трагедии през Шекспир до големия Мартин Скорсезе и титанът на филмовата музика Джон Уилямс, разказват брилянтно истории за тъмната страна и уязвимата същност на човека. На сцена. На кино.  В рекламата „трагедията“ като сюжет си остава тема табу. Е, нали все пак някой трябва да го купи този продукт?!</p>',
						accent: ''
					},

					comedy: {
						title: '6. От другата страна. Комедията: „Art&Joy“ на бранда',
						text: '<p>Преди много години, един от най-големите режисьори в България, Теофана Преславска, ми каза: „Всичко, което правиш трябва да предизвиква чувство и емоция. Тъга, страх, усмивка, щастие, смях... има ли ги в публиката, постигнала си много!“</p>' +
							'<p>А създаването на комедия... е то просто не е за всеки. Висше изкуство. Трябва ти висока самокритичност, самоирония и приятно чувство за хумор... за да я направиш, и за да я разбереш.</p>',
						accent: 'Трябва ти висока самокритичност, самоирония и приятно чувство за хумор...'
					},

					travel: {
						title: '7. Пътешествие и завръщане',
						text: '<p>Създаването на бранд истории е като пътуване до далечно място. Когато се върнеш, ти вече не си същият. А историята заслужава да бъде разказана!</p>',
						accent: ''
					}
				},

				ps: {
					headline: 'P.S.',
					text: '7-те cюжета на storytelling-а използвахме съвсем умишлено, за да разкажем своята история и да ви докоснем до нашия свят и ценности.'
				}
			}
		},
		en: {
			title: 'Outside the Comfort zone.<br/>In search of the unusual.',
			subtitle: 'Some text here',

			sections: {

				quote: {
					quoteText: '„Научих, че хората ще забравят какво си казал, хората ще забравят какво си направил, но хората никога няма да забравят как си ги накарал да се почувстват.“',
					author: 'Мая Анджелоу',
				},

				storyArchetypes: {

					theMonster: {
						title: '1. Убий Чудовището или как доброто победи злото.',
						text: '<p>Съдбата неслучайно ни събра преди 11 години и 6 месеца. На корицата на известно списание видях най-готиния телбод, който съм виждала някога. Да, правилно прочетохте „телбод“. Е, така ни защипа, че от тогава до сега все заедно... реклами, проекти, щуротии, криейтив, абе лудница. За любовта в рекламата няма невъзможни неща.</p>' +
							'<p>Специални благодарности на Голямата Компания Сдружение Топливо, която ще остане завинаги в сърцата ни. Години, в които  изградихме бранда, години, в които брандът ни отвърна с нужната слава. И после изведнъж, от нищото дойде Чудовището. Чудовището винаги идва когато е време за промяна и носи възможността да опиташ нови неща.</p>' +
							'<p>Така се роди  Addict. Първата brand storytelling агенция в България.</p>',
						accent: 'За любовта в рекламата няма невъзможни неща'
					},

					reborn: {
						title: '2. Прераждането или когато решиш да отвориш нова страница.',
						text: '<p>Затварянето на една врата винаги води до отваряне на друга. Лошото е, че това го разбираш чак след като затвориш първата.</p>' +
							'<p>Най-големите компании са изградени от силни истории за преодолени страхове. Ние обичаме да разказваме истории за Големите брандове и преодолените страхове, за брандовете, които имат какво да кажат на света, брандовете, които искат не просто да продават, а да бъдат харесвани от своите клиенти, брандовете, зад които седят Големите Сърца и Умове.</p>' +
							'<p>Човешкото в историята за компанията е бъдещето на маркетинга. Защото на хората им писна от тъпи реклами. Защото на хората им писна от недомислени продукти. Защото на хората им писна от „хладнокръвни“ мениджъри, които гонейки финансов просперитет изгонват човешкото от  компанията.</p>',
						accent: ''
					},

					ragsToRiches: {
						title: '3. От дрипи към богатство, с дъх на пшеница и ръж',
						text: '<p>Addict започна от нулата. Онази кръглата нула.</p>' +
							'<p>Не знаеш накъде, но знаеш как. Не знаеш, че „storytelling”- а е последният писък на модата в маркетинга в световен мащаб, но знаеш, че точно в това си най-добър. Не знаеш колко ще е трудно, но знаеш, че точно ти ще опиташ. Johnny Walker е в кръвта ти. Не усещането за уискито, а за Бранда. Брандът, който е пример в световната маркетингова литература за изграждане на история със сюжет „от дрипи към богатство“ и който ще те води по пътя с думите си „Keep Walking”.</p>' +
							'<p>Вдъхновяващ е примерът на големите. Големите брандове, които с всички свои действия и послания крещят: „Ако не го почувстваш, няма да го запомниш“. И тогава инстинктивно се замисляш... Важно е кой разказва ТВОЯТА История.</p>',
						accent: 'Johnny Walker е в кръвта ти.<br/>Не усещането за уискито, а за Бранда.'
					},

					theQuest: {
						title: '4. The Quest. Търсенето',
						text: '<p>Човек среща друг човек в живота си и иска да сподели своята история, за да изгради „връзка“. В света на бизнеса и маркетинга е същото. Компанията изгражда връзка със своя клиент. „Най-властимащият човек в света е разказвачът. Разказвачът, който задава визията, добавя стойността и определя дневния ред на темите на едно цяло общество.“ казва Стив Джобс, в подкрепа на бранд историите, които е разказал Уолт Дисни, за да изгради точно „тази връзка“.</p>' +
							'<p>Addict е първата „brand storytelling” агенция в България. Доста търсихме, но се намерихме. Ние обичаме да разказваме истории.</p>',
						accent: ''
					},

					tragedy: {
						title: '5. Трагедията или Шекспир в рекламата',
						text: '<p>От гръцките трагедии през Шекспир до големия Мартин Скорсезе и титанът на филмовата музика Джон Уилямс, разказват брилянтно истории за тъмната страна и уязвимата същност на човека. На сцена. На кино.  В рекламата „трагедията“ като сюжет си остава тема табу. Е, нали все пак някой трябва да го купи този продукт?!</p>',
						accent: ''
					},

					comedy: {
						title: '6. От другата страна. Комедията: „Art&Joy“ на бранда',
						text: '<p>Преди много години, един от най-големите режисьори в България, Теофана Преславска, ми каза: „Всичко, което правиш трябва да предизвиква чувство и емоция. Тъга, страх, усмивка, щастие, смях... има ли ги в публиката, постигнала си много!“</p>' +
							'<p>А създаването на комедия... е то просто не е за всеки. Висше изкуство. Трябва ти висока самокритичност, самоирония и приятно чувство за хумор... за да я направиш, и за да я разбереш.</p>',
						accent: 'Трябва ти висока самокритичност, самоирония и приятно чувство за хумор...'
					},

					travel: {
						title: '7. Пътешествие и завръщане',
						text: '<p>Създаването на бранд истории е като пътуване до далечно място. Когато се върнеш, ти вече не си същият. А историята заслужава да бъде разказана!</p>',
						accent: ''
					}
				},

				ps: {
					headline: 'P.S.',
					text: '7-те cюжета на storytelling-а използвахме съвсем умишлено, за да разкажем своята история и да ви докоснем до нашия свят и ценности.'
				}
			}
		},
	},

	projects: {
		bg: {
			title: 'Вдъхновяващи бранд истории.<br/>Ефективност, чрез въздействие.',
			subtitle: 'Addict  цели да решава бизнес проблеми по креативен начин. От изграждане на бранд концепции, през разказване на истории до интегрирани кампании, внедрени в бизнес модели, ние създаваме реални отношения с хората, които постигат резултати.<br/>За нас от Addict е много важно да чуем, не само проблемите на бизнеса, но и как тупти сърцето на Компанията. Така надграждаме бизнес модела с бранд история, която докосва посредством неподправеност и емоция.\n',
		},
		en: {
			title: 'Inspiring Brand stories.<br/>Effectiveness through impact.',
			subtitle: 'Some text here'
		}
	},

	services: {
		bg: {
			title: 'Бизнес растеж.<br/>Бранд концепция в сърцевината.',
			subtitle: 'Ние създаваме бранд истории, комуникации и изживявания за потребителя, които постигат инспириран бизнес растеж с ясно дефинирана Бранд Концепция в сърцевината.<p class="subtitle-light">Нашият подход поставя Бранд Концепцията в основата на стратегическото мислене като дефинирането на практическите действия, гарантиращи изпълнение на вашата мисия и ценности ни дават възможност да създадем „STORY“, разгърнато вляво от Бранд Концепцията, „TELLING“, съответно вдясно от Концепцията и на последно място, но не и по значение „EXPERIENCE“, обуславящ връзката между целите ни и реалните бранд постижения.</p>',

			sections: {
				main: {
					title: '',
					headline: 'Story - Telling & Experience',

					schemeText: {
						brandConcept: 'Бранд<br/>концепция',
						brandStory: 'Бранд<br/>история',
						integratedCampaigns: 'Интегрирани<br/>кампании',
						tailorMadeProduction: '„TAILOR-MADE“<br/>продукция',
						brandAchievements: 'Бранд<br/>постижения',
						architecture: 'Бранд архитектура',
						startPoint: 'Отправна точка',
						marketingCommunications: 'Маркетингови  комуникации'
					},

					brandConcept: {
						title: 'Бранд концепция',
						text: 'Дефиниране на практическите действия, гарантиращи изпълнението на вашата мисия и ценности'
					},

					brandStory: {
						title: 'Бранд история',
						text: 'Ние работим с клиентите, за да създадем бранд история, която отговаря на стратегиите за развитие, заложени в Бранд Концепцията. Фокусираме се върху проблемите на клиентите и долавяме ритъма, с който тупти сърцето на Компанията им. Историята, която разказваме... историята на компанията, бранда, продукта, кампанията, събитието или който и да било друг маркетингов проблем трябва да вдъхновява, да буди въображение и да предизвиква действие.'
					},

					integratedCampaigns: {
						title: 'Интегрирани кампании',
						text: 'Бранд Концепцията вижда бял свят посредством прецизния избор и комбинация на комуникационни канали. Продуктова, радио, видео, принт, диджитал, социална, BTL, TTL и т.н.... историята сама по себе си трябва изцяло да отговаря на изискванията на комуникационния канал, за който е предназначена, за да предизвиква търсената реакция в публиката.'
					},

					tailorMadeProduction: {
						title: '„TAILOR-MADE“ продукция',
						text: 'Първо историята, после продукцията. Подобно на шивача, който ушива костюма си по взетите мерки на клиента, продукцията трябва да е изцяло създадена по и за конкретната история. Така ние превръщаме Бранд Концепцията в креативно и при възможност иновативно изживяване, готово да бъде поднесено на своя потребител.'
					},

					brandAchievements: {
						title: 'Бранд постижения',
						text: 'Комбинираме различни бранд техники с креативни решения и иновативни идеи, за да постигнем първоначално планираното изживяване на потребителя. Така постигайки целите си, успяваме да реализираме, фокусирани към конструктивната промяна, маркетингови решения.'
					}
				},

				skills: {
					name: 'Умения',
					title: 'Умения',
					headline: 'Ние винаги се стремим да отговорим максимално бързо и адекватно на уникалните бизнес предизвикателства, пред които постоянно се изправят нашите клиенти. <br/> <span class="smaller">Стараем се да внесем мултифункционално<span class="accent"> креативно мислене</span> във всеки един стадий на проекта.</span>',

					strategy: {
						title: 'Стратегия',
						text: '<li>Бранд стратегия</li>' +
							'<li>Иновационна стратегия</li>' +
							'<li>Стратегия за изграждане на бранд история</li>' +
							'<li>Стратегия за създаване на потребителско изживяване</li>' +
							'<li>Стратегия за обработка на данни</li>' +
							'<li>Проучване</li>'
					},

					design: {
						title: 'Дизайн',
						text: '<li>Бранд идентичност и измисляне на име</li>' +
							'<li>Бранд история</li>' +
							'<li>Опаковки</li>' +
							'<li>Търговски обекти</li>' +
							'<li>Корпоративни и лични мероприятия</li>' +
							'<li>Уеб дизайн и приложения</li>'
					},

					marketing: {
						title: 'Маркетинг',
						text: '<li>Планиране и реализация на кампания</li>' +
							'<li>Планиране на комуникация</li>' +
							'<li>Медия планиране</li>' +
							'<li>Стратегия за качествено съдържание</li>' +
							'<li>Стратегия за развитие на сюжет на бранд история</li>' +
							'<li>Бранд постижения</li>'
					},

					production: {
						title: 'Изпълнение',
						text: '<li>Копирайтинг</li>' +
							'<li>Радио реклама</li>' +
							'<li>Филмова и фото продукция</li>' +
							'<li>Принт производство</li>' +
							'<li>Пост продукция</li>' +
							'<li>Организиране на събития</li>' +
							'<li>Социални медии</li>'
					},
				},

				work: {
					name: 'Проекти',
					headline: 'Вижте как мислим в действие',
					text: ''
				},

				contact: {
					name: 'Контакти',
					headline: 'Да направим нещо заедно.',
					text: 'Свържи се с нас'
				}
			}

		},
		en: {
			title: 'Business growth.<br/>Brand concept in the very heart.',
			subtitle: 'Some text in english',

			sections: {
				main: {
					title: '',
					headline: 'Story - Telling & Experience',

					schemeText: {
						brandConcept: 'Brand<br/>Concept',
						brandStory: 'Brand<br/>Story',
						integratedCampaigns: 'Integrated<br/>Campaigns',
						tailorMadeProduction: '„TAILOR-MADE“<br/>Production',
						brandAchievements: 'Brand<br/>Achievements',
						architecture: 'Brand Architecture',
						startPoint: 'Start Point',
						marketingCommunications: 'Marketing Communications'
					},

					brandConcept: {
						title: 'Brand Concept',
						text: 'Дефиниране на практическите действия, гарантиращи изпълнението на вашата мисия и ценности'
					},

					brandStory: {
						title: 'Brand Story',
						text: 'Ние работим с клиентите, за да създадем бранд история, която отговаря на стратегиите за развитие, заложени в Бранд Концепцията. Фокусираме се върху проблемите на клиентите и долавяме ритъма, с който тупти сърцето на Компанията им. Историята, която разказваме... историята на компанията, бранда, продукта, кампанията, събитието или който и да било друг маркетингов проблем трябва да вдъхновява, да буди въображение и да предизвиква действие.'
					},

					integratedCampaigns: {
						title: 'Integrated Campaigns',
						text: 'Бранд Концепцията вижда бял свят посредством прецизния избор и комбинация на комуникационни канали. Продуктова, радио, видео, принт, диджитал, социална, BTL, TTL и т.н.... историята сама по себе си трябва изцяло да отговаря на изискванията на комуникационния канал, за който е предназначена, за да предизвиква търсената реакция в публиката.'
					},

					tailorMadeProduction: {
						title: '„Tailor – Made“ Production',
						text: 'Първо историята, после продукцията. Подобно на шивача, който ушива костюма си по взетите мерки на клиента, продукцията трябва да е изцяло създадена по и за конкретната история. Така ние превръщаме Бранд Концепцията в креативно и при възможност иновативно изживяване, готово да бъде поднесено на своя потребител.'
					},

					brandAchievements: {
						title: 'Brand Achievements',
						text: 'Комбинираме различни бранд техники с креативни решения и иновативни идеи, за да постигнем първоначално планираното изживяване на потребителя. Така постигайки целите си, успяваме да реализираме, фокусирани към конструктивната промяна, маркетингови решения.'
					}
				},

				skills: {
					title: 'Skills',
					headline: 'Ние винаги се стремим да отговорим максимално бързо и адекватно на уникалните бизнес предизвикателства, пред които постоянно се изправят нашите клиенти. Стараем се да внесем мултифункционално креативно мислене във всеки един стадий на проекта.',

					strategy: {
						title: 'Strategy',
						text: '<li class="headline">Strategy</li>' +
							'<li>Бранд стратегия</li>' +
							'<li>Иновационна стратегия</li>' +
							'<li>Стратегия за изграждане на бранд история</li>' +
							'<li>Стратегия за създаване на потребителско изживяване</li>' +
							'<li>Стратегия за обработка на данни</li>' +
							'<li>Проучване</li>'
					},

					design: {
						title: 'Design',
						text: '<li class="headline">Design</li>' +
							'<li>Бранд идентичност и измисляне на име</li>' +
							'<li>Бранд история</li>' +
							'<li>Опаковки</li>' +
							'<li>Търговски обекти</li>' +
							'<li>Корпоративни и лични мероприятия</li>' +
							'<li>Уеб дизайн и приложения</li>'
					},

					marketing: {
						title: 'Marketing',
						text: '<li class="headline">Marketing</li>' +
							'<li>Планиране и реализация на кампания</li>' +
							'<li>Планиране на комуникация</li>' +
							'<li>Медия планиране</li>' +
							'<li>Стратегия за качествено съдържание</li>' +
							'<li>Стратегия за развитие на сюжет на бранд история</li>' +
							'<li>Бранд постижения</li>'
					},

					production: {
						title: 'Production',
						text: '<li class="headline">Production</li>' +
							'<li>Копирайтинг</li>' +
							'<li>Радио реклама</li>' +
							'<li>Филмова и фото продукция</li>' +
							'<li>Принт производство</li>' +
							'<li>Пост продукция</li>' +
							'<li>Организиране на събития</li>' +
							'<li>Социални медии</li>'
					},
				},

				work: {
					name: 'Work',
					headline: 'See us in action',
					text: ''
				},

				contact: {
					name: 'Contact',
					headline: 'Let\'s make something together',
					text: 'Get in touch'
				}
			}
		}
	},

	careers: {
		bg: {
			title: 'Най-добрата история се нуждае от най-добрите разказвачи.',
			subtitle: '',

			sections: {
				content: {
					title: 'Мрежа от професионалисти',
					text: '<p>Криейтив директори, писатели, стратези, иноватори, брандинг специалисти, дизайнери, диджитал гурута, експерти по социални медии, режисьори, оператори, сценаристи, звукари и още... много готини хора.</p>' +
						'<p>Addict се гордее с добре изградена мрежа от професионалисти, които са „пристрастени“ към работата си. Обединява ни чувството, че не работим, а обичаме това, което правим. Сплотява ни общото влечение към самоусъвършенстване и качествено изпълнение на поставените задачи. Вдъхновява ни креативната амбиция, която ни води към нови върхове и ни кара да правим необикновени неща. И не на последно място, всички ние изпитваме огромно удоволствие, когато си свършим работата и видим резултатите, които клиентът постига в бизнеса си.</p><p>Addict търси талантливи фриленсъри, които да се присъединят към екипа ни.</p>',
					accent: 'Ако споделяш нашите ценности и ти се правят необикновени неща, ще се радваме да работиш с нас.',
				},
				callToAction: {
					headline: 'Свържи се с нас.',
					text: '<a href="mailto:office@addict-bg.com" class="">office@addict-bg.com</a>'
				}
			}
		},
		en: {
			title: 'The best story requires the best narrators.',
			subtitle: '',

			sections: {
				content: {
					title: 'Мрежа от професионалисти',
					text: '<p>Криейтив директори, писатели, стратези, иноватори, брандинг специалисти, дизайнери, диджитал гурута,<br/>експерти по социални медии, режисьори, оператори, сценаристи, звукари и още... много готини хора.</p>' +
						'<p>Addict се гордее с добре изградена мрежа от професионалисти, които са „пристрастени“ към работата си. Обединява ни чувството, че не работим, а обичаме това, което правим. Сплотява ни общото влечение към самоусъвършенстване и качествено изпълнение на поставените задачи. Вдъхновява ни креативната амбиция, която ни води към нови върхове и ни кара да правим необикновени неща. И не на последно място, всички ние изпитваме огромно удоволствие, когато си свършим работата и видим резултатите, които клиентът постига в бизнеса си.</p><p>Addict търси талантливи фриленсъри, които да се присъединят към екипа ни.</p>',
					accent: 'Ако споделяш нашите ценности и ти се правят необикновени неща, ще се радваме да работиш с нас.',
				},
				callToAction: {
					headline: 'Contact us',
					text: '<a href="mailto:office@addict-bg.com" class="">office@addict-bg.com</a>'
				}
			}
		}
	},

	contact: {
		bg: {
			title: 'Да направим нещо заедно.',
			subtitle: '<p>Свържи се с нас.</p>' +
				'<p>0887 063 163&nbsp;&nbsp;<span class="text-accent">&#x2022;</span>&nbsp;&nbsp;office@addict-bg.com</p>'

		},
		en: {
			title: 'Let\'s make something together.',
			subtitle: 'Get in touch'
		}
	},

	project: {
		bg: {
			cliche: 'Клишето',
			year: 'Година',
			client: 'Клиент',
			project: 'Проектът',

			sections: {
				otherProjects: {
					name: 'Други проекти',
					headline: 'Други проекти',
					text: ''
				}
			}
		},
		en: {
			cliche: 'Cliche',
			year: 'Year',
			client: 'Client',
			project: 'ProjectSimple',

			sections: {
				otherProjects: {
					name: 'Other Projects',
					headline: 'Other Projects',
					text: ''
				}
			}
		}
	},

	contactForm: {
		bg: {
			title: 'Свържи се с нас',
			name: 'Име',
			lastName: 'Фамилия',
			email: 'Имейл',
			phone: 'Телефон',
			subject: 'Относно',
			message: 'Въведете Вашето съобщение тук'
		},
		en: {
			title: 'Contact us',
			name: 'First Name',
			lastName: 'Last Name',
			email: 'Email',
			phone: 'Phone',
			subject: 'Subject',
			message: 'Enter Your Message Here'
		}
	},

	carousel: {
		bg: {
			slide1: {
				headline: 'Има само истории',
				text: 'Несподелени. Неразказани. Неизживяни. Погубващи, но и... истории, които обикваш, защото нямаш време за неща, които нямат душа. Истории, които събуждат в теб онова малко момче, което има силата да промени света.',
				image: '/images/carouselNew/birds_BW.jpg'
			},
			slide2: {
				headline: 'Има значение кой разказва твоята история',
				text: 'Несподелени. Неразказани. Неизживяни. Погубващи, но и... истории, които обикваш, защото нямаш време за неща, които нямат душа. Истории, които събуждат в теб онова малко момче, което има силата да промени света.',
				image: '/images/carouselNew/violin.jpg'
			},
			slide3: {
				headline: 'Ако не го почувстваш няма да го запомниш',
				text: 'Несподелени. Неразказани. Неизживяни. Погубващи, но и... истории, които обикваш, защото нямаш време за неща, които нямат душа. Истории, които събуждат в теб онова малко момче, което има силата да промени света.',
				image: '/images/carouselNew/typing.jpg'
			}
		},
		en: {
			slide1: {
				headline: 'There are only stories',
				text: 'Несподелени. Неразказани. Неизживяни. Погубващи, но и... истории, които обикваш, защото нямаш време за неща, които нямат душа. Истории, които събуждат в теб онова малко момче, което има силата да промени света.',
				image: '/images/carouselNew/birds_BW.jpg'
			},
			slide2: {
				headline: 'Some test text',
				text: 'Несподелени. Неразказани. Неизживяни. Погубващи, но и... истории, които обикваш, защото нямаш време за неща, които нямат душа. Истории, които събуждат в теб онова малко момче, което има силата да промени света.',
				image: '/images/carouselNew/violin.jpg'
			},
			slide3: {
				headline: 'Another headline',
				text: 'Несподелени. Неразказани. Неизживяни. Погубващи, но и... истории, които обикваш, защото нямаш време за неща, които нямат душа. Истории, които събуждат в теб онова малко момче, което има силата да промени света.',
				image: '/images/carouselNew/typing.jpg'
			}
		}
	},
};

export {
	LANGUAGES,
	RESOLUTIONS,
	FORM_VALIDATION,
	MENU,
	CREATE_PROJECT_INPUTS,
	CATEGORY_INPUTS,
	CLIENT_INPUTS,
	SECTION_INPUTS,
	BUTTONS,
	CONFIRM_DIALOG_MESSAGES,
	NOTIFICATIONS,
	ADMIN_PAGES_TEXT,
	USER_PAGES_TEXT
};