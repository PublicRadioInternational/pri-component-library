/**
 * @file PriLogo.component.js
 * PriLogo SVG component.
 */

import React from 'react';
import PropTypes from 'prop-types';

const PriLogo = props => {
  const { title, height, width, version, viewBox, fillColor } = props;
  return (
    <svg width={width} height={height} viewBox={viewBox} version={version}>
      <title>{title}</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Header---desktop"
          transform="translate(-55.000000, -12.000000)"
          fill={fillColor}
        >
          <g id="logo">
            <g transform="translate(55.000000, 12.000000)">
              <g transform="translate(0.000000, -0.000000)">
                <path
                  d="M26.4676945,11.3527832 L26.4511955,11.3878849 C25.9892222,12.3723045 25.3554494,13.3758466 24.5676855,14.3712682 L24.4100279,14.5706145 L24.3618402,14.3209732 C23.8561314,11.6990851 22.9094005,9.9523822 22.5259941,9.32317098 L22.4814729,9.25034803 L22.5375173,9.18590758 C23.2296915,8.39140398 23.8377992,7.56729969 24.3453412,6.73638461 L24.4401452,6.58104646 L24.5417584,6.73219337 C24.8683347,7.21864018 25.1372953,7.67181895 25.363568,8.117925 C25.8590631,9.10941729 26.2280655,10.1847346 26.4598378,11.3148 L26.4676945,11.3527832 Z M26.696586,13.106035 L26.7086329,13.4903201 C26.7565587,15.014101 26.5420712,16.5082812 26.0711937,17.9314721 C25.7265469,18.964353 25.2341945,19.974182 24.6074927,20.9329301 L24.2995105,21.4041837 L24.3951002,20.8493671 C24.6766315,19.2126844 24.7431515,17.5796691 24.5928269,15.9951151 L24.587851,15.9442962 L24.6218966,15.9063131 C25.3344982,15.1136431 25.9640808,14.2811563 26.4930978,13.4321665 L26.696586,13.106035 Z M22.7996688,23.1131653 L22.7907645,23.1419802 L22.7687658,23.1631984 C22.4419276,23.4751845 22.0933525,23.7725012 21.7033989,24.0719135 L21.5478365,24.1913641 L21.5171954,23.9977808 C21.2736381,22.4640457 20.9475855,20.9620069 20.5482039,19.533315 L20.5256814,19.4531573 L20.5942965,19.4060058 C21.6117376,18.7060672 22.5629206,17.9422122 23.4213947,17.1359207 L23.6102171,16.9585785 L23.6178119,17.2173881 C23.6754276,19.176273 23.4001816,21.1600434 22.7996688,23.1131653 Z M20.5272527,24.8645834 C20.2643156,25.0235889 19.9565953,25.2066941 19.6344711,25.3659616 C19.3123469,25.5296822 18.9841992,25.6658978 18.7058106,25.7774898 L18.6345766,25.8060427 L18.5803654,25.7520804 C17.449788,24.6293496 16.4095625,23.4639205 15.487973,22.2877513 L15.3915977,22.1648953 L15.5366845,22.1075276 C16.2102646,21.8405974 16.8882967,21.5375178 17.551925,21.2066711 C18.1314867,20.9161651 18.7458797,20.5716969 19.4854559,20.1229713 L19.6182339,20.0425517 L19.6585649,20.1923888 C20.0537563,21.6608976 20.3643574,23.1938469 20.5822495,24.7488002 L20.592987,24.8250285 L20.5272527,24.8645834 Z M17.3798635,26.2416706 C16.8862016,26.3799818 16.4336564,26.4837152 15.9968245,26.5588958 L15.9664453,26.5641348 L15.9376375,26.5539186 C14.0158916,25.8691734 12.2635883,24.9038764 10.7297009,23.6844849 L10.5264746,23.5231219 L10.7820788,23.4783279 C11.9283696,23.2781958 13.11342,22.9717107 14.3044939,22.5677791 L14.3835846,22.5410599 L14.4343912,22.607334 C15.3331963,23.7766924 16.3417331,24.9342629 17.4317176,26.0480873 L17.5697335,26.1887561 L17.3798635,26.2416706 Z M13.1094917,26.6982548 C11.9705338,26.6296231 10.8666692,26.4203226 9.82880068,26.0766402 C8.41119227,25.6027671 7.09074491,24.8852777 5.90333746,23.9440804 L5.6026882,23.7054412 L5.98530891,23.7363517 C6.97656104,23.8165093 8.02280999,23.8062931 9.07796319,23.7057031 L9.12929355,23.700988 L9.16726755,23.7355658 C10.3397473,24.7988332 11.6861217,25.7216938 13.1694644,26.4782142 L13.6673165,26.7320467 L13.1094917,26.6982548 Z M4.3259764,22.4635218 L4.30004933,22.434445 C3.52668934,21.5634511 2.88505982,20.6230397 2.39244549,19.639144 C2.17167255,19.2024683 1.97630291,18.7335723 1.77831437,18.1640864 L1.71860355,17.9925071 L1.89930737,18.009796 C2.83242001,18.0980742 3.85719402,18.1017416 4.93958373,18.0192264 L5.02443597,18.0129395 L5.0563865,18.0917873 C5.33660837,18.7815097 6.18120233,20.5978922 7.97331286,22.5596586 L8.14458866,22.746955 L7.89081764,22.7548136 C7.71718483,22.7600526 7.5443377,22.7626722 7.37253812,22.7626722 C6.33074129,22.7626722 5.31853799,22.6647017 4.36421228,22.4713804 L4.3259764,22.4635218 Z M1.40512169,16.9074976 L1.38652753,16.8291736 C0.932934746,14.9161305 0.926387506,12.8964725 1.3671477,10.9886685 L1.394908,10.8697418 L1.51223454,10.9027479 C2.19995663,11.0950214 2.96074592,11.2126383 3.77312746,11.2527171 L3.8878351,11.2582182 L3.88390676,11.3732155 C3.84645654,12.4482709 3.89752502,13.5005363 4.03527895,14.5009349 C4.06513436,14.7555533 4.09237088,14.9410161 4.10782237,15.0395104 L4.13348755,15.119668 C4.24898086,15.7580476 4.39747226,16.3445605 4.57477152,16.8637515 L4.62479244,17.0096593 L4.47080135,17.0180418 C4.14082046,17.0358546 3.81162523,17.044761 3.49238181,17.044761 C2.79680303,17.044761 2.12138975,17.0020627 1.48473613,16.9179757 L1.40512169,16.9074976 Z M1.71860355,9.75984671 C2.23819251,8.22401598 3.02831343,6.81942373 4.06749137,5.58562487 L4.14841525,5.4894881 L4.23824339,5.57776628 C4.381497,5.71817311 4.5601057,5.83840956 4.76935549,5.93428438 L4.86704032,5.97907835 L4.83037577,6.08019223 C4.59336568,6.73507485 4.39302014,7.48033127 4.23483882,8.29500526 L4.21624466,8.38983226 C4.19607916,8.49539934 4.177485,8.60227618 4.15915273,8.70967693 L4.12851164,8.89199626 C4.10677481,9.02794989 4.08660931,9.16468938 4.06749137,9.30273864 C4.02585092,9.60267488 3.99390039,9.86672355 3.96954466,10.1119116 L3.95880718,10.221408 L3.84881355,10.2169548 C3.11787968,10.1870921 2.42780058,10.0838826 1.79795609,9.9094219 L1.67905822,9.87667777 L1.71860355,9.75984671 Z M4.94979743,4.64180803 C5.14595274,4.45136817 5.35363119,4.26328588 5.58435593,4.06760695 L6.141657,3.59478169 L5.75903629,4.21770605 C5.61892536,4.4456052 5.48326654,4.68869763 5.35572631,4.94017256 L5.30361028,5.0431201 L5.20016389,4.99230121 C5.08964648,4.93755303 5.00269913,4.87311258 4.94167885,4.80028963 L4.87201622,4.71725051 L4.94979743,4.64180803 Z M6.32236082,4.99596856 C6.77333471,3.8703563 7.2017861,3.1010002 7.36494332,2.82254411 L7.3806567,2.79582489 L7.63783228,2.64782142 L7.63678472,2.85083503 C7.63285638,3.51357625 7.64830787,4.17841309 7.68235351,4.82648493 L7.68706753,4.92000217 L7.59697751,4.94488771 C7.18712028,5.05936119 6.79742856,5.13035047 6.43890169,5.15575992 L6.25322197,5.16885757 L6.32236082,4.99596856 Z M7.76903897,6.11005487 C7.82089311,6.83776044 7.94869524,8.0196926 8.26322465,9.51649233 L8.28574715,9.62284526 L8.1812532,9.65270791 C7.15752676,9.94661923 6.1390381,10.1299864 5.15433321,10.1978322 L5.01448416,10.2072625 L5.03072132,10.0679035 C5.17790327,8.79795511 5.45498247,7.52748282 5.85410222,6.29185029 L5.88107685,6.20776336 L5.97561899,6.19440376 C6.47713758,6.21405023 7.03496242,6.15013369 7.62499969,6.00527365 L7.75934906,5.97226757 L7.76903897,6.11005487 Z M8.51385299,10.6373894 L8.54266085,10.7547444 C9.08608177,12.9627466 9.6795236,14.2361004 9.70440312,14.2892769 C9.90134409,14.7896072 10.1050942,15.2752682 10.3132964,15.7399729 L10.36646,15.8583756 L10.2428481,15.8984545 C8.73750671,16.3875208 7.23556986,16.7246544 5.77867801,16.9009488 L5.68858799,16.9116889 L5.65585179,16.827078 C5.29968193,15.9052652 5.06660019,14.8082059 4.96263002,13.5660245 L4.95660656,13.4926777 C4.94377397,13.3305287 4.9353935,13.1662842 4.92727492,13.0023016 L4.9228228,12.9111419 C4.91941824,12.8446058 4.91601367,12.7783317 4.91391855,12.7123195 L4.91103777,12.5493847 C4.90291919,12.1504302 4.90789509,11.750166 4.92570359,11.3588081 L4.9304176,11.2529791 L5.03595911,11.24774 C6.11415859,11.191944 7.24499788,10.9975749 8.39757401,10.6703955 L8.51385299,10.6373894 Z M8.89725937,2.03668496 L8.92737667,2.03982839 C9.24557254,2.07309643 10.1116414,2.18337867 11.2804547,2.48619639 L11.460111,2.53282403 L11.3399037,2.67454063 C11.1055125,2.9509011 10.8129818,3.22647571 10.4704302,3.49340586 L10.3968392,3.55077358 L10.3248196,3.49104829 C9.53496054,2.83852324 8.966922,2.43380578 8.75950544,2.29025551 L8.58718208,2.17106687 L8.89725937,2.03668496 Z M11.1039411,1.33360297 C11.3621643,1.27649721 11.5774375,1.23432277 11.7817114,1.20079278 L11.8888243,1.18324192 L11.9139657,1.288809 C11.9343931,1.37368179 11.9367501,1.47191418 11.9212986,1.5806247 L11.9040139,1.70243287 L11.7832828,1.67859514 C11.5640812,1.63511093 11.3380704,1.59634188 11.1117978,1.56281189 L10.4845722,1.47008051 L11.1039411,1.33360297 Z M12.4264836,2.94330446 L12.4736237,2.87441081 L12.5542857,2.89693877 C13.6521269,3.20447165 14.8869364,3.75404915 16.1248885,4.48620792 L16.244834,4.55693524 L16.1542202,4.66250232 C15.5034245,5.4208564 14.7442066,6.13284479 13.8980413,6.77934491 L13.8116177,6.84535708 L13.73986,6.76362773 C12.9455488,5.85988971 12.1234773,5.03840495 11.2969538,4.32196336 L11.1935074,4.23211346 L11.2985251,4.14435919 C11.7735928,3.74723837 12.1530709,3.34304481 12.4264836,2.94330446 Z M12.930883,1.81769221 C12.9764518,1.59241259 12.9840466,1.38180233 12.9536674,1.19188637 L12.9335019,1.06536305 L13.0615659,1.05724251 C14.6619732,0.957176442 16.2833318,1.16280959 17.8371228,1.66444967 L17.9549731,1.70243287 L17.9096662,1.81795416 C17.6692515,2.43171016 17.343199,3.04363248 16.9406747,3.63669418 L16.8783449,3.72890166 L16.783279,3.67048613 C16.0958188,3.24795586 15.3811221,2.87755425 14.6590925,2.57002137 C14.0795308,2.31356933 13.5256343,2.10584056 13.0118069,1.95259803 L12.9099318,1.92194952 L12.930883,1.81769221 Z M18.1042501,13.2480135 L18.0584195,13.1576397 L18.1414385,13.0997481 C19.4173646,12.207274 20.5940346,11.2181393 21.6389741,10.160111 L21.7497534,10.0479951 L21.8246538,10.1868302 C22.3015548,11.0735413 23.1521722,12.9488631 23.4892241,15.5419364 L23.496557,15.5972085 L23.4580592,15.6375492 C22.5149948,16.6222307 21.4671745,17.5272785 20.3441919,18.328069 L20.2142946,18.4205384 L20.1655832,18.2688676 C19.6067108,16.5339526 18.9132271,14.8446173 18.1042501,13.2480135 Z M11.8369701,16.5653869 L11.7793544,16.4501276 L11.8995617,16.4040238 C12.8250796,16.0503872 13.7196945,15.6585055 14.5587887,15.2391186 C15.3667182,14.8330914 16.1921942,14.3597423 17.082095,13.7923519 L17.1910411,13.7229344 L17.2489187,13.8381937 C18.0605146,15.4560158 18.747451,17.1660453 19.2900863,18.9206068 L19.3162752,19.0060035 L19.240851,19.0536789 C18.4378975,19.5600342 17.7533181,19.951392 17.0862853,20.286168 C16.3469709,20.6552599 15.5864435,20.9902978 14.8248686,21.2828994 L14.7415877,21.3148577 L14.6889479,21.2425586 C13.6013204,19.7460209 12.6417569,18.1722069 11.8369701,16.5653869 Z M10.8014586,16.7977393 L10.8465037,16.888637 C11.6363627,18.4875984 12.5747131,20.0551255 13.635366,21.5477339 L13.727813,21.6774007 L13.576179,21.726124 C12.2206384,22.1625377 10.8732164,22.4645696 9.57110131,22.6238371 L9.5158426,22.6306478 L9.47577349,22.5918788 C7.58466869,20.7600411 6.59210711,18.9575422 6.16863163,18.0459456 L6.10237356,17.9031812 L6.25845976,17.881439 C7.70906625,17.681045 9.20497965,17.3271464 10.7053452,16.8296976 L10.8014586,16.7977393 Z M14.4825789,7.6375031 L14.5784305,7.56415625 C15.5136382,6.84981028 16.3477566,6.05530669 17.0574774,5.20264951 L17.1255687,5.12092016 L17.2133017,5.18143131 C17.6538,5.48451099 18.0840846,5.80880887 18.4923705,6.14489463 C19.5045738,7.00305282 20.40076,7.98249527 21.1573591,9.05702668 L21.2126178,9.13561259 L21.1463597,9.2047682 C20.1647975,10.2316242 18.9970318,11.2270457 17.6757988,12.1635279 L17.5697335,12.2387084 L17.5066181,12.1250208 C17.2701318,11.699871 17.0189796,11.2721017 16.7602327,10.8540246 C16.1293407,9.79363865 15.3892407,8.74373083 14.5590506,7.73075839 L14.4825789,7.6375031 Z M9.65333464,10.2635824 C10.3114632,10.0254671 10.9798055,9.73784265 11.6400291,9.40882962 C12.2316378,9.11151291 12.8329363,8.75944801 13.5321815,8.30103018 L13.6196526,8.24366246 L13.6859107,8.32460595 C14.0852923,8.81052886 14.4705319,9.3085016 14.8314158,9.80542654 C15.4877111,10.7306447 16.1018423,11.7087774 16.6567863,12.7141532 L16.709688,12.810028 L16.6175029,12.8689675 C15.7312685,13.434786 14.9065781,13.9083971 14.0968155,14.316258 C13.2634828,14.7343351 12.3701774,15.1249071 11.4412549,15.476972 L11.3388561,15.5157411 L11.2938111,15.4159369 C11.1015841,14.9913111 10.9151187,14.5530636 10.738867,14.1135064 C10.2821316,12.8763021 9.89243985,11.6286198 9.58000556,10.4018936 L9.5538166,10.29947 L9.65333464,10.2635824 Z M8.66653463,4.56034063 L8.65998739,4.38561795 C8.65003559,4.13335716 8.64505968,3.89864723 8.64375024,3.68384573 L8.64244079,3.44415869 L8.83178697,3.59111435 C9.01746669,3.73492658 9.20026564,3.87978661 9.37913623,4.02543251 L9.51374749,4.13492888 L9.36158963,4.217968 C9.27071394,4.26773908 9.17879069,4.3167243 9.0852961,4.36361389 C9.00699111,4.40290685 8.92999557,4.43853247 8.85300003,4.47415808 L8.66653463,4.56034063 Z M8.85064302,5.59950838 C9.09420035,5.50075208 9.32230619,5.39832844 9.54779313,5.28647449 C9.78454133,5.16519022 10.0210276,5.03159417 10.2496573,4.89040148 L10.3211531,4.84613141 L10.385578,4.90009374 C10.4830009,4.98182309 10.5890662,5.07298275 10.6993217,5.16885757 C11.4533019,5.86067557 12.1774266,6.59466801 12.8538874,7.35276014 L12.9447631,7.45439792 L12.8303174,7.52826868 C12.2229954,7.92067435 11.6968592,8.22532575 11.1743894,8.4872788 C10.6367301,8.75866215 10.0697391,9.00489802 9.44146596,9.239346 L9.31497328,9.28649755 L9.2866892,9.15447321 C9.09917625,8.2813837 8.95094674,7.41510496 8.84540523,6.5802606 C8.81424037,6.26408327 8.79145597,5.97331538 8.77783771,5.71345796 L8.77364748,5.63068079 L8.85064302,5.59950838 Z M18.9187268,2.06549979 L19.0305537,2.11448501 C20.8263306,2.90191588 22.4448084,4.11685412 23.7110446,5.62779931 L23.7628987,5.68935828 L23.7233534,5.75956169 C23.2574518,6.59231044 22.6839136,7.4182484 22.0189759,8.21432372 L21.9205054,8.3327265 L21.833558,8.20541731 C20.915635,6.86290794 19.534953,5.53375817 17.8407892,4.36125632 L17.7459852,4.29576805 L17.81041,4.20015519 C18.2550986,3.54055741 18.6133635,2.8605273 18.8747293,2.17944937 L18.9187268,2.06549979 Z M13.8553533,0 C11.6895263,0 9.6040994,0.49482931 7.65721211,1.47034247 C0.817965212,4.90035569 -1.95832644,13.2584916 1.46849898,20.102015 C3.13437872,23.416245 5.98766591,25.8846286 9.50248623,27.0524153 C10.9321416,27.5275981 12.4102465,27.768595 13.8956843,27.768595 C16.0554878,27.768595 18.1422241,27.2708841 20.0980157,26.2893461 C23.411181,24.627254 25.8792286,21.7745853 27.0469943,18.2565558 C28.2173789,14.7380025 27.9471089,10.9739991 26.286205,7.65819739 C23.9171517,2.93439806 19.1539037,0 13.8553533,0 L13.8553533,0 Z"
                  id="Fill-1"
                />
                <path
                  d="M73.1030889,10.1251874 C77.4085148,10.1251874 78.7995772,13.1832541 79.0399446,17.02654 L69.3861613,17.02654 C69.3861613,19.7873768 69.9742943,22.3312062 73.1301211,22.3312062 C75.2693179,22.3312062 76.5800144,21.1940431 77.1411152,19.0831195 L78.6925443,19.0831195 C78.1044113,22.00588 76.2589157,23.6033058 73.1030889,23.6033058 C69.1450633,23.6033058 66.8454998,21.302362 66.8454998,16.8642466 C66.8454998,12.4250222 69.1450633,10.1251874 73.1030889,10.1251874 Z M109.932907,10.1251874 C114.281057,10.1251874 116.900793,12.9662467 116.900793,16.8642466 C116.900793,20.7611374 114.281057,23.6033058 109.932907,23.6033058 C105.584758,23.6033058 102.964284,20.7611374 102.964284,16.8642466 C102.964284,12.9662467 105.584758,10.1251874 109.932907,10.1251874 Z M147.437371,5.24517906 L147.437371,20.9495956 C147.437371,21.599431 147.815041,21.9241637 148.435157,21.9241637 L150,21.9241637 L150,23.1968351 L145.144085,23.1968351 L145.144085,20.7598599 L145.090658,20.7598599 C144.119033,22.5739991 142.986392,23.6033058 140.612782,23.6033058 C136.566738,23.6033058 134.785978,20.1640234 134.785978,16.8612175 C134.785978,13.557672 136.566738,10.1191293 140.612782,10.1191293 C142.33901,10.1191293 144.173565,11.0936974 145.090658,12.7994691 L145.144085,12.7994691 L145.144085,8.06088578 C145.144085,7.16768577 144.793681,6.51785039 143.903853,6.51785039 L142.500763,6.51785039 L142.500763,5.24517906 L147.437371,5.24517906 Z M88.1134796,5.24517906 L88.1134796,6.6475262 L86.7629423,6.6475262 C86.1419166,6.6475262 85.7098185,6.83607707 85.7098185,7.4017297 C85.7098185,7.72580152 85.7633234,7.99537035 85.8987461,8.50725651 L89.0319187,19.9926563 L89.0865306,19.9926563 L92.8145299,8.69617565 C92.8953408,8.42660682 92.1658293,6.6475262 91.1927782,6.6475262 L89.869547,6.6475262 L89.869547,5.24517906 L97.676464,5.24517906 L97.676464,6.6475262 L96.3532327,6.6475262 C95.7857118,6.6475262 95.1373802,6.72817589 95.1373802,7.48237939 C95.1373802,7.91435239 95.4882984,8.91197802 95.6237212,9.39661269 L98.7303258,19.9381533 L98.7841997,19.9381533 L101.998921,9.18154685 C102.133606,8.74957385 102.350208,7.99537035 102.350208,7.50963088 C102.350208,6.7009244 101.782688,6.6475262 101.10705,6.6475262 L99.7026388,6.6475262 L99.7026388,5.24517906 L106.564549,5.24517906 L106.564549,6.6475262 L105.780425,6.6475262 C104.753869,6.6475262 104.294465,7.24006205 104.132844,7.77919971 L99.4052254,23.2547338 L97.2443658,23.2547338 L93.6248523,11.365349 L93.5702404,11.365349 L89.6533134,23.2547338 L87.4924538,23.2547338 L83.0888168,8.23768768 C82.7113306,6.99774472 82.4947281,6.6475262 81.1441908,6.6475262 L80.549733,6.6475262 L80.549733,5.24517906 L88.1134796,5.24517906 Z M125.54742,10.1251874 C127.402821,10.1251874 128.630687,11.1310966 128.630687,13.0062686 C128.630687,14.0396555 128.194319,14.8275991 127.102469,14.8275991 C126.365749,14.8275991 125.574996,14.3653042 125.574996,13.5773606 C125.574996,12.5989293 126.229733,12.1633695 127.211654,12.1633695 C127.075638,11.5384359 126.229733,11.4029037 125.629029,11.4029037 C123.064857,11.4029037 121.728551,14.3653042 121.728551,17.0570116 L121.728551,20.726779 C121.728551,21.5696782 122.219697,21.9770175 123.092433,21.9770175 L124.565499,21.9770175 L124.565499,23.2547338 L116.544682,23.2547338 L116.544682,21.9770175 L118.318474,21.9770175 C119.218412,21.9770175 119.409579,21.5696782 119.409579,20.726779 L119.409579,13.0612242 C119.409579,12.218325 119.218412,11.810243 118.318474,11.810243 L116.436242,11.810243 L116.436242,10.5325268 L121.619366,10.5325268 L121.619366,13.2780757 L121.674145,13.2780757 C122.355713,11.4029037 123.965913,10.1251874 125.54742,10.1251874 Z M48.960314,5.24517906 L48.960314,12.2894216 L47.5508044,12.2894216 C47.5508044,8.34887793 46.8732624,6.64901387 42.9157507,6.64901387 L41.9131366,6.64901387 L41.9131366,20.3588912 C41.9131366,21.2222791 42.2926342,21.7354456 43.132342,21.7354456 L45.436355,21.7354456 L45.436355,23.1385431 L35.7060373,23.1385431 L35.7060373,21.7354456 L38.0641056,21.7354456 C38.9045539,21.7354456 39.2840515,21.2222791 39.2840515,20.3588912 L39.2840515,6.64901387 L38.0915035,6.64901387 C34.3235554,6.64901387 33.6456431,8.59145232 33.6456431,12.2894216 L32.2365039,12.2894216 L32.2365039,5.24517906 L48.960314,5.24517906 Z M55.2438289,5.24517906 L55.2438289,12.6665547 L55.2972229,12.6665547 C56.3492683,11.1019867 57.9665534,10.1033028 60.0422902,10.1033028 C62.8729073,10.1033028 64.3822998,11.9653746 64.3822998,14.7719383 L64.3822998,20.628746 C64.3822998,21.4655908 64.5708357,21.8700043 65.4604898,21.8700043 L67.0777749,21.8700043 L67.0777749,23.1385431 L59.5293398,23.1385431 L59.5293398,21.8700043 L61.0125876,21.8700043 C61.9018735,21.8700043 62.0907777,21.4655908 62.0907777,20.628746 L62.0907777,14.5828187 C62.0907777,12.7211155 61.3900278,11.6144159 59.314291,11.6144159 C56.7532213,11.6144159 55.2438289,13.6652387 55.2438289,15.8248144 L55.2438289,20.628746 C55.2438289,21.4655908 55.4327331,21.8700043 56.322019,21.8700043 L57.9665534,21.8700043 L57.9665534,23.1385431 L50.1216897,23.1385431 L50.1216897,21.8700043 L51.8741167,21.8700043 C52.7634026,21.8700043 52.9523068,21.4655908 52.9523068,20.628746 L52.9523068,7.75497617 C52.9523068,6.91886867 52.7634026,6.51371782 51.8741167,6.51371782 L50.1216897,6.51371782 L50.1216897,5.24517906 L55.2438289,5.24517906 Z M132.49807,5.24517906 L132.49807,20.628746 C132.49807,21.4655908 132.683182,21.8700043 133.55668,21.8700043 L135.250529,21.8700043 L135.250529,23.1385431 L127.469311,23.1385431 L127.469311,21.8700043 L129.189191,21.8700043 C130.063412,21.8700043 130.247801,21.4655908 130.247801,20.628746 L130.247801,7.75497617 C130.247801,6.91886867 129.613286,6.51371782 129.189191,6.51371782 L127.469311,6.51371782 L127.469311,5.24517906 L132.49807,5.24517906 Z M109.933093,11.4032849 C106.5756,11.4032849 105.519311,13.9443234 105.519311,16.8642466 C105.519311,19.7841698 106.5756,22.3252084 109.933093,22.3252084 C113.290216,22.3252084 114.345766,19.7841698 114.345766,16.8642466 C114.345766,13.9443234 113.290216,11.4032849 109.933093,11.4032849 Z M141.172996,11.6356662 C138.440043,11.6356662 137.341005,14.155036 137.341005,16.8646167 C137.341005,19.9527689 138.412952,22.092827 140.878649,22.092827 C143.907046,22.092827 145.006084,19.5734572 145.006084,16.8646167 C145.006084,14.155036 143.907046,11.6356662 141.172996,11.6356662 Z M73.0223916,11.4032849 C70.5457284,11.4032849 69.4005263,13.4325896 69.4005263,15.8185305 L76.4849181,15.8185305 C76.4849181,13.4325896 75.4459419,11.4032849 73.0223916,11.4032849 Z"
                  id="The-World"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

PriLogo.propTypes = {
  title: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  version: PropTypes.number,
  viewBox: PropTypes.string,
  fillColor: PropTypes.string
};

PriLogo.defaultProps = {
  title: null,
  height: 28,
  width: 150,
  version: 1.1,
  viewBox: '0 0 150 28',
  fillColor: '#fff'
};

export default PriLogo;
