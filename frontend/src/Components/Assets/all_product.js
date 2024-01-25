import p1_img from "./product_12.png";
import p2_img from "./product_35.png";
import p3_img from "./product_14.png";
import p4_img from "./product_8.png";
import p5_img from "./product_15.png";
import p6_img from "./product_22.png";
import p7_img from "./product_17.png";
import p8_img from "./product_28.png";
import p9_img from "./product_100.png";
import p10_img from "./product_101.png";
import p11_img from "./product_102.png";
import p12_img from "./product_103.png";
import p13_img from './product_1.png';
import p14_img from './product_2.png';
import p15_img from './product_3.png';
import p16_img from './product_4.png';
import p17_img from "./product_104.png";
import p18_img from "./product_105.png";
import p19_img from "./product_106.png";
import p20_img from "./product_107.png";
import p21_img from "./product_108.png";
import p22_img from "./product_109.png";
import p23_img from "./product_110.png";
import p24_img from "./product_111.png";
import p25_img from "./product_112.png";
import p26_img from "./product_113.png";
import p27_img from "./product_114.png";
import p28_img from "./product_115.png";
import p29_img from "./product_116.png";
import p30_img from "./product_117.png";
import p31_img from "./product_118.png";
import p32_img from "./product_119.png";
import p33_img from "./product_120.png";
import p34_img from "./product_121.png";
import p35_img from "./product_122.png";
import p36_img from "./product_123.png";


let all_product = [
  {
    id: 1,
    name: "Miss Dior",
    description:"Following a bleak period, at that time this scent was synonymous with renewed happiness, poetry, and harmony for Christian Dior. Miss Dior intrigues, excites and invites us to marvel at love and all the beauty in the world",
    category: "women",
    image: p1_img,
    new_price: 220,
    old_price: 270,
  },
  {
    id: 2,
    name: "COCO Mademoiselle",
    description:"irresistibly sensual, irrepressibly spirited. A sparkling, bold ambery fragrance that recalls a daring young Coco Chanel. An absolutely modern composition with a strong yet surprisingly fresh character",
    category: "women",
    image: p2_img,
    new_price: 290,
    old_price: 320,
  },
  {
    id: 3,
    name: "Escada",
    description:"An addictive mandarin and bergamot sorbet, enhanced by a note of luminous jasmine petals and colorful bursts of pink peppercorns. A completely vegan perfume, Escada Santorini Sunrise will become your most memorable fragrance",
    category: "women",
    image: p3_img,
    new_price: 95,
    old_price: 140,
  },
  {
    id: 4,
    name: "Guerlain",
    description:"Obtained by extracting Damask rose petals, its rich and delicately honeyed fragrance underpins the naturally floral and spicy inflections of rosewood, while patchouli gives it depth and mystery",
    category: "women",
    image: p4_img,
    new_price: 140,
    old_price: 177,
  },
  {
    id: 5,
    name: "Chloe",
    description:"Explore a range of captivating and irresistibly intense fragrances. From Eau de Parfum to Eau de Toilette, Chloé’s luxury floral perfumes feature round, velvety, and fragrant facets that encapsulate the Chloé woman’s free spirit and timeless elegance.",
    category: "women",
    image: p5_img,
    new_price: 430,
    old_price: 480,
  },
  {
    id: 6,
    name: "Alive",
    description:"Every woman has her own answer. BOSS ALIVE invites you to live life to the fullest and find your own path. A contemporary and stimulating fragrance, leaving a trace of positive energy.",
    category: "women",
    image: p6_img,
    new_price: 179,
    old_price: 199,
  },
  {
    id: 7,
    name: "Queen",
    description:"The fresh, aquatic scent of Queen of Seduction women's perfume by Banderas is brought to life by sparkling grapefruit and raspberry. The aromas of flowers at the heart of the scent gives this queen captivating femininity. A perfume with sensual and delicate gold lid, reflecting the personality of a woman who can captivate the most seductive of seducers",
    category: "women",
    image: p7_img,
    new_price: 130,
    old_price: 143,
  },
  {
    id: 8,
    name: "Black Opium",
    description:"This seductive women's perfume is inspired by the edgy and daring woman. Emboldened by the strong scent of coffee, the sensuous warm floral vanilla perfume captivates the senses with a sweet vanilla base and a burst of floral at the heart of the fragrance.",
    category: "women",
    image: p8_img,
    new_price: 142,
    old_price: 152,
  },
  {
    id: 9,
    name: "BOSS",
    description:"Femme by Boss. Radiant. Soft. Smooth. Femme by Boss exudes an aura of captivating femininity. The subtle, lingering warmth of the fragrance is sublimely sophisticated and modern. An enticing experience and the most liberatingly",
    category: "women",
    image: p9_img,
    new_price: 299,
    old_price: 310,
  },
  {
    id: 10,
    name: "Interdit",
    description:"A white flower crossed by a dark woody accord.'Interdit Eau de Parfum for women — a fearless fragrance imbued with the frisson of freedom. Transgress your limits with audacity and feel empowered on the journey to self-discovery.",
    category: "women",
    image: p10_img,
    new_price: 230,
    old_price: 268,
  },
  {
    id: 11,
    name: "MY WAY",
    description:"The elegant fragrance sources three key ingredients from around the world: the orange blossom extracted from hand-picked bitter orange fruits in Egypt; the Indian tuberose flower sourced and handpicked near Mysore, India; and vanilla sourced through a responsible program designed to support local communities in Madagascar.",
    category: "women",
    image: p11_img,
    new_price: 155,
    old_price: 190,
  },
  {
    id: 12,
    name: "SI",
    description:"Sì has a top note of blackcurrant nectar, a heart of freesia and Rose of Mai, with a musky blond wood base. This rose fragrance was created for the modern woman who’s strong yet feminine, sophisticated yet charismatic. She embodies the very essence of chic Italian elegance and style.",
    category: "women",
    image: p12_img,
    new_price: 246,
    old_price: 278,
  },
  {
    id: 13,
    name:"Sauvage Dior ",
    description:"Inspiration for the creation of Sauvage Eau de Parfum was taken from the desert in the magical hour of twilight: mixed with the coolness of the night, the burning desert air exudes profound scents.",
    category: "men",
    image: p13_img,
    new_price:130,
    old_price:169,
  },
  {
    id: 14,
    name:"Dolce & Gabbana",
    description:" for men celebrates masculinity seen through brand’s vision: an aromatic fougère fragrance with invigorating notes of citrus and fresh herbs, warmed by piquant spices and smoky woods.",
    category: "men",
    image: p14_img,
    new_price:85.00,
    old_price:120,
  },
  {
    id: 15,
    name:"Allure Homme Sport",
    description:" The nose behind this fragrance is Jacques Polge. Top notes are Orange, Sea Notes, Aldehydes and Blood Mandarin; middle notes are Pepper, Neroli and Cedar; base notes are Tonka Bean, Vanilla, White Musk, Amber, Vetiver and Elemi resin.",
    category: "men",
    image: p15_img,
    new_price:80.00,
    old_price:110,
  },
  {
    id: 16,
    name:"Azzaro Sport",
    description:"The top of the fragrance highlights a soothing lavender accord. The heart of the scent is composed of clary sage. The base finishes with a duet of sandalwood and tonka bean",
    category: "men",
    image: p16_img,
    new_price:110.00,
    old_price:150.00,
  },
  {
    id: 17,
    name: "Slazenger blue",
    description:"This is one elegant perfume to wear every day and for every occasion. The Slazenger Eau De Toilette in Blue is a lifesaver when it comes to protecting from body odour. This does not wear out easily ensuring an all-day freshness.",
    category: "men",
    image: p17_img,
    new_price: 68,
    old_price: 90,
  },
  {
    id: 18,
    name: "Slazenger Green",
    description:"Slazenger Activesport Green Eau de Toilette for men cools and re-energises you providing effective odour protection after you work out, and throughout the day.",
    category: "men",
    image: p18_img,
    new_price: 68,
    old_price: 90,
  },
  {
    id: 19,
    name: "Slazenger Pink",
    description:"Sweet and casual, Slazenger is a fresh floral fragrance for every day wear. Fruity bergamot and orange start the top notes, combined with delicate mint and warm cinnamon for a unique blend. Middle notes include aromatic jasmine and lemon balm.",
    category: "men",
    image: p19_img,
    new_price: 68,
    old_price: 90,
  },
  {
    id: 20,
    name: "Slazenger Gold",
    description:"The last touch that completes the elegance of the man. The rules of the game are being rewritten with Slazenger Gold. Introducing Slazenger – the captivating fragrance for the modern man who isn’t afraid to express himself.",
    category: "men",
    image: p20_img,
    new_price: 68,
    old_price: 90,
  },
  {
    id: 21,
    name: "1 Million",
    description:"The original idea of this one comes from an accident: back from vacation I had two bottles broken in my leather bag... one was my sunscreen and the other a sample of cistus. The smell was absolutely divine! I captured it with one simple formula: a contrasted smell of salty monoï-tuberose blended with resinous leather",
    category: "men",
    image: p21_img,
    new_price: 143,
    old_price: 159,
  },
  {
    id: 22,
    name: "Burberry",
    description:"Amber Heath Eau de Parfum by Burberry Signatures. The scents of wild heathland in the golden hours of dusk.Ambergris accord and a heart of patchouli are finished with dry notes of tonka, vetiver and vanilla.",
    category: "men",
    image: p22_img,
    new_price: 300,
    old_price: 340,
  },
  {
    id: 23,
    name: "Amor Amor",
    description:"With its Amor Amor perfume, Cacharel reveals its fragrance of youthful love. Of this tender, shy and awkward first love. Of the one whose name we will never forget, nor the texture of his lips, nor even the delicate smell once in his arms. This love which will remain engraved in our memories as a reference of happiness.",
    category: "men",
    image: p23_img,
    new_price: 89,
    old_price: 109,
  },
  {
    id: 24,
    name: "Eclat",
    description:" was launched during 2000's. Eclat for Men was created by Nathalie Feisthauer and Alexis Dadier. Top notes are Bergamot and Coriander; middle notes are Geranium, Jasmine and Cedar; Base notes are amber, tonka bean, sandalwood, leather and musk.",
    category: "men",
    image: p24_img,
    new_price: 210,
    old_price: 234,
  },
  {
    id: 25,
    name: "Bon Bons Malizia Red",
    description:"",
    category: "kid",
    image: p25_img,
    new_price: 27,
    old_price: 50,
  },
  {
    id: 26,
    name: "Bon Bons Malizia Blue",
    description:"",
    category: "kid",
    image: p26_img,
    new_price: 27,
    old_price: 50,
  },
  {
    id: 27,
    name: "Bon Bons Malizia Yellow",
    description:"",
    category: "kid",
    image: p27_img,
    new_price: 27,
    old_price: 50,
  },
  {
    id: 28,
    name: "Bon Bons Malizia purple",
    description:"",
    category: "kid",
    image: p28_img,
    new_price: 27,
    old_price: 50,
  },
  {
    id: 29,
    name: "BEN 10",
    description:"",
    category: "kid",
    image: p29_img,
    new_price: 40,
    old_price: 66,
  },
  {
    id: 30,
    name: "NARUTO",
    description:"",
    category: "kid",
    image: p30_img,
    new_price: 40,
    old_price: 66,
  },
  {
    id: 31,
    name: "SPIDER_MAN",
    category: "kid",
    image: p31_img,
    new_price: 40,
    old_price: 66,
  },
  {
    id: 32,
    name: "BATMAN",
    category: "kid",
    image: p32_img,
    new_price: 40,
    old_price: 66,
  },
  {
    id: 33,
    name: "Tous",
    category: "kid",
    image: p33_img,
    new_price: 55,
    old_price: 70,
  },
  {
    id: 34,
    name: "Zara",
    category: "kid",
    image: p34_img,
    new_price: 55,
    old_price: 70,
  },
  {
    id: 35,
    name: "Dora",
    category: "kid",
    image: p35_img,
    new_price: 55,
    old_price: 70,
  },
  {
    id: 36,
    name: "Barbie",
    category: "kid",
    image: p36_img,
    new_price: 55,
    old_price: 70,
  },
];

export default all_product;
