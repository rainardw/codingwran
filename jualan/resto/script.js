const menuItems = [
    // ================== RAMEN ==================
    {
        id: 1,
        name: "Shoyu Ramen",
        description: "Ramen dengan kaldu ayam gurih dan kecap shoyu, dilengkapi chashu, telur, dan nori.",
        price: 45000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Miso Ramen",
        description: "Ramen dengan kuah miso yang kaya rasa, ditambah jagung, daging, dan sayuran.",
        price: 48000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Spicy Tonkotsu Ramen",
        description: "Ramen kuah tonkotsu dengan level kepedasan bisa disesuaikan, dilengkapi telur dan chashu.",
        price: 52000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1617093727343-5a0c4b67aae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Shio Ramen",
        description: "Ramen dengan kuah asin gurih yang ringan, dilengkapi seafood dan sayuran segar.",
        price: 47000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1630841539293-b206b78b9527?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        name: "Curry Ramen",
        description: "Ramen dengan kuah kari Jepang yang kental, disajikan dengan ayam katsu.",
        price: 55000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        name: "Seafood Ramen",
        description: "Ramen dengan kaldu seafood gurih, dilengkapi udang, cumi, dan kerang.",
        price: 58000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1565809099582-1d9e08b34588?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        name: "Vegetarian Ramen",
        description: "Ramen vegetarian dengan kaldu sayuran, tahu, jamur, dan sayuran segar.",
        price: 42000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 34,
        name: "Black Garlic Ramen",
        description: "Ramen dengan kuah tonkotsu yang dicampur bawang hitam, memberikan rasa yang dalam dan unik.",
        price: 56000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 35,
        name: "Tsukemen",
        description: "Mie yang disajikan terpisah dengan kuah kental, memungkinkan Anda mencelupkan mie ke kuah.",
        price: 53000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 36,
        name: "Tantanmen Ramen",
        description: "Ramen dengan kuah pedas khas Sichuan, menggunakan daging babi cincang dan wijen.",
        price: 57000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1617093727343-5a0c4b67aae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 37,
        name: "Chicken Paitan Ramen",
        description: "Ramen dengan kuah ayam putih yang kaya dan creamy, dilengkapi daging ayam empuk.",
        price: 51000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 56,
        name: "Mazemen",
        description: "Ramen tanpa kuah dengan saus kental yang melapisi mie, disajikan dengan telur mentah.",
        price: 54000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 57,
        name: "Chashu Ramen",
        description: "Ramen dengan potongan chashu yang melimpah, direndam dalam saus spesial.",
        price: 60000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 58,
        name: "Kimchi Ramen",
        description: "Ramen dengan tambahan kimchi segar, memberikan rasa asam pedas yang segar.",
        price: 52000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 59,
        name: "Double Soup Ramen",
        description: "Perpaduan dua jenis kaldu (ayam dan babi) yang menciptakan rasa yang kompleks.",
        price: 58000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 60,
        name: "Hiyashi Chuka",
        description: "Ramen dingin dengan mie kenyal, saus wijen, dan topping segar.",
        price: 47000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1630841539293-b206b78b9527?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 61,
        name: "Tokyo Style Ramen",
        description: "Ramen gaya Tokyo dengan kuah shoyu yang jernih dan chashu lembut.",
        price: 49000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 62,
        name: "Sapporo Miso Ramen",
        description: "Miso ramen gaya Sapporo dengan tambahan mentega dan jagung.",
        price: 56000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 63,
        name: "Hakata Tonkotsu Ramen",
        description: "Ramen gaya Hakata dengan kuah tonkotsu yang putih kental dan mie tipis.",
        price: 57000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1617093727343-5a0c4b67aae7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 64,
        name: "Vegan Ramen",
        description: "Ramen 100% vegan dengan kaldu sayuran dan protein nabati.",
        price: 44000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 65,
        name: "Spicy Miso Ramen",
        description: "Miso ramen dengan level pedas yang dapat disesuaikan.",
        price: 54000,
        category: "ramen",
        image: "https://images.unsplash.com/photo-1557872943-16a5ac26437e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    
    // ================== SUSHI ==================
    {
        id: 66,
        name: "Salmon Nigiri (2 pcs)",
        description: "Irisan salmon segar di atas nasi sushi, disajikan dengan wasabi.",
        price: 35000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 67,
        name: "Tuna Nigiri (2 pcs)",
        description: "Irisan tuna segar di atas nasi sushi, kaya akan protein.",
        price: 38000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 68,
        name: "California Roll (8 pcs)",
        description: "Roll dengan kepiting, alpukat, dan mentimun, dibalur tobiko.",
        price: 45000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 69,
        name: "Spicy Tuna Roll (8 pcs)",
        description: "Roll dengan tuna pedas dan mentimun, dibalur saus pedas.",
        price: 48000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 70,
        name: "Ebi Tempura Roll (8 pcs)",
        description: "Roll dengan udang tempura, alpukat, dan saus spesial.",
        price: 52000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 71,
        name: "Salmon Avocado Roll (8 pcs)",
        description: "Roll dengan salmon segar dan alpukat, sederhana namun lezat.",
        price: 47000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 72,
        name: "Rainbow Roll (8 pcs)",
        description: "California roll dengan berbagai irisan ikan segar di atasnya.",
        price: 58000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 73,
        name: "Dragon Roll (8 pcs)",
        description: "Roll dengan unagi dan alpukat, dibentuk seperti naga.",
        price: 62000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 74,
        name: "Sashimi Mix (12 pcs)",
        description: "Berbagai irisan ikan segar (salmon, tuna, yellowtail), tanpa nasi.",
        price: 85000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 75,
        name: "Unagi Nigiri (2 pcs)",
        description: "Ikan belut panggang dengan saus unagi di atas nasi sushi.",
        price: 42000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 76,
        name: "Caterpillar Roll (8 pcs)",
        description: "Roll dengan unagi dan mentimun, dilapisi alpukat seperti ulat.",
        price: 56000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 77,
        name: "Spider Roll (8 pcs)",
        description: "Roll dengan soft shell crab goreng, alpukat, dan mentimun.",
        price: 59000,
        category: "sushi",
        image: "https://images.unsplash.com/photo-1553621042-f6e147245754?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    
    // ================== APPETIZER / HIDANGAN PEMBUKA ==================
    {
        id: 8,
        name: "Chicken Karaage",
        description: "Ayam goreng khas Jepang dengan balutan tepung yang renyah, disajikan dengan saus mayo.",
        price: 35000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 9,
        name: "Gyoza (6 pcs)",
        description: "Dumpling isi daging dan sayuran, disajikan dengan saus gyoza khas.",
        price: 32000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 10,
        name: "Edamame",
        description: "Kacang edamame rebus dengan taburan garam laut, camilan sehat dan nikmat.",
        price: 18000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1596703923338-48f1c07e4f2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 11,
        name: "Takoyaki (6 pcs)",
        description: "Bola-bola gurih berisi potongan gurita, disajikan dengan saus takoyaki.",
        price: 28000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1585417791023-7b68d3fda30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 12,
        name: "Agedashi Tofu",
        description: "Tahu goreng dengan tepung yang renyah, disajikan dengan kuah dashi.",
        price: 25000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 13,
        name: "Seaweed Salad",
        description: "Salad rumput laut segar dengan dressing wijen yang khas.",
        price: 22000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 38,
        name: "Chawanmushi",
        description: "Custard telur kukus dengan isi jamur, ayam, dan udang, disajikan hangat.",
        price: 30000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 39,
        name: "Ebi Fry (3 pcs)",
        description: "Udang goreng dengan tepung roti, disajikan dengan saus tartar.",
        price: 38000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 40,
        name: "Harumaki (4 pcs)",
        description: "Spring roll isi sayuran dan daging, goreng renyah, disajikan dengan saus asam manis.",
        price: 27000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 41,
        name: "Hiyayakko",
        description: "Tahu dingin dengan topping katsuobushi, jahe, dan daun bawang.",
        price: 20000,
        category: "appetizer",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    
    // ================== MAKANAN SAMPINGAN ==================
    {
        id: 14,
        name: "Chicken Katsu",
        description: "Ayam goreng tepung krispi dengan saus spesial, cocok sebagai hidangan tambahan.",
        price: 38000,
        category: "side",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 15,
        name: "Ebi Tempura (5 pcs)",
        description: "Udang goreng tepung tempura yang renyah, disajikan dengan saus tempura.",
        price: 42000,
        category: "side",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 16,
        name: "Yakitori (3 tusuk)",
        description: "Sate ayam khas Jepang dengan saus yakitori yang manis gurih.",
        price: 30000,
        category: "side",
        image: "https://images.unsplash.com/photo-1583623025817-1801705d5752?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 17,
        name: "Onigiri (3 pcs)",
        description: "Nasi kepal isi tuna mayo, salmon, atau plum, dibungkus nori.",
        price: 25000,
        category: "side",
        image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 18,
        name: "Korokke (3 pcs)",
        description: "Kroket kentang isi daging cincang, goreng renyah.",
        price: 28000,
        category: "side",
        image: "https://images.unsplash.com/photo-1615361200145-ea6e6c5f4b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 42,
        name: "Kushikatsu (5 tusuk)",
        description: "Berbagai macam bahan digoreng dengan tusukan, disajikan dengan saus spesial.",
        price: 35000,
        category: "side",
        image: "https://images.unsplash.com/photo-1583623025817-1801705d5752?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 43,
        name: "Okonomiyaki Mini",
        description: "Panekuk Jepang versi mini dengan topping sesuai selera.",
        price: 32000,
        category: "side",
        image: "https://images.unsplash.com/photo-1585417791023-7b68d3fda30f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 44,
        name: "Nasu Dengaku",
        description: "Terong panggang dengan saus miso manis, lembut dan gurih.",
        price: 26000,
        category: "side",
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 45,
        name: "Buta Kakuni",
        description: "Potongan daging babi yang dimasak hingga empuk dengan bumbu khas.",
        price: 45000,
        category: "side",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    
    // ================== DESSERT & JAJANAN ==================
    {
        id: 19,
        name: "Dorayaki",
        description: "Kue tradisional Jepang dengan isi kacang merah, lembut dan manis.",
        price: 20000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 20,
        name: "Mochi Ice Cream (3 pcs)",
        description: "Mochi dengan isi es krim berbagai rasa, lembut dan menyegarkan.",
        price: 35000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 21,
        name: "Taiyaki",
        description: "Kue berbentuk ikan dengan berbagai isian, seperti coklat, kacang merah, atau keju.",
        price: 18000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1628992682633-bf2d40cb595f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 22,
        name: "Matcha Cheesecake",
        description: "Cheesecake dengan rasa matcha yang khas, lembut dan tidak terlalu manis.",
        price: 35000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 23,
        name: "Warabi Mochi",
        description: "Mochi yang terbuat dari tepung warabi, disajikan dengan kinako dan kuah gula.",
        price: 25000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 24,
        name: "Anmitsu",
        description: "Dessert tradisional dengan agar-agar, buah, kacang merah, dan sirup.",
        price: 28000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 25,
        name: "Daifuku (3 pcs)",
        description: "Mochi berisi kacang merah manis, tersedia berbagai varian rasa.",
        price: 22000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1615361200145-ea6e6c5f4b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 46,
        name: "Matcha Parfait",
        description: "Parfait dengan lapisan matcha, es krim, sereal, dan buah.",
        price: 38000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 47,
        name: "Shiratama Dango (3 pcs)",
        description: "Bola-bola tepung beras dengan tekstur kenyal, disajikan dengan kuah gula.",
        price: 23000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 48,
        name: "Purple Sweet Potato Tart",
        description: "Tart dengan isi ubi ungu manis, tekstur lembut dan rasa alami.",
        price: 32000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 49,
        name: "Yokan",
        description: "Jelly manis dari kacang merah, tekstur padat dan tidak terlalu manis.",
        price: 19000,
        category: "dessert",
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    
    // ================== MINUMAN ==================
    {
        id: 26,
        name: "Matcha Latte",
        description: "Minuman matcha dengan susu pilihan, disajikan panas atau dingin.",
        price: 25000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1559177581-515ac74a46d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 27,
        name: "Ramune Soda",
        description: "Minuman soda khas Jepang dengan botol unik dan berbagai rasa pilihan.",
        price: 22000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 28,
        name: "Calpico",
        description: "Minuman susu fermentasi khas Jepang dengan rasa yang menyegarkan.",
        price: 18000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 29,
        name: "Sakura Tea",
        description: "Teh dengan aroma sakura yang harum, disajikan panas.",
        price: 15000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 30,
        name: "Japanese Coffee",
        description: "Kopi dengan biji pilihan dari Jepang, disajikan dengan teknik pour over.",
        price: 28000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 31,
        name: "Mugicha",
        description: "Teh barley panggang khas Jepang, disajikan dingin.",
        price: 15000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 32,
        name: "Melon Soda",
        description: "Soda rasa melon dengan es krim float, menyegarkan.",
        price: 25000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 33,
        name: "Umeshu",
        description: "Minuman alkohol plum khas Jepang, bisa disajikan dengan soda.",
        price: 35000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 50,
        name: "Royal Milk Tea",
        description: "Teh susu khas Jepang dengan rasa creamy, disajikan panas atau dingin.",
        price: 20000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 51,
        name: "Yuzu Tea",
        description: "Teh dengan rasa yuzu yang segar, kaya vitamin C.",
        price: 22000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 52,
        name: "Iced Hojicha",
        description: "Teh hojicha panggang yang disajikan dingin, rendah kafein.",
        price: 19000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1559177581-515ac74a46d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 53,
        name: "Sake (1 botol kecil)",
        description: "Minuman beralkohol tradisional Jepang dari fermentasi beras.",
        price: 85000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 54,
        name: "Green Tea Smoothie",
        description: "Smoothie dengan matcha, pisang, dan madu, menyegarkan dan sehat.",
        price: 32000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1559177581-515ac74a46d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 55,
        name: "Fruit Soda Float",
        description: "Soda dengan es krim vanilla dan buah segar pilihan.",
        price: 28000,
        category: "drink",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
];

// State aplikasi
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// DOM Elements - HANYA ELEMEN YANG ADA DI HTML
const menuGrid = document.querySelector('.menu-grid');
const cartIcon = document.getElementById('cartIcon');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const clearCartBtn = document.getElementById('clearCartBtn');
const cartCount = document.querySelector('.cart-count');
const orderForm = document.getElementById('orderForm');
const filterButtons = document.querySelectorAll('.filter-btn');
const notificationCenter = document.getElementById('notificationCenter');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('nav');
const tableNumberInput = document.getElementById('tableNumber');
const currentTableSpan = document.getElementById('currentTable');
const editCartBtn = document.getElementById('editCart');
const cartItemsPreview = document.getElementById('cartItemsPreview');
const subtotalSpan = document.getElementById('subtotal');
const taxSpan = document.getElementById('tax');
const totalAmountSpan = document.getElementById('totalAmount');
const cartSubtotal = document.getElementById('cartSubtotal');
const cartTax = document.getElementById('cartTax');
const cartTotal = document.getElementById('cartTotal');
const continueOrderBtn = document.getElementById('continueOrder');
const printBillBtn = document.getElementById('printBill');
const clearOrderBtn = document.getElementById('clearOrderBtn');

// Cek apakah elemen modal ada sebelum mengaksesnya
const orderConfirmationModal = document.getElementById('orderConfirmationModal');
const closeConfirmationBtn = document.getElementById('closeConfirmationBtn');
const printOrderBtn = document.getElementById('printOrderBtn');
const confTableNumber = document.getElementById('confTableNumber');
const confCustomerName = document.getElementById('confCustomerName');
const confPaymentMethod = document.getElementById('confPaymentMethod');
const confOrderTime = document.getElementById('confOrderTime');
const confOrderItems = document.getElementById('confOrderItems');
const confSubtotal = document.getElementById('confSubtotal');
const confTax = document.getElementById('confTax');
const confTotal = document.getElementById('confTotal');
const confOrderNotes = document.getElementById('confOrderNotes');
const confNotesText = document.getElementById('confNotesText');

// Cek elemen custom modal
const customModal = document.querySelector('.custom-modal-overlay');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalMessage = document.getElementById('modalMessage');
const modalIcon = document.getElementById('modalIcon');
const modalCancelBtn = document.getElementById('modalCancelBtn');
const modalConfirmBtn = document.getElementById('modalConfirmBtn');
const loadingSpinner = document.getElementById('loadingSpinner');

// Format harga ke Rupiah
function formatRupiah(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// ================================
// FUNGSI SEDERHANA UNTUK NOTIFIKASI
// ================================

function showNotification(type, title, message, duration = 4000) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icons = {
        'success': 'fas fa-check-circle',
        'error': 'fas fa-exclamation-circle',
        'warning': 'fas fa-exclamation-triangle',
        'info': 'fas fa-info-circle'
    };
    
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="${icons[type] || 'fas fa-info-circle'}"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    if (notificationCenter) {
        notificationCenter.appendChild(notification);
    }
    
    // Auto remove setelah duration
    setTimeout(() => {
        removeNotification(notification);
    }, duration);
    
    // Close button handler
    notification.querySelector('.notification-close').addEventListener('click', () => {
        removeNotification(notification);
    });
    
    return notification;
}

function removeNotification(notification) {
    notification.style.animation = 'slideOutRight 0.5s forwards';
    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 500);
}

// Fungsi alert menggunakan modal custom
function showAlert(title, message, type = 'info') {
    return new Promise((resolve) => {
        if (!customModal) {
            // Jika modal tidak ada, fallback ke alert biasa (sebagai cadangan)
            alert(`${title}\n\n${message}`);
            resolve(true);
            return;
        }

        // Set konten modal
        modalTitle.textContent = title;
        modalSubtitle.textContent = '';
        modalMessage.textContent = message;

        // Atur ikon berdasarkan type
        const icons = {
            'success': 'fas fa-check-circle',
            'error': 'fas fa-exclamation-circle',
            'warning': 'fas fa-exclamation-triangle',
            'info': 'fas fa-info-circle'
        };
        modalIcon.innerHTML = `<i class="${icons[type] || 'fas fa-info-circle'}"></i>`;

        // Tampilkan tombol cancel hanya jika type warning/error
        modalCancelBtn.style.display = type === 'warning' || type === 'error' ? 'inline-block' : 'none';

        // Tampilkan modal
        customModal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Handle tombol confirm
        modalConfirmBtn.onclick = () => {
            customModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            resolve(true);
        };

        // Handle tombol cancel
        modalCancelBtn.onclick = () => {
            customModal.classList.remove('active');
            document.body.style.overflow = 'auto';
            resolve(false);
        };

        // Tutup modal jika klik ESC
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                customModal.classList.remove('active');
                document.body.style.overflow = 'auto';
                resolve(false);
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    });
}

// ================================
// FUNGSI UTAMA MENU & KERANJANG
// ================================

// Tampilkan menu items
function renderMenuItems(filter = 'all') {
    menuGrid.innerHTML = '';
    currentFilter = filter;
    
    const filteredItems = filter === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === filter);
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = `
            <div class="no-items">
                <i class="fas fa-utensils"></i>
                <h3>Belum ada menu untuk kategori ini</h3>
                <p>Silakan pilih kategori menu lainnya.</p>
            </div>
        `;
        return;
    }
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.category = item.category;
        
        const categoryText = {
            'ramen': 'Ramen',
            'sushi': 'Sushi',
            'appetizer': 'Appetizer',
            'side': 'Sampingan',
            'dessert': 'Dessert',
            'drink': 'Minuman'
        }[item.category];
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'">
            <div class="menu-item-content">
                <div class="menu-item-title">
                    <span>${item.name}</span>
                    <span class="menu-item-category">${categoryText}</span>
                </div>
                <p class="menu-item-desc">${item.description}</p>
                <div class="menu-item-footer">
                    <div class="menu-item-price">${formatRupiah(item.price)}</div>
                    <button class="add-to-cart" data-id="${item.id}" title="Tambahkan ke keranjang">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
    
    // Tambahkan event listener ke tombol add to cart
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Tambah item ke keranjang
function addToCart(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const menuItem = menuItems.find(item => item.id === id);
    
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...menuItem,
            quantity: 1
        });
    }
    
    updateCart();
    showNotification('success', `${menuItem.name} ditambahkan ke keranjang!`, 'Item berhasil ditambahkan ke keranjang pesanan Anda.');
}

// Update tampilan keranjang
function updateCart() {
    // Simpan ke localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update jumlah di icon keranjang
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update daftar item di keranjang
    renderCartItems();
    renderCartPreview();
    
    // Update total harga
    updateCartTotals();
}

// Render item di keranjang modal
function renderCartItems() {
    if (!cartItems) return;
    
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Keranjang belanja kosong</p>
                <a href="#menu" class="btn btn-outline">Lihat Menu</a>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-price">${formatRupiah(item.price)}</div>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button class="quantity-btn decrease-btn" data-id="${item.id}">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn increase-btn" data-id="${item.id}">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-item" data-id="${item.id}" title="Hapus item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    // Tambahkan event listener untuk tombol kuantitas
    document.querySelectorAll('.decrease-btn').forEach(button => {
        button.addEventListener('click', decreaseQuantity);
    });
    
    document.querySelectorAll('.increase-btn').forEach(button => {
        button.addEventListener('click', increaseQuantity);
    });
    
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItem);
    });
}

// Render cart preview di sidebar order
function renderCartPreview() {
    if (!cartItemsPreview) return;
    
    cartItemsPreview.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsPreview.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Keranjang belanja kosong</p>
            </div>
        `;
        return;
    }
    
    // Batasi tampilan hanya 5 item teratas di preview
    const itemsToShow = cart.slice(0, 5);
    
    itemsToShow.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item-preview';
        
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <div class="cart-item-details">
                    <span>${item.quantity}x</span>
                    <span class="cart-item-price">${formatRupiah(item.price)}</span>
                </div>
            </div>
            <div class="cart-item-total">
                ${formatRupiah(item.price * item.quantity)}
            </div>
        `;
        
        cartItemsPreview.appendChild(cartItem);
    });
    
    // Tampilkan pesan jika ada lebih dari 5 item
    if (cart.length > 5) {
        const moreItems = document.createElement('div');
        moreItems.className = 'more-items';
        moreItems.innerHTML = `<p>+${cart.length - 5} item lainnya</p>`;
        cartItemsPreview.appendChild(moreItems);
    }
}

// Update total harga
function updateCartTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    // Update di modal cart
    if (cartSubtotal) cartSubtotal.textContent = formatRupiah(subtotal);
    if (cartTax) cartTax.textContent = formatRupiah(tax);
    if (cartTotal) cartTotal.textContent = formatRupiah(total);
    
    // Update di order summary
    if (subtotalSpan) subtotalSpan.textContent = formatRupiah(subtotal);
    if (taxSpan) taxSpan.textContent = formatRupiah(tax);
    if (totalAmountSpan) totalAmountSpan.textContent = formatRupiah(total);
}

// Kurangi jumlah item
function decreaseQuantity(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === id);
    
    if (item.quantity > 1) {
        item.quantity -= 1;
        showNotification('info', `Jumlah ${item.name} dikurangi`, `Sekarang ada ${item.quantity} ${item.name} di keranjang.`);
    } else {
        cart = cart.filter(item => item.id !== id);
        showNotification('warning', `${item.name} dihapus dari keranjang`, 'Item telah dihapus dari keranjang pesanan Anda.');
    }
    
    updateCart();
}

// Tambah jumlah item
function increaseQuantity(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === id);
    
    item.quantity += 1;
    updateCart();
    showNotification('info', `Jumlah ${item.name} ditambah`, `Sekarang ada ${item.quantity} ${item.name} di keranjang.`);
}

// Hapus item dari keranjang
function removeItem(e) {
    const id = parseInt(e.currentTarget.dataset.id);
    const item = cart.find(item => item.id === id);
    
    cart = cart.filter(item => item.id !== id);
    updateCart();
    showNotification('warning', `${item.name} dihapus dari keranjang`, 'Item telah dihapus dari keranjang pesanan Anda.');
}

// Kosongkan keranjang
async function clearCart() {
    if (cart.length === 0) return;
    
    const confirmed = await showAlert('Kosongkan Keranjang', 'Apakah Anda yakin ingin mengosongkan keranjang belanja?', 'warning');
    
    if (confirmed) {
        cart = [];
        updateCart();
        showNotification('success', 'Keranjang Dikosongkan', 'Semua item telah dihapus dari keranjang.');
    }
}

// Hapus seluruh pesanan (keranjang + form)
async function clearOrder() {
    if (cart.length === 0 && !document.getElementById('customerName').value) return;
    
    const confirmed = await showAlert('Hapus Pesanan', 'Apakah Anda yakin ingin menghapus seluruh pesanan? Ini akan mengosongkan keranjang dan form.', 'warning');
    
    if (confirmed) {
        cart = [];
        updateCart();
        orderForm.reset();
        currentTableSpan.textContent = '-';
        showNotification('success', 'Pesanan Dihapus', 'Semua pesanan telah dihapus. Anda bisa memulai pesanan baru.');
    }
}

// Tampilkan/menyembunyikan keranjang
function toggleCart() {
    if (!cartModal || !overlay) return;
    
    cartModal.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = cartModal.classList.contains('active') ? 'hidden' : 'auto';
}

// ================================
// FUNGSI ORDER DAN KONFIRMASI
// ================================

// Fungsi untuk menampilkan konfirmasi pesanan
function showOrderConfirmation(tableNumber, customerName, paymentMethod, notes, cartItems, subtotal, tax, total) {
    if (!orderConfirmationModal) return;
    
    if (confTableNumber) confTableNumber.textContent = tableNumber;
    if (confCustomerName) confCustomerName.textContent = customerName;
    if (confPaymentMethod) confPaymentMethod.textContent = paymentMethod;
    if (confOrderTime) {
        confOrderTime.textContent = new Date().toLocaleTimeString('id-ID', { 
            hour: '2-digit', 
            minute: '2-digit',
            second: '2-digit'
        }) + ' • ' + new Date().toLocaleDateString('id-ID');
    }
    
    if (confOrderItems) {
        confOrderItems.innerHTML = '';
        cartItems.forEach(item => {
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <div>
                    <div class="order-item-name">${item.name}</div>
                    <div class="order-item-details">
                        <span>${item.quantity}x</span>
                        <span>${formatRupiah(item.price)}</span>
                    </div>
                </div>
                <div class="order-item-price">
                    ${formatRupiah(item.price * item.quantity)}
                </div>
            `;
            confOrderItems.appendChild(orderItem);
        });
    }
    
    if (confSubtotal) confSubtotal.textContent = formatRupiah(subtotal);
    if (confTax) confTax.textContent = formatRupiah(tax);
    if (confTotal) confTotal.textContent = formatRupiah(total);
    
    if (notes && notes.trim() !== '') {
        if (confNotesText) confNotesText.textContent = notes;
        if (confOrderNotes) confOrderNotes.style.display = 'block';
    } else {
        if (confOrderNotes) confOrderNotes.style.display = 'none';
    }
    
    orderConfirmationModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menutup modal konfirmasi
function closeOrderConfirmation() {
    if (!orderConfirmationModal) return;
    
    orderConfirmationModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Proses form pesanan
async function processOrder(e) {
    e.preventDefault();
    
    if (cart.length === 0) {
        await showAlert('Keranjang Kosong', 'Silakan tambahkan item terlebih dahulu sebelum memesan.', 'warning');
        return;
    }
    
    const tableNumber = document.getElementById('tableNumber').value;
    const customerName = document.getElementById('customerName').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const notes = document.getElementById('notes').value;
    
    if (!tableNumber || !customerName) {
        await showAlert('Data Tidak Lengkap', 'Harap isi nomor meja dan nama pelanggan.', 'error');
        return;
    }
    
    // Tampilkan loading sederhana
    if (loadingSpinner) {
        loadingSpinner.classList.add('active');
    }
    
    // Simulasikan proses pengiriman (tanpa delay lama)
    setTimeout(() => {
        // Sembunyikan loading
        if (loadingSpinner) {
            loadingSpinner.classList.remove('active');
        }
        
        // Update nomor meja di header
        currentTableSpan.textContent = tableNumber;
        
        // Hitung total
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const tax = subtotal * 0.1;
        const total = subtotal + tax;
        
        // Konversi metode pembayaran ke teks
        const paymentMethodText = {
            'cash': 'Tunai',
            'qris': 'Scan QRIS',
            'debit': 'Kartu Debit',
            'credit': 'Kartu Kredit'
        }[paymentMethod];
        
        // Simpan data pesanan
        window.lastOrder = {
            tableNumber,
            customerName,
            paymentMethod: paymentMethodText,
            notes,
            items: [...cart],
            subtotal,
            tax,
            total,
            timestamp: new Date()
        };
        
        // Tampilkan notifikasi sukses
        showNotification(
            'success',
            'Pesanan Terkirim!',
            `Pesanan Anda untuk meja ${tableNumber} telah dikirim ke kitchen.`,
            3000
        );
        
        // Tampilkan modal konfirmasi
        showOrderConfirmation(
            tableNumber,
            customerName,
            paymentMethodText,
            notes,
            cart,
            subtotal,
            tax,
            total
        );
        
        // Reset form dan keranjang
        orderForm.reset();
        cart = [];
        updateCart();
        
    }, 500); // Delay hanya 0.5 detik
}

// Fungsi untuk menyelesaikan pesanan (dipanggil setelah konfirmasi)
function completeOrder() {
    closeOrderConfirmation();
    showNotification('success', 'Pesanan Selesai!', 'Kitchen sedang menyiapkan makanan Anda. Terima kasih!');
}

// Fungsi untuk mencetak bill dari modal konfirmasi
function printOrderBill() {
    if (!window.lastOrder) return;
    
    const order = window.lastOrder;
    
    const printContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 400px;">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="margin: 0; color: #FF6B6B;">GiRanuRamen</h2>
                <p style="margin: 5px 0; color: #666;">Jl. Ramen No. 88, Jakarta Pusat</p>
                <p style="margin: 5px 0; color: #666;">Telp: (021) 8888-9999</p>
            </div>
            
            <hr style="border: 1px dashed #ddd; margin: 20px 0;">
            
            <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span><strong>Meja:</strong></span>
                    <span>${order.tableNumber}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span><strong>Nama:</strong></span>
                    <span>${order.customerName}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                    <span><strong>Metode Bayar:</strong></span>
                    <span>${order.paymentMethod}</span>
                </div>
                <div style="display: flex; justify-content: space-between;">
                    <span><strong>Waktu:</strong></span>
                    <span>${order.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
            </div>
            
            <hr style="border: 1px dashed #ddd; margin: 20px 0;">
            
            <div style="margin-bottom: 20px;">
                <h3 style="text-align: center; margin-bottom: 15px;">Detail Pesanan</h3>
                ${order.items.map(item => `
                    <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                        <div>
                            <div>${item.name}</div>
                            <div style="font-size: 12px; color: #666;">${item.quantity} x ${formatRupiah(item.price)}</div>
                        </div>
                        <div>${formatRupiah(item.price * item.quantity)}</div>
                    </div>
                `).join('')}
            </div>
            
            <hr style="border: 1px dashed #ddd; margin: 20px 0;">
            
            <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>Subtotal:</span>
                    <span>${formatRupiah(order.subtotal)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                    <span>PPN (10%):</span>
                    <span>${formatRupiah(order.tax)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 18px; border-top: 2px solid #333; padding-top: 10px; margin-top: 10px;">
                    <span>TOTAL:</span>
                    <span>${formatRupiah(order.total)}</span>
                </div>
            </div>
            
            ${order.notes ? `
                <hr style="border: 1px dashed #ddd; margin: 20px 0;">
                <div style="margin-bottom: 20px;">
                    <h4 style="margin-bottom: 10px;">Catatan:</h4>
                    <p style="font-style: italic; color: #666;">${order.notes}</p>
                </div>
            ` : ''}
            
            <hr style="border: 1px dashed #ddd; margin: 20px 0;">
            
            <div style="text-align: center; color: #666; font-size: 14px; margin-top: 20px;">
                <p>Terima kasih telah berkunjung ke GiRanuRamen!</p>
                <p>*** Bill Pesanan ***</p>
            </div>
        </div>
    `;
    
    const printWindow = window.open('', '_blank', 'width=600,height=800');
    printWindow.document.write(`
        <html>
            <head>
                <title>Bill GiRanuRamen - Meja ${order.tableNumber}</title>
                <style>
                    @media print {
                        body { margin: 0; padding: 10px; }
                        button { display: none; }
                    }
                    @page { margin: 0; }
                </style>
            </head>
            <body>
                ${printContent}
                <div style="text-align: center; margin-top: 30px;">
                    <button onclick="window.print()" style="padding: 10px 20px; background-color: #FF6B6B; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
                        <i class="fas fa-print"></i> Cetak Bill
                    </button>
                    <button onclick="window.close()" style="padding: 10px 20px; background-color: #666; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-left: 10px;">
                        <i class="fas fa-times"></i> Tutup
                    </button>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    
    showNotification('success', 'Bill Siap Dicetak!', 'Jendela cetak bill telah dibuka.');
}

// Cetak bill dari halaman order
async function printBill() {
    if (cart.length === 0) {
        await showAlert('Tidak Ada Pesanan', 'Tidak ada item di keranjang untuk dicetak.', 'warning');
        return;
    }
    
    const tableNumber = document.getElementById('tableNumber').value || '-';
    const customerName = document.getElementById('customerName').value || 'Pelanggan';
    const paymentMethod = document.querySelector('input[name="payment"]:checked')?.value || 'cash';
    
    const paymentMethodText = {
        'cash': 'Tunai',
        'qris': 'Scan QRIS',
        'debit': 'Kartu Debit',
        'credit': 'Kartu Kredit'
    }[paymentMethod];
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;
    
    window.lastOrder = {
        tableNumber,
        customerName,
        paymentMethod: paymentMethodText,
        items: [...cart],
        subtotal,
        tax,
        total,
        timestamp: new Date()
    };
    
    showOrderConfirmation(
        tableNumber,
        customerName,
        paymentMethodText,
        '',
        cart,
        subtotal,
        tax,
        total
    );
}

// ================================
// EVENT LISTENERS
// ================================

// Filter menu
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        renderMenuItems(button.dataset.filter);
    });
});

// Event Listeners untuk keranjang dan modal
cartIcon.addEventListener('click', toggleCart);
closeCart.addEventListener('click', toggleCart);
overlay.addEventListener('click', toggleCart);
clearCartBtn.addEventListener('click', clearCart);
clearOrderBtn.addEventListener('click', clearOrder);
continueOrderBtn.addEventListener('click', () => {
    toggleCart();
    document.querySelector('#order').scrollIntoView({ behavior: 'smooth' });
});
orderForm.addEventListener('submit', processOrder);
printBillBtn.addEventListener('click', printBill);
editCartBtn.addEventListener('click', toggleCart);

// Event listeners untuk modal konfirmasi
if (closeConfirmationBtn) {
    closeConfirmationBtn.addEventListener('click', completeOrder);
}

if (printOrderBtn) {
    printOrderBtn.addEventListener('click', printOrderBill);
}

// Tutup modal konfirmasi jika klik di luar konten
if (orderConfirmationModal) {
    orderConfirmationModal.addEventListener('click', function(e) {
        if (e.target === this) {
            completeOrder();
        }
    });
}

// Tutup modal dengan tombol ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (orderConfirmationModal && orderConfirmationModal.classList.contains('active')) {
            completeOrder();
        }
        if (customModal && customModal.classList.contains('active')) {
            customModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        if (cartModal && cartModal.classList.contains('active')) {
            toggleCart();
        }
    }
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Tutup mobile menu saat link diklik
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
    });
});

// Update nomor meja saat diketik
tableNumberInput.addEventListener('input', function() {
    if (this.value.trim()) {
        currentTableSpan.textContent = this.value;
    } else {
        currentTableSpan.textContent = '-';
    }
});

// ================================
// INISIALISASI
// ================================

document.addEventListener('DOMContentLoaded', () => {
    renderMenuItems();
    updateCart();
    
    // Smooth scroll untuk anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
    
    // Show welcome notification
    setTimeout(() => {
        showNotification('info', 'Selamat datang di GiRanuRamen!', 'Pilih menu favorit Anda dan pesan melalui sistem digital kami.', 4000);
    }, 1000);
    
    // Pre-fill contoh untuk testing
    tableNumberInput.value = 'VIP5';
    document.getElementById('customerName').value = 'Bapak Budi';
    currentTableSpan.textContent = 'VIP5';
});

// ===============
// FAB MENU LOGIC
// ===============
const fabButton = document.getElementById('fabButton');
const fabMenu = document.getElementById('fabMenu');
const fabMenuCallWaiter = document.getElementById('fabMenuCallWaiter');
const fabMenuHelp = document.getElementById('fabMenuHelp');

// === FAB MENU INTERACTIONS ===
if (fabButton && fabMenu) {
    let isFabOpen = false;

    fabButton.addEventListener('click', () => {
        isFabOpen = !isFabOpen;
        fabMenu.style.display = isFabOpen ? 'flex' : 'none';
        fabButton.innerHTML = isFabOpen 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-plus"></i>';
    });

    // Tutup FAB saat klik di luar
    document.addEventListener('click', (e) => {
        if (!fabButton.contains(e.target) && !fabMenu.contains(e.target)) {
            fabMenu.style.display = 'none';
            fabButton.innerHTML = '<i class="fas fa-plus"></i>';
            isFabOpen = false;
        }
    });
}

// === CALL WAITER ===
if (fabMenuCallWaiter) {
    fabMenuCallWaiter.addEventListener('click', () => {
        showNotification(
            'success',
            'Waiter Dipanggil!',
            'Waiter akan segera datang ke meja Anda.',
            5000 // auto-close dalam 5 detik
        );
        // Tutup FAB
        fabMenu.style.display = 'none';
        fabButton.innerHTML = '<i class="fas fa-plus"></i>';
    });
}

// === BANTUAN ===
if (fabMenuHelp) {
    fabMenuHelp.addEventListener('click', () => {
        showNotification(
            'info',
            'Butuh Bantuan?',
            'Silakan hubungi staf kami atau scan QR di meja untuk panduan lengkap.',
            6000
        );
        fabMenu.style.display = 'none';
        fabButton.innerHTML = '<i class="fas fa-plus"></i>';
    });
}