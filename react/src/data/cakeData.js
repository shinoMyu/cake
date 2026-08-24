import swissRoll1 from "../assets/image/Swiss Roll-1.jpg";
import swissRoll2 from "../assets/image/Swiss Roll-2.jpg";
import swissRoll3 from "../assets/image/Swiss Roll-3.jpg";
import moltenChocolateCake from "../assets/image/Molten Chocolate Cake.jpg";
import cupCake1 from "../assets/image/Cupcake-1.jpg"
import cupCake2 from "../assets/image/Cupcake-2.jpg"
import wholeCake1 from "../assets/image/Whole Cake-1.jpg"
import wholeCake2 from "../assets/image/Whole Cake-2.jpg"
import wholeCake3 from "../assets/image/Whole Cake-3.jpg"
import wholeCake4 from "../assets/image/Whole Cake-4.jpg"
import wholeCake5 from "../assets/image/Whole Cake-5.jpg"
import wholeCake6 from "../assets/image/Whole Cake-6.jpg"
import wholeCake7 from "../assets/image/Whole Cake-7.jpg"
import wholeCake8 from "../assets/image/Whole Cake-8.jpg"
import wholeCake9 from "../assets/image/Whole Cake-9.jpg"
import wholeCake10 from "../assets/image/Whole Cake-10.jpg"

export const cakeData = [
    {
        id: "cake01",
        category: "roll",
        image: swissRoll1,
        name: {
            en: "Swiss Roll",
            traditional: "蛋糕捲",
            jp: "ロールケーキ",
        },
        flavor: {
            en: "Cocoa, Black Tea, Original, Matcha",
            traditional: "可可、紅茶、原味、抹茶",
            jp: "ココア、紅茶、プレーン、抹茶",
        }
    },
    {
        id: "cake02",
        category: "roll",
        image: swissRoll2,
        name: {
            en: "Swiss Roll",
            traditional: "蛋糕捲",
            jp: "ロールケーキ",
        },
        flavor: {
            en: "Cocoa, Black Tea",
            traditional: "可可、紅茶",
            jp: "ココア、紅茶",
        },
        description: {
            en: "Cocoa and black tea flavors side by side, finished with fluffy cream and charming animal cookies.",
            traditional: "可可與紅茶蛋糕捲並排搭配，搭配鮮奶油與可愛造型裝飾（小熊餅乾與蝴蝶餅乾），療癒感滿分！",
            jp: "ココアと紅茶のロールケーキを並べて、ふわふわ生クリームとかわいいクッキーのデコレーション付き。",
        }
    },
    {
        id: "cake03",
        category: "roll",
        image: swissRoll3,
        name: {
            en: "Swiss Roll",
            traditional: "蛋糕捲",
            jp: "ロールケーキ",
        },
        flavor: {
            en: "Magnum, Cocoa",
            traditional: "Magnum、可可",
            jp: "ヘーゼルナッツチョコレート、ココア",
        },
        description: {
            en: "Topped with whipped cream, this cake is decorated with a tiny bear-shaped cookie, blueberries, and a heart accent.",
            traditional: "以經典 Magnum 口味為靈感，搭配綿密奶油，配上小熊造型餅乾、愛心與藍莓裝飾，充滿浪漫氣氛。",
            jp: "ロールケーキにたっぷりの生クリームをのせて、小さなクマ型ビスケットとブルーベリー、ハートのトッピングで仕上げました。",
        }
    },
    {
        id: "cake04",
        category: "others",
        image: moltenChocolateCake,
        name: {
            en: "Molten Chocolate Cake",
            traditional: "爆漿巧克力蛋糕",
            jp: "フォンダンショコラ",
        },
        description: {
            en: "A rich, molten chocolate cake topped with glossy chocolate sauce.",
            traditional: "蛋糕體鬆軟細緻，內層包裹香濃巧克力醬與濃郁奶霜，層次豐富。",
            jp: "とろけるような濃厚フォンダンショコラに、チョコソースをたっぷりかけたリッチな味わい。",            
        }
    },
    {
        id: "cake05",
        category: "cupcake",
        image: cupCake1,
        name: {
            en: "Cupcake",
            traditional: "杯子蛋糕",
            jp: "カップケーキ",
        },
        description: {
            en: "A sweet cupcake topped with whipped cream, fruit, and an adorable bear cookie.",
            traditional: "搭配鮮奶油、水果與綠葉裝飾的小熊杯子蛋糕，清新又療癒。",
            jp: "ふんわり生クリームに、フルーツとくまのクッキーをトッピング。",
        }
    },
    {
        id: "cake06",
        category: "cupcake",
        image: cupCake2,
        name: {
            en: "Cupcake",
            traditional: "杯子蛋糕",
            jp: "カップケーキ",
        },
        description: {
            en: "Colorful mini cakes topped with fruit, cream, and cute cookie bears—sweet and cheerful in every bite.",
            traditional: "繽紛的杯子蛋糕組合，以鮮水果、鮮奶油與可愛的小熊餅乾點綴，甜甜的療癒感滿滿。",
            jp: "フルーツと生クリーム、くまのクッキーをのせたカラフルなカップケーキ。見ても食べても癒されます。",
        }
    },
    {
        id: "cake07",
        category: "whole",
        image: wholeCake1,
        name: {
            en: "Blueberry Cake",
            traditional: "藍莓蛋糕",
            jp: "ブルーベリーケーキ",
        },
        size: {
            en: "6 inch",
            traditional: "6寸",
            jp: "6インチ",
        }
    },
    {
        id: "cake08",
        category: "whole",
        image: wholeCake2,
        name: {
            en: "OREO Cake",
            traditional: "奧利奧蛋糕",
            jp: "オレオケーキ",
        },
        size: {
            en: "6 inch",
            traditional: "6寸",
            jp: "6インチ",
        }
    },
    {
        id: "cake09",
        category: "whole",
        image: wholeCake3,
        name: {
            en: "Pistachio Cake",
            traditional: "開心果蛋糕",
            jp: "ピスタチオケーキ",
        },
        size: {
            en: "6 inch",
            traditional: "6寸",
            jp: "6インチ",
        }
    },
    {
        id: "cake10",
        category: "whole",
        image: wholeCake4,
        name: {
            en: "Whole Cake",
            traditional: "水果蛋糕",
            jp: "フルーツケーキ",
        },
        size: {
            en: "4 inch",
            traditional: "4寸",
            jp: "4インチ",
        }
    },   
    {
        id: "cake11",
        category: "whole",
        image: wholeCake5,
        name: {
            en: "Whole Cake",
            traditional: "水果蛋糕",
            jp: "フルーツケーキ",
        },
        size: {
            en: "4 inch",
            traditional: "4寸",
            jp: "4インチ",
        }
    },    
    {
        id: "cake12",
        category: "whole",
        image: wholeCake6,
        name: {
            en: "Whole Cake",
            traditional: "造型蛋糕",
            jp: "ホールケーキ",
        },
        size: {
            en: "6 inch",
            traditional: "6寸",
            jp: "6インチ",
        }
    },
    {
        id: "cake13",
        category: "whole",
        image: wholeCake7,
        name: {
            en: "Whole Cake",
            traditional: "紫色復古蝴蝶結蛋糕",
            jp: "ホールケーキ",
        },
        size: {
            en: "6 inch",
            traditional: "6寸",
            jp: "6インチ",
        },
        description: {
            en: "Purple retro with bow",
            jp: "パープル・レトロ・リボン",
        }
    },    
    {
        id: "cake14",
        category: "whole",
        image: wholeCake8,
        name: {
            en: "Whole Cake",
            traditional: "碎冰藍鮮花蛋糕",
            jp: "ホールケーキ",
        },
        size: {
            en: "8 inch",
            traditional: "8寸",
            jp: "8インチ",
        },
        description: {
            en: "Crystal BlueFloral decoration",
            jp: "アイスブルーフラワーデコレーション",
        }
    },
    {
        id: "cake15",
        category: "whole",
        image: wholeCake9,
        name: {
            en: "Whole Cake",
            traditional: "油畫風鮮花蛋糕",
            jp: "ホールケーキ",
        },
        size: {
            en: "6 inch",
            traditional: "6寸",
            jp: "6インチ",
        },
        style: {
            en: "Style: Oil painting style",
            jp: "スタイル: 油絵風",
        },
        description: {
            en: "Floral decoration",
            jp: "フラワーデコレーション",
        }
    },
    {
        id: "cake16",
        category: "whole",
        image: wholeCake10,
        name: {
            en: "Whole Cake",
            traditional: "鮮花蛋糕",
            jp: "ホールケーキ",
        },
        size: {
            en: "6 inch",
            traditional: "6寸",
            jp: "6インチ",
        },
        description: {
            en: "Floral decoration",
            jp: "フラワーデコレーション",
        }
    }
]