// stock.js
// ===============================
// FAZGAME STOCK SYSTEM (EXPANDED)
// ===============================

export const STOCK = [

/* ===============================
   🎮 CONSOLES
================================ */
{ n:'PlayStation 4 Slim 500GB', c:'console', type:'console', p:850, cond:'used' },
{ n:'PlayStation 4 Pro 1TB', c:'console', type:'console', p:1200, cond:'used' },
{ n:'Xbox One S 1TB', c:'console', type:'console', p:900, cond:'used' },
{ n:'Xbox Series S 512GB', c:'console', type:'console', p:1250, cond:'used' },
{ n:'Nintendo Switch V2', c:'console', type:'console', p:950, cond:'used' },
{ n:'Nintendo Switch OLED', c:'console', type:'console', p:1200, cond:'used' },
{ n:'Nintendo Switch Lite', c:'console', type:'console', p:650, cond:'used' },
{ n:'PlayStation 3 Super Slim', c:'console', type:'console', p:450, cond:'used' },
{ n:'Xbox One X 1TB', c:'console', type:'console', p:1150, cond:'used' },
{ n:'Nintendo 3DS XL', c:'console', type:'console', p:550, cond:'used' },

/* ===============================
   🎮 PS5 CONSOLE
================================ */
{ n:'PlayStation 5 Disc Edition', c:'ps5', type:'console', p:2100, cond:'used' },
{ n:'PlayStation 5 Digital Edition', c:'ps5', type:'console', p:1900, cond:'used' },
{ n:'PlayStation 5 Slim Disc', c:'ps5', type:'console', p:2200, cond:'new' },
{ n:'PlayStation 5 Slim Digital', c:'ps5', type:'console', p:2000, cond:'new' },
{ n:'PS5 Disc + 1 Controller Bundle', c:'ps5', type:'console', p:2300, cond:'used' },
{ n:'PS5 Digital + 2 Controllers', c:'ps5', type:'console', p:2150, cond:'used' },
{ n:'PS5 Disc + FC24 Bundle', c:'ps5', type:'console', p:2400, cond:'used' },
{ n:'PS5 Disc + Spider-Man 2 Bundle', c:'ps5', type:'console', p:2500, cond:'used' },
{ n:'PS5 Digital + Headset Bundle', c:'ps5', type:'console', p:2250, cond:'used' },
{ n:'PS5 Disc (Warranty 6 Months)', c:'ps5', type:'console', p:2350, cond:'used' },

/* ===============================
   🎮 PS5 GAMES
================================ */
{ n:'Spider-Man 2', c:'ps5', type:'game', p:180, cond:'used' },
{ n:'Final Fantasy XVI', c:'ps5', type:'game', p:150, cond:'used' },
{ n:'Call of Duty Modern Warfare III', c:'ps5', type:'game', p:190, cond:'used' },
{ n:'Elden Ring', c:'ps5', type:'game', p:150, cond:'used' },
{ n:'Resident Evil 4 Remake', c:'ps5', type:'game', p:140, cond:'used' },
{ n:'Gran Turismo 7', c:'ps5', type:'game', p:120, cond:'used' },
{ n:'Horizon Forbidden West', c:'ps5', type:'game', p:130, cond:'used' },
{ n:'God of War Ragnarok', c:'ps5', type:'game', p:150, cond:'used' },
{ n:'Dragon Ball Sparking Zero', c:'ps5', type:'game', p:200, cond:'new' },
{ n:'Assassin\'s Creed Mirage', c:'ps5', type:'game', p:140, cond:'used' },
{ n:'NBA 2K24', c:'ps5', type:'game', p:90, cond:'used' },
{ n:'EA FC 25', c:'ps5', type:'game', p:120, cond:'used' },
{ n:'Mortal Kombat 1', c:'ps5', type:'game', p:150, cond:'used' },
{ n:'Black Myth Wukong', c:'ps5', type:'game', p:200, cond:'new' },
{ n:'Tekken 8', c:'ps5', type:'game', p:170, cond:'used' },

/* ===============================
   🖥 PC ITEMS
================================ */
{ n:'Gaming PC Ryzen 5 + RTX 3060', c:'pc', type:'pc', p:3500, cond:'used' },
{ n:'Gaming PC i5 12400F + RTX 4060', c:'pc', type:'pc', p:4200, cond:'new' },
{ n:'Gaming PC Ryzen 7 + RTX 3070', c:'pc', type:'pc', p:4800, cond:'used' },
{ n:'RTX 3060 12GB GPU', c:'pc', type:'pc', p:1200, cond:'used' },
{ n:'RTX 4060 8GB GPU', c:'pc', type:'pc', p:1600, cond:'new' },
{ n:'Ryzen 5 5600 Processor', c:'pc', type:'pc', p:650, cond:'used' },
{ n:'Intel i5 12400F Processor', c:'pc', type:'pc', p:750, cond:'new' },
{ n:'16GB DDR4 RAM (2x8GB)', c:'pc', type:'pc', p:220, cond:'used' },
{ n:'32GB DDR4 RAM (2x16GB)', c:'pc', type:'pc', p:420, cond:'new' },
{ n:'1TB NVMe SSD', c:'pc', type:'pc', p:350, cond:'new' },
{ n:'750W 80+ Gold PSU', c:'pc', type:'pc', p:450, cond:'new' },
{ n:'Gaming Monitor 27" 165Hz', c:'pc', type:'pc', p:900, cond:'used' },
{ n:'Mechanical Gaming Keyboard', c:'pc', type:'pc', p:250, cond:'new' },
{ n:'Gaming Mouse RGB 16000 DPI', c:'pc', type:'pc', p:150, cond:'new' },
{ n:'Mid Tower Gaming Case RGB', c:'pc', type:'pc', p:300, cond:'new' }

   /* ===============================
   🎮 PS4 CONSOLE & GAMES
================================ */

// 🎮 PS4 Consoles
{ n:'PlayStation 4 Slim 500GB (Full Set)', c:'ps4', type:'console', p:850, cond:'used' },
{ n:'PlayStation 4 Slim 1TB (Full Set)', c:'ps4', type:'console', p:950, cond:'used' },
{ n:'PlayStation 4 Pro 1TB (Full Set)', c:'ps4', type:'console', p:1200, cond:'used' },

// 🎮 PS4 Games
{ n:'The Last of Us Part II', c:'ps4', type:'game', p:60, cond:'used' },
{ n:'God of War (2018)', c:'ps4', type:'game', p:50, cond:'used' },
{ n:'Horizon Zero Dawn Complete Edition', c:'ps4', type:'game', p:50, cond:'used' },
{ n:'Spider-Man (PS4)', c:'ps4', type:'game', p:70, cond:'used' },
{ n:'Red Dead Redemption 2', c:'ps4', type:'game', p:70, cond:'used' },
{ n:'Grand Theft Auto V (PS4)', c:'ps4', type:'game', p:50, cond:'used' },
{ n:'Call of Duty Modern Warfare', c:'ps4', type:'game', p:60, cond:'used' },
{ n:'Call of Duty Black Ops 4', c:'ps4', type:'game', p:40, cond:'used' },
{ n:'Dragon Ball FighterZ', c:'ps4', type:'game', p:50, cond:'used' },
{ n:'Tekken 7', c:'ps4', type:'game', p:40, cond:'used' },
{ n:'Need for Speed Heat', c:'ps4', type:'game', p:60, cond:'used' },
{ n:'FIFA 23 (PS4)', c:'ps4', type:'game', p:50, cond:'used' },
{ n:'EA FC 24 (PS4)', c:'ps4', type:'game', p:70, cond:'used' }

];
