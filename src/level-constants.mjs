const levelContants = [
  0.0939999968, // 1
  0.1351374321, // 1.5
  0.1663978696, // 2
  0.1926509132, // 2.5
  0.2157324702, // 3
  0.2365726514, // 3.5
  0.2557200491, // 4
  0.2735303721, // 4.5
  0.2902498841, // 5
  0.3060573814, // 5.5
  0.3210875988, // 6
  0.3354450320, // 6.5
  0.3492126763, // 7
  0.3624577366, // 7.5
  0.3752355874, // 8
  0.3875924077, // 8.5
  0.3995672762, // 9
  0.4111935532, // 9.5
  0.4225000143, // 10
  0.4329264205, // 10.5
  0.4431075454, // 11
  0.4530599482, // 11.5
  0.4627983868, // 12
  0.4723360853, // 12.5
  0.4816849530, // 13
  0.4908558072, // 13.5
  0.4998584390, // 14
  0.5087017490, // 14.5
  0.5173939466, // 15
  0.5259425161, // 15.5
  0.5343543291, // 16
  0.5426357538, // 16.5
  0.5507926941, // 17
  0.5588305845, // 17.5
  0.5667545199, // 18
  0.5745691281, // 18.5
  0.5822789073, // 19
  0.5898879079, // 19.5
  0.5974000096, // 20
  0.6048236487, // 20.5
  0.6121572852, // 21
  0.6194041080, // 21.5
  0.6265671253, // 22
  0.6336491787, // 22.5
  0.6406529546, // 23
  0.6475809714, // 23.5
  0.6544356346, // 24
  0.6612192658, // 24.5
  0.6679340005, // 25
  0.6745818856, // 25.5
  0.6811649203, // 26
  0.6876849013, // 26.5
  0.6941436529, // 27
  0.7005429010, // 27.5
  0.7068842053, // 28
  0.7131690749, // 28.5
  0.7193990946, // 29
  0.7255755869, // 29.5
  0.7317000031, // 30
  0.7347410386, // 30.5
  0.7377694845, // 31
  0.7407855797, // 31.5
  0.7437894344, // 32
  0.7467811972, // 32.5
  0.7497610450, // 33
  0.7527290997, // 33.5
  0.7556855083, // 34
  0.7586303702, // 34.5
  0.7615638375, // 35
  0.7644860496, // 35.5
  0.7673971653, // 36
  0.7702972937, // 36.5
  0.7731865048, // 37
  0.7760649471, // 37.5
  0.7789327502, // 38
  0.7817900508, // 38.5
  0.7846369743, // 39
  0.7874736085, // 39.5
  0.790300011634827, // 40
  0.792803950958808, // 40.5
  0.795300006866455, // 41
  0.797803921486970, // 41.5
  0.800300002098084, // 42
  0.802803892322847, // 42.5
  0.805299997329712, // 43
  0.807803863460723, // 43.5
  0.810299992561340, // 44
  0.812803834895027, // 44.5
  0.815299987792969, // 45
  0.817803806620319, // 45.5
  0.820299983024597, // 46
  0.822803778631297, // 46.5
  0.825299978256226, // 47
  0.827803750922783, // 47.5
  0.830299973487854, // 48
  0.832803753381377, // 48.5
  0.835300028324127, // 49
  0.837803755931570, // 49.5
  0.840300023555756, // 50
  0.842803729034748, // 50.5
  0.845300018787384, // 51
  0.847803702398935, // 51.5
  0.850300014019012, // 52
  0.852803676019539, // 52.5
  0.855300009250641, // 53
  0.857803649892077, // 53.5
  0.860300004482269, // 54
  0.862803624012169, // 54.5
  0.865299999713897, // 55
];

export function levelToIndex({ level }) {
  return (level - 1) * 2;
}
export function indexToLevel({ index }) {
  return index / 2 + 1;
}
export function getConstant({ level }) {
  const index = levelToIndex({ level });
  if (levelContants[index]) {
    return levelContants[index];
  }
  throw new Error('No constant for provided level.');
}

export default levelContants;
