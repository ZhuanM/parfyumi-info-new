import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

// import { Fragrance } from '../models/fragrance';
// import { FragranceModalComponent } from '../fragrance-modal/fragrance-modal.component';
// import { Paginator } from 'primeng/paginator';

@Component({
  selector: 'frag-list',
  templateUrl: './frag-list.component.html',
  styleUrls: ['./frag-list.component.scss']
})
export class FragListComponent {
  // bsModalRef: BsModalRef;
  // fragrances: Array<Fragrance>;

  // @ViewChild('paginator') paginator: Paginator;
  
  // constructor(private modalService: BsModalService) {
  //   this.fragrances = [
  //     {
  //       id: 1,
  //       name: "Man In Black",
  //       designer: "Bvlgari",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.26358.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Bvlgari/Bvlgari-Man-In-Black-26358.html",
  //       summary: "Bvlgari Man In Black е парфюмна вода за мъже, зад чието създаване стои митичният Бог на земята, поне по отношение на ароматните съставки. Ароматът е провъзгласен за сладка композиция, изпълнена с пикантни и топли тонове и е предназначен за харизматични и модерни хора, които имат свой собствен стил.",
  //       perfumers: [ "Alberto Morillas" ],
  //       topNotes: "ром, тютюн",
  //       midNotes: "ирис, кожа, тубероза",
  //       baseNotes: "бензоин, гуаяк, зърна от тонка"
  //     },
  //     {
  //       id: 2,
  //       name: "Jasmin Noir",
  //       designer: "Bvlgari",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.3750.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Bvlgari/Jasmin-Noir-3750.html",
  //       summary: "Jasmin Noir от Bvlgari е изтънчено и скъпоценно творение, което перфектно изразява престижа и лукса на италианската бижутерска традиция. Неговата мистериозна тъмна бутилка става обект на любов за много фенове на Bvlgari, ароматът привлича много фенове със своята дървесно-цветна композиция.",
  //       perfumers: [ "Carlos Benaim", "Sophie Labbe" ],
  //       topNotes: "гардения",
  //       midNotes: "жасмин, бадем",
  //       baseNotes: "благородни дървета, женско биле, зърна от тонка"
  //     },
  //     {
  //       id: 3,
  //       name: "Black",
  //       designer: "Bvlgari",
  //       gender: "unisex",
  //       image: "https://i.fragrances.bg/image/cache/data/bvlgari_black2-500x500.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Bvlgari/Black-154.html",
  //       summary: "Bvlgari Black е унисекс аромат с много специфичен аромат, които се състои от много съвместими съставки. Неговият малко по-интензивен, леко опушен оттенък дава на парфюма Bvlgari Black екстравагантност, необичайни преживявания и модерността на съвременната епоха.",
  //       perfumers: [ "Annick Menardo" ],
  //       topNotes: "бергамот, роза, чай",
  //       midNotes: "жасмин, кедър, сандалово дърво",
  //       baseNotes: "ванилия, кехлибар, кожа, мускус, мъх"
  //     },
  //     {
  //       id: 4,
  //       name: "CK One Shock",
  //       designer: "Calvin Klein",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.12520.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Calvin-Klein/CK-One-Shock-For-Him-12520.html",
  //       summary: "Въпреки, че One Schok на Calvin Klein е сравнително нов мъжки аромат, представен едва през 2011 г., той вече има много почитатели. В основата на аромата са ориенталските пикантни тонове, предизвикващи усещане за топлина и интимност.",
  //       perfumers: [ "Ann Gottlieb" ],
  //       topNotes: "краставица, лавандула, клементина",
  //       midNotes: "босилек, пипер, османтус, кардамон",
  //       baseNotes: "тютюн, дърво, мускус, кехлибар, пачули"
  //     },
  //     {
  //       id: 5,
  //       name: "Eternity",
  //       designer: "Calvin Klein",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.257.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Calvin-Klein/Eternity-257.html",
  //       summary: "Парфюмната вода Eternity е интерпретация на любовната романтика от марката Calvin Klein. Модерният цветен аромат е вдъхновен от сватбени пръстени с диаманти, които подобно на самия аромат, най-добре се описват с една единствена дума – вечност. Ароматът Eternity е представен на пазара през 1988 година.",
  //       perfumers: [ "Sophia Grojsman" ],
  //       topNotes: "чай, зелени нотки, мандаринка, фрезия, цитруси",
  //       midNotes: "жасмин, карамфил, роза, теменуга",
  //       baseNotes: "кехлибар, мускус, пачули, сандалово дърво"
  //     },
  //     {
  //       id: 6,
  //       name: "CK One",
  //       designer: "Calvin Klein",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.276.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Calvin-Klein/CK-One-276.html",
  //       summary: "CK One е представена на пазара през 1994 година, с което започва революция в света на ароматите – не е нужно да са нежно женски или силно мъжки. Унисекс ароматите са подходящи за всички, определящи сами собствената си идентичност.",
  //       perfumers: [ "Alberto Morillas", "Harry Fremont" ],
  //       topNotes: "ананас, бергамот, зелени нотки, лимон, мандаринка",
  //       midNotes: "жасмин, индийско орехче, ирис, теменуга",
  //       baseNotes: "дъбов мъх, кедър, кехлибар, мускус, сандалово дърво"
  //     },
  //     {
  //       id: 7,
  //       name: "CH Men",
  //       designer: "Carolina Herrera",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.6759.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Carolina-Herrera/CH-Men-6759.html",
  //       summary: "Carolina Herrera CH Men е луксозен мъжки аромат, предназначен за ексцентрично елегантните мъже, обичащи да изявяват своето превъзходство. Уханието CH Men съчетава дървесни и пикантни аромати, които съвършено изразяват мъжествената смелост на истинския елегантен мъж, който не желае да е извън екшъна.",
  //       perfumers: [ "Няма информация" ],
  //       topNotes: "бергамот, трева",
  //       midNotes: "дървесни тонове, жасмин, индийско орехче, теменуга, шафран",
  //       baseNotes: "ванилия, велур, ветивер, захар, кашмирено дърво, кехлибар, кожа, лишей, сандалово дърво"
  //     },
  //     {
  //       id: 8,
  //       name: "Good Girl",
  //       designer: "Carolina Herrera",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.39681.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Carolina-Herrera/Good-Girl-39681.html",
  //       summary: "Добре възпитаните момичета рядко влизат в историята. С Ню Йорк в краката ѝ, тя е доброто момиче със скрита лоша страна, тя е лошото момиче, което никога не бива хванато, тя е дяволитата дива, модерна, чувствена и властна – тя е момичето, което ни казва: „It’s good to be bad”.",
  //       perfumers: [ "Louise Turner" ],
  //       topNotes: "нежна тубероза",
  //       midNotes: "сияещ бял жасмин",
  //       baseNotes: "изпечени зърна от тонка, дръзко, чувстено какао"
  //     },
  //     {
  //       id: 9,
  //       name: "Burning Rose",
  //       designer: "Carolina Herrera",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.31053.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Carolina-Herrera/Burning-Rose-31053.html",
  //       summary: "Олицетворение на червения цвят, Burning Rose е експлозия на енергия; празник на жизнеността. Богат и малко загадъчен, страстният аромат е символ на желание и любов. Burning Rose напомня за ароматното изразяване на спонтанността и чар.",
  //       perfumers: [ "Няма информация" ],
  //       topNotes: "черен пипер, индийско орехче, джинджифил",
  //       midNotes: "роза, канела",
  //       baseNotes: "пачули, смирна, олибанум"
  //     },
  //     {
  //       id: 10,
  //       name: "Bleu de Chanel",
  //       designer: "Chanel",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.9099.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Chanel/Bleu-de-Chanel-9099.html",
  //       summary: "Chanel Bleu de Chanel е луксозен мъжки аромат, въплъщаващ мъжката свобода. Непреходният дървесен аромат въздейства много елегантно. С този парфюм съвършено ще изтъкнете своята индивидуалност и същевременно ще изразите вашата харизма.",
  //       perfumers: [ "Jacques Polge" ],
  //       topNotes: "лимон, мента, розов пипер",
  //       midNotes: "джинджифил, индийско орехче, жасмин",
  //       baseNotes: "пачули, тамян, ветивер, сандалово дърво"
  //     },
  //     {
  //       id: 11,
  //       name: "No 5",
  //       designer: "Chanel",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.28711.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Chanel/Chanel-No-5-Parfum-28711.html",
  //       summary: "Chanel No.5 е парфюмът – класика в света на ароматите. Той се налага и се превръща в емблематичното ухание на представителките на нежния пол от модна къща Chanel.",
  //       perfumers: [ "Ernest Beaux" ],
  //       topNotes: "алдехиди, бергамот, лимон, нероли, иланг – иланг",
  //       midNotes: "ирис, жасмин, момина сълза, роза, корен от ирис",
  //       baseNotes: "кехлибар, ванилия, пачули, сандалово дърво, ветивер"
  //     },
  //     {
  //       id: 12,
  //       name: "Sycomore",
  //       designer: "Chanel",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.41780.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Chanel/Sycomore-Eau-de-Parfum-41780.html",
  //       summary: "През 1930 г. мадмоазел Шанел вече мечтаеше за дървесен парфюм, който щеше да стои настрана. Резултатът е SYCOMORE: сух, благороден и мощен аромат. Може би метафора за легендарната й упоритост? Във всеки случай, това е перфектна илюстрация на майсторската й елегантност",
  //       perfumers: [ "Jacques Polge", "Christopher Sheldrake" ],
  //       topNotes: "розов пипер, теменуга",
  //       midNotes: "ветивер, кипарис",
  //       baseNotes: "хвойна, сандалово дърво"
  //     },
  //     {
  //       id: 13,
  //       name: "Aventus",
  //       designer: "Creed",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.9828.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Creed/Aventus-9828.html",
  //       summary: "Тази парфюмна вода е празник на силата, куража и успеха. Aventus е вдъхновен от живота на император Наполеон Бонапарт. Той отразява жизненост, издръжливост, война, мир и любов. Оригиналният аромат отразява природата на една от най-интересните личности на света.",
  //       perfumers: [ "Oliver Creed", "Erwin Creed" ],
  //       topNotes: "ананас, бергамот, касис, ябълка",
  //       midNotes: "бреза, жасмин, пачули, роза",
  //       baseNotes: "ванилия, кехлибар, мускус, мъх"
  //     },
  //     {
  //       id: 14,
  //       name: "Love in White",
  //       designer: "Creed",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.4262.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Creed/Love-in-White-4262.html",
  //       summary: "Парфюмната вода Love in White принадлежи към истинските скъпоценни камъни на марката Creed. Този изключително женствен, свеж и в същото време кремов букет е резултат от съвместните усилия на Olivier Creed, водещ дизайнер на аромати от шестото поколение на династията и Erwin Creed от седмото поколение. Вдъхновението им са били приключенията на пътешественика Olivier Creed. Love in White е създаден от съставки, които Olivier ръчно е събрал на пет континента.",
  //       perfumers: [ "Oliver Creed", "Erwin Creed" ],
  //       topNotes: "портокал",
  //       midNotes: "жасмин, ирис, магнолия, ориз, роза",
  //       baseNotes: "ванилия, кехлибар, роза"
  //     },
  //     {
  //       id: 15,
  //       name: "Millésime Impérial",
  //       designer: "Creed",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.466.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Creed/Mill-sime-Imp-rial-466.html",
  //       summary: "Парфюмната вода Millesime Imperial, първоначално създадена за царя, е дело на Olivier Creed - водещия дизайнер на аромати от шесто поколение на династията Creed. Това е аромат за мъже и жени със силна позиция, престиж и отличителен характер. От създаването си през 1995 г., ароматът Millesime Imperial е бил придружен от безброй световни знаменитости.",
  //       perfumers: [ "Oliver Creed" ],
  //       topNotes: "морска сол, плодови нотки",
  //       midNotes: "бергамот, мандаринка, сицилиански лимон",
  //       baseNotes: "дървесни тонове, морски нотки, мускус"
  //     },
  //     {
  //       id: 16,
  //       name: "Sauvage",
  //       designer: "Christian Dior",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.31861.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Christian-Dior/Sauvage-31861.html",
  //       summary: "Освежаващият проникващ мъжки аромат Dior Sauvage е създаден специално за искрени мъже, които не наговорят за себе си и обкръжаващите. Ароматът Sauvage предизвиква необвързаност, непокорност и усещане за свобода. Неговият уникален аромат е вдъхновен от духащия вятър, синьото небе и скалистия терен на гореща пустиня. Dior Sauvage Ви носи копнеж за свежест и изостря вашите инстинкти.",
  //       perfumers: [ "Francois Demachy" ],
  //       topNotes: "бергамот, пипер",
  //       midNotes: "сечуански пипер, розов пипер, лавандула",
  //       baseNotes: "амброксан, кедър"
  //     },
  //     {
  //       id: 17,
  //       name: "Hypnotic Poison",
  //       designer: "Christian Dior",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.219.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Christian-Dior/Hypnotic-Poison-219.html",
  //       summary: "Тоалетната вода Christian Dior Hypnotic Poison има особено дълготраен аромат, провокиращ лежерно и на моменти приятно носталгично настроение. Мирисът на ванилия и бадем, който доминира в Hypnotic Poison, ще поглези сетивата Ви.",
  //       perfumers: [ "Annick Menardo" ],
  //       topNotes: "кайсия, кокос, слива",
  //       midNotes: "жасмин, кимион, роза, кедър, сандалово дърво",
  //       baseNotes: "бадеми, ванилия, мускус, сандалово дърво"
  //     },
  //     {
  //       id: 18,
  //       name: "Ambre Nuit",
  //       designer: "Christian Dior",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.7092.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Christian-Dior/Ambre-Nuit-7092.html",
  //       summary: "Унисекс парфюмната вода Dior La Collection Privée Christian Dior Ambre Nuit е съвършен аромат за независими жени и мъже, живеещи по своите собствени правила.",
  //       perfumers: [ "Francois Demachy" ],
  //       topNotes: "бергамот, грейпфрут",
  //       midNotes: "розов пипер",
  //       baseNotes: "амброксан, розас"
  //     },
  //     {
  //       id: 19,
  //       name: "The One",
  //       designer: "Dolce & Gabbana",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.2056.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Dolce-Gabbana/The-One-for-Men-2056.html",
  //       summary: "Dolce & Gabanna The One е на пазара от 2008 г., след като женската версия на аромата празнува големи успехи. Творците на тази тоалетна вода са си поставили задачата да създадат нещо, което да не е банално класическо, а класически мъжко. Успяват да създадат ухание, което жените истински обичат.",
  //       perfumers: [ "Olivier Polge" ],
  //       topNotes: "бергамот, кориандър, босилек",
  //       midNotes: "кардамон, джинджифил, нероли",
  //       baseNotes: "кедър, амброксан, тютюн"
  //     },
  //     {
  //       id: 20,
  //       name: "Light Blue",
  //       designer: "Dolce & Gabbana",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.485.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Dolce-Gabbana/Light-Blue-485.html",
  //       summary: "Bvlgari Black е унисекс аромат с много специфичен аромат, които се състои от много съвместими съставки. Неговият малко по-интензивен, леко опушен оттенък дава на парфюма Bvlgari Black екстравагантност, необичайни преживявания и модерността на съвременната епоха.",
  //       perfumers: [ "Olivier Cresp" ],
  //       topNotes: "сицилиански кедър, ябълка",
  //       midNotes: "бамбук, бяла роза, жасмин",
  //       baseNotes: "кехлибар, лимоново дърво, мускус"
  //     },
  //     {
  //       id: 21,
  //       name: "Velvet Desert Oud",
  //       designer: "Dolce & Gabbana",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.18165.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Dolce-Gabbana/Velvet-Desert-Oud-18165.html",
  //       summary: "Парфюмната вода Dolce & Gabbana Velvet Desert Oud е предназначена за всички, които обичат лукса и умеят да оценят първокласните съставки и необичайната композиция на аромата.",
  //       perfumers: [ "Няма информация" ],
  //       topNotes: "кехлибар",
  //       midNotes: "агарово дърво, мускус,",
  //       baseNotes: "тамян"
  //     },
  //     {
  //       id: 22,
  //       name: "Armani Code",
  //       designer: "Giorgio Armani",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.412.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Giorgio-Armani/Armani-Code-412.html",
  //       summary: "Тоалетната вода Giorgio Armani Code е действително първият ориентален луксозен аромат от Armani. Той е съблазнителен, рафинира и вечно страстен. Тоалетната вода е лансирана на пазара през 2004г.",
  //       perfumers: [ "Antoine Lie", "Antoine Maisondieu", "Clement Gavarry" ],
  //       topNotes: "бергамот, лимон",
  //       midNotes: "гуаяк, звездовиден анасон, цвят на маслин",
  //       baseNotes: "зърна от тонка, кожа, тютюн"
  //     },
  //     {
  //       id: 23,
  //       name: "Acqua di Gioia",
  //       designer: "Giorgio Armani",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.8442.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Giorgio-Armani/Acqua-di-Gioia-8442.html",
  //       summary: "Тоалетната вода Armani Acqua di Gioia Acqua di Gioia предизвиква радостната, вълнуваща и безгрижна атмосфера на ваканционните дни и ви обгръща с волност и свежест.",
  //       perfumers: [ "Loc Dong", "Anne Flipo", "Dominique Ropion" ],
  //       topNotes: "касис, круша, лимон, мента",
  //       midNotes: "арабски жасмин, божур, жасмин",
  //       baseNotes: "агарово дърво, кедър"
  //     },
  //     {
  //       id: 24,
  //       name: "Cuir Amethyste",
  //       designer: "Giorgio Armani",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.408.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Giorgio-Armani/Cuir-Amethyste-408.html",
  //       summary: "Cuir Amethyste е мощен кожен аромат, който се присъединява към колекцията аромати на Privé Haute Couture през 2005 г. като пети аромат.",
  //       perfumers: [ "Няма информация" ],
  //       topNotes: "бергамот, кориандър, роза",
  //       midNotes: "бреза, теменуга, пачули",
  //       baseNotes: "бензоин, лабданум, ванилия"
  //     },
  //     {
  //       id: 25,
  //       name: "Invictus",
  //       designer: "Paco Rabanne",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.18471.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Paco-Rabanne/Invictus-18471.html",
  //       summary: "Paco Rabanne Invictus е свеж мъжки аромат, предназначен за силни и уверени мъже. Флаконът напомня с дизайна си купа, олицетворяваща характера на парфюма. С Paco Rabanne Invictus всеки мъж ще се чувства непобедим и пълен с енергия",
  //       perfumers: [ "Veronique Nyberg", "Anne Flipo", "Olivier Polge" ],
  //       topNotes: "мандаринка, морски нотки",
  //       midNotes: "дафинов лист, жасмин",
  //       baseNotes: "гуаяк, дъбов мъх, кехлибар, пачули"
  //     },
  //     {
  //       id: 26,
  //       name: "Lady Million",
  //       designer: "Paco Rabanne",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.9045.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Paco-Rabanne/Lady-Million-9045.html",
  //       summary: "Paco Rabanne Lady Million е прелестен аромат за жени. Това е аромат на красотата и поклон пред силата на женствеността. Влюбете се в радостта от насладата. Оставете се да ви увлича фантазията с парфюма Lady Million и опознайте света на съблазняването.",
  //       perfumers: [ "Anne Flipo", "Beatrice Piquet", "Dominique Ropion", "Bruno Jovanovic" ],
  //       topNotes: "малина, нероли",
  //       midNotes: "арабски жасмин, гардения, портокал",
  //       baseNotes: "бял мед, кехлибар, пачули"
  //     },
  //     {
  //       id: 27,
  //       name: "Paco Energy",
  //       designer: "Paco Rabanne",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.1488.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Paco-Rabanne/Paco-1487.html",
  //       summary: "Този цитрусов парфюм е лансиран през 1998 година",
  //       perfumers: [ "Rosendo Mateu" ],
  //       topNotes: "лимон, алдехиди, мандарина, лавандула",
  //       midNotes: "жасмин, лилия",
  //       baseNotes: "мускус, кедър, кехлибар, дъбов мъх"
  //     },
  //     {
  //       id: 28,
  //       name: "Noir Extreme",
  //       designer: "Tom Ford",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.29675.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Tom-Ford/Noir-Extreme-29675.html",
  //       summary: "Парфюмната вода Tom Ford Noir Extreme предизвиква чувство за традиционната мъжественост. Дървесният ориенталски аромат разкрива аспектите на мъжа, който има склонност към необичайните неща. Ароматът е пълен с магнитна изтънченост, която напълно удивлява всички ваши сетива.",
  //       perfumers: [ "Sonia Constant" ],
  //       topNotes: "индийско орехче, кардамон, мандаринка, нероли",
  //       midNotes: "жасмин, кулфи, роза",
  //       baseNotes: "ванилия, дървесни тонове, кехлибар, сандалово дърво"
  //     },
  //     {
  //       id: 29,
  //       name: "Black Orchid",
  //       designer: "Tom Ford",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.1018.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Tom-Ford/Black-Orchid-1018.html",
  //       summary: "Луксозната дамска парфюмна вода Tom Ford Black Orchid е уникално и магическо съчетание на оригинални аромати, което във всяка жена ще пробуди елегантната и изтънчена дама. Перфектният баланс на интензивните цветни аромати на парфюма Tom Ford Black Orchid ще Ви очарова още при първото вдишване",
  //       perfumers: [ "Givaudan" ],
  //       topNotes: "бергамот, иланг-иланг, касис, трюфел",
  //       midNotes: "лотос, орхидея, плодови нотки",
  //       baseNotes: "ванилия, ветивер, пачули, сандалово дърво, тамян, шоколад"
  //     },
  //     {
  //       id: 30,
  //       name: "Tobacco Vanille",
  //       designer: "Tom Ford",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.1825.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Tom-Ford/Tobacco-Vanille-1825.html",
  //       summary: "Tobacco Vanille е разкошен дори помпозен, греещ и изцяло емблематичен аромат, подходящ целогодишно, през деня и вечерта. Неговият греещ аромат ще се изрази най-вече в по-хладните месеци. Ще го заобичат особено жените и мъжете, които харесват пикантни аромати с пленителните ухания на ванилия и тютюн.",
  //       perfumers: [ "Няма информация" ],
  //       topNotes: "тютюн",
  //       midNotes: "ванилия, зърна от тонка, какао",
  //       baseNotes: "дървесни тонове, сушени плодове"
  //     },
  //     {
  //       id: 31,
  //       name: "L'Homme",
  //       designer: "Yves Saint Laurent",
  //       gender: "male",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.734.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/L-Homme-734.html",
  //       summary: "L'Homme на Ив Сен Лоран е дървесен аромат за мъже, който ще ви докосне с изключителна свежест. Вие сте човек, който не се страхува да изрази чувствата си? Копнеете за хармония и красиви моменти? Опитайте това леко докосване на мъжественост във флакон с изчистен дизайн.",
  //       perfumers: [ "Anne Flipo", "Pierre Wargnye", "Dominique Ropion" ],
  //       topNotes: "джинджифил, лимон, озон",
  //       midNotes: "босилек, пипер, теменуга",
  //       baseNotes: "ветивер, зърна от тонка, кедър, сандалово дърво"
  //     },
  //     {
  //       id: 32,
  //       name: "Black Opium",
  //       designer: "Yves Saint Laurent",
  //       gender: "female",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.25324.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Black-Opium-25324.html",
  //       summary: "Yves Saint Laurent Black Opium е аромат, вдъхновен от музиката. Неговата ароматна композиция представлява тайнствен израз на вътрешните усещания, чувственост и необвързан подход към всекидневния живот. Парфюмната вода е представена на пазара през 2014 година.",
  //       perfumers: [ "Nathalie Lorson", "Marie Salamagne", "Olivier Cresp", "Honorine Blanc" ],
  //       topNotes: "круша, розов пипер",
  //       midNotes: "жасмин, кафе",
  //       baseNotes: "ванилия, кедър, пачули"
  //     },
  //     {
  //       id: 33,
  //       name: "Exquisite Musk",
  //       designer: "Yves Saint Laurent",
  //       gender: "unisex",
  //       image: "https://fimgs.net/mdimg/perfume/375x500.38387.jpg",
  //       infoLink: "https://www.fragrantica.com/perfume/Yves-Saint-Laurent/Exquisite-Musk-38387.html",
  //       summary: "Изящният мускус от Yves Saint Laurent е ориенталски аромат за жени и мъже. Exquisite Musk лансира през 2016 година.",
  //       perfumers: [ "Няма информация" ],
  //       topNotes: "джинджифил",
  //       midNotes: "индийско орехче, канела, роза",
  //       baseNotes: "бензоин, лабданум, мускус, пачули"
  //     }
  //   ]
  // }

  // openModal(frag: Fragrance){
  //   const initialState = {
  //     fragrance: frag
  //   };
  //   this.bsModalRef = this.modalService.show(FragranceModalComponent, {initialState});
  //   this.bsModalRef.content.closeBtnName = 'Close';
  // }

  // filteredFrags: Array<Fragrance>;
  // genderFilter: string = '';
  // designerFilter: string = '';
  // filterByAll() {
  //   this.filteredFrags = this.fragrances;
  //   this.filteredFrags = this.filteredFrags.filter(frag => {
  //     if (frag.gender.startsWith(this.genderFilter) && frag.designer.startsWith(this.designerFilter))
  //       return frag
  //   });

  //   this.paginate({ page: 0, first: 0, rows: 12 });
  //   this.paginator.changePageToFirst({ page: 0, first: 0, rows: 12 });
  // }

  // filterGender(filter: string) {
  //   this.genderFilter = filter;
  //   this.filterByAll();
  // }

  // filterDesigner(filter: string) {
  //   this.designerFilter = filter;
  //   this.filterByAll();
  // }

  // visibleFrags: Array<Fragrance>;
  // paginate(event) {
  //   this.visibleFrags = this.filteredFrags.slice(event.first, event.first + event.rows);
  // }

  // ngOnInit() {
  //   this.filteredFrags = this.fragrances.sort((frag1, frag2) => {
  //     if (frag1.designer < frag2.designer) return -1;
  //     if (frag1.designer > frag2.designer) return 1;
      
  //     if (frag1.gender == "male") return -1;
  //     if (frag2.gender == "male") return 1;
      
  //     if (frag1.gender == "unisex") return 1;
  //     if (frag2.gender == "unisex") return -1;
      
  //     return 0;
  //   });

  //   this.paginate({ first: 0, rows: 12 });
  // }
}