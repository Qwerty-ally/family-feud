// 30 survey categories, 8 answers each. Each answer: [display text, points, ...extra accepted keywords]
window.QUESTIONS = [
  { cat: "First Date Disasters", q: "Name something that would make a first date go terribly wrong", a: [
    ["Bad breath", 22, "breath", "smell", "body odor", "stink"], ["Ex shows up", 18, "ex", "running into ex", "ex girlfriend", "ex boyfriend"],
    ["Spilling food", 14, "spill", "spilled drink", "mess"], ["Being late", 12, "late", "showing up late"],
    ["Forgot wallet", 10, "wallet", "can't pay", "no money"], ["On their phone", 9, "phone", "texting"],
    ["Rude to waiter", 8, "rude", "rude to server"], ["Talking about ex", 7, "talk about ex"] ] },
  { cat: "Lies to the Boss", q: "Name a lie people tell their boss to get out of work", a: [
    ["I'm sick", 38, "sick", "ill", "flu", "cold"], ["Family emergency", 17, "emergency", "family"],
    ["Car broke down", 12, "car trouble", "car", "flat tire"], ["Doctor's appointment", 9, "doctor", "appointment", "dentist"],
    ["Kid is sick", 8, "child sick", "kid", "kids", "babysitter"], ["Funeral", 7, "someone died", "death"],
    ["Food poisoning", 5], ["Power outage", 4, "power out", "internet down", "no power"] ] },
  { cat: "Ghost Hunters", q: "Name a sign that your house might be haunted", a: [
    ["Strange noises", 28, "noises", "noise", "sounds", "footsteps", "knocking"], ["Lights flickering", 18, "lights", "flickering"],
    ["Doors opening", 14, "doors", "door slamming", "doors closing"], ["Cold spots", 11, "cold", "chill", "drafts"],
    ["Things moving", 10, "objects moving", "things fall", "stuff moves"], ["Pets acting weird", 8, "dog barking", "pets", "cat"],
    ["Seeing a figure", 6, "ghost", "shadow", "apparition"], ["Voices", 5, "whispers", "whispering"] ] },
  { cat: "Grandma's Purse", q: "Name something you'd find in your grandmother's purse", a: [
    ["Tissues", 26, "kleenex", "tissue", "hankie", "handkerchief"], ["Candy", 20, "mints", "butterscotch", "peppermints", "hard candy"],
    ["Pills", 13, "medicine", "medication", "aspirin"], ["Lipstick", 11, "makeup"], ["Coupons", 9, "coupon"],
    ["Glasses", 8, "reading glasses", "eyeglasses"], ["Wallet", 7, "money", "cash", "change purse", "coin purse"], ["Photos", 6, "pictures", "grandkids"] ] },
  { cat: "Zombie Apocalypse", q: "Name something you'd grab first in a zombie apocalypse", a: [
    ["Weapon", 30, "gun", "bat", "knife", "axe", "sword", "machete", "crossbow", "chainsaw"], ["Food", 20, "canned food", "snacks"],
    ["Water", 15], ["First aid kit", 9, "first aid", "medicine", "medical supplies", "bandages"], ["Family", 8, "kids", "wife", "husband", "loved ones"],
    ["Flashlight", 7, "light", "batteries"], ["Car keys", 6, "keys", "car"], ["Phone", 5, "radio", "charger"] ] },
  { cat: "Wedding Woes", q: "Name something that can go wrong at a wedding", a: [
    ["Bride or groom no-show", 24, "left at altar", "no show", "runaway bride", "cold feet", "groom runs"], ["Bad weather", 16, "rain", "storm", "weather"],
    ["Someone objects", 14, "objection", "objects"], ["Drunk guest", 12, "drunk", "drunk uncle"],
    ["Dress gets ruined", 10, "dress", "torn dress", "stain"], ["Rings lost", 9, "ring", "rings", "lost ring"],
    ["Cake falls", 8, "cake"], ["Fight breaks out", 7, "fight", "fighting"] ] },
  { cat: "Teenage Rebellion", q: "Name something a teenager does that drives their parents crazy", a: [
    ["Talks back", 22, "back talk", "attitude", "sassy", "disrespect"], ["Always on phone", 20, "phone", "screen time", "texting"],
    ["Messy room", 15, "messy", "doesn't clean", "dirty room"], ["Breaks curfew", 12, "curfew", "stays out late", "sneaks out"],
    ["Sleeps all day", 10, "sleeps", "sleeping in", "lazy"], ["Won't do chores", 8, "chores"],
    ["Eye rolling", 7, "rolls eyes", "eye roll"], ["Plays video games", 6, "video games", "gaming", "games"] ] },
  { cat: "Desert Island", q: "Name something you'd want with you if stranded on a desert island", a: [
    ["Water", 24, "fresh water"], ["Food", 18], ["Knife", 14, "machete", "pocket knife", "swiss army knife"],
    ["Lighter", 11, "matches", "fire", "lighter"], ["Phone", 10, "satellite phone", "radio"], ["Spouse", 9, "partner", "wife", "husband", "friend"],
    ["Boat", 8, "raft"], ["Tent", 6, "shelter", "tarp"] ] },
  { cat: "Supervillain School", q: "Name something every supervillain needs", a: [
    ["Evil lair", 26, "lair", "hideout", "base", "volcano"], ["Henchmen", 20, "minions", "sidekick", "army"],
    ["Evil laugh", 14, "laugh", "maniacal laugh"], ["Cape", 11, "costume", "mask"], ["Superpower", 10, "powers", "power"],
    ["Evil plan", 9, "plan", "scheme"], ["Money", 6, "fortune", "rich"], ["Cat", 4, "white cat", "pet"] ] },
  { cat: "Airport Annoyances", q: "Name something that's annoying about flying", a: [
    ["Delays", 27, "delayed flight", "delay", "cancellations"], ["Security line", 19, "security", "tsa", "lines"],
    ["Crying baby", 14, "baby", "kids", "screaming kids"], ["Lost luggage", 11, "luggage", "bags", "baggage"],
    ["Small seats", 10, "no legroom", "legroom", "cramped", "seats"], ["Seat kicker", 7, "kicking seat"],
    ["Turbulence", 7], ["Expensive food", 5, "food", "prices"] ] },
  { cat: "Bad Roommates", q: "Name something a terrible roommate does", a: [
    ["Doesn't clean", 28, "messy", "dirty", "dirty dishes", "dishes"], ["Eats your food", 22, "steals food", "food"],
    ["Loud", 13, "noisy", "loud music", "parties"], ["Doesn't pay rent", 12, "rent", "bills", "money"],
    ["Brings people over", 9, "guests", "boyfriend", "girlfriend", "strangers"], ["Borrows stuff", 7, "takes stuff", "steals"],
    ["Bad hygiene", 5, "smells", "stinks", "doesn't shower"], ["Uses your stuff", 4, "uses things"] ] },
  { cat: "Job Interview", q: "Name something you should never do in a job interview", a: [
    ["Be late", 25, "late", "show up late"], ["Curse", 17, "swear", "cussing", "bad language"],
    ["Lie", 14, "lying"], ["Check your phone", 12, "phone", "texting"], ["Dress badly", 10, "sloppy", "dress", "pajamas", "shorts"],
    ["Badmouth old boss", 9, "trash talk", "bad mouth", "complain about boss", "talk bad"],
    ["Chew gum", 7, "gum", "eat"], ["Ask about salary", 6, "salary", "money", "pay"] ] },
  { cat: "Crime Scene", q: "Name something a detective looks for at a crime scene", a: [
    ["Fingerprints", 34, "prints", "fingerprint"], ["Blood", 19, "dna", "blood spatter"], ["Weapon", 15, "gun", "knife", "murder weapon"],
    ["Footprints", 10, "shoe prints", "footprint"], ["Hair", 8, "fibers", "hair samples"], ["Witnesses", 6, "witness"],
    ["Clues", 5, "evidence"], ["Body", 3, "victim"] ] },
  { cat: "Midlife Crisis", q: "Name something a person going through a midlife crisis buys", a: [
    ["Sports car", 44, "car", "convertible", "corvette", "porsche", "ferrari"], ["Motorcycle", 18, "harley", "bike"],
    ["Boat", 10, "yacht"], ["New wardrobe", 8, "clothes", "leather jacket"], ["Hair plugs", 7, "toupee", "wig", "hair"],
    ["Plastic surgery", 5, "botox", "surgery"], ["Gym membership", 4, "gym"], ["Tattoo", 4] ] },
  { cat: "Dog Behavior", q: "Name something dogs do that would be weird if humans did it", a: [
    ["Sniff butts", 32, "sniff", "smelling butts", "sniffing"], ["Lick themselves", 18, "licking", "lick"],
    ["Drink from toilet", 12, "toilet"], ["Chase their tail", 10, "tail", "chasing tail"], ["Pee on things", 9, "pee", "mark territory", "lift leg"],
    ["Eat off the floor", 8, "eat poop", "eat garbage"], ["Bark at strangers", 6, "bark", "barking"], ["Hump legs", 5, "hump", "humping"] ] },
  { cat: "Haunted Hotel", q: "Name something that would make you check out of a hotel immediately", a: [
    ["Bed bugs", 36, "bugs", "bedbugs", "roaches", "cockroaches"], ["Dirty sheets", 18, "dirty", "stains", "filthy"],
    ["Bad smell", 13, "smell", "smells", "stinks"], ["Ghost", 10, "haunted", "creepy"], ["Mold", 8],
    ["Hair in bathroom", 6, "hair"], ["No hot water", 5, "cold shower", "hot water"], ["Noisy neighbors", 4, "noise", "loud"] ] },
  { cat: "Thanksgiving Dinner", q: "Name a topic you should avoid at Thanksgiving dinner", a: [
    ["Politics", 52, "election", "president"], ["Religion", 16, "god"], ["Money", 9, "salary", "income"],
    ["Relationships", 7, "dating", "love life", "marriage", "divorce"], ["Weight", 6, "diet", "getting fat"],
    ["Family drama", 5, "drama", "gossip"], ["Exes", 3, "ex"], ["Sex", 2] ] },
  { cat: "Witness Protection", q: "Name something you'd change about yourself if you entered witness protection", a: [
    ["Name", 34, "new name"], ["Hair color", 22, "hair", "dye hair", "haircut"], ["Appearance", 12, "face", "plastic surgery", "looks"],
    ["Address", 9, "location", "move", "city", "home"], ["Accent", 7, "voice"], ["Job", 6, "career"],
    ["Clothes", 5, "style", "wardrobe"], ["Grow a beard", 5, "beard", "mustache", "facial hair"] ] },
  { cat: "Snooping", q: "Name something people secretly look at on their partner's phone", a: [
    ["Texts", 42, "messages", "text messages"], ["Photos", 16, "pictures", "camera roll", "gallery"], ["Call log", 12, "calls", "recent calls"],
    ["Social media", 10, "instagram", "facebook", "dms"], ["Contacts", 7], ["Browser history", 6, "history", "search history"],
    ["Email", 4], ["Dating apps", 3, "tinder"] ] },
  { cat: "Strange Superpowers", q: "Name a superpower people wish they had", a: [
    ["Flying", 32, "fly", "flight"], ["Invisibility", 22, "invisible"], ["Teleportation", 14, "teleport"],
    ["Mind reading", 11, "read minds", "telepathy"], ["Time travel", 8, "control time", "stop time"],
    ["Super strength", 6, "strength", "strong"], ["Super speed", 4, "speed", "fast"], ["Healing", 3, "immortality", "live forever"] ] },
  { cat: "Restaurant Red Flags", q: "Name a sign that you should NOT eat at a restaurant", a: [
    ["It's empty", 26, "empty", "no customers", "no people"], ["Dirty", 22, "dirty tables", "filthy", "messy"],
    ["Bugs", 14, "roaches", "flies", "rats", "mice"], ["Bad smell", 11, "smells", "smell"], ["Bad reviews", 9, "reviews"],
    ["Health code rating", 8, "health grade", "health inspection", "failed inspection", "rating"],
    ["Sick staff", 6, "coughing", "rude staff"], ["Hair in food", 4, "hair"] ] },
  { cat: "Retirement Plans", q: "Name something people look forward to doing when they retire", a: [
    ["Travel", 40, "traveling", "vacation", "cruise"], ["Golf", 15, "golfing"], ["Sleep in", 11, "sleep", "rest", "relax"],
    ["Spend time with grandkids", 10, "grandkids", "family", "grandchildren"], ["Fishing", 8, "fish"],
    ["Gardening", 7, "garden"], ["Hobbies", 5, "crafts", "reading"], ["Move to Florida", 4, "florida", "move", "beach"] ] },
  { cat: "Spy Gear", q: "Name a gadget you'd expect a secret agent to have", a: [
    ["Gun", 25, "pistol", "weapon"], ["Hidden camera", 18, "camera", "spy camera"], ["Earpiece", 14, "radio", "communicator"],
    ["Night vision goggles", 11, "night vision", "goggles"], ["Laser watch", 10, "watch", "laser"],
    ["Fake passport", 9, "passport", "fake id", "disguise"], ["Grappling hook", 7, "rope"], ["Exploding pen", 6, "pen"] ] },
  { cat: "Moving Day", q: "Name something that's hard to move when you change homes", a: [
    ["Piano", 30], ["Couch", 25, "sofa", "sectional"], ["Fridge", 14, "refrigerator"], ["Bed", 10, "mattress"],
    ["Dresser", 8, "wardrobe"], ["Washer and dryer", 6, "washer", "dryer", "washing machine"],
    ["TV", 4, "television"], ["Pool table", 3] ] },
  { cat: "Camping Fails", q: "Name something that could ruin a camping trip", a: [
    ["Rain", 32, "storm", "bad weather", "weather"], ["Bugs", 22, "mosquitoes", "mosquitos", "bug bites"],
    ["Bears", 14, "bear", "wild animals", "animals"], ["Forgot the tent", 9, "tent", "broken tent"],
    ["Getting lost", 8, "lost"], ["Poison ivy", 6, "poison oak"], ["No food", 5, "forgot food", "food"],
    ["Fire won't start", 4, "fire", "no fire"] ] },
  { cat: "Lazy Sunday", q: "Name something people do on a lazy Sunday", a: [
    ["Sleep in", 30, "sleep", "nap"], ["Watch TV", 24, "tv", "binge", "netflix", "television", "movies"],
    ["Go to church", 12, "church"], ["Watch football", 10, "football", "sports"], ["Eat brunch", 9, "brunch", "pancakes"],
    ["Read", 6, "book"], ["Stay in pajamas", 5, "pajamas", "pjs"], ["Play video games", 4, "video games", "games"] ] },
  { cat: "Weird Phobias", q: "Name something a lot of people are secretly afraid of", a: [
    ["Spiders", 28, "spider"], ["Heights", 20, "falling"], ["Clowns", 14, "clown"], ["The dark", 11, "dark", "darkness"],
    ["Snakes", 10, "snake"], ["Public speaking", 8, "speaking", "speeches"], ["Needles", 5, "shots"], ["Dying", 4, "death"] ] },
  { cat: "Time Machine", q: "Name a time period people would visit with a time machine", a: [
    ["Dinosaurs", 30, "jurassic", "prehistoric", "dinosaur"], ["The future", 22, "future"], ["Ancient Egypt", 13, "egypt", "pyramids"],
    ["The 80s", 10, "80s", "1980s", "eighties"], ["Medieval times", 8, "middle ages", "knights", "medieval"],
    ["Ancient Rome", 7, "rome", "romans"], ["Their childhood", 6, "childhood", "high school"], ["The 60s", 4, "60s", "1960s", "woodstock"] ] },
  { cat: "Hospital Stay", q: "Name something people complain about when staying in the hospital", a: [
    ["Food", 38, "bad food", "hospital food"], ["Can't sleep", 15, "sleep", "woken up", "waking up"], ["The gown", 12, "gown", "hospital gown"],
    ["Bed", 10, "uncomfortable bed"], ["Needles", 8, "shots", "iv", "blood draws"], ["The bill", 7, "cost", "expensive", "bill"],
    ["Noise", 6, "beeping", "machines", "loud"], ["Boredom", 4, "bored"] ] },
  { cat: "Bad Neighbors", q: "Name something your neighbor does that would make you want to move", a: [
    ["Loud music", 30, "loud", "noise", "music", "parties"], ["Barking dog", 20, "dog", "barking"], ["Nosy", 13, "snooping", "spying", "gossip"],
    ["Messy yard", 11, "junk", "yard", "trash", "lawn"], ["Parks in your spot", 9, "parking", "blocks driveway", "parks"],
    ["Fighting", 7, "yelling", "arguing", "screaming"], ["Smoking", 6, "smoke"], ["Borrows things", 4, "borrowing"] ] },
];
