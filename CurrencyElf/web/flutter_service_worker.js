'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "127a658d68939e5ef69cb43b85efb858",
"version.json": "b5f39843705fbe16d55bfe91f7db01f0",
"index.html": "68e22da0fc1e3e0236e097fe59831f22",
"/": "68e22da0fc1e3e0236e097fe59831f22",
"main.dart.js": "2547f5a504f69df7d3e5f313337b129e",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "78e4daa7af07c7142669bc936a0de1f5",
"icons/Icon-192.png": "7a31022a1ee545088ec663b9dfd2b149",
"icons/Icon-maskable-192.png": "7a31022a1ee545088ec663b9dfd2b149",
"icons/Icon-maskable-512.png": "0ee182cdff3f6f3fe619db05d8d6ddcd",
"icons/Icon-512.png": "0ee182cdff3f6f3fe619db05d8d6ddcd",
"manifest.json": "4d29e761fc98f66bbbbb6aad82bc21d6",
"assets/AssetManifest.json": "7bda548d0c932cb72167a9c436109eb1",
"assets/NOTICES": "37ae132c515cdfc0cc16aa9765242c6b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "f369132cb879b690139c3b441192b47f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6284b833aee65a8f601935955df9f72d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "4a356b6919ab7b9c8abf7a2bca87fea8",
"assets/fonts/MaterialIcons-Regular.otf": "8f148b7bd1bdf02ea1339d4baf45456f",
"assets/assets/jsons/languages.json": "f78c963a0a889baf57af7500caed5449",
"assets/assets/images/country_flag/tg.png": "95834540e717d96ff0f65e4a5871f6f7",
"assets/assets/images/country_flag/me.png": "6f959fa262a4e1ee7b98012f378c45e9",
"assets/assets/images/country_flag/la.png": "bd09bfc7bbeb9fdc85842e31c503a4ca",
"assets/assets/images/country_flag/mr.png": "172d17bed4164f0bbc784f8bc232937d",
"assets/assets/images/country_flag/ni.png": "3d82ea04e898f2401f5ef696683252d3",
"assets/assets/images/country_flag/lv.png": "c664a2842dc7928bb0e3095df7e5e445",
"assets/assets/images/country_flag/om.png": "ee4be6ad6867ddc608a9abe0f918b1ec",
"assets/assets/images/country_flag/af.png": "43e9e924bcb46333e3bc8f520042e7f2",
"assets/assets/images/country_flag/cy.png": "839afeb746ff0e8f27c8aa2ca2073c23",
"assets/assets/images/country_flag/bj.png": "5af4129bcc4c94ad1be8bd7ce58b2afc",
"assets/assets/images/country_flag/cn.png": "a24afc9c52c148a1bdc1b5b11c23f07e",
"assets/assets/images/country_flag/gb-sct.png": "a95c2c96a643de10b9d447357b79b3dc",
"assets/assets/images/country_flag/lgbt.png": "8718dd7044e3b32a18a1d05666a4fa8d",
"assets/assets/images/country_flag/co.png": "740843de0be34baca1499b3edd4b41c4",
"assets/assets/images/country_flag/cx.png": "47bbd0363307b6656b179fde73aa2417",
"assets/assets/images/country_flag/ag.png": "1d3c0db13f73da4b6d3df4c651f1edbc",
"assets/assets/images/country_flag/ms.png": "7d6d2f776cc07ae5b905f81c9da37de5",
"assets/assets/images/country_flag/md.png": "f55bf71c12d0d1d27b39cede6f2ae132",
"assets/assets/images/country_flag/zm.png": "5a8497462f1bd2735e78df85c76bd436",
"assets/assets/images/country_flag/vn.png": "27a8b42b8d6d40f7f39dadac01c1fca4",
"assets/assets/images/country_flag/tf.png": "63cf1e9153f8de507dacec0e5ea2bad3",
"assets/assets/images/country_flag/td.png": "7402a0b67335ac50ff8cec777d4ff342",
"assets/assets/images/country_flag/yt.png": "19a5e33c15ed8aef35c957b4e3567b78",
"assets/assets/images/country_flag/lb.png": "d2ecfba6b33f3552245d618212cac4b7",
"assets/assets/images/country_flag/mf.png": "993b0b98945bd79d9c2a99cb940e1583",
"assets/assets/images/country_flag/lu.png": "cb9eb30553acbb21a722349de6ff4815",
"assets/assets/images/country_flag/mq.png": "7695177868e2767cb6f2cff363c1fce7",
"assets/assets/images/country_flag/cz.png": "318d6dd32c99160cdea6c8878389832e",
"assets/assets/images/country_flag/ae.png": "6f735c7c2f4b78cf152794e25bd70547",
"assets/assets/images/country_flag/cm.png": "c3679444c1029281831a6913338771ad",
"assets/assets/images/country_flag/bi.png": "6351bad52bf792df42627d6bb4523ff5",
"assets/assets/images/country_flag/ar.png": "04c9ba231b95732c724bd8912e795d90",
"assets/assets/images/country_flag/as.png": "b88f9e9a202131b0b47da54444895cac",
"assets/assets/images/country_flag/bh.png": "5ce4c10a9674ccd31a2eb359b2c2c306",
"assets/assets/images/country_flag/cl.png": "e3dbe843bce6304bafe70a22ce64aab4",
"assets/assets/images/country_flag/ad.png": "2dc45b68fe9e87d827ac549985cac5af",
"assets/assets/images/country_flag/mp.png": "4e88db8862af677ca477680cd010cfd4",
"assets/assets/images/country_flag/lt.png": "8c53ef2993cb31d2fb86c1044502f2ef",
"assets/assets/images/country_flag/mg.png": "2028d192671da7912b283b3808306d72",
"assets/assets/images/country_flag/lc.png": "8d94c045b6135d3328ed241903cb9b73",
"assets/assets/images/country_flag/tr.png": "def43f7b69ea8ac17ca5604c3ecf6a37",
"assets/assets/images/country_flag/ua.png": "df8a4d106d97c22018dc01f42311a5d4",
"assets/assets/images/country_flag/tv.png": "4a4d5a3e2419603c131ed9c8918d94c9",
"assets/assets/images/country_flag/vi.png": "2a9f7aa1e11065d0a7e8633e0c3600ce",
"assets/assets/images/country_flag/mt.png": "e256bb308dce674370c9d99418d078d7",
"assets/assets/images/country_flag/no.png": "b980dddd2aa13e4667f1a39dbe00ab3d",
"assets/assets/images/country_flag/mc.png": "a1717dc929d22a5e1a56ef2d6ce70b76",
"assets/assets/images/country_flag/ch.png": "2b0ddbcb8833238b248502df8dc25e2c",
"assets/assets/images/country_flag/bl.png": "8d7094fae58763b18114049a9d0446e9",
"assets/assets/images/country_flag/aw.png": "67e7e8d5abcc409f501b81be5aa63dfb",
"assets/assets/images/country_flag/bz.png": "18f3efa4949cdc52cd7601509241dbbd",
"assets/assets/images/country_flag/bm.png": "df20b6be553c09616fe664e14aef297b",
"assets/assets/images/country_flag/ci.png": "a2c2e33ca8ff897e36b08e683cae2160",
"assets/assets/images/country_flag/mu.png": "55c6ac5fdbe8b6aa8b2f7c2fcab8565d",
"assets/assets/images/country_flag/us.png": "cf64bdb33d9222b92e7134f9b8bec4ec",
"assets/assets/images/country_flag/tw.png": "fa9de468cd5853e2a8afc376c1f25fef",
"assets/assets/images/country_flag/ye.png": "4ee7177d94bca90f662616aaf96c8e0f",
"assets/assets/images/country_flag/mw.png": "8dea5f34b3f841864f433a9648a3a4ae",
"assets/assets/images/country_flag/nl.png": "847786af1842838d84dbdbeb01f9780a",
"assets/assets/images/country_flag/ls.png": "7b7fdf0659cb008ff24317b90612a0ff",
"assets/assets/images/country_flag/bo.png": "ab87b4799744a1d7b0912cc0e4df28c2",
"assets/assets/images/country_flag/at.png": "5c2c32d8a5fd57fbcafe1a856f9a41f5",
"assets/assets/images/country_flag/ck.png": "8a25143ba6fe0470f927212f2521e217",
"assets/assets/images/country_flag/by.png": "61316001458dae075f2384f85a5bd993",
"assets/assets/images/country_flag/au.png": "d3cec37cb2289696c2c042c437174500",
"assets/assets/images/country_flag/bn.png": "1ecec9c66132cd2d741898f40e0fa718",
"assets/assets/images/country_flag/ma.png": "d8332a26af57bae365d62e6c2c9f72d5",
"assets/assets/images/country_flag/nz.png": "ac493497fb6dd0703e3374e2356c1e01",
"assets/assets/images/country_flag/lr.png": "ac5786de72316e935bca37446257cb89",
"assets/assets/images/country_flag/mv.png": "107f0e7f9017fc2de01bcf41df808f5b",
"assets/assets/images/country_flag/tc.png": "293f609f077384cf45c62f16b6d105bb",
"assets/assets/images/country_flag/ug.png": "8df8b8de55b4eadeec32c11d4b3cc998",
"assets/assets/images/country_flag/tt.png": "eb309d9626c4ba642d91c92706225b65",
"assets/assets/images/country_flag/pl.png": "609980b13a620dbab34d2bb92bb33cf4",
"assets/assets/images/country_flag/rs.png": "4332c1272bc39cbd333fff11b84e2fa0",
"assets/assets/images/country_flag/in.png": "87b350a0b923531f886ef8ee1375f513",
"assets/assets/images/country_flag/ge.png": "324d3ca4f232042548dc9626b5299e61",
"assets/assets/images/country_flag/gr.png": "a9e3873c6c656aaeb5542d02a301f405",
"assets/assets/images/country_flag/gs.png": "e399c7878c1648d85d26b93e15b3712e",
"assets/assets/images/country_flag/gd.png": "4c6c247081d8fab7f0a169c829a382b5",
"assets/assets/images/country_flag/io.png": "65247c2b99c01b2d8386708a5c782ae3",
"assets/assets/images/country_flag/hk.png": "26254aba801da6c53c5677230fcf1a8a",
"assets/assets/images/country_flag/kp.png": "514a8576317c2865805d027bb9a70c4f",
"assets/assets/images/country_flag/gb-nir.png": "4def4eb31f84c7e0050f6f22401668c0",
"assets/assets/images/country_flag/kg.png": "02e454bdd53dbe1357f29fc75c1a3695",
"assets/assets/images/country_flag/pm.png": "6a85a342db3df1ff3b8f2466f27b43a4",
"assets/assets/images/country_flag/sv.png": "460e81cec991b77b98e0183b27716a1f",
"assets/assets/images/country_flag/re.png": "993b0b98945bd79d9c2a99cb940e1583",
"assets/assets/images/country_flag/sa.png": "258dbe358466e9091efca17bda65c3ab",
"assets/assets/images/country_flag/sc.png": "41e7eab197c526ec56f69be2280b1622",
"assets/assets/images/country_flag/st.png": "0e6be7345867bfc261b49feed7c89820",
"assets/assets/images/country_flag/ke.png": "b0f193a0ad27a07408041eed47323dbf",
"assets/assets/images/country_flag/im.png": "6770601562637a28ebaa925eb4610eab",
"assets/assets/images/country_flag/kr.png": "d821de4955ba324dc8f2511cd521c6bc",
"assets/assets/images/country_flag/gf.png": "1212d0d98a3b0905fc9f88b6bae2eebb",
"assets/assets/images/country_flag/dj.png": "226f80d74666d8db5f21007ca534312c",
"assets/assets/images/country_flag/gq.png": "d3fdf3858cef95d183c70ae1be98f5ce",
"assets/assets/images/country_flag/gp.png": "fdddff23457bac9e9b6e711ab2602782",
"assets/assets/images/country_flag/dk.png": "0d937084538d589ec42d7b47d3b37fb9",
"assets/assets/images/country_flag/gg.png": "126df69140c3f935495b7dbf3564cc5c",
"assets/assets/images/country_flag/il.png": "b83470cb9ea3518dfeb1bb8e683684a4",
"assets/assets/images/country_flag/pn.png": "fdf89ea2db3f7a3c8d2d16e6824cb9b2",
"assets/assets/images/country_flag/sb.png": "d5c7d26faa890b9cb899bdd954473e8d",
"assets/assets/images/country_flag/py.png": "65bb4f23739c429281a7b5fd6f384616",
"assets/assets/images/country_flag/ru.png": "36c6084c17ae5548ce5d2875f2ee4275",
"assets/assets/images/country_flag/kw.png": "5854ecd57e138e2ba4415afed0e71373",
"assets/assets/images/country_flag/do.png": "b3e34570c943a2962579cab2d67faefa",
"assets/assets/images/country_flag/gt.png": "3477c7194dd8c946864c3580919055dc",
"assets/assets/images/country_flag/gb.png": "90dbfb7e962e212b1927dc198a778006",
"assets/assets/images/country_flag/gu.png": "c0d519a85be306c43c5a8f180874ff50",
"assets/assets/images/country_flag/je.png": "f0dacd6653235a27eb0e0146948f1c53",
"assets/assets/images/country_flag/hm.png": "d3cec37cb2289696c2c042c437174500",
"assets/assets/images/country_flag/sg.png": "ba0d0b83c416cdc61cdba1b725505b78",
"assets/assets/images/country_flag/pk.png": "ccaedcd53a92d8a90e5105969fb7ccd7",
"assets/assets/images/country_flag/sr.png": "af26997f14b407163015fd2dfb4745d2",
"assets/assets/images/country_flag/se.png": "d516c7e6de27f94b8ac7082f5cd27837",
"assets/assets/images/country_flag/jp.png": "7e1bd728d2ee925457004e840f2e7de4",
"assets/assets/images/country_flag/gw.png": "1d3d16db205146a3a4780e14fd7f4fd2",
"assets/assets/images/country_flag/dz.png": "2f428c5efb27afcd5ccd06129a6d557e",
"assets/assets/images/country_flag/ga.png": "4bbb8133252f7f205d6b9e45ff9f803c",
"assets/assets/images/country_flag/fr.png": "993b0b98945bd79d9c2a99cb940e1583",
"assets/assets/images/country_flag/dm.png": "60483414d4f5e52970656b157703f243",
"assets/assets/images/country_flag/hn.png": "0442d1d611e92213428af2a141725599",
"assets/assets/images/country_flag/sd.png": "8c63de1715aee687dc3ad2f60f5e4eb5",
"assets/assets/images/country_flag/rw.png": "de61ad9801dd5ba61dcd80738eef261d",
"assets/assets/images/country_flag/ph.png": "e9fee6cd40525ba9601644adbed3ad23",
"assets/assets/images/country_flag/ss.png": "89b6dedf14237228d676f8a273599e1b",
"assets/assets/images/country_flag/qa.png": "db5e33fe3d9882e1a0339819bdc18a9d",
"assets/assets/images/country_flag/pe.png": "b5f49499e657e52d26504c768ece5e95",
"assets/assets/images/country_flag/pr.png": "b2089522fa3e30a86edfbec849421370",
"assets/assets/images/country_flag/si.png": "ee9f01ab83ee252807776e7ffb346ca2",
"assets/assets/images/country_flag/ht.png": "adc7e87b36e7818187352e307cd3f245",
"assets/assets/images/country_flag/es.png": "589bb8eda4ea96c84c0bbd8623895cb1",
"assets/assets/images/country_flag/gl.png": "4aaab3b92021b24202dd8d284b696ede",
"assets/assets/images/country_flag/gm.png": "3d0ec8caaed85079f3b96f48431c182a",
"assets/assets/images/country_flag/er.png": "07449e183f6cab0eaa8c68d1aec60464",
"assets/assets/images/country_flag/fi.png": "f1fef787add14a013a7bcbe61848e710",
"assets/assets/images/country_flag/ee.png": "18ae87e80d48a2229a8d0c2861d31cdc",
"assets/assets/images/country_flag/kn.png": "dbb0a18202236e546e5a792f9b322b53",
"assets/assets/images/country_flag/hu.png": "0b831a000cd1ae75c1197f8e302c31d8",
"assets/assets/images/country_flag/iq.png": "34e07f79af3e21fd3294522d23c4616d",
"assets/assets/images/country_flag/ky.png": "adf83a9369f4d5cb90a06eced1fecf6c",
"assets/assets/images/country_flag/sh.png": "d50b0d2f2057e1dd001fc3ab30e1b079",
"assets/assets/images/country_flag/ps.png": "f9e0620d917cc783ce28059e697984b3",
"assets/assets/images/country_flag/pf.png": "8cee99de63353839fe5d232076100ef7",
"assets/assets/images/country_flag/sj.png": "b980dddd2aa13e4667f1a39dbe00ab3d",
"assets/assets/images/country_flag/id.png": "b87492b2038bac82a089003230c5ec8e",
"assets/assets/images/country_flag/is.png": "4368fcb3c50cb8a318b98718de73ccc8",
"assets/assets/images/country_flag/eg.png": "1efc1cc36dee03a6ae37e2fca0248d55",
"assets/assets/images/country_flag/fk.png": "a02896adb33798527b97a44dbf6a8da8",
"assets/assets/images/country_flag/fj.png": "267e47746a5469c9dac1ea4f11eba97a",
"assets/assets/images/country_flag/gn.png": "37615f07c3c50880970f33ad4af01793",
"assets/assets/images/country_flag/gy.png": "7ae0d79d2110fbf4155c091b73e88e45",
"assets/assets/images/country_flag/ir.png": "1dea1a6890103df207197b63b9b61ab4",
"assets/assets/images/country_flag/km.png": "aad15cd68a491d25087f3bc083d50de9",
"assets/assets/images/country_flag/ie.png": "89d1b9b944a1fcfc12723614356dea55",
"assets/assets/images/country_flag/kz.png": "3796ef7bfb290c1be0df366ad03e76aa",
"assets/assets/images/country_flag/ro.png": "b643651e866c2931c5fca13587be5e8b",
"assets/assets/images/country_flag/sk.png": "d8e91f0740bf2c004f16b4adf34e4feb",
"assets/assets/images/country_flag/pg.png": "3ae4c26386965b6273492bab2d1e13d7",
"assets/assets/images/country_flag/pt.png": "116286ca00022f78b731b8a81cf8fc3b",
"assets/assets/images/country_flag/so.png": "85c70957c9a8f08886c14f665b23c3b4",
"assets/assets/images/country_flag/sx.png": "a8792083bb794dd79c648da28e7861bd",
"assets/assets/images/country_flag/hr.png": "f754c58357e47cfa9c9b0f2e1687afb3",
"assets/assets/images/country_flag/ki.png": "8fb6886dcb8946642ffbf8567f0efcf1",
"assets/assets/images/country_flag/jm.png": "863f33527e9b8ce68269dc07a6e30f2f",
"assets/assets/images/country_flag/eu.png": "10d7aeb56ce1ed1195b1b264ce31d06f",
"assets/assets/images/country_flag/ec.png": "cd09332db725bd39c5c72a14a8d1accf",
"assets/assets/images/country_flag/et.png": "5946190c6eb9c749b107cdcdd5fc3fe1",
"assets/assets/images/country_flag/fo.png": "966c22c871bf8c5d38409a9697155801",
"assets/assets/images/country_flag/kh.png": "d11fdab8c5e0dbbee89281950eba1b5c",
"assets/assets/images/country_flag/sy.png": "4083edda20add62bcd01bf5def5aadfb",
"assets/assets/images/country_flag/sn.png": "30c945eed92b5c255476da1edd053656",
"assets/assets/images/country_flag/pw.png": "03545baac646a49f0573f81bf0be1bc2",
"assets/assets/images/country_flag/sl.png": "d481c839074766306361b4e6af900364",
"assets/assets/images/country_flag/gb-eng.png": "c267501cdbb93c4ab891bb6e239dcf1f",
"assets/assets/images/country_flag/fm.png": "4be229017cdb3cbfdc4efb7fdf3f8224",
"assets/assets/images/country_flag/gi.png": "2672a502a5dda838c022c64c4dcc01ac",
"assets/assets/images/country_flag/de.png": "580d0315045e9948ac6bfd6c710daff2",
"assets/assets/images/country_flag/gh.png": "c3df31741f75df48660f0c86e1a52f1a",
"assets/assets/images/country_flag/jo.png": "9f224315eae20e110d0394bf2dfd1fed",
"assets/assets/images/country_flag/it.png": "b23c9c8e4c2c09431fbd94eeaad9fc8c",
"assets/assets/images/country_flag/pa.png": "64a53076474c281307b3e9afa4e23fd8",
"assets/assets/images/country_flag/sz.png": "1c011764506ff17479ae447c5de458aa",
"assets/assets/images/country_flag/sm.png": "d0415132b10655fbc8b582840cd40a3f",
"assets/assets/images/country_flag/tn.png": "910fc0cf906d01731258a81a80204c99",
"assets/assets/images/country_flag/ml.png": "3e672d65dc0964b67b0330ed6023a5d5",
"assets/assets/images/country_flag/cg.png": "4b3913d7a99cab14880d8cc628910dc4",
"assets/assets/images/country_flag/ax.png": "27aa96f635696ce2475ce7779254320e",
"assets/assets/images/country_flag/ao.png": "40872d6fd79e776c07f52b2e4a7a96ce",
"assets/assets/images/country_flag/bt.png": "56ba599ef98ef5ceef0b28b1aa9b9ee6",
"assets/assets/images/country_flag/gb-zet.png": "62e466b238a663d48f40f3d678a2a934",
"assets/assets/images/country_flag/bb.png": "ebd49ec9fe002409040751d5e424c7dc",
"assets/assets/images/country_flag/cf.png": "00714d74116c7b94ded6a19c64f6c8f6",
"assets/assets/images/country_flag/mm.png": "c805615111fb8162d9b38957888f587e",
"assets/assets/images/country_flag/li.png": "e0ffcc6700c939a7f6fa8603edb40387",
"assets/assets/images/country_flag/na.png": "0020bf2584f1b47c324056648c46ead4",
"assets/assets/images/country_flag/mz.png": "d5a3ad92ae3022f4727be3516b32bc19",
"assets/assets/images/country_flag/to.png": "662e9ccf97a437d74cf8b463c442a52a",
"assets/assets/images/country_flag/vg.png": "ecad4809944d5e4e71979df86fcc6dd7",
"assets/assets/images/country_flag/ve.png": "2fc8f15e2316ada1cffdd70625e4d916",
"assets/assets/images/country_flag/tz.png": "b08380719ce675a0cf2401b2651a9cf8",
"assets/assets/images/country_flag/tm.png": "c58cc524f9bce8f3a832926cdaa92829",
"assets/assets/images/country_flag/mx.png": "bd2014a865d96d7160b9ba143e7a9206",
"assets/assets/images/country_flag/nc.png": "612337ca2845cdde9bdebf4f25bbb439",
"assets/assets/images/country_flag/us-ca.png": "28abd02061f3817b550b1dfaddd20f3c",
"assets/assets/images/country_flag/mo.png": "9eb2d2ba05353e788b6dce8dad56d821",
"assets/assets/images/country_flag/lk.png": "68ba3815b56774e9fb59b00a8771e203",
"assets/assets/images/country_flag/cd.png": "9f24e110b40e81e40661af53f7917ccf",
"assets/assets/images/country_flag/al.png": "17ddb2ae537965eda13db9d1bf61b5a9",
"assets/assets/images/country_flag/bw.png": "316b1fb03806abc04438dabf9640577f",
"assets/assets/images/country_flag/cr.png": "41c89ff4ddc73cec3e6689232c77fd35",
"assets/assets/images/country_flag/bv.png": "b980dddd2aa13e4667f1a39dbe00ab3d",
"assets/assets/images/country_flag/am.png": "cddc2413f113c3e8d683a63f74d4b722",
"assets/assets/images/country_flag/az.png": "54f7e2ff17f7580b6279cd235427672d",
"assets/assets/images/country_flag/ba.png": "9fc4f10055f29e1b730ef8701ba19b0e",
"assets/assets/images/country_flag/mn.png": "df793c6f563d01aad508d78ee655c240",
"assets/assets/images/country_flag/nu.png": "3cc71ff362ececd22db93a2457be1e5c",
"assets/assets/images/country_flag/my.png": "7da65db240edb2e9a822e540c21127a8",
"assets/assets/images/country_flag/tl.png": "fe69e1f46206d5a21c6a9e818b7b3e09",
"assets/assets/images/country_flag/ws.png": "ce71c69318df4299409136824b1f373c",
"assets/assets/images/country_flag/th.png": "4d0535717b8335fbe1e2413c7a5a808d",
"assets/assets/images/country_flag/xk.png": "8b2ba19b50982e80bd2d9e12d3ef369a",
"assets/assets/images/country_flag/nf.png": "6e64de235776b9947d32ef322cc86c92",
"assets/assets/images/country_flag/ly.png": "91940d7b0a39f4a6d790618dd890bac4",
"assets/assets/images/country_flag/ai.png": "e6116448e6ea10e28450013fb5387b84",
"assets/assets/images/country_flag/br.png": "0ef83b3253a11563f4fdefd1f498e34d",
"assets/assets/images/country_flag/cv.png": "f8fd043ac5b50c6da5db60157a35b052",
"assets/assets/images/country_flag/be.png": "99ebae3c600bafac77c320d746a48a42",
"assets/assets/images/country_flag/ca.png": "659e7967ffb5cb507aae4a217059cc75",
"assets/assets/images/country_flag/bd.png": "7ca039e61dd4cbecca78ac66431cb35d",
"assets/assets/images/country_flag/cw.png": "8f83e960dcfa444ac40cda6a5e9de867",
"assets/assets/images/country_flag/bs.png": "339b06d347b39afc505116530dd7e0cc",
"assets/assets/images/country_flag/ng.png": "ddde69c2ae70db73f5ee83d021e9193d",
"assets/assets/images/country_flag/mk.png": "bfb2e27cfe1bd2d3988c7b840e11cb23",
"assets/assets/images/country_flag/np.png": "3a4bfd2df5a4b520de91f27537100e69",
"assets/assets/images/country_flag/va.png": "95af037e80ab1dd2de6a0a78ea599e12",
"assets/assets/images/country_flag/uz.png": "4c6ba1067febc3351bbf0d795f3338c0",
"assets/assets/images/country_flag/um.png": "cf64bdb33d9222b92e7134f9b8bec4ec",
"assets/assets/images/country_flag/tk.png": "2fee76ce7a875a75e3a5f62968c5cf81",
"assets/assets/images/country_flag/vc.png": "67d7727a33a40e5003981918501cdb87",
"assets/assets/images/country_flag/zw.png": "f9c980406b1eaf6de1c428a1ae858d8b",
"assets/assets/images/country_flag/nr.png": "890ec0b4b680f66915e6ae8347302f33",
"assets/assets/images/country_flag/ne.png": "0b1a54b8a732044590c61afa41c06aae",
"assets/assets/images/country_flag/cu.png": "db824681a2fe3f7d861cbed6f3923490",
"assets/assets/images/country_flag/bf.png": "d3f0ec8356c53c06d19904e574e22c9d",
"assets/assets/images/country_flag/bg.png": "2a01086e78d7eb398287e69be384c2c1",
"assets/assets/images/country_flag/cc.png": "115b18348352ba6f61d35a8b1412a002",
"assets/assets/images/country_flag/gb-wls.png": "6b22a1f1b6af2ead083f53ed5d44b5ff",
"assets/assets/images/country_flag/mh.png": "b1126e2488cdc8d62707f939643feadf",
"assets/assets/images/country_flag/za.png": "41faad156d034749517437b21e9c6a39",
"assets/assets/images/country_flag/uy.png": "6d18b011befa527504da504431dcc83c",
"assets/assets/images/country_flag/wf.png": "993b0b98945bd79d9c2a99cb940e1583",
"assets/assets/images/country_flag/vu.png": "95408d2c7a230d08117f3603440ca28f",
"assets/assets/images/country_flag/tj.png": "e6ba2b0c562b1010d289f842147d53be",
"assets/assets/images/app_icons/windows_icon.png": "8e8207e7d65dcb4c49e4f79267f82071",
"assets/assets/images/app_icons/linux_icon.png": "8e8207e7d65dcb4c49e4f79267f82071",
"assets/assets/images/app_icons/macos_icon.png": "2023cd47b68e3d6d8b4d09a5334475df",
"assets/assets/images/app_icons/web_icon.png": "8e8207e7d65dcb4c49e4f79267f82071",
"assets/assets/images/app_icons/launcher_icon.png": "dce740cec137b192beeae66d0be8300c",
"assets/assets/images/app_icons/ios_icon.png": "4de48b3bea8bf7e442eca5efaf42ddd3",
"assets/assets/images/currency_flag/dop.png": "63cd7e6b08df4dd98340e1c6d83a01a6",
"assets/assets/images/currency_flag/xpt.png": "2a8546fcd78fed3bd03a9064d9ac43c4",
"assets/assets/images/currency_flag/cdf.png": "58f675bf488c7560eeb7f835973a9614",
"assets/assets/images/currency_flag/syp.png": "585d6aefe0b38e0d612a963d8dc2834b",
"assets/assets/images/currency_flag/rsd.png": "55c94f43b51f24c7b4a218eaa6431613",
"assets/assets/images/currency_flag/bwp.png": "c02ae0c7f927c36f096168ee6c9e16d2",
"assets/assets/images/currency_flag/lvl.png": "c9a07c82678bc49a1427598ebc91e7d8",
"assets/assets/images/currency_flag/uni.png": "4babe4ca366e06e0445dc5885b21c9f9",
"assets/assets/images/currency_flag/bnd.png": "890eacf9dea6053722c1c794bd919dee",
"assets/assets/images/currency_flag/chf.png": "ef33c4d456761564b56f367e0a7b1294",
"assets/assets/images/currency_flag/xdr.png": "63a50c583b2d13351ca00a88180bd292",
"assets/assets/images/currency_flag/nad.png": "3ab329035e746e9756e0b1ce2d3a6deb",
"assets/assets/images/currency_flag/ern.png": "b05bd1f9252ee677b6ca12fd5f50952c",
"assets/assets/images/currency_flag/uyu.png": "6c432d1d4a77ed3b2f43b7bee5f40bd3",
"assets/assets/images/currency_flag/bob.png": "2036f54e77de23cebc24daf99ed11c95",
"assets/assets/images/currency_flag/bbd.png": "d189d0a7d853cbae0f24a01f8ae45591",
"assets/assets/images/currency_flag/byn.png": "7b611127f0f3aef856b5eadc6eede021",
"assets/assets/images/currency_flag/krw.png": "d5bab5d3fd4ec58a49bed0ade55cede0",
"assets/assets/images/currency_flag/gip.png": "fb55c8dc145cd77361bdcc92269672a7",
"assets/assets/images/currency_flag/afn.png": "94f9e4ab524ee57a2095fb7060c0efae",
"assets/assets/images/currency_flag/hnl.png": "47a38c39ddca9920fa13a0e63138887d",
"assets/assets/images/currency_flag/dzd.png": "5a94f2effee3414b3eed86e3a3bb0dd8",
"assets/assets/images/currency_flag/mkd.png": "2e8bc383279815f2ee64a3cd973a709f",
"assets/assets/images/currency_flag/huf.png": "5578af678517e86de98b773c9ba816c8",
"assets/assets/images/currency_flag/qar.png": "4dafea4a10622e8880b05e439439c442",
"assets/assets/images/currency_flag/mru.png": "d815945278cf3544a4b9bcb0f5657cb9",
"assets/assets/images/currency_flag/doge.png": "3f7434ccead9eab7bed8e866bb6dad98",
"assets/assets/images/currency_flag/bam.png": "13d07c7a565b933b922d0fddbb13d47b",
"assets/assets/images/currency_flag/kgs.png": "d9a2b4c07a5ba8dc90c994db9beaaa0d",
"assets/assets/images/currency_flag/nok.png": "9e50ea1abfc3255969e1398a80509660",
"assets/assets/images/currency_flag/ltc.png": "a85a775f342bb026a38e25445491e8c2",
"assets/assets/images/currency_flag/pkg.png": "587d36a261d376b056a1ab00283c9765",
"assets/assets/images/currency_flag/lyd.png": "87936b938a6cd4442fdd62824f6c8b9d",
"assets/assets/images/currency_flag/szl.png": "1e53958e67ce93bb15caeada3e5e6a53",
"assets/assets/images/currency_flag/xpd.png": "9ee3abdbf6113b77a764ee768e26e415",
"assets/assets/images/currency_flag/htg.png": "d0dacca9735e82e1df2699eaafa07753",
"assets/assets/images/currency_flag/mdl.png": "278b551c75df6b7fa6a13373b111ec8a",
"assets/assets/images/currency_flag/xpf.png": "63a50c583b2d13351ca00a88180bd292",
"assets/assets/images/currency_flag/ada.png": "13fc45cc905bc440b56bd03f4ab8b4a7",
"assets/assets/images/currency_flag/pkr.png": "7fb460872ea7f6794c3756df9f60e84f",
"assets/assets/images/currency_flag/ghs.png": "7f313c49616b9976da4b1120e8dfc95c",
"assets/assets/images/currency_flag/btn.png": "b9f7dd41af083223cb58b6a847477868",
"assets/assets/images/currency_flag/pen.png": "91efcaa8e560b05661af4fcf823a18cd",
"assets/assets/images/currency_flag/link.png": "f53f68d19549736325a0593a1eed594f",
"assets/assets/images/currency_flag/irr.png": "8cf7e997c94de942ccbd33ae5a9e9c15",
"assets/assets/images/currency_flag/bzd.png": "2faa1c1ddd471ccc4cbf44078a9ab30e",
"assets/assets/images/currency_flag/aed.png": "3e7713782e91a10bf1f456d78217d56e",
"assets/assets/images/currency_flag/std.png": "329e2c00e3e1c22fb0971c16e3df1f89",
"assets/assets/images/currency_flag/sar.png": "00932f88fc829c1df92be622e32d7d22",
"assets/assets/images/currency_flag/jmd.png": "705eae3f922ba42512b7722ded2f492b",
"assets/assets/images/currency_flag/mga.png": "3575a7b7b3ffd94b2859527a9c5e2f01",
"assets/assets/images/currency_flag/tjs.png": "fc0e41bbb11ebaa4d3ed2e1cb7194ef6",
"assets/assets/images/currency_flag/dot.png": "da052540eb9030497a4d6db87c11a93e",
"assets/assets/images/currency_flag/all.png": "b312d985a49e7f8533b4cfafc88b04e3",
"assets/assets/images/currency_flag/mwk.png": "aa16afc004cd9e29013421c511700c14",
"assets/assets/images/currency_flag/nio.png": "587db9d9e2f1469f385b28da531a9602",
"assets/assets/images/currency_flag/wst.png": "5a9fe51fe2d50481714c03bafc460d1c",
"assets/assets/images/currency_flag/lkr.png": "a394e15a49f2ee417381f646c7ed3cea",
"assets/assets/images/currency_flag/pyg.png": "8171edd968bdcdd20882cbc6edd15e6d",
"assets/assets/images/currency_flag/ils.png": "8f1a9384ffbab8192620adf68825f490",
"assets/assets/images/currency_flag/ttd.png": "4a66653abe1220894b0ebec6e2953463",
"assets/assets/images/currency_flag/aoa.png": "ece70abed321127bace13eed139a7e66",
"assets/assets/images/currency_flag/sek.png": "f8b0e0df8784d897918f928d2821a7fe",
"assets/assets/images/currency_flag/awg.png": "ac0586ea685e513ac916b185f5a81f60",
"assets/assets/images/currency_flag/zmk.png": "6ab3cfe383816f209416e1cbc00fd1b4",
"assets/assets/images/currency_flag/ang.png": "d351c99deae029226da67380b91dde10",
"assets/assets/images/currency_flag/xlm.png": "92166e575fc69c89affde5316b6149c6",
"assets/assets/images/currency_flag/lrd.png": "3a1711f590191351034eb5f369fa464a",
"assets/assets/images/currency_flag/bhd.png": "cc7fba8d154ac788a1e3ac4f95ec0fe5",
"assets/assets/images/currency_flag/pab.png": "6a2816e1509f1ac056ab6109fb3303c0",
"assets/assets/images/currency_flag/kyd.png": "f5249194880b25ebaed522f2521b1e27",
"assets/assets/images/currency_flag/omr.png": "af8351cf1d27cf5fb86215c7699f3bc1",
"assets/assets/images/currency_flag/mzn.png": "3d3a0c4cfa6e7d22c5e2b0a5631666c2",
"assets/assets/images/currency_flag/mad.png": "d8af07a23cadbc571faeefbf0c501740",
"assets/assets/images/currency_flag/vuv.png": "8d0fe356fb9bb87092f7220086f4ee43",
"assets/assets/images/currency_flag/sgd.png": "d0cfa3d2478accb47e6b3d22c7a93a59",
"assets/assets/images/currency_flag/xbt.png": "bd03448e254c8ad0d5245d6c119d8fca",
"assets/assets/images/currency_flag/mur.png": "6c4787ba66572dd0ffff360999177f1e",
"assets/assets/images/currency_flag/eth.png": "86bbe5e0bb436318753bb278d0461a2c",
"assets/assets/images/currency_flag/gbp.png": "e0c608a51f2eec74cd97ae44c26faa04",
"assets/assets/images/currency_flag/imp.png": "47f7825941ecec5b42a44d4b4adc0e0c",
"assets/assets/images/currency_flag/bdt.png": "38ba8ec7e0a3f5c4231c893f94808e77",
"assets/assets/images/currency_flag/bgn.png": "3641554386ac8da430c8b7b2433ea6c0",
"assets/assets/images/currency_flag/ron.png": "8b121d4cb7399b4213ade997c99c7c4a",
"assets/assets/images/currency_flag/jpy.png": "3ea8ca4f2a33fe31f6408336bbed87fb",
"assets/assets/images/currency_flag/srd.png": "fdb1f97e8faff78ebc20d83f5b5f49a1",
"assets/assets/images/currency_flag/spl.png": "ac94602e359d7869a554e63c57f6d0a3",
"assets/assets/images/currency_flag/dkk.png": "adf542f730506bddea9693bf76f6c7bc",
"assets/assets/images/currency_flag/cop.png": "9f55eb6f80bc30908d998df445cdd67a",
"assets/assets/images/currency_flag/xcd.png": "63a50c583b2d13351ca00a88180bd292",
"assets/assets/images/currency_flag/myr.png": "7723675e483a75f938f1d4886d62ae0d",
"assets/assets/images/currency_flag/cve.png": "e7e536eff7b1ab03c0242bb3a7b3fb17",
"assets/assets/images/currency_flag/hkd.png": "c4279728400b7fd08fcfdcff109b7ac0",
"assets/assets/images/currency_flag/usd.png": "44e9c39cefd7ca5671a63e510866495e",
"assets/assets/images/currency_flag/rub.png": "c82d67fa18ef4f5ca3724b33d445c39c",
"assets/assets/images/currency_flag/kmf.png": "944be831b1763d23d6d590c818020490",
"assets/assets/images/currency_flag/bif.png": "97996098e846020296278688af846e7b",
"assets/assets/images/currency_flag/yer.png": "9916dbb4e660e4810975ad803eb057ca",
"assets/assets/images/currency_flag/gnf.png": "bad185ed5e1d4df439642c4fb23de9ee",
"assets/assets/images/currency_flag/brl.png": "1d42e70dc68f597890b10e95c812d60f",
"assets/assets/images/currency_flag/xof.png": "63a50c583b2d13351ca00a88180bd292",
"assets/assets/images/currency_flag/tmt.png": "7668bfd8da6fe83ae2f1b4f89cad1a81",
"assets/assets/images/currency_flag/clp.png": "c3347493c2dc6db34a69734e7845d347",
"assets/assets/images/currency_flag/sdg.png": "d153e614a571a72932ebc090ecffce43",
"assets/assets/images/currency_flag/tvd.png": "60f91d699176292750810db550905ea4",
"assets/assets/images/currency_flag/fkp.png": "a49a3b0bb31a8e4a9c27661f43562bc4",
"assets/assets/images/currency_flag/kzt.png": "fb3eed65bc322cc2c8f083be072607cb",
"assets/assets/images/currency_flag/rwf.png": "8faf09371e9d80a1b944cbcbc6fa13f0",
"assets/assets/images/currency_flag/pln.png": "c0ff95d3d3f326b6df5f081988eb2b44",
"assets/assets/images/currency_flag/kwd.png": "698ac3d0b8471c76f6b1b66436eed5b1",
"assets/assets/images/currency_flag/npr.png": "21f38c967141346aaeafff80f3430928",
"assets/assets/images/currency_flag/inr.png": "3ef5ade4c2dece87d5f92dbe09a7b94c",
"assets/assets/images/currency_flag/bsd.png": "f5761ed10eec59f49e8211b3997824fb",
"assets/assets/images/currency_flag/czk.png": "7ac643ffd80edaa7c762aca9155046d2",
"assets/assets/images/currency_flag/cyp.png": "098eaee3c1920ff900a3896989c17411",
"assets/assets/images/currency_flag/zmw.png": "6ab3cfe383816f209416e1cbc00fd1b4",
"assets/assets/images/currency_flag/hrk.png": "d11c0650f90d9f8427e143bf119afaa9",
"assets/assets/images/currency_flag/top.png": "6524af7fcce3a8a2fbc69957d0aad9d9",
"assets/assets/images/currency_flag/cny.png": "5c07eccb9abbc1ab651b1cd09772763f",
"assets/assets/images/currency_flag/aud.png": "3f56018dc8ad92dae041dbbf84e062ca",
"assets/assets/images/currency_flag/shp.png": "8d2adc3bc8b662b10d615e95ec0007b7",
"assets/assets/images/currency_flag/tmm.png": "7668bfd8da6fe83ae2f1b4f89cad1a81",
"assets/assets/images/currency_flag/mnt.png": "1a41e60d2c2ffad8c1e907348f3695df",
"assets/assets/images/currency_flag/mop.png": "5f1cf80a0ece0b3784b8baf0704e0c01",
"assets/assets/images/currency_flag/mxn.png": "266bb2e28b14724572aee0e1b0cb291e",
"assets/assets/images/currency_flag/mvr.png": "32705bd40d7826e721ef27ba280186e8",
"assets/assets/images/currency_flag/tzs.png": "f8287776b33cc956ce22a8d5a5ce45db",
"assets/assets/images/currency_flag/gmd.png": "9fc6072dc3fcf1c52820a733a7d57a10",
"assets/assets/images/currency_flag/ngn.png": "cc954e17d3bd0a4ed231298e44450997",
"assets/assets/images/currency_flag/luna.png": "c04c5857c884b0e23e169d642159293d",
"assets/assets/images/currency_flag/gtq.png": "b375f8108fda45a23c64392ecf937b06",
"assets/assets/images/currency_flag/ugx.png": "cfb5b1b67bad7437f93a654264564f5c",
"assets/assets/images/currency_flag/cup.png": "f6ae86e22ea91889fd780a6f28c57a4f",
"assets/assets/images/currency_flag/xau.png": "99470149b6eb89fe4ef91e8d48e74903",
"assets/assets/images/currency_flag/tnd.png": "d78a2f2ba30d17925aadea84af3f5ee7",
"assets/assets/images/currency_flag/jep.png": "7dd31128b697bf323a8042a3b5888dc8",
"assets/assets/images/currency_flag/azn.png": "3437276a5f0f1b4ab496f06dc6048576",
"assets/assets/images/currency_flag/xaf.png": "63a50c583b2d13351ca00a88180bd292",
"assets/assets/images/currency_flag/cuc.png": "f6ae86e22ea91889fd780a6f28c57a4f",
"assets/assets/images/currency_flag/eur.png": "19c49da3227922f792a74e5ac9447f6f",
"assets/assets/images/currency_flag/lsl.png": "f4aff4dfebd8a374a8e9246b1219109c",
"assets/assets/images/currency_flag/gyd.png": "176dd8d0085aab7895176a92e4cd23d0",
"assets/assets/images/currency_flag/fjd.png": "1ecbeaad814e21d20c22b1aeb541e544",
"assets/assets/images/currency_flag/xag.png": "fbfed74e0664d4da3ee675cebb8d17d4",
"assets/assets/images/currency_flag/mmk.png": "ce5ba0b39080303b18c64a45a7cd0ce3",
"assets/assets/images/currency_flag/djf.png": "5db44d2a2af1771374b1f7cc4acff4dc",
"assets/assets/images/currency_flag/zar.png": "d3c75350d18405cf2e758c0bb7c28a5c",
"assets/assets/images/currency_flag/cnh.png": "5c07eccb9abbc1ab651b1cd09772763f",
"assets/assets/images/currency_flag/amd.png": "d4557e8aad46346ede480df12c503297",
"assets/assets/images/currency_flag/etb.png": "fd0d9d31e5443d554e7737f2432c4cb1",
"assets/assets/images/currency_flag/twd.png": "87e84ffa30ea8aab8b1a590d5f8276e7",
"assets/assets/images/currency_flag/vnd.png": "7c30c758643883b11827107b31639e1b",
"assets/assets/images/currency_flag/cad.png": "58cdb94eec80f793284156becd2be569",
"assets/assets/images/currency_flag/sbd.png": "9d8edc91995cc4ffc9c453570ead17db",
"assets/assets/images/currency_flag/ves.png": "01c2fa830bed9c9f4cf2524c38b36781",
"assets/assets/images/currency_flag/ggp.png": "8e0d7697015d7a40ed6c9524eb5dc041",
"assets/assets/images/currency_flag/uzs.png": "532c4a65a45196a93a653afdb60dc75d",
"assets/assets/images/currency_flag/byr.png": "7b611127f0f3aef856b5eadc6eede021",
"assets/assets/images/currency_flag/nzd.png": "5e5bfd2acc4743aae980365899aaadfc",
"assets/assets/images/currency_flag/khr.png": "bd1cff7b49683f58863c32136a6b0607",
"assets/assets/images/currency_flag/iqd.png": "2083e78990d2095dba1c4eae4e717055",
"assets/assets/images/currency_flag/pgk.png": "587d36a261d376b056a1ab00283c9765",
"assets/assets/images/currency_flag/ltl.png": "fbd9a4a98dab2e71bfcc6772a24d3994",
"assets/assets/images/currency_flag/idr.png": "a70c5fef89765c6881a7a9967fe6ac5d",
"assets/assets/images/currency_flag/crc.png": "35c5920ad9a1bec85606c269b06b2237",
"assets/assets/images/currency_flag/try.png": "ac801f06a7945787bc0e6a04337c35a6",
"assets/assets/images/currency_flag/thb.png": "8e65ca15595eb138a7a38ef946032f6d",
"assets/assets/images/currency_flag/sll.png": "a288ef96a0683978dceab349fec76c92",
"assets/assets/images/currency_flag/kpw.png": "2cc61396474a9f5708412bd6f8aa2b67",
"assets/assets/images/currency_flag/gel.png": "18a1eb0493e83234ee98673bfb3e0ff0",
"assets/assets/images/currency_flag/bch.png": "183ec14c1894099124d1f0d04450d448",
"assets/assets/images/currency_flag/egp.png": "30f5442b61b73fa144ad3c9d4a690af0",
"assets/assets/images/currency_flag/php.png": "0850a32457598fb20c6a629237abe56c",
"assets/assets/images/currency_flag/mro.png": "010f9d0466d8029492d42119f245a379",
"assets/assets/images/currency_flag/vef.png": "01c2fa830bed9c9f4cf2524c38b36781",
"assets/assets/images/currency_flag/svc.png": "7b83b476438771e76ea60b3737cccbdc",
"assets/assets/images/currency_flag/kes.png": "40521921ace189298a831353ecaee38d",
"assets/assets/images/currency_flag/uah.png": "d32e7f2306adc25ca8424ce6d0938f0f",
"assets/assets/images/currency_flag/eek.png": "485445edcf7d44d3bd53526e49a0610f",
"assets/assets/images/currency_flag/isk.png": "2f27886f866191a4746ed876518b23d6",
"assets/assets/images/currency_flag/lbp.png": "7e6312b4f0f3f1be2099dc37d5833399",
"assets/assets/images/currency_flag/lak.png": "7d6d1336feb16ec01233619cbbb81d6a",
"assets/assets/images/currency_flag/stn.png": "2dda9417033caf452329eec3f8dddf36",
"assets/assets/images/currency_flag/sos.png": "b8bb69e40e5e22f6814f9aa91af07dbe",
"assets/assets/images/currency_flag/jod.png": "d1d762d7e111a66c64327b55f00cf1ef",
"assets/assets/images/currency_flag/scr.png": "6b492eec347b3c7e7107c17a4f3082f2",
"assets/assets/images/currency_flag/xrp.png": "b4232b38a2da7a3e83fc4631613d4789",
"assets/assets/images/currency_flag/bmd.png": "45d2d746d99e183885107b8b0ee40e48",
"assets/assets/images/currency_flag/ars.png": "db9945b8ca22d615a234f72ff0c907ab",
"assets/assets/db/groupedModels.archieve": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/db/favModels.archieve": "d41d8cd98f00b204e9800998ecf8427e",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
