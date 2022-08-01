const sequelize = require("./dbConnection");
const Product = require("../../models/Products");

const products = [
  {
    title: "Ducky One 2 Mini Pure White",
    description:
      "PBT Double Shot seamless keycaps, 3 level adjustable feet and Detachable USB-C cable, Brand new RGB lighting modes and mode architecture, 60% size, lightweight and extremely portable.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_5027_large_DKON1861ST-USPDWWT1_7.jpg",
    price: 99.0,
  },
  {
    title: "Vortex Race 3",
    description:
      "Vortex's newest 75% keyboard, the 83-key Race 3! Do you need dedicated arrow keys that your 60% doesn't provide, but don't want the size of a TKL? A 75% may be just for you! Most of the keys are in the 'normal' spot, so there's nearly no learning curve for this keyboard.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_VTG83MSLV4YK_1.jpg",
    price: 139.0,
  },
  {
    title: "Varmilo VA87M Moonlight White",
    description:
      "Meet the new, upgraded VA Series V2! The amazing colorways you love have just received a quality upgrade! All keyboards in this series now come with a standard USB-C cable. The kickstand has been upgraded to a double-section kickstand to give you even more options. All LEDs are now North-facing for those keyboards that have them.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_VA87M2WLLPn2W_1.jpg",
    price: 126.0,
  },
  {
    title: "Obinslab Anne Pro 2 Black",
    description:
      "Can be used wired over USB-C or wirelessly over Bluetooth 5.0, Large 1900mAh battery with built-in on/off switch to conserve battery power, ObinsLab Starter companion computer software for programming keyboard layout, function keys, lighting effects, battery life monitoring, macros, and updating firmware, Bluetooth functionality is compatible with Windows, Mac, Linux, iOS, and Android",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_KB181-Black_main.jpg",
    price: 89.0,
  },
  {
    title: "Vortex Core",
    description:
      "CNC aluminum frame, 3 programmable layers, 40% space-saving form factor, Multi Dye Sub PBT with Black legends.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_VTG47BEG_main.jpg",
    price: 89.0,
  },
  {
    title: "Leopold FC660C Black",
    description:
      "Electrocapacitive keyboard featuring Topre switches, Dip switches allow for customizing certain key functions, Space saving form factor.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_FC660CEBL_main.jpg",
    price: 239.0,
  },
  {
    title: "Vortex Tab 90M",
    description:
      "Colored Modifiers: Colored Dye Sublimated PBT with Black legends, Change layout with pre-programmed key combination - QWERTY, COLEMAK, and DVORAK, 3 Programmable layers.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_Tab90M_main.jpg",
    price: 159.0,
  },
  {
    title: "Ducky One 3 Matcha",
    description:
      "Dual layer hotswap PCB w/ exclusive Kailh yellow hotswap sockets, Equipped with dual-layer high-grade silicone and EVA foam sound dampeners, Thick, PBT Double Shot seamless keycaps, 3 level adjustable feet and detachable braided USB Type-C cable.",
    img_url: "",
    price: 109.0,
  },
  {
    title: "Ducky Shine 7 Gunmetal",
    description:
      "Zinc alloy top case 3x stronger than aluminum, PBT Double-shot seamless keycaps, Supports RAZER Chroma Broadcast, Ducky Macro 2.0, and Ducky's newest RGB software, German made Cherry MX key switches.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_DKSH1808ST-USPDAHT1_11.jpg",
    price: 169.0,
  },
  {
    title: "Vortex ViBE",
    description:
      "3 Programmable layers, Change layout with 3 pre-programmed key combinations - QWERTY, COLEMAK, and DVORAK, Ability to turn on TKL mode.",
    img_url:
      "https://mechanicalkeyboards.com/shop/images/products/large_VTG79NSLV_main.jpg",
    price: 139.0,
  },
];

(async () => {
  await sequelize.sync({ force: true });
  console.log(`\n=== DB CONNECTED ===\n`);
  await Product.bulkCreate(products);
  console.log(`\n=== PRODUCTS SEEDED ===\n`);

  process.exit(0);
})();
