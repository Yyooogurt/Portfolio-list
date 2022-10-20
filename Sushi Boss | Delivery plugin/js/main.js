// Initialize and add the map
var map;
// check for Geolocation support
if (navigator.geolocation) {
  console.log('Geolocation is supported!');
}
else {
  console.log('Geolocation is not supported for this Browser/OS.');
}
let button = document.getElementById("get-location");
let latText = document.getElementById("latitude");
let longText = document.getElementById("longitude");
function initMap() {
  // The map
  const center = {lat: 46.48280227225143, lng: 30.726510796889656};
  const options = {zoom: 10, scaleControl: true, center: center};
  map = new google.maps.Map(
      document.getElementById('map'), options);
  // Locations of landmarks
const contentString1 =" <div> "+"<p>СушиБосс на Канатная 61 </p>"+"</div>";
const infowindow1 = new google.maps.InfoWindow({content: contentString1,});
const contentString2 =" <div> "+"<p>СушиБосс на Вильямса 81/1а </p>"+"</div>";
const infowindow2 = new google.maps.InfoWindow({content: contentString2,});
const contentString3 =" <div> "+"<p>СушиБосс на Пр. Небесной сотни 4/11 </p>"+"</div>";
const infowindow3 = new google.maps.InfoWindow({content: contentString3,});
const contentString4 =" <div> "+"<p>СушиБосс на Ул. Николаевская дорога, 299 </p>"+"</div>";
const infowindow4 = new google.maps.InfoWindow({content: contentString4,});
const contentString5 =" <div> "+"<p>СушиБосс на ЖК 7 небо, ул. Торговая 17 </p>"+"</div>";
const infowindow5 = new google.maps.InfoWindow({content: contentString5,});
const contentString6 =" <div> "+"<p>СушиБосс на Черноморск, пр. Мира 18М </p>"+"</div>";
const infowindow6 = new google.maps.InfoWindow({content: contentString6,});
const contentString7 =" <div> "+"<p>СушиСэт на Белгород, ул. Московская 16 </p>"+"</div>";
const infowindow7 = new google.maps.InfoWindow({content: contentString7,});
const contentString8 =" <div> "+"<p>СушиБосс на Измаил, пр. Мира, 19Б </p>"+"</div>";
const infowindow8 = new google.maps.InfoWindow({content: contentString8,});
const contentString9 =" <div> "+"<p>СушиСэт на Варненская 11/1 </p>"+"</div>";
const infowindow9 = new google.maps.InfoWindow({content: contentString9,});
const contentString10 =" <div> "+"<p>СушиСэт на Филатова 21 </p>"+"</div>";
const infowindow10 = new google.maps.InfoWindow({content: contentString10,});
const contentString11 =" <div> "+"<p>СушиСэт на Академическая 10 </p>"+"</div>";
const infowindow11 = new google.maps.InfoWindow({content: contentString11,});
const contentString12 =" <div> "+"<p>СушиСэт на Крымская 71 </p>"+"</div>";
const infowindow12 = new google.maps.InfoWindow({content: contentString12,});
const contentString13 =" <div> "+"<p>СушиСэт на Королёва 42/44 </p>"+"</div>";
const infowindow13 = new google.maps.InfoWindow({content: contentString13,});
const contentString14 =" <div> "+"<p>СушиСэт на Преображенская 27 </p>"+"</div>";
const infowindow14 = new google.maps.InfoWindow({content: contentString14,});
const contentString15 =" <div> "+"<p>СушиСэт на Екатерининская 72 </p>"+"</div>";
const infowindow15 = new google.maps.InfoWindow({content: contentString15,});
const contentString16 =" <div> "+"<p>СушиБосс на пр.Центральный 71А </p>"+"</div>";
const infowindow16 = new google.maps.InfoWindow({content: contentString16,});
const contentString17 =" <div> "+"<p>СушиБосс на Педагогическая 58 </p>"+"</div>";
const infowindow17 = new google.maps.InfoWindow({content: contentString17,});






  //SushiBoss
  const canatnaya = {lat: 46.471714599109525, lng: 30.747179232956377};
  const vilyam = {lat: 46.390333865851694, lng: 30.718850634008824};
  const nebesna = {lat: 46.40080837103359, lng: 30.7080217874675};  
  const mikolaiv = {lat: 46.55427863770318, lng: 30.76261929734942};
  const torgova = {lat:  46.45329, lng: 30.64197};
  const chernomorsc = {lat: 46.30420950974765, lng: 30.654399268503138};
  const moscovscaya = {lat:   46.192973331032796, lng:  30.34043425869424};
  const mira = {lat: 45.357450023497755, lng: 28.82332925127509};
  //Markers
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var mk1 = new google.maps.Marker({position: canatnaya, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk2 = new google.maps.Marker({position: vilyam, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk3 = new google.maps.Marker({position: nebesna, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk4 = new google.maps.Marker({position: mikolaiv, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk5 = new google.maps.Marker({position: torgova, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk6 = new google.maps.Marker({position: chernomorsc, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk7 = new google.maps.Marker({position: moscovscaya, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk8 = new google.maps.Marker({position: mira, map: map, icon: iconBase + 'parking_lot_maps.png'});
  //SushiSet
  const vernenskay = {lat: 46.42601364511811, lng: 30.71744888462948};
  const filatova = {lat: 46.43533729552938, lng: 30.719486255001996}; 
  const academichna = {lat:  46.441515307445286, lng: 30.74919601358268};
  const posmitnogo = {lat:  46.42746504921432, lng: 30.75458700482343};
  const crumskay = {lat: 46.579500842545514, lng: 30.790055339667475};
  const koroleva = {lat: 46.4058425990526, lng: 30.72111680724049};
  const probragenskay = {lat: 46.480964375842746, lng: 30.731865604242355};
  const ekaterininskay = {lat: 46.47277643629396, lng: 30.736577483819794};
  const centralnay = {lat: 46.966470179505606, lng: 31.98863594420194};

  //Markers
  var mk9 = new google.maps.Marker({position: vernenskay, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk10 = new google.maps.Marker({position: filatova, map: map}); //no
  var mk11 = new google.maps.Marker({position: academichna, map: map}); //no
  var mk12 = new google.maps.Marker({position: crumskay, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk13 = new google.maps.Marker({position: koroleva, map: map}); //no
  var mk14 = new google.maps.Marker({position: probragenskay, map: map}); //no
  var mk15 = new google.maps.Marker({position: ekaterininskay, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk16 = new google.maps.Marker({position: centralnay, map: map, icon: iconBase + 'parking_lot_maps.png'});
  var mk17 = new google.maps.Marker({position: posmitnogo, map: map, icon: iconBase + 'parking_lot_maps.png'});
   // addListener
  mk1.addListener("click", () => {infowindow1.open(map, mk1);});
  mk2.addListener("click", () => {infowindow2.open(map, mk2);});
  mk3.addListener("click", () => {infowindow3.open(map, mk3);});
  mk4.addListener("click", () => {infowindow4.open(map, mk4);});
  mk5.addListener("click", () => {infowindow5.open(map, mk5);});
  mk6.addListener("click", () => {infowindow6.open(map, mk6);});
  mk7.addListener("click", () => {infowindow7.open(map, mk7);});
  mk8.addListener("click", () => {infowindow8.open(map, mk8);});
  mk9.addListener("click", () => {infowindow9.open(map, mk9);});
  mk10.addListener("click", () => {infowindow10.open(map, mk10);});
  mk11.addListener("click", () => {infowindow11.open(map, mk11);});
  mk12.addListener("click", () => {infowindow12.open(map, mk12);});
  mk13.addListener("click", () => {infowindow13.open(map, mk13);});
  mk14.addListener("click", () => {infowindow14.open(map, mk14);});
  mk15.addListener("click", () => {infowindow15.open(map, mk15);});
  mk16.addListener("click", () => {infowindow16.open(map, mk16);});
  mk17.addListener("click", () => {infowindow17.open(map, mk17);});
 const canatnayaCoords = [{ lat: 46.491872, lng: 30.7384629 },{ lat: 46.4876764, lng:  30.7396645 },{ lat: 46.4771564, lng: 30.7388062 },{ lat: 46.4687922, lng: 30.7377977 },{ lat: 46.4683412, lng: 30.7392659 },{ lat: 46.4627694, lng: 30.7389655 },{ lat: 46.4612462, lng: 30.7638846 },{ lat: 46.4791365, lng: 30.7662076 },{ lat: 46.491872, lng: 30.7384629 },];
 const vilyamCoords = [{ lat: 46.3941166, lng: 30.752839  },{ lat: 46.39006, lng: 30.7064931 },{ lat: 46.3894195, lng:  30.6698381 },{ lat: 46.3900772, lng: 30.6584016 },{ lat: 46.3905042, lng:  30.6421782 },{ lat: 46.3504096, lng: 30.6467272 },{ lat: 46.3464989, lng: 30.6645824 },{ lat: 46.3275356, lng: 30.6697323 },{ lat: 46.3270615, lng:  30.6810623 },{ lat: 46.3768264, lng: 30.7476684 },{ lat: 46.3941166, lng: 30.752839 },];
 const nebesnaCoords = [{ lat: 46.4050762, lng: 30.7098564 },{ lat: 46.4073548, lng: 30.7051357 },{ lat: 46.4060823, lng: 30.6898579 },{ lat: 46.3894195, lng: 30.6698381 },{ lat: 46.3902186, lng: 30.7058012 },{ lat: 46.4050762, lng:  30.7098564 },];
 const mikolaivCoords = [{ lat: 46.489548, lng: 30.744374 },{ lat: 46.5112305, lng: 30.7381086 },{ lat: 46.524224, lng: 30.7384519 },{ lat: 46.5372144, lng: 30.7477214 },{ lat: 46.5480767, lng: 30.7611107 },{ lat: 46.5582287, lng: 30.7957855 },{ lat: 46.5557831, lng: 30.8115434 },{ lat: 46.5479061, lng: 30.8200892 },{ lat: 46.5536013, lng: 30.8509502 },{ lat: 46.5638935, lng: 30.8759615 },{ lat: 46.5709737, lng: 30.8153131 },{ lat: 46.5769919, lng: 30.7966463 },{ lat: 46.580503, lng: 30.7887725 },{ lat: 46.585079, lng: 30.7776873 },{ lat: 46.5853926, lng: 30.775249 },{ lat: 46.5851346, lng: 30.7707155 },{ lat: 46.5845151, lng: 30.7689014 },{ lat: 46.5838364, lng: 30.76801 },{ lat: 46.5814028, lng: 30.7660458 },{ lat: 46.573832, lng: 30.7598759 },{ lat: 46.572751, lng: 30.7592855 },{ lat: 46.5719462, lng: 30.759478 },{ lat: 46.573571, lng: 30.6955374 },{ lat: 46.5612975, lng: 30.7051503 },{ lat: 46.5466008, lng: 30.6761411 },{ lat: 46.5334948, lng: 30.6455851 },{ lat: 46.522039, lng: 30.6632658 },{ lat: 46.5285689, lng: 30.7143209 },{ lat: 46.5204113, lng: 30.7122844 },{ lat: 46.5164916, lng: 30.7109736 },{ lat: 46.5129623, lng: 30.7090471 },{ lat: 46.5056517, lng: 30.7095251 },{ lat: 46.5027239, lng: 30.7151065 },{ lat: 46.4990644, lng: 30.7219815 },{ lat: 46.496521, lng: 30.7294846 },{ lat: 46.4925359, lng: 30.7379244 },{ lat: 46.489548, lng:  30.744374 },];     
 const torgovaCoords = [{ lat: 46.3900772, lng: 30.6584016 },{ lat: 46.413167, lng: 30.6531542 },{ lat: 46.4177826, lng: 30.6461161 },{ lat: 46.4345846, lng: 30.6512659 },{ lat: 46.450731, lng: 30.652725 },{ lat: 46.4623203, lng: 30.6518667 },{ lat: 46.4710341, lng: 30.6499902 },{ lat: 46.4753787, lng: 30.6432954 },{ lat: 46.4756152, lng: 30.6420937 },{ lat: 46.5174479, lng: 30.6204644 },{ lat: 46.5242987, lng: 30.6544534 },{ lat: 46.5469713, lng: 30.6166878 },{ lat: 46.4987807, lng: 30.5270806 },{ lat: 46.3922085, lng: 30.5681077 },{ lat: 46.3900772, lng: 30.6584016 },];
 const chernomorscCoords = [{ lat: 46.3125927, lng: 30.6767468 },{ lat: 46.3348794, lng:  30.6546025 },{ lat: 46.338435, lng: 30.6480794 },{ lat: 46.3361832, lng: 30.6341748 },{ lat: 46.3341683, lng: 30.6225019 },{ lat: 46.3283603, lng:  30.6123738 },{ lat: 46.3217219, lng: 30.6032758 },{ lat: 46.3127113, lng: 30.5977826 },{ lat: 46.3047665, lng:  30.5977826 },{ lat: 46.292432, lng: 30.6034474 },{ lat: 46.2817557, lng: 30.6106572 },{ lat: 46.2787897, lng: 30.6264501 },{ lat: 46.279027, lng: 30.6444745 },{ lat: 46.2846029, lng: 30.6549459 },{ lat: 46.2948042, lng: 30.662499 },{ lat: 46.3125927, lng: 30.6767468 },];
 const moscovscayaCoords = [{ lat: 46.2029393, lng: 30.3540336 },{ lat: 46.2048402, lng: 30.3128349 },{ lat: 46.1977115, lng: 30.2915489 },{ lat: 46.1720405, lng: 30.2966987 },{ lat: 46.1518281, lng: 30.3231346 },{ lat: 46.1577737, lng: 30.3787529 },{ lat: 46.1758444, lng: 30.3818428 },{ lat: 46.2029393, lng:  30.3540336 },];
 const miraCoords = [{ lat: 45.3566809, lng: 28.8752144 },{ lat: 45.3682597, lng: 28.8738411 },{ lat: 45.3750129, lng: 28.8710945 },{ lat: 45.3827299, lng: 28.8649147 },{ lat: 45.388758, lng: 28.8511818 },{ lat: 45.3926157, lng: 28.8377922 },{ lat: 45.3940622, lng: 28.8185661 },{ lat: 45.3904458, lng: 28.8017433 },{ lat: 45.3863468, lng: 28.7883537 },{ lat: 45.381283, lng: 28.7804573 },{ lat: 45.3742894, lng:  28.7756508 },{ lat: 45.3665712, lng:  28.7725609 },{ lat: 45.3564396, lng: 28.7701576 },{ lat: 45.3511318, lng: 28.7739342 },{ lat: 45.345341, lng: 28.7814873 },{ lat: 45.3395495, lng:  28.7917869 },{ lat: 45.3383429, lng: 28.8010567 },{ lat: 45.3395495, lng:  28.8106697 },{ lat: 45.332068, lng: 28.8298958 },{ lat: 45.328689, lng: 28.8415687 },{ lat: 45.3262752, lng: 28.854615 },{ lat: 45.3335161, lng: 28.8666313 },{ lat: 45.3434106, lng:  28.874871 },{ lat: 45.3516144, lng: 28.8762443 },{ lat: 45.3566809, lng: 28.8752144 },];
 const vernenskayCoords = [{ lat: 46.4374252, lng: 30.7302856 },{ lat: 46.4379284, lng: 30.7253016 },{ lat: 46.4288483, lng: 30.7120837 },{ lat: 46.4229616, lng: 30.7034577 },{ lat: 46.4233758, lng: 30.7066334 },{ lat: 46.416453, lng: 30.7221688 },{ lat: 46.4189086, lng: 30.7253016 },{ lat: 46.4180506, lng: 30.7265461 },{ lat: 46.4206584, lng: 30.7441728 },{ lat: 46.4240561, lng:  30.7412877 },{ lat: 46.4276059, lng: 30.7383049 },{ lat: 46.4330833, lng:  30.7335344 },{ lat: 46.4369447, lng: 30.7301865 },{ lat: 46.4374252, lng:  30.7302856 },];
 const filatovaCoords = [{ lat: 46.423109, lng: 30.7038284 },{ lat: 46.4379284, lng:  30.7253016 },{ lat: 46.4374252, lng: 30.7302856 },{ lat: 46.4408628, lng: 30.7307414 },{ lat: 46.4425669, lng: 30.7309479 },{ lat: 46.4443005, lng: 30.7310686 },{ lat: 46.4477493, lng: 30.7317862 },{ lat: 46.4512573, lng: 30.7322464 },{ lat: 46.4516121, lng: 30.7284699 },{ lat: 46.4526541, lng: 30.7283973 },{ lat: 46.4538959, lng: 30.7287406 },{ lat: 46.4551377, lng: 30.7289122 },{ lat: 46.4552559, lng: 30.7248353 },{ lat: 46.4542507, lng: 30.7093 },{ lat: 46.4544872, lng: 30.6917906 },{ lat: 46.4577393, lng: 30.6851816 },{ lat: 46.4607548, lng: 30.6841517 },{ lat: 46.4662531, lng: 30.6747961 },{ lat: 46.4697409, lng:  30.6649256 },{ lat: 46.4715143, lng: 30.6657839 },{ lat: 46.4752678, lng: 30.6436826 },{ lat: 46.4706041, lng:  30.6513732 },{ lat: 46.4613291, lng: 30.6531424 },{ lat: 46.4507027, lng: 30.6538536 },{ lat: 46.4506435, lng: 30.6552697 },{ lat: 46.4511166, lng: 30.6727791 },{ lat: 46.4441383, lng:  30.6756973 },{ lat: 46.4415359, lng: 30.6765557 },{ lat: 46.4411811, lng:  30.6878853 },{ lat: 46.4411219, lng:  30.6934214 },{ lat: 46.4347338, lng: 30.6966829 },{ lat: 46.4303563, lng: 30.690589 },{ lat: 46.423109, lng: 30.7038284 },];
 const academichnaCoords = [{ lat: 46.4612462, lng: 30.7638846 },{ lat: 46.4614593, lng: 30.761627 },{ lat: 46.4617083, lng: 30.7556528 },{ lat: 46.4620288, lng:  30.7500563 },{ lat: 46.4621378, lng: 30.7468456 },{ lat: 46.462799, lng: 30.7384934 },{ lat: 46.4599979, lng: 30.7379032 },{ lat: 46.4603859, lng: 30.7310958 },{ lat: 46.4594574, lng:  30.7301207 },{ lat: 46.458529, lng: 30.7293603 },{ lat: 46.4561398, lng: 30.729127 },{ lat: 46.4541515, lng: 30.7287086 },{ lat: 46.4516121, lng: 30.7284699 },{ lat: 46.4512573, lng: 30.7322464 },{ lat: 46.4369447, lng: 30.7301865 },{ lat: 46.4290622, lng: 30.7370397 },{ lat: 46.4315137, lng: 30.7412749 },{ lat: 46.4345869, lng: 30.7474737 },{ lat: 46.4362913, lng: 30.7616695 },{ lat: 46.4361171, lng: 30.7640732 },{ lat: 46.4361167, lng: 30.7673406 },{ lat: 46.4412034, lng: 30.7719004 },{ lat: 46.4469994, lng: 30.7715571 },{ lat: 46.4512573, lng: 30.7694971 },{ lat: 46.4556331, lng: 30.7679522 },{ lat: 46.4596539, lng: 30.7650339 },{ lat: 46.4612462, lng: 30.7638846 },];
 const crumskayCoords = [{ lat: 46.6064447, lng: 30.7746494 },{ lat: 46.5816401, lng: 30.7607897 },{ lat: 46.5767826, lng: 30.7596513 },{ lat: 46.5720061, lng: 30.7578692 },{ lat: 46.5719462, lng: 30.759478 },{ lat: 46.572751, lng: 30.7592855 },{ lat: 46.573832, lng: 30.7598759 },{ lat: 46.5814028, lng: 30.7660458 },{ lat: 46.5838364, lng: 30.76801 },{ lat: 46.5845151, lng: 30.7689014 },{ lat: 46.5851346, lng: 30.7707155 },{ lat: 46.5853926, lng: 30.775249 },{ lat: 46.585079, lng: 30.7776873 },{ lat: 46.5769919, lng: 30.7966463 },{ lat: 46.5709737, lng: 30.8153131 },{ lat: 46.5638935, lng: 30.8759615 },{ lat: 46.5660097, lng: 30.8829387 },{ lat: 46.5708483, lng: 30.8746989 },{ lat: 46.5757297, lng: 30.8075605 },{ lat: 46.5818653, lng: 30.8119379 },{ lat: 46.5850509, lng: 30.8026682 },{ lat: 46.5908315, lng: 30.8188043 },{ lat: 46.595432, lng: 30.8159719 },{ lat: 46.5999142, lng: 30.8103929 },{ lat: 46.6064447, lng: 30.7746494 },];
 const korolevaCoords = [{ lat: 46.419623, lng: 30.7150761},{ lat: 46.4135864, lng: 30.6949696},{ lat: 46.4058041, lng: 30.7103118},{ lat: 46.39006, lng: 30.7064931},{ lat: 46.3941166, lng: 30.752839},{ lat: 46.4044021, lng: 30.7583391},{ lat: 46.4201555, lng: 30.7447736},{ lat: 46.4180506, lng: 30.7265461},{ lat: 46.4189086, lng: 30.7253016},{ lat: 46.416453, lng: 30.7221688},{ lat: 46.419623, lng: 30.7150761},];
 const probragenskayCoords = [{ lat: 46.4767943, lng:  30.7384075 },{ lat: 46.4835235, lng: 30.7388039 },{ lat: 46.4871582, lng: 30.7391579 },{ lat: 46.4895368, lng: 30.7375326 },{ lat: 46.4914648, lng: 30.7373208 },{ lat: 46.4925359, lng: 30.7379244 },{ lat: 46.4967607, lng: 30.7288692 },{ lat: 46.4981489, lng: 30.724653 },{ lat: 46.4986066, lng: 30.7234031 },{ lat: 46.4990644, lng: 30.7219815 },{ lat: 46.5056517, lng: 30.7095251 },{ lat: 46.5129623, lng: 30.7090471 },{ lat: 46.5164916, lng: 30.7109736 },{ lat: 46.5285689, lng: 30.7143209 },{ lat: 46.522039, lng: 30.6632658 },{ lat: 46.5242987, lng: 30.6544534 },{ lat: 46.5174479, lng: 30.6204644 },{ lat: 46.5029224, lng: 30.6279529 },{ lat: 46.4959506, lng: 30.6316007 },{ lat: 46.4934984, lng: 30.6328025 },{ lat: 46.491903, lng: 30.6384243 },{ lat: 46.491608, lng:  30.6433137 },{ lat: 46.4905278, lng: 30.6598806 },{ lat: 46.4856001, lng: 30.6628313 },{ lat: 46.4830734, lng: 30.670793 },{ lat: 46.4810941, lng: 30.6801928 },{ lat: 46.4755307, lng: 30.6948803 },{ lat: 46.4773557, lng: 30.7079381 },{ lat: 46.4773648, lng: 30.7239978 },{ lat: 46.477341, lng: 30.73182 },{ lat: 46.4767943, lng:  30.7384075 },];
 const ekaterininskayCoords = [{ lat: 46.4934984, lng: 30.6328025 },{ lat: 46.4756152, lng: 30.6420937 },{ lat: 46.4733937, lng: 30.6542407 },{ lat: 46.4724664, lng: 30.6601471 },{ lat: 46.4715143, lng: 30.6657839 },{ lat: 46.4697409, lng: 30.6649256 },{ lat: 46.4662531, lng: 30.6747961 },{ lat: 46.4607548, lng: 30.6841517 },{ lat: 46.4590391, lng: 30.6845982 },{ lat: 46.4577393, lng: 30.6851816 },{ lat: 46.4544872, lng: 30.6917906 },{ lat: 46.4542507, lng: 30.7093 },{ lat: 46.4552559, lng: 30.7248353 },{ lat: 46.4551377, lng: 30.7289122 },{ lat: 46.4561398, lng: 30.729127 },{ lat: 46.458529, lng: 30.7293603 },{ lat: 46.4603859, lng: 30.7310958 },{ lat: 46.4599979, lng:  30.7379032 },{ lat: 46.4649568, lng: 30.7390084 },{ lat: 46.4683412, lng: 30.7392659 },{ lat: 46.4687913, lng: 30.737537 },{ lat: 46.4701133, lng:  30.7376535 },{ lat: 46.4720479, lng: 30.7380582 },{ lat: 46.4746152, lng: 30.7382892 },{ lat: 46.4767943, lng: 30.7384075 },{ lat: 46.477341, lng: 30.73182 },{ lat: 46.4773557, lng:  30.7079381 },{ lat: 46.4755307, lng: 30.6948803 },{ lat: 46.4810941, lng: 30.6801928 },{ lat: 46.4830734, lng: 30.670793 },{ lat: 46.4856001, lng:  30.6628313 },{ lat: 46.4905278, lng:  30.6598806 },{ lat: 46.491903, lng: 30.6384243 },{ lat: 46.4934984, lng: 30.6328025 },];
 const centralnayCoords = [{ lat: 46.9556998, lng: 31.9688887 },{ lat: 46.9495999, lng: 32.0128358 },{ lat: 46.9336606, lng: 32.025882 },{ lat: 46.9458499, lng: 32.047168 },{ lat: 46.9706887, lng: 32.0574677 },{ lat: 46.9870854, lng: 32.0403016 },{ lat: 46.9987942, lng: 32.0087159 },{ lat: 46.9866237, lng: 31.9786734 },{ lat: 46.9811196, lng: 31.9656271 },{ lat: 46.9504269, lng: 31.9304365 },{ lat: 46.9432784, lng: 31.9359297},{ lat: 46.9556998, lng: 31.9688887 },];
 const posmitnogoCoords = [{ lat: 46.4345869, lng: 30.7474737 },{ lat: 46.4315137, lng: 30.7412749 },{ lat: 46.4290622, lng: 30.7370397 },{ lat: 46.4044021, lng: 30.7583391 },{ lat: 46.4236911, lng: 30.7690613 },{ lat: 46.4363518, lng: 30.7723209 },{ lat: 46.4361167, lng: 30.7673406 },{ lat: 46.4361171, lng: 30.7640732 },{ lat: 46.4362913, lng: 30.7616695 },{ lat: 46.4345869, lng: 30.7474737 },];
  // Construct the polygon.
   const canatnayaPolygon = new google.maps.Polygon({paths: canatnayaCoords,strokeColor: "#5cde1d",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#5cde1d",fillOpacity: 0.35,});
   const vilyamPolygon = new google.maps.Polygon({paths: vilyamCoords,strokeColor: "#000000",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#000000",fillOpacity: 0.35,});
   const nebesnaPolygon = new google.maps.Polygon({paths: nebesnaCoords,strokeColor: "#14ad92",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#14ad92",fillOpacity: 0.35,});
   const mikolaivPolygon = new google.maps.Polygon({paths: mikolaivCoords,strokeColor: "#ffe306",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#ffe306",fillOpacity: 0.35,});
   const torgovaPolygon = new google.maps.Polygon({paths: torgovaCoords,strokeColor: "#5d1010",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#5d1010",fillOpacity: 0.35,});
   const chernomorscPolygon = new google.maps.Polygon({paths: chernomorscCoords,strokeColor: "#657511",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#657511",fillOpacity: 0.35,});
   const moscovscayaPolygon = new google.maps.Polygon({paths: moscovscayaCoords,strokeColor: "#0f3763",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#0f3763",fillOpacity: 0.35,});
   const miraPolygon = new google.maps.Polygon({paths: miraCoords,strokeColor: "#0ce7e8",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#0ce7e8",fillOpacity: 0.35,});
   const vernenskayPolygon = new google.maps.Polygon({paths: vernenskayCoords,strokeColor: "#d86e11",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#d86e11",fillOpacity: 0.35,});
   const filatovaPolygon = new google.maps.Polygon({paths: filatovaCoords,strokeColor: "#065818",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#0658",fillOpacity: 0.35,});
   const academichnaPolygon = new google.maps.Polygon({paths: academichnaCoords,strokeColor: "#FF0000",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#FF0000",fillOpacity: 0.35,});
   const crumskayPolygon = new google.maps.Polygon({paths: crumskayCoords,strokeColor: "#47109c",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#47109c",fillOpacity: 0.35,});
   const korolevaPolygon = new google.maps.Polygon({paths: korolevaCoords,strokeColor: "#10339c",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#10339c",fillOpacity: 0.35,});
   const probragenskayPolygon = new google.maps.Polygon({paths: probragenskayCoords,strokeColor: "#1a92ff",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#1a92ff",fillOpacity: 0.35,});
   const ekaterininskayPolygon = new google.maps.Polygon({paths: ekaterininskayCoords,strokeColor: "#ff1a81",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#ff1a81",fillOpacity: 0.35,});
   const centralnayPolygon = new google.maps.Polygon({paths: centralnayCoords,strokeColor: "#0f2863",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#0f2863",fillOpacity: 0.35,});
   const posmitnogoPolygon = new google.maps.Polygon({paths: posmitnogoCoords,strokeColor: "#0000008c",strokeOpacity: 0.8,strokeWeight: 2,fillColor: "#0000008c",fillOpacity: 0.35,});
   //Setmap
   canatnayaPolygon.setMap(map);
   vilyamPolygon.setMap(map);
   nebesnaPolygon.setMap(map);
   mikolaivPolygon.setMap(map);
   torgovaPolygon.setMap(map);
   chernomorscPolygon.setMap(map);
   moscovscayaPolygon.setMap(map);
   miraPolygon.setMap(map);
   vernenskayPolygon.setMap(map);
   filatovaPolygon.setMap(map);
   academichnaPolygon.setMap(map);
   crumskayPolygon.setMap(map);
   korolevaPolygon.setMap(map);
   probragenskayPolygon.setMap(map);
   ekaterininskayPolygon.setMap(map);
   centralnayPolygon.setMap(map);
   posmitnogoPolygon.setMap(map);
// Create the search box and link it to the UI element.
        const input = document.getElementById("pac-input");
        const searchBox = new google.maps.places.SearchBox(input);
        // Bias the SearchBox results towards current map's viewport.
        map.addListener("bounds_changed", () => {
          searchBox.setBounds(map.getBounds());
        });
        let markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        var markerLatLng;
        var maLat;
        searchBox.addListener("places_changed", () => {
          const places = searchBox.getPlaces();
          if (places.length == 0) {
             return;
          }
          // Clear out the old markers.
          markers.forEach((marker) => {
            marker.setMap(null);
          });
          markers = [];
          // For each place, get the icon, name and location.
          const bounds = new google.maps.LatLngBounds();
          places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
              console.log("Returned place contains no geometry");
              return;
            }
                  maLat = place.geometry.location.lat();
                  maLng = place.geometry.location.lng();
                  markerLatLng = { lat: place.geometry.location.lat(), lng: place.geometry.location.lng() };
            const icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25),
            };
            // Create a marker for each place.
            markers.push(
              new google.maps.Marker({
                map,
                icon,
                title: place.name,
                position: place.geometry.location,
                
              })
            );
            // console.log("marker "+markers.length+" name="+place.name+" coordinates="+place.geometry.location.toUrlValue(6)+", latitude="+place.geometry.location.lat()+", longitude="+place.geometry.location.lng());      
            // console.log(markerLatLng);
            // console.log(place.geometry.location.lat(),place.geometry.location.lng());
            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        }); //addlistener
  let directionsService = new google.maps.DirectionsService();
  let directionsRenderer = new google.maps.DirectionsRenderer();
  directionsRenderer.setMap(map); // Existing map object displays directions
  // Create route from existing points used for markers
  document.getElementById("addRoute").addEventListener("click", function() {
 console.log(markerLatLng);
    //Shop location
       shopLatLng =  document.getElementById("comboA").value;
      var jsonStr = shopLatLng.replace(/(\w+:)|(\w+ :)/g, function(matchedStr) {
      return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
    });
     shopLatLng = JSON.parse(jsonStr); //converts to a regular object
      console.log(shopLatLng.lat);

      const route = {
      origin: shopLatLng,
      destination: markerLatLng,
      travelMode: 'DRIVING'
      }
      var R = 3958.8; // Radius of the Earth in miles
      var rlat1 = shopLatLng.lat * (Math.PI/180); // Convert degrees to radians
      var rlat2 = maLat * (Math.PI/180); // Convert degrees to radians
      var difflat = rlat2-rlat1; // Radian difference (latitudes)
      var difflon = (maLng - shopLatLng.lng) * (Math.PI/180); // Radian difference (longitudes)
  
       var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));

      line = new google.maps.Polyline(
       {path: [shopLatLng, markerLatLng],
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
      });
      console.log(shopLatLng.lat,shopLatLng.lng);
       distance = d;

  directionsService.route(route,
    function(response, status) { // anonymous function to capture directions
      if (status !== 'OK') {
        window.alert('Directions request failed due to ' + status);
        return;
      } else {
        directionsRenderer.setDirections(response); // Add route to the map
        var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
        if (!directionsData) {
          window.alert('Directions request failed');
          return;
        }
        else {
             // var numEl = parseInt(directionsData.distance.text.match(/\d+/) * 1);
              numEl = directionsData.distance.text;
           document.getElementById("km").innerHTML= 0 + " км";
           document.getElementById("km").innerHTML= numEl;
        }
      }
    });
  });
document.getElementById('addLine').addEventListener('click', addLine);
function addLine(){
  line.setMap(map);
     console.log("AddLine");
     let km = distance * 1.609344;
    document.getElementById("line_km").innerHTML= km.toFixed(2) + " км"; 
}
document.getElementById('removeLine').addEventListener('click', removeLine);
function removeLine(){
  line.setMap(null);
    document.getElementById("line_km").innerHTML= 0 + " км";
     console.log("RemoveLine");
}
document.getElementById('addDelivery').addEventListener('click', addDelivery);
function addDelivery(){
    let price = document.getElementById("input_price").value;
    numEl = numEl.replace(/[^0-9$.,]/g, '');
    numEl = numEl.replace(/,/g, '.')
    var num = parseFloat(numEl);
    var priceInt = parseInt(price)
    console.log("Цена "+ priceInt);
    console.log("Км "+ num);

//Условия доставки
      switch (true) {
        case (num <= 4):
          switch(true){
            case(priceInt >= 150):
            document.getElementById("line_delivery").innerHTML="бесплатно";
            console.log("Бесплатно меньше 4 больше 150");
            break;
            case(priceInt < 150):
            document.getElementById("line_delivery").innerHTML="Бесплатная доставка от 150 грн или 30 грн";
            console.log("30 грн меньше 4 меньше 150");
          }
          break;
        case (num > 4 && num <= 6):
          switch(true){
            case(priceInt >= 300):
            document.getElementById("line_delivery").innerHTML="бесплатно";
            console.log("Бесплатно 4-6 больше 300");
            break;
            case(priceInt > 0 && priceInt < 300):
            document.getElementById("line_delivery").innerHTML="Бесплатная доставка от 300 грн или 40 грн";
            console.log("40 грн  4-6 меньше 300");
          }
          break;
        case (num > 6 && num <= 8):
          switch(true){
            case(priceInt >= 399):
            document.getElementById("line_delivery").innerHTML="бесплатно";
            console.log("Бесплатно 6-8 больше 399");
            break;
            case(priceInt > 0 && priceInt < 399):
            document.getElementById("line_delivery").innerHTML="Бесплатная доставка от 399 грн или 50 грн";
            console.log("50 грн  6-8 меньше 399");
          }
          break;
        case (num > 8 && num <= 10):
          switch(true){
            case(priceInt >= 450):
            document.getElementById("line_delivery").innerHTML="бесплатно";
            console.log("Бесплатно 8-10 больше 450");
            break;
            case(priceInt > 0 && priceInt < 450):
            document.getElementById("line_delivery").innerHTML="Бесплатная доставка от 450 грн или 50 грн";
            console.log("60 грн  8-10 меньше 450");
          }
          break;  
        case (num > 10 && num <= 18):
          switch(true){
            case(priceInt >= 499):
            document.getElementById("line_delivery").innerHTML="бесплатно";
            console.log("100 грн");
            break;
            case(priceInt > 0 && priceInt < 499):
            document.getElementById("line_delivery").innerHTML="Бесплатная доставка от 499 грн или 100 грн";
            console.log("Минимальная сумма заказа 499 грн");
          }
          break;
        case (num > 18 && num <= 200):
          switch(true){
            case(priceInt >= 1000):
            document.getElementById("line_delivery").innerHTML="100 грн";
            console.log("100 грн");
            break;
            case(priceInt > 0 && priceInt < 1000):
            document.getElementById("line_delivery").innerHTML="Мин. сумма заказа 1000 грн + 100 грн";
            console.log("Минимальная сумма заказа 1000 грн");
          }
          break;    
        default:
        document.getElementById("line_delivery").innerHTML="Доставка не возможна";
        console.log("Доставка не возможна");
    }
  }
}
//Определение местоположения пользователя 
//  button.addEventListener("click", function() {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     //User location
//       let mylat = position.coords.latitude;
//       let mylong = position.coords.longitude;
//       var myLatLng = { lat: mylat, lng: mylong };
//     //Shop location
//       let shopLatLng =  document.getElementById("comboA").value;
//       var jsonStr = shopLatLng.replace(/(\w+:)|(\w+ :)/g, function(matchedStr) {
//       return '"' + matchedStr.substring(0, matchedStr.length - 1) + '":';
//     });

//      shopLatLng = JSON.parse(jsonStr); //converts to a regular object

//       console.log(typeof shopLatLng); // expected output: John
  
//       const route = {
//       origin: myLatLng,
//       destination: shopLatLng,
//       travelMode: 'DRIVING'
//   }





 


