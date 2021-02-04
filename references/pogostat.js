cpmultiple_b = [0.09399999678,0.1351374321,0.1663978696,0.1926509132,0.2157324702,0.2365726514,0.2557200491,0.2735303721,0.2902498841,0.3060573814,0.3210875988,0.335445032,0.3492126763,0.3624577366,0.3752355874,0.3875924077,0.3995672762,0.4111935532,0.4225000143,0.4329264205,0.4431075454,0.4530599482,0.4627983868,0.4723360853,0.481684953,0.4908558072,0.499858439,0.508701749,0.5173939466,0.5259425161,0.5343543291,0.5426357538,0.5507926941,0.5588305845,0.5667545199,0.5745691281,0.5822789073,0.5898879079,0.5974000096,0.6048236487,0.6121572852,0.619404108,0.6265671253,0.6336491787,0.6406529546,0.6475809714,0.6544356346,0.6612192658,0.6679340005,0.6745818856,0.6811649203,0.6876849013,0.6941436529,0.700542901,0.7068842053,0.7131690749,0.7193990946,0.7255755869,0.7317000031,0.7347410386,0.7377694845,0.7407855797,0.7437894344,0.7467811972,0.749761045,0.7527290997,0.7556855083,0.7586303702,0.7615638375,0.7644860496,0.7673971653,0.7702972937,0.7731865048,0.7760649471,0.7789327502,0.7817900508,0.7846369743,0.7874736085,0.7903000116,0.792803968,0.7953000069,0.7978038984,0.8003000021,0.8028038719,0.8052999973,0.8078038508,0.8102999926,0.8128038352,0.8152999878,0.8178038066,0.820299983,0.8228037786,0.8252999783,0.8278037509,0.8302999735,0.8328037534,0.8353000283,0.8378037559,0.8403000236,0.842803729,0.8453000188,0.8478037024,0.850300014,0.852803676,0.8553000093,0.8578036499,0.8603000045,0.862803624,0.8652999997]
cpmultiple_b2 = cpmultiple_b.map(x => Math.pow(x, 2));
cpmultiple_b4 = cpmultiple_b2.map(x => Math.pow(x, 2));

function binarySearch(values, values) {
  let min = 0;
  let max = values.length - 1;
  while (min <= max) {
    let middle = (max + min) >> 1;
    if (values[middle] < values) {
      min = middle + 1;
    } else if (values[middle] > values) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return min - 1;
}

// cp(
//   Math.floor(poke['at']) + products[i][2],
//   Math.floor(poke['df']) + products[i][3],
//   Math.floor(poke['st']) + products[i][4],
//   cpm2[products[i][1]],
// );
function cp(at, df, st, multiple2) {
  return Math.floor((at * Math.sqrt(df * st) * multiple2) / 10);
}


function lvlCap(at, df, st, targetCP, cpm4, max_lvl) {
  cap = binarySearch(cpm4, (targetCP + 1) * (targetCP + 1) * 100 / (at * at * df * st))
  return cap > max_lvl ? max_lvl : cap;
}

function arrComp(a, b) {
  if (a[0] < b[0]) return 1;
  if (a[0] > b[0]) return -1;
  return 0;
}

pvpivcalc(
  parseInt($('#cp_cap').val()), // CP limit
  pokeByName($('#poke').val()), // { id, name, at, df, st }
  parseInt($('#min_iv').val()),
  parseInt($('#att_iv').val()),
  parseInt($('#def_iv').val()),
  parseInt($('#sta_iv').val()),
  parseInt($('#max_lvl').val()),
  $('#stat_prod').prop('checked'),
  $('#stat_show').prop('checked'),
)
function pvpivcalc(cp_cap, poke, iv_min, s_at, s_df, s_st, max_lvl, showProduct, showStats) {
  var cpm4, cpm2;
  cpm4 = cpmultiple_b4;
  cpm2 = cpmultiple_b2;
  cpm = cpmultiple_b;
  iv_combos = []
  for (at = iv_min; at <= 15; at++)
    for (df = iv_min; df <= 15; df++)
      for (st = iv_min; st <= 15; st++)
        iv_combos.push({ "at": at, "df": df, "st": st })
  products = []
  for (i = 0; i < iv_combos.length; i++) {
    at = Math.floor(poke['at']) + iv_combos[i]['at'];
    df = Math.floor(poke['df']) + iv_combos[i]['df'];
    st = Math.floor(poke['st']) + iv_combos[i]['st'];
    lvl = lvlCap(at, df, st, cp_cap, cpm4, max_lvl);
    stat_product = cpm2[lvl] * at * df * Math.floor(cpm[lvl] * st);
    products.push([
      stat_product,
      lvl,
      iv_combos[i]['at'],
      iv_combos[i]['df'],
      iv_combos[i]['st'],
      at,
      df,
      st
    ]);
  }
  products = products.sort(arrComp);
  console.log(products)

  rank = null
  for (i = 0; i < products.length; i++) {
    if (products[i][2] == s_at && products[i][3] == s_df && products[i][4] == s_st)
      rank = i + 1
  }

  at = Math.floor(poke['at']) + s_at;
  df = Math.floor(poke['df']) + s_df;
  st = Math.floor(poke['st']) + s_st;
  lvl = lvlCap(at, df, st, cp_cap, cpm4, max_lvl);
  stat_product = cpm2[lvl] * at * df * Math.floor(cpm[lvl] * st);

  if (rank == null) {
    for (i = 0; i < products.length; i++) {
      if (products[i][0] > stat_product)
        rank = i
    }
  }

  p_scale = (stat_product - products[products.length - 1][0]) / (products[0][0] - products[products.length - 1][0]);

  ret = '<div class="row"><div class="col-2">rank</div><div class="col-1">att</div><div class="col-1">def</div><div class="col-1">hp</div><div class="col-2">lvl</div><div class="col-2">cp</div><div class="col-2">%perfect' + (showProduct ? ' (product)' : '') + (showStats ? ' (at, df, st)' : '') + '</div></div>';
  ret += '<div class="row" style="border-top: 1px black solid; background-color: hsl(' + Math.round(90 * p_scale) + ',100%,50%)"><div class="col-2">' + rank + '</div><div class="col-1">' + s_at + '</div><div class="col-1">' + s_df + '</div><div class="col-1">' + s_st + '</div><div class="col-2">' + (lvl / 2 + 1) + '</div><div class="col-2">' + cp(at, df, st, cpm2[lvl]) + '</div><div class="col-2">' + Math.round(stat_product / products[0][0] * 100000) / 1000 + '%' + (showProduct ? ' (' + Math.round(stat_product) + ')' : '') + (showStats ? ' (' + Math.round(cpm[lvl] * at * 100) / 100 + ', ' + Math.round(cpm[lvl] * df * 100) / 100 + ', ' + Math.floor(cpm[lvl] * st) + ')' : '') + '</div></div>';
  for (i = 0; i < 25; i++) {
    ret += '<div class="row" style="border-top: 1px black solid;"><div class="col-2">' + (i + 1) + '</div><div class="col-1">' + products[i][2] + '</div><div class="col-1">' + products[i][3] + '</div><div class="col-1">' + products[i][4] + '</div><div class="col-2">' + (products[i][1] / 2 + 1) + '</div><div class="col-2">' + cp(Math.floor(poke['at']) + products[i][2], Math.floor(poke['df']) + products[i][3], Math.floor(poke['st']) + products[i][4], cpm2[products[i][1]]) + '</div><div class="col-2">' + Math.round(products[i][0] / products[0][0] * 100000) / 1000 + '%' + (showProduct ? ' (' + Math.round(products[i][0]) + ')' : '') + (showStats ? ' (' + Math.round(cpm[products[i][1]] * products[i][5] * 100) / 100 + ', ' + Math.round(cpm[products[i][1]] * products[i][6] * 100) / 100 + ', ' + Math.floor(cpm[products[i][1]] * products[i][7]) + ')' : '') + '</div></div>';
  }

  return ret;
}