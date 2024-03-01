//STATE
// import {  useSelector } from 'react-redux';
// import { changeSection, sectionValue } from '../../redux/features/sectionSlice'

const sliderData = [
  {
    id: 0,
    img: `url("https://lh3.googleusercontent.com/pw/ABLVV85xBZqIVZ-y5U6y1PLPZOZQ0n_rNcmU5kmunbLN1fxuM-zo8lkpxS0bGu3e6bu9oUlLi90HDVpeJITtvEypU9At8eD794lMQFE9ilP80u_GwCG7cFqTjBeF_RWMrYhHqxf-kZEF8tmRnOfIm5lDBVbw=w1394-h929-s-no-gm?authuser=0")`,
    title: 'Wiosenny konkurs!',
    text: "Polub nasz fanpage na Facebook'u i zgarnij nagrody! Szczegóły konkursu wkrotce!",
    isButton: true,
    isButtonLink: false,
    buttonDirect: 'https://www.facebook.com/McDonalds/?locale=pl_PL'
  },
  {
    id: 1,
    img: `url("https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg")`,
    title: 'Promocje - czas start!',
    text: 'Odwiedź nasz sklep i zobacz naszą oferte - nowe garunki już są!',
    isButton: true,
    isButtonLink: true,
    buttonDirect: 'main'
  },
  {
    id: 2,
    img: `url("https://img.freepik.com/free-photo/flat-lay-frame-with-tasty-food-copy-space_23-2148308835.jpg?w=1380&t=st=1706954086~exp=1706954686~hmac=9eaa1d109464cb4e79343dd8b1e0ae0b67ca93e955d72aa1da3903ffe05d5bc9")`,
    title: 'Bądź razem z Nami!',
    text: 'Nie przegap wysmienitych okazji i badz na czasie z naszą ofertą!',
    isButton: true,
    isButtonLink: false,
    buttonDirect: 'https://www.facebook.com/McDonalds/?locale=pl_PL'
  }
];

const storeMenu = [
  {
    id: 1,
    itemId: 'Burgery',
    name: 'Burgery',
    imgSrc: 'https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?w=826&t=st=1706956393~exp=1706956993~hmac=867d8354ca3de7fcda3c66872b5cb2e5fe03acd405e26a57a7b22a93e6ea5547'
  },
  {
    id: 2,
    itemId: 'Wrapy',
    name: 'Wrapy',
    imgSrc:
      'https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?w=826&t=st=1706956142~exp=1706956742~hmac=1707652d4421e5437f796b00cc03a2abdcd01d3ac32dc31b35794fbd667c6577'
  },
  {
    id: 3,
    itemId: 'Sandwiche',
    name: 'Sandwiche',
    imgSrc:
      'https://img.freepik.com/free-photo/fresh-tasty-sandwich_144627-17226.jpg?w=1060&t=st=1706956187~exp=1706956787~hmac=4ddea508ad6ae4f99341de18e4c217ed48f1d06766d574734557f4220c0a9646'
  },
  {
    id: 4,
    itemId: 'French Fries',
    name: 'French Fries',
    imgSrc:
      'https://img.freepik.com/free-vector/french-fries-with-different-sauce_1308-133806.jpg?w=740&t=st=1706956235~exp=1706956835~hmac=1f40912cbe1ec81c066f7bfe4277d4703291dc597042e71ad9aad33f2681d5b3'
  },
  {
    id: 5,
    itemId: 'Meals',
    name: 'Meals',
    imgSrc:
      'https://img.freepik.com/premium-photo/american-fast-food-hamburgers-french-fries-hot-dogs-fast-food-unhealthy-eating-concept-top-view_114941-2408.jpg?w=1380'
  },
  {
    id: 6,
    itemId: 'Desery',
    name: 'Desery',
    imgSrc:
      'https://img.freepik.com/free-photo/sainthonore-cake-with-chocolate-raspberry_661915-252.jpg?w=1380&t=st=1706956266~exp=1706956866~hmac=d543777a870ddd69b4b470d41307ca3da631ef6841b3134121ff33dc721ebd6a'
  },
  {
    id: 7,
    itemId: 'Drinks',
    name: 'Drinks',
    imgSrc: 'https://img.freepik.com/premium-photo/coca-cola-can-black-background-with-water-drops_674594-14583.jpg?w=1380'
  }
];

const storeItems = [
  {
    name: 'Burgers',
    content: [
      {
        id: 1,
        name: 'MCkwak Double Burger',
        imgSrc: 'https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?t=st=1709260471~exp=1709264071~hmac=a360345be133f0d2ed02d11e9181b776908fd6866f4477e689c55d457cabfc7f&w=740',
        price: 35,
        description:
          'Double Burger to kulinarna uczta dla miłośników fast food, która podwaja przyjemność z jedzenia. Składający się z dwóch soczystych, doskonale przyprawionych kotletów wołowych, umieszczonych między świeżo upieczonymi bułkami, jest kwintesencją smaku i sytości. Warstwy chrupiącej sałaty, dojrzałego pomidora i pikantnego sosu dodają każdemu kęsowi wyrafinowanego smaku. Ser cheddar, rozpływający się między kotletami, łączy wszystkie składniki w idealną całość. Double Burger to nie tylko posiłek, ale obietnica kulinarnej podróży, która zadowoli nawet najbardziej wymagające podniebienia.'
      },
      {
        id: 2,
        name: 'Classic Beefy Delight',
        imgSrc:
          'https://img.freepik.com/free-photo/delicious-burgers-studio_23-2150902148.jpg?t=st=1709261051~exp=1709264651~hmac=4c6d9644c1a62f65631b0962a0adbc90fac771a7ac4a265db87beda6348f4dae&w=996',
        price: 31.70,
        description:
          "Ten burger to esencja smaku, z dwoma soczystymi, grillowanymi kotletami wołowymi, klasycznym serem cheddar, świeżymi liśćmi sałaty, pomidorem, cebulą i pikantnym sosem. Idealny wybór dla miłośników tradycyjnych smaków.."
      },
      {
        id: 3,
        name: 'Spicy Chicken Twist',
        imgSrc: 'https://img.freepik.com/premium-photo/big-double-cheddar-cheeseburger-with-chicken-cutlet_147620-1306.jpg?w=900',
        price: 33.20,
        description:
          'Pikantny burger z kurczakiem to połączenie delikatnie panierowanego filetu z kurczaka z pikantnym sosem chipotle, sałatą, pomidorem i plastrami awokado. Dla tych, którzy lubią połączenie ostrości i świeżości.'
      },
      {
        id: 4,
        name: 'Veggie Garden Feast',
        imgSrc: 'https://img.freepik.com/free-photo/front-view-vegetarian-burger-counter-with-tomatoes_23-2148784525.jpg?t=st=1709261183~exp=1709264783~hmac=0b958c215f97943599c04d4227ac9fe22edfab9bf85331569358c3ab1dd7d288&w=996',
        price: 25.90,
        description:
          'Burger wegetariański, w którym główną rolę gra grillowany kotlet z ciecierzycy, podawany z warzywami grillowanymi, hummusem, i sosem jogurtowym. Doskonała opcja dla poszukujących zdrowszej alternatywy'
      },
      {
        id: 5,
        name: 'Cheese Lovers Dream',
        imgSrc:
          'https://img.freepik.com/free-photo/still-life-delicious-american-hamburger_23-2149637309.jpg?t=st=1709261093~exp=1709264693~hmac=489a7f91df49d801b84edd44f9a83bdf57ce8c19e5e0766d6897fd12cbc465a5&w=1380',
        price: 44.10,
        description:
          'Dla fanów sera, ten burger z potrójną porcją sera: cheddar, gouda i mozzarella, w towarzystwie dwóch wołowych kotletów i klasycznych dodatków, to prawdziwy raj na talerzu.'
      },
      {
        id: 6,
        name: 'Mushroom Melt',
        imgSrc: 'https://img.freepik.com/premium-photo/vegetarian-burger-made-with-mixture-vegetables-products-such-as-tofu-seitan_783571-4107.jpg?w=1380',
        price: 33.50,
        description:
          'Dla miłośników grzybów, ten burger oferuje grillowane kotlety wołowe z obfitą porcją pieczarek, serem szwajcarskim, sałatą, cebulą i kremowym sosem pieczarkowym. Wyjątkowo smakowita kompozycja'
      },
      {
        id: 7,
        name: 'Bacon Bliss',
        imgSrc:
          'https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-cheese-tomato-fried-bacon_2829-14034.jpg?t=st=1709261155~exp=1709264755~hmac=74ef8c11b3600ee977eae3392ad9e86497248c4dd50ab6dcdcf8c77dbe484b8b&w=740',
        price: 39.90,
        description:
          'Burger, w którym główną rolę odgrywa chrupiący bekon, połączony z dwoma kotletami wołowymi, serem cheddar, sałatą, pomidorem i sosem majonezowym. Idealny dla tych, którzy uwielbiają smak bekonu.'
      }
    ]
  },
  {
    name: 'Wrapy',
    content: [
      {
        id: 1,
        name: 'Klasyczny Twist Wrap',
        imgSrc:
          'https://img.freepik.com/free-photo/arabic-shaurma-with-stuffings-lavash_114579-3702.jpg?t=st=1709263081~exp=1709266681~hmac=50b7d8736e2b8d9b8f7ec70da61c8b1ff1c93644bfe1f6a8044b4ada496dca01&w=1380',
        price: 16.30,
        description:
          'Ten wrap to doskonała kombinacja tradycyjnych smaków w nowoczesnej formie. Zawiera soczystą, grillowaną pierś z kurczaka, świeże sałaty, pomidory, cebulę i kremowy sos czosnkowy, wszystko zawinięte w miękką, ciepłą tortillę. Idealny wybór dla tych, którzy cenią sobie klasyczne smaki z odrobiną nowoczesności..'
      },
      {
        id: 2,
        name: 'Ognisty Meksykański Wrap',
        imgSrc:
          'https://img.freepik.com/premium-photo/shawarma-rolled-lavash-with-grilled-meat-vegetables-wooden-background_124865-658.jpg?w=1380',
        price: 18.00,
        description:
          'Ognisty Meksykański Wrap łączy w sobie pikantne kawałki kurczaka, czerwoną fasolę, ostre jalapenos, sycący ryż i łagodzący guacamole. Zawinięty w chrupiącą tortillę, każdy kęs dostarcza wybuchu meksykańskich smaków.'
      },
      {
        id: 3,
        name: 'Wegański Zielony Wrap',
        imgSrc:
          'https://img.freepik.com/free-photo/tortilla-wraps-with-meat-fresh-vegetables_2829-15842.jpg?t=st=1709263311~exp=1709266911~hmac=917f06d7cae305a1383dd91ff40ca18b61d0936e7f41032e834d01d757dae9bd&w=740',
        price: 17.80,
        description:
          'Ten wrap jest prawdziwym skarbem dla wegan. Zawiera mieszankę grillowanych warzyw sezonowych, hummus, świeży szpinak i kawałki awokado. Podany w tortilli pełnoziarnistej, jest zarówno pożywny, jak i wyjątkowo smakowity.'
      },
      {
        id: 4,
        name: 'Wrap z Łososiem i Awokado',
        imgSrc:
          'https://img.freepik.com/free-photo/kegs-pancakes-with-red-fish_2829-14043.jpg?t=st=1709263600~exp=1709267200~hmac=dd44047a65b312c48d689c2f985c8c94145a8f212287ea8975df5d872a72ff5c&w=1380',
        price: 31.60,
        description:
          'Delikatny, grillowany łosoś połączony z kremowym awokado, chrupiącymi listkami sałaty, cienkimi plasterkami ogórka i delikatnym sosem jogurtowym, wszystko zawinięte w miękką tortillę. To wykwintne połączenie smaków, które zadowoli każdego smakosza.'
      },
      {
        id: 5,
        name: 'Słodko-Ostry Wrap z Krewetkami',
        imgSrc:
          'https://img.freepik.com/free-photo/shrimp-other-healthy-food-pita_23-2148381315.jpg?t=st=1709263741~exp=1709267341~hmac=98beda192ae59cbd73099a084d19b09bb05ed8a8457579f39965b88c97aff442&w=740',
        price: 28.60,
        description:
          'Ten wrap łączy w sobie słodko-ostrą marynatę krewetek z chrupiącą sałatą, świeżym mango, papryką i kolendrą. Podane w lekkiej tortilli, jest to idealna propozycja dla tych, którzy szukają czegoś wyjątkowego.'
      }
    ]
  },
  {
    name: 'SANDWICHE',
    content: [
      {
        id: 1,
        name: `Alpejski Mistrz`,
        imgSrc: 'https://img.freepik.com/free-photo/fresh-tasty-sandwich_144627-17226.jpg?t=st=1709263957~exp=1709267557~hmac=96078781d2311979ef5e1d7be1f4420e7544fc80f7c4b07fe016be67cb083343&w=1060',
        price: 23.20,
        description:
          'Ten sandwich to prawdziwa uczta dla miłośników górskich smaków. Zawiera grubo krojone plastry wędzonego sera górskiego, szynkę z dzika, rukolę, cienkie plastry gruszki i musztardę miodową, wszystko umieszczone między chrupiącymi kawałkami chleba wiejskiego. Idealny dla poszukiwaczy przygód.'
      },
      {
        id: 2,
        name: 'Oceaniczna Bryza',
        imgSrc:
          'https://img.freepik.com/free-photo/high-angle-triangle-sandwiches-with-tomatoes_23-2148640141.jpg?t=st=1709264114~exp=1709267714~hmac=cc9f841107dba9d9ea7acd007f41e2068b415f964018a601337162e7850096ce&w=740',
        price: 15.30,
        description:
          'Wyjątkowy sandwich, który przenosi smakiem nad morze. Zawiera delikatnie wędzonego łososia, świeży twarożek z koperkiem, plasterki ogórka, kapary i czerwoną cebulę. Podawany na lekko opiekanym chlebie ziołowym, jest doskonały na letni obiad.'
      },
      {
        id: 3,
        name: 'Garden Delight',
        imgSrc: 'https://img.freepik.com/premium-psd/sandwich-with-ham-vegetables-transparent-background-created-with-generative-ai_916303-5124.jpg?w=740',
        price: 19.50,
        description:
          'Wegetariańska propozycja, która zachwyci każdego. Składa się z grillowanych plastrów bakłażana, cukinii, papryki, pesto z bazylii i koziego sera, wszystko złożone na świeżym chlebie ciabatta. To połączenie świeżych warzyw i intensywnych smaków sprawia, że jest to idealny wybór dla tych, którzy cenią sobie zdrowe, ale pełne smaku posiłki.'
      }
    ]
  },
  {
    name: 'FRENCH FRIES',
    content: [
      {
        id: 1,
        name: 'Cheesy Volcano Fries',
        imgSrc: 'https://img.freepik.com/premium-photo/fries_1339-36339.jpg?w=1380',
        price: 9.90,
        description: 'Te frytki to prawdziwy wybuch smaku. Pokryte są bogatym, topionym serem cheddar, ognistymi jalapenos i chrupiącym bekonem. Każdy kęs dostarcza intensywne doznania smakowe, idealne dla poszukiwaczy mocnych wrażeń.'
      },
      {
        id: 2,
        name: 'Truffle Elegance Fries',
        imgSrc: 'https://img.freepik.com/free-photo/front-view-tasty-ham-sandwiches-with-french-fries-getting-eat-by-female-dark-surface_179666-34660.jpg?t=st=1709264981~exp=1709268581~hmac=c4e65cef9ba94ebd489624a653e2bb5b490f34d7791c0ccace7a76bb634e69a4&w=1380',
        price: 11.20,
        description: 'Elegancka propozycja dla koneserów. Frytki są delikatnie posypane czarnym truflowym solą i serwowane z kremowym sosem czosnkowym. To połączenie luksusu i prostoty, które zadowoli nawet najbardziej wymagające podniebienia'
      },
      {
        id: 3,
        name: 'Sweet Potato Harmony',
        imgSrc:
          'https://img.freepik.com/free-photo/delicious-french-fried-potato-mix-with-chilly-powder-wooden-table_1150-14567.jpg?t=st=1709265133~exp=1709268733~hmac=27f16570a73334dd8ac0467111020b3980f0396717147a3618b72ed25c7a0e5c&w=1380',
        price: 8.90,
        description: 'Frytki z batatów, które zachwycają swoją słodyczą. Podawane z delikatnym sosem majonezowo-miodowym, stanowią idealne połączenie słodkich i słonych smaków. Idealne jako przekąska lub dodatek do głównego posiłku.'
      },
      {
        id: 4,
        name: 'Herb Garden Fries',
        imgSrc:
          'https://img.freepik.com/free-photo/ruddy-baked-potato-wedges-with-herbs-flat-lay-top-view_2829-19526.jpg?t=st=1709265364~exp=1709268964~hmac=52a4288c144c85d63759859e1de1e7a5bb08375001baaa2a39fba8cae30ca9c8&w=1380',
        price: 11.40,
        description: 'Frytki te są posypane świeżymi, siekanymi ziołami takimi jak rozmaryn, tymianek i oregano, co nadaje im wyjątkowy, aromatyczny smak. Podawane z lekkim sosem jogurtowym, są odświeżającą alternatywą dla klasycznych frytek.'
      },
      {
        id: 5,
        name: 'Garlic Parmesan Fries',
        imgSrc: 'https://img.freepik.com/premium-photo/brazilian-food-cuzcuz-cous-cous-cassava-farofa-delicious-cooked-rice-with-vegetables-sauce_773315-1207.jpg?w=740',
        price: 10.50,
        description: 'Połączenie chrupiących frytek z obfitym posypem parmezanu i czosnku. Ten zestaw to uczta dla fanów intensywnych smaków. Frytki są podawane z sosem aioli, co dodaje im kremowości i głębi.'
      },
      {
        id: 6,
        name: 'Spicy Kimchi Fries',
        imgSrc: 'https://img.freepik.com/free-photo/fried-chicken-slices-mixed-with-bell-pepper_140725-2086.jpg?t=st=1709265505~exp=1709269105~hmac=bc77be3f3771420b67781916dd9b5e859371419908206d895b4f9c02f929e191&w=996',
        price: 9.80,
        description: 'Dla miłośników kuchni koreańskiej, te frytki to prawdziwy hit. Pokryte są pikantnym kimchi, grillowaną wołowiną i posypane sezamem. To wyjątkowe połączenie smaków, które zaskakuje przy każdym kęsie.'
      },

    ]
  },
  {
    name: 'MEALS',
    content: [
      {
        id: 1,
        name: 'Ultimate Bacon Burger Blast',
        imgSrc:
          'https://img.freepik.com/premium-photo/burger-french-fries-cola-black-background-generative-ai_73944-31759.jpg?w=740',
        price: 44.20,
        description:
          'Ten burger to marzenie miłośnika bekonu. Soczysta wołowina, warstwy chrupiącego bekonu, ser cheddar, cebula i sos BBQ. Podawany z złocistymi frytkami i napojem.'
      },
      {
        id: 2,
        name: 'Spicy Chicken Crunchwrap',
        imgSrc: 'https://img.freepik.com/free-photo/chicken-fajitos-french-fries_140725-2265.jpg?t=st=1709265890~exp=1709269490~hmac=9811e10567dde43249668749dc9b337c6760684be253cc79c61731fc791fd75c&w=740',
        price: 41.30,
        description:
          'Pikantny wrap z kurczakiem, który oferuje idealną równowagę między chrupkością a pikantnością. Zawiera kawałki ostrego kurczaka, sałatę, pomidory, ser i pikantny sos, wszystko zawinięte w chrupiącą tortillę.'
      },
      {
        id: 3,
        name: 'Veggie Delight Bowl',
        imgSrc: 'https://img.freepik.com/free-photo/salad-with-grilled-vegetables-broccoli_141793-931.jpg?t=st=1709265986~exp=1709269586~hmac=32b0bdfe0ef8c2fb56a7cee6fcfc427b235a168100f71c70d2c07e25374a88cc&w=740',
        price: 40,
        description:
          'Pełna smaku i zdrowia miseczka, łącząca grillowane warzywa, quinoa, awokado, nasiona słonecznika, i lekki sos winegret. Idealna dla szukających lekkiej, ale sycącej opcji.'
      },
      {
        id: 4,
        name: 'Cheese Lovers Pizza Feast',
        imgSrc: 'https://img.freepik.com/free-photo/side-view-pizza-wooden-board-glass-white-wine-slice-os-bread-cheese-green-tomatoes-little-white-bowl_176474-120143.jpg?t=st=1709266300~exp=1709269900~hmac=d6b32264bd9b14d845f596315f428b0c30d95b9f62887c64c7196ec448096f78&w=740',
        price: 42.50,
        description:
          'Pizza dla prawdziwych fanów sera, z bogatą mieszanką mozzarelli, parmezanu, gorgonzoli i sera koziego, z dodatkiem pomidorów i bazylii na cienkim cieście.'
      },
      {
        id: 5,
        name: 'Fiery Fries Fiesta',
        imgSrc: 'https://img.freepik.com/free-photo/classic-burger-with-french-fries-beer_23-2148290585.jpg?t=st=1709266471~exp=1709270071~hmac=8693cfbcb8d5decbdcf5c76affe0d7bb9670c64022c870817d8f71fc2acb309a&w=740',
        price: 36.80,
        description:
          'Frytki dla odważnych, podane z sosem z habanero, posypane kawałkami jalapeno i polane roztopionym serem. Każdy kęs dostarcza eksplozji ostrego smaku.'
      },
      {
        id: 6,
        name: 'Golden Fish & Chips Classic',
        imgSrc:
          'https://as2.ftcdn.net/v2/jpg/06/48/10/83/1000_F_648108361_tyrdDFuRPIpnYEb5XSylDINIF3oodATk.jpg',
        price: 44.10,
        description:
          'Klasyczne danie w nowej odsłonie, z chrupiącą rybą w panierce i złocistymi frytkami. Podawane z sosem tatarskim i kawałkami cytryny, idealne na każdą okazję'
      },
      {
        id: 7,
        name: 'BBQ Rib Rack Combo',
        imgSrc:
          'https://img.freepik.com/free-photo/side-view-steak-with-fried-ribs-with-fried-chicken-potatoes-board-with-vegetable-salad_141793-5115.jpg?t=st=1709266749~exp=1709270349~hmac=1000f3777d9ef49cc491227778df748a96c6f7a39e73dd7305888dfd33d32e6d&w=1380',
        price: 38.70,
        description:
          'Zestaw dla miłośników żeber, z delikatnymi żeberkami w sosie BBQ, podawane z kukurydzą, coleslaw i pieczonymi ziemniakami. Każde ugryzienie to soczysta przyjemność.'
      }
    ]
  },
  {
    name: 'DESERY',
    content: [
      {
        id: 1,
        name: 'Chocolate Lava Dream',
        imgSrc:
          'https://img.freepik.com/free-photo/front-view-chocolate-cake-with-powdered-sugar_23-2148549960.jpg?t=st=1709266991~exp=1709270591~hmac=3e35f653659f1c80cc756ad77f39c689485c531628eb49885be35eb7f09d680a&w=1380',
        price: 17,
        description:
          'Ten deser to czekoladowe niebo dla każdego miłośnika czekolady. Miękki, bogaty czekoladowy biszkopt z płynnym, gorącym czekoladowym wnętrzem. Podawany z gałką lodów waniliowych, które doskonale równoważą intensywność czekolady.'
      },
      {
        id: 2,
        name: 'Berry Bliss Cheesecake',
        imgSrc:
          'https://img.freepik.com/free-photo/closeup-shot-cheesecake-with-jelly-decorated-with-strawberries-berries_181624-39558.jpg?t=st=1709267051~exp=1709270651~hmac=80a026a7a11e919662eb11cda36c796952bd033e0ca6b67970cd12758e314c43&w=1380',
        price: 17.40,
        description:
          'Delikatny i kremowy sernik na zimno, wzbogacony mieszanką świeżych jagód. Ta słodka i lekko kwaskowa kompozycja zadowoli każdego, kto pragnie orzeźwienia. Podawany na kruchym spodzie z ciasteczek, co dodaje chrupkości.'
      },
      {
        id: 3,
        name: "Caramel Pecan Pie",
        imgSrc:
          'https://img.freepik.com/free-photo/crispy-tartlet-with-walnuts-caramel-filling_114579-91547.jpg?t=st=1709267486~exp=1709271086~hmac=8a62e6cc913586a26e3e79590f9ca1862f543bdb5a73ef094dfd7c218410b210&w=740',
        price: 12,
        description:
          'Klasyczna amerykańska tarta pekan, z głębokim karmelowym nadzieniem, obfitymi kawałkami orzechów pekan. Idealnie skarmelizowana na wierzchu, oferuje bogactwo smaków i tekstur. Podawana z lekką bitą śmietaną'
      },
      {
        id: 4,
        name: "Tropical Fruit Pavlova",
        imgSrc:
          "https://img.freepik.com/free-photo/ice-cream-with-strawberry-banana-orange-white-plate-with-spoon_114579-33827.jpg?t=st=1709267539~exp=1709271139~hmac=0ad6c3fbfc114bb549f6bf9f48231c7d6664444c4e29551eb57b6256e1058175&w=1380",
        price: 16.70,
        description:
          'Lekka i puszysta beza, z wierzchu chrupiąca, w środku miękka, udekorowana kremem mascarpone i egzotycznymi owocami, takimi jak mango, kiwi i marakuja. Deser łączy w sobie słodycz i kwasowość, idealny na letnie dni.'
      },
      {
        id: 5,
        name: "Classic Tiramisu",
        imgSrc:
          'https://img.freepik.com/free-photo/slice-cake-with-cocoa-powder_140725-170.jpg?t=st=1709267624~exp=1709271224~hmac=cb9775fc85478826bd4e28baaa9896479fb1ddb8416da066ca07673f4e5e957a&w=996',
        price: 15,
        description:
          'Włoski deser par excellence, łączący warstwy nasączone kawą biszkopty ladyfingers z delikatnym kremem mascarpone, posypane kakao. Każda warstwa tiramisu to obietnica kremowej, kawowej rozkoszy, która rozpływa się w ustach.'
      }
    ]
  },
  {
    name: 'DRINKS',
    content: [
      {
        id: 1,
        name: 'Classic Lemonade',
        imgSrc:
          'https://img.freepik.com/premium-photo/summer-refreshing-lemonade-with-lemons-balcony-generative-ai_1645-6506.jpg?w=996',
        price: 6.70,
        description:
          ' Idealny napój na upalne dni, łączący świeżo wyciśnięty sok z cytryn z odrobiną słodkości i wody. Orzeźwiający, z lekko kwaskowym posmakiem.'
      },
      {
        id: 2,
        name: 'Iced Tea',
        imgSrc: 'https://img.freepik.com/free-photo/cocktail_23-2148176795.jpg?t=st=1709267910~exp=1709271510~hmac=429680c6731b13c35f2da8baa083c99bcd581dbba8fba1355f5f3c69dc4e4129&w=740',
        price: 7.80,
        description:
          'Chłodna, orzeźwiająca herbata mrożona, często serwowana z cytryną lub miętą. Może być słodzona lub niesłodzona, doskonała na każdą porę roku.'
      },
      {
        id: 3,
        name: 'Espresso Martini',
        imgSrc: 'https://img.freepik.com/free-photo/coffee-cocktail-decorated-with-coffee-beans_140725-7817.jpg?t=st=1709267990~exp=1709271590~hmac=d814f2fddbc0a62cfd1000a4b5977d2714c9783ee16fffdc2bd392cdf9a1309a&w=740',
        price: 6.50,
        description:
          'Elegancki koktajl łączący espresso, wódkę, i likier kawowy. Idealny jako "pick-me-up" po kolacji, łączy w sobie głębię kawy z delikatną słodyczą.'
      },
      {
        id: 4,
        name: 'Mango Smoothie',
        imgSrc: 'https://img.freepik.com/free-photo/mango-juice-glass-blue-surface_1150-41955.jpg?t=st=1709268035~exp=1709271635~hmac=3a1f0d895033e1e82a5d9cee7cd6d7e5afaa7e4e536e8c3f612535cdef80ffc6&w=740',
        price: 7.70,
        description:
          'Kremowy i gęsty napój z dojrzałych mango, często mieszany z jogurtem lub mlekiem. Słodki i odżywczy, doskonały jako pożywny deser lub przekąska.'
      }
    ]
  }
];

const geckoInfo = [
  {
    id: 0,
    title: '"Burger Bonanza"',
    content:
      'Ta promocja to prawdziwe święto dla miłośników burgerów! Przy zakupie jednego pełnowartościowego burgera, drugi otrzymasz za połowę ceny. To idealna okazja, aby zaprosić przyjaciela i razem delektować się wyjątkowymi smakami naszych burgerów, bez obciążania portfela. Nie przegap tej okazji, przyjdź i sprawdź, jak prawdziwy burger smakuje w towarzystwie. Promocja obowiązuje w każdy wtorek, dając Ci doskonały powód, aby umilić sobie początek tygodnia..'
  },
  {
    id: 1,
    title: '"Poranny Power Start"',
    content:
      'Czy wiesz, że poranek to najlepszy czas na zasilenie organizmu energią? Nasza specjalna promocja śniadaniowa oferuje 20% zniżki na wszystkie pozycje z menu śniadaniowego. Od klasycznych kanapek po świeże sałatki i energetyczne smoothie, każdy znajdzie coś dla siebie. To doskonała okazja, aby przyjść z rodziną lub przyjaciółmi i cieszyć się pierwszym posiłkiem dnia w przyjemnej atmosferze. Promocja dostępna jest od poniedziałku do piątku w godzinach porannych. Zacznij dzień od dobrego smaku i energii, której dostarczą nasze śniadania..'
  },
  {
    id: 2,
    title: 'Family Fun Day',
    content: ` Niedziela w naszej restauracji to dzień rodzinny. Dla każdej rodziny zamawiającej dania na sumę powyżej 50 złotych, specjalny deser na słodko dla całej rodziny gratis! To nasz sposób, by docenić czas spędzony razem, oferując coś, co sprawi radość zarówno dzieciom, jak i dorosłym. Nasze desery, przygotowywane z myślą o każdym członku rodziny.`
  },
  {
    id: 3,
    title: '"Wieczór Pizzy"',
    content:
      'Każdy czwartek w naszej restauracji to wieczór pizzy! Przy zakupie dwóch dowolnych pizz, trzecia pizza w prezencie! To świetna okazja, by zorganizować wieczór filmowy z przyjaciółmi lub rodziną i cieszyć się smakiem włoskiej pizzy bez wychodzenia z domu. Nasze pizze, przygotowywane na cienkim cieście z wyselekcjonowanych składników, zadowolą nawet najbardziej wymagające podniebienia. Nie przegap okazji na wspólny, smaczny wieczór..'
  },
  {
    id: 4,
    title: '"Frytkowa Festa"',
    content:
      'Sobota to dzień, w którym nasze frytki grają główną rolę! Do każdego zamówienia powyżej 20 złotych, porcja złocistych, chrupiących frytek gratis! To idealny dodatek do każdego dania, który umili każde spotkanie. Nasze frytki, znane z wyjątkowego smaku i chrupkości, teraz mogą być Twoje bez dodatkowych kosztów. Przyjdź i przekonaj się sam, jak niewiele potrzeba, by sprawić sobie i bliskim małą radość.'
  },
  {
    id: 5,
    title: '"Noc Shakeków"',
    content:
      'Marzysz o słodkim zakończeniu dnia? Nasza specjalna oferta na shake\'i jest właśnie dla Ciebie! W każdy piątek, od godziny 20:00, każdy shake w naszym menu jest dostępny z 30% zniżką. To doskonała okazja, aby spróbować różnych smaków i znaleźć swojego ulubionego. Od klasycznych, po te z egzotycznymi owocami, każdy shake jest przygotowany z najwyższą starannością i najlepszych składników. Niech ten słodki rytuał stanie się Twoim piątkowym zwyczajem.'
  }
];

export { sliderData, storeMenu, storeItems, geckoInfo };
