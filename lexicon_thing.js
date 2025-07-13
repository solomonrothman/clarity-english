const lexicon = {
    'Thing': {
    definition: 'All that you can touch, see.',
    level: 1,
    is_a:,
    children:
  },
  'Material': {
    definition: 'What things are made from.',
    level: 2,
    is_a:,
    children:
  },
  'Cloth': {
    definition: 'Make from plant, animal. Use for clothes, other thing.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Cotton': {
    part_of_speech: 'noun',
    definition: 'Soft white from plant.',
    example: 'Cotton shirt.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Fabric': {
    part_of_speech: 'noun',
    definition: 'Cloth.',
    example: 'Soft fabric.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Fiber/Fibre': {
    part_of_speech: 'noun',
    definition: 'Thin thread.',
    example: 'Strong fiber.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Linen': {
    part_of_speech: 'noun',
    definition: 'Cloth make from flax plant.',
    example: 'Linen shirt.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Nylon': {
    part_of_speech: 'noun',
    definition: 'Strong cloth make by human.',
    example: 'Nylon rope.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Polyester': {
    part_of_speech: 'noun',
    definition: 'Cloth make by human, chemical.',
    example: 'Polyester jacket.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Silk': {
    part_of_speech: 'noun',
    definition: 'Soft, shine cloth from insect.',
    example: 'Silk dress.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Wool': {
    part_of_speech: 'noun',
    definition: 'Hair from sheep. Make warm cloth.',
    example: 'Wool sweater.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Yarn': {
    part_of_speech: 'noun',
    definition: 'Thread, make cloth.',
    example: 'Spin-ed yarn.',
    level: 4,
    is_a: ['Cloth'],
    children:
  },
  'Wood': {
    definition: 'Hard part tree.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Bark': {
    part_of_speech: 'noun',
    definition: 'Outside of tree.',
    example: 'Tree bark.',
    level: 4,
    is_a: ['Wood'],
    children:
  },
  'Log': {
    part_of_speech: 'noun',
    definition: 'Piece of wood, cut.',
    example: 'Cut log.',
    level: 4,
    is_a: ['Wood'],
    children:
  },
  'Plank': {
    part_of_speech: 'noun',
    definition: 'Long flat piece of wood.',
    example: 'Walk on plank.',
    level: 4,
    is_a: ['Wood', 'Object'],
    children:
  },
  'Timber': {
    part_of_speech: 'noun',
    definition: 'Wood use for build.',
    example: 'Timber house.',
    level: 4,
    is_a: ['Wood'],
    children:
  },
  'Twig': {
    part_of_speech: 'noun',
    definition: 'Small branch.',
    example: 'Break twig.',
    level: 4,
    is_a: ['Wood', 'Part'],
    children:
  },
    'Metal': {
    definition: 'Hard, shine thing.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Aluminum': {
    part_of_speech: 'noun',
    definition: 'Light metal.',
    example: 'Aluminum can.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Copper': {
    part_of_speech: 'noun',
    definition: 'Red-brown metal.',
    example: 'Copper wire.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Gold': {
    part_of_speech: 'noun',
    definition: 'Yellow metal, valuable.',
    example: 'Gold ring.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Iron': {
    part_of_speech: 'noun',
    definition: 'Strong metal.',
    example: 'Iron bar.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Lead': {
    part_of_speech: 'noun',
    definition: 'Heavy, soft metal.',
    example: 'Lead pipe.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Silver': {
    part_of_speech: 'noun',
    definition: 'White, shine metal.',
    example: 'Silver coin.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Steel': {
    part_of_speech: 'noun',
    definition: 'Strong metal, make from iron.',
    example: 'Steel beam.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Tin': {
    part_of_speech: 'noun',
    definition: 'Soft, silver metal.',
    example: 'Tin can.',
    level: 4,
    is_a: ['Metal'],
    children:
  },
  'Stone': {
    definition: 'Hard thing from ground.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Brick': {
    part_of_speech: 'noun',
    definition: 'Small block, build wall.',
    example: 'Build with brick.',
    level: 4,
    is_a:,
    children:
  },
  'Chalk': {
    part_of_speech: 'noun',
    definition: 'soft white rock.',
    example: 'Use-d chalk.',
    level: 4,
    is_a:,
    children:
  },
  'Clay': {
    part_of_speech: 'noun',
    definition: 'Soft earth, make pot.',
    example: 'Mold clay.',
    level: 4,
    is_a:,
    children:
  },
  'Concrete': {
    part_of_speech: 'noun',
    definition: 'Hard building material.',
    example: 'Walk on concrete.',
    level: 4,
    is_a:,
    children:
  },
  'Crystal': {
    part_of_speech: 'noun',
    definition: 'clear like glass.',
    example: 'Crystal glass.',
    level: 4,
    is_a:,
    children:
  },
  'Diamond': {
    part_of_speech: 'noun',
    definition: 'Very hard stone, clear.',
    example: 'Diamond ring.',
    level: 4,
    is_a:,
    children:
  },
  'Gravel': {
    part_of_speech: 'noun',
    definition: 'Small stone.',
    example: 'Road make-d of gravel.',
    level: 4,
    is_a:,
    children:
  },
  'Rock': {
    part_of_speech: 'noun',
    definition: 'Big stone.',
    example: 'Climb rock.',
    level: 4,
    is_a:,
    children:
  },
    'Plastic': {
    part_of_speech: 'noun',
    definition: 'Make from chemical. Can make many shape.',
    example: 'Plastic bottle.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Paper': {
    definition: 'Thin, flat. Make from tree. Use for write, draw.',
    level: 3,
    is_a: ['Material'],
    children: ['Cardboard']
  },
  'Cardboard': {
    part_of_speech: 'noun',
    definition: 'Thick paper, make box.',
    example: 'Cardboard box.',
    level: 4,
    is_a: ['Paper'],
    children:
  },
  'Glass': {
    part_of_speech: 'noun',
    definition: 'Hard, clear. Break easy.',
    example: 'Window make from glass.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Rubber': {
    part_of_speech: 'noun',
    definition: 'From tree. Can stretch.',
    example: 'Rubber ball.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Dirt': {
    part_of_speech: 'noun',
    definition: 'Not clean.',
    example: 'Dirt on shoe-s.',
    level: 3,
    is_a: ['Material'],
    children:
  },
  'Dust': {
    part_of_speech: 'noun',
    definition: 'Very small dirt.',
    example: 'Clean dust.',
    level: 3,
    is_a: ['Material'],
    children:
  },
    'Object': {
    definition: 'Discrete, individual items.',
    level: 2,
    is_a:,
    children:
  },
  'Container': {
    definition: 'Objects that hold other things.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Bag': {
    part_of_speech: 'noun',
    definition: 'Soft container.',
    example: 'Put in bag.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Barrel': {
    part_of_speech: 'noun',
    definition: 'Big, round container, wood or metal.',
    example: 'Store in barrel.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Basket': {
    part_of_speech: 'noun',
    definition: 'Container, weave.',
    example: 'Carry basket.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Bottle': {
    part_of_speech: 'noun',
    definition: 'Container, glass or plastic, for liquid.',
    example: 'Drink from bottle.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Bowl': {
    part_of_speech: 'noun',
    definition: 'Round, open container, for food.',
    example: 'Eat from bowl.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Box': {
    part_of_speech: 'noun',
    definition: 'Square or rectangle container.',
    example: 'Put in box.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Bucket': {
    part_of_speech: 'noun',
    definition: 'Round container, handle, for water.',
    example: 'Carry bucket.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Can': {
    part_of_speech: 'noun',
    definition: 'Metal container, for food, drink.',
    example: 'Open can.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Carton': {
    part_of_speech: 'noun',
    definition: 'Container, cardboard.',
    example: 'Milk carton.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Case': {
    part_of_speech: 'noun',
    definition: 'Container, protect thing.',
    example: 'Carry case.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Chest': {
    part_of_speech: 'noun',
    definition: 'Big, strong box.',
    example: 'Store in chest.',
    level: 4,
    is_a: ['Container', 'Furniture'],
    children:
  },
  'Cup': {
    part_of_speech: 'noun',
    definition: 'Small container, for drink.',
    example: 'Drink from cup.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Drawer': {
    part_of_speech: 'noun',
    definition: 'Part of furniture, slide in and out.',
    example: 'Open drawer.',
    level: 4,
    is_a: ['Container', 'Furniture'],
    children:
  },
  'Envelope': {
    part_of_speech: 'noun',
    definition: 'Paper cover, for letter.',
    example: 'Mail envelope.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Drinking-glass': {
    part_of_speech: 'noun',
    definition: 'Container, for drink, made of glass.',
    example: 'Drink from glass.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Jar': {
    part_of_speech: 'noun',
    definition: 'Glass container, wide opening.',
    example: 'Put in jar.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Jug': {
    part_of_speech: 'noun',
    definition: 'Container, for liquid, handle.',
    example: 'Pour from jug.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Kettle': {
    part_of_speech: 'noun',
    definition: 'Boil water.',
    example: 'Boil water in kettle.',
    level: 4,
    is_a: ['Container', 'Appliance'],
    children:
  },
  'Package': {
    part_of_speech: 'noun',
    definition: 'Thing wrapped.',
    example: 'Open package.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Packet': {
    part_of_speech: 'noun',
    definition: 'Small package.',
    example: 'Packet of seed.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Pan': {
    part_of_speech: 'noun',
    definition: 'Flat container, for cook.',
    example: 'Cook in pan.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Plate': {
    part_of_speech: 'noun',
    definition: 'Flat dish, for food.',
    example: 'Eat from plate.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Pot': {
    part_of_speech: 'noun',
    definition: 'Deep container, for cook, store.',
    example: 'Cook in pot.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Purse': {
    part_of_speech: 'noun',
    definition: 'Small bag, for money.',
    example: 'Carry purse.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Sack': {
    part_of_speech: 'noun',
    definition: 'Big bag.',
    example: 'Carry sack.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Tank': {
    part_of_speech: 'noun',
    definition: 'Big container, for liquid, gas.',
    example: 'Fill tank.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Tin-can': {
    part_of_speech: 'noun',
    definition: 'Metal container.',
    example: 'Tin can.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Tray': {
    part_of_speech: 'noun',
    definition: 'Carry thing.',
    example: 'Carry tray.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Tube': {
    part_of_speech: 'noun',
    definition: 'Long, round container.',
    example: 'Squeeze tube.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Vase': {
    part_of_speech: 'noun',
    definition: 'Container, for flower.',
    example: 'Put flower in vase.',
    level: 4,
    is_a: ['Container'],
    children:
  },
  'Wallet': {
    part_of_speech: 'noun',
    definition: 'Small, flat container, for money, card.',
    example: 'Put money in wallet.',
    level: 4,
    is_a: ['Container'],
    children:
  },
    'Furniture': {
    definition: 'Large objects in a room.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Bed': {
    part_of_speech: 'noun',
    definition: 'Thing for sleep.',
    example: 'Sleep in bed.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Bench': {
    part_of_speech: 'noun',
    definition: 'Long seat.',
    example: 'Sit on bench.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Bookcase': {
    part_of_speech: 'noun',
    definition: 'Shelf for book-s.',
    example: 'Put book on bookcase.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Cabinet': {
    part_of_speech: 'noun',
    definition: 'Furniture with shelf, door.',
    example: 'Store in cabinet.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Chair': {
    part_of_speech: 'noun',
    definition: 'Seat for one person.',
    example: 'Sit on chair.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Closet/Wardrobe': {
    part_of_speech: 'noun',
    definition: 'Place for clothes.',
    example: 'Hang clothes in closet.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Couch': {
    part_of_speech: 'noun',
    definition: 'Long soft seat.',
    example: 'Sit on couch.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Cupboard': {
    part_of_speech: 'noun',
    definition: 'Cabinet for dish, food.',
    example: 'Get plate from cupboard.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Desk': {
    part_of_speech: 'noun',
    definition: 'Table for work, study.',
    example: 'Work at desk.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Shelf': {
    part_of_speech: 'noun',
    definition: 'Flat board, hold thing.',
    example: 'Put book on shelf.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Sofa': {
    part_of_speech: 'noun',
    definition: 'Long soft seat.',
    example: 'Relax on sofa.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Stool': {
    part_of_speech: 'noun',
    definition: 'Seat, no back.',
    example: 'Sit on stool.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
  'Table': {
    part_of_speech: 'noun',
    definition: 'Furniture with flat top, leg-s.',
    example: 'Eat at table.',
    level: 4,
    is_a: ['Furniture'],
    children:
  },
    'Tool': {
    definition: 'Objects that help you do work.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Axe': {
    part_of_speech: 'noun',
    definition: 'Tool for chop wood.',
    example: 'Chop wood with axe.',
    level: 4,
    is_a:,
    children:
  },
  'Brush': {
    part_of_speech: 'noun',
    definition: 'Tool for clean, paint.',
    example: 'Brush hair.',
    level: 4,
    is_a:,
    children:
  },
  'Chisel': {
    part_of_speech: 'noun',
    definition: 'Tool for shape wood, stone.',
    example: 'Carve with chisel.',
    level: 4,
    is_a:,
    children:
  },
  'Clock': {
    part_of_speech: 'noun',
    definition: 'Tool show time.',
    example: 'Look at clock.',
    level: 4,
    is_a:,
    children:
  },
  'Compass': {
    part_of_speech: 'noun',
    definition: 'Tool show direction.',
    example: 'Use compass.',
    level: 4,
    is_a:,
    children:
  },
  'Drill': {
    part_of_speech: 'noun',
    definition: 'Tool make hole.',
    example: 'Drill hole.',
    level: 4,
    is_a:,
    children:
  },
  'File-tool': {
    part_of_speech: 'noun',
    definition: 'Tool for make smooth.',
    example: 'File wood.',
    level: 4,
    is_a:,
    children:
  },
  'Fork': {
    part_of_speech: 'noun',
    definition: 'Tool for eat food.',
    example: 'Eat with fork.',
    level: 4,
    is_a:,
    children:
  },
  'Hammer': {
    part_of_speech: 'noun',
    definition: 'Tool for hit nail.',
    example: 'Use hammer.',
    level: 4,
    is_a:,
    children:
  },
  'Hook': {
    part_of_speech: 'noun',
    definition: 'Tool for hang thing.',
    example: 'Hang coat on hook.',
    level: 4,
    is_a:,
    children:
  },
  'Hose': {
    part_of_speech: 'noun',
    definition: 'Tube for water.',
    example: 'Use hose to water plant-s.',
    level: 4,
    is_a:,
    children:
  },
  'Knife': {
    part_of_speech: 'noun',
    definition: 'Tool for cut.',
    example: 'Cut with knife.',
    level: 4,
    is_a:,
    children:
  },
  'Ladder': {
    part_of_speech: 'noun',
    definition: 'Tool for climb up.',
    example: 'Climb ladder.',
    level: 4,
    is_a:,
    children:
  },
  'Lamp': {
    part_of_speech: 'noun',
    definition: 'Tool give light.',
    example: 'Turn on lamp.',
    level: 4,
    is_a:,
    children:
  },
  'Lock': {
    part_of_speech: 'noun',
    definition: 'Tool for keep close.',
    example: 'Lock door.',
    level: 4,
    is_a:,
    children:
  },
  'Machine': {
    part_of_speech: 'noun',
    definition: 'Thing with move part-s, do work.',
    example: 'Use machine.',
    level: 4,
    is_a:,
    children:
  },
  'Mirror': {
    part_of_speech: 'noun',
    definition: 'Thing show look.',
    example: 'Look in mirror.',
    level: 4,
    is_a:,
    children:
  },
  'Nail': {
    part_of_speech: 'noun',
    definition: 'Small metal, hold wood together.',
    example: 'Hammer nail.',
    level: 4,
    is_a:,
    children:
  },
  'Needle': {
    part_of_speech: 'noun',
    definition: 'Small sharp tool, sew.',
    example: 'Use needle.',
    level: 4,
    is_a:,
    children:
  },
  'Net': {
    part_of_speech: 'noun',
    definition: 'Tool for catch fish, ball.',
    example: 'Use net.',
    level: 4,
    is_a:,
    children:
  },
  'Oar': {
    part_of_speech: 'noun',
    definition: 'Tool for move boat.',
    example: 'Row with oar.',
    level: 4,
    is_a:,
    children:
  },
  'Pen': {
    part_of_speech: 'noun',
    definition: 'Tool for write.',
    example: 'Write with pen.',
    level: 4,
    is_a:,
    children:
  },
  'Pencil': {
    part_of_speech: 'noun',
    definition: 'Tool for write, draw.',
    example: 'Draw with pencil.',
    level: 4,
    is_a:,
    children:
  },
  'Pliers': {
    part_of_speech: 'noun',
    definition: 'Tool for hold, bend thing.',
    example: 'Use pliers.',
    level: 4,
    is_a:,
    children:
  },
  'Pump': {
    part_of_speech: 'noun',
    definition: 'Machine move liquid, gas.',
    example: 'Pump water.',
    level: 4,
    is_a:,
    children:
  },
  'Rake': {
    part_of_speech: 'noun',
    definition: 'Tool for gather leaf.',
    example: 'Rake leaf-s.',
    level: 4,
    is_a:,
    children:
  },
  'Razor': {
    part_of_speech: 'noun',
    definition: 'Tool for cut hair.',
    example: 'Shave with razor.',
    level: 4,
    is_a:,
    children:
  },
  'Ruler': {
    part_of_speech: 'noun',
    definition: 'Tool for measure.',
    example: 'Measure with ruler.',
    level: 4,
    is_a:,
    children:
  },
  'Saw': {
    part_of_speech: 'noun',
    definition: 'Tool for cut wood.',
    example: 'Cut wood with saw.',
    level: 4,
    is_a:,
    children:
  },
  'Scissors': {
    part_of_speech: 'noun',
    definition: 'Tool for cut paper, cloth.',
    example: 'Cut with scissors.',
    level: 4,
    is_a:,
    children:
  },
  'Screw': {
    part_of_speech: 'noun',
    definition: 'Metal fastener, twist in.',
    example: 'Turn screw.',
    level: 4,
    is_a:,
    children:
  },
  'Shovel': {
    part_of_speech: 'noun',
    definition: 'Tool for dig.',
    example: 'Dig with shovel.',
    level: 4,
    is_a:,
    children:
  },
  'Spatula': {
    part_of_speech: 'noun',
    definition: 'Tool for lift, spread food.',
    example: 'Use spatula.',
    level: 4,
    is_a:,
    children:
  },
  'Spoon': {
    part_of_speech: 'noun',
    definition: 'Tool for eat soup, liquid.',
    example: 'Eat soup with spoon.',
    level: 4,
    is_a:,
    children:
  },
  'Tongs': {
    part_of_speech: 'noun',
    definition: 'Tool for pick up, hold.',
    example: 'Use tongs.',
    level: 4,
    is_a:,
    children:
  },
  'Toothbrush': {
    part_of_speech: 'noun',
    definition: 'Tool for clean teeth.',
    example: 'Brush teeth.',
    level: 4,
    is_a:,
    children:
  },
  'Towel': {
    part_of_speech: 'noun',
    definition: 'Cloth for dry.',
    example: 'Dry with towel.',
    level: 4,
    is_a:,
    children:
  },
  'Wrench': {
    part_of_speech: 'noun',
    definition: 'Tool for turn nut, bolt.',
    example: 'Use wrench.',
    level: 4,
    is_a:,
    children:
  },
    'Clothing': {
    definition: 'Things you wear.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Belt': {
    part_of_speech: 'noun',
    definition: 'Wear around waist.',
    example: 'Wear belt.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Boot': {
    part_of_speech: 'noun',
    definition: 'Shoe cover foot, leg.',
    example: 'Wear boot-s.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Cap': {
    part_of_speech: 'noun',
    definition: 'Soft hat.',
    example: 'Wear cap.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Coat': {
    part_of_speech: 'noun',
    definition: 'Wear outside, keep warm.',
    example: 'Wear coat.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Collar': {
    part_of_speech: 'noun',
    definition: 'Part of shirt, around neck.',
    example: 'Shirt have collar.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Dress': {
    part_of_speech: 'noun',
    definition: 'One-piece clothing for woman.',
    example: 'Wear dress.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Glove': {
    part_of_speech: 'noun',
    definition: 'Wear on hand.',
    example: 'Wear glove-s.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Hat': {
    part_of_speech: 'noun',
    definition: 'Wear on head.',
    example: 'Wear hat.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Jacket': {
    part_of_speech: 'noun',
    definition: 'Short coat.',
    example: 'Wear jacket.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Jeans': {
    part_of_speech: 'noun',
    definition: 'Pant-s from strong blue cloth.',
    example: 'Wear jeans.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Pant': {
    part_of_speech: 'noun',
    definition: 'Clothing for leg-s.',
    example: 'Wear pant-s.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Pocket': {
    part_of_speech: 'noun',
    definition: 'Small bag in clothes.',
    example: 'Put hand in pocket.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Shirt': {
    part_of_speech: 'noun',
    definition: 'Clothing for top part of body.',
    example: 'Wear shirt.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Shoe': {
    part_of_speech: 'noun',
    definition: 'Wear on foot.',
    example: 'Wear shoe-s.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Shorts': {
    part_of_speech: 'noun',
    definition: 'Short pant-s.',
    example: 'Wear shorts.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Skirt': {
    part_of_speech: 'noun',
    definition: 'Clothing hang from waist.',
    example: 'Wear skirt.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Sock': {
    part_of_speech: 'noun',
    definition: 'Wear on foot, inside shoe.',
    example: 'Wear sock-s.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Suit': {
    part_of_speech: 'noun',
    definition: 'Jacket and pant-s, same cloth.',
    example: 'Wear suit.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Sweater': {
    part_of_speech: 'noun',
    definition: 'Warm clothing, knit.',
    example: 'Wear sweater.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Tie': {
    part_of_speech: 'noun',
    definition: 'Wear around neck, with shirt.',
    example: 'Wear tie.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Trousers': {
    part_of_speech: 'noun',
    definition: 'Pant-s.',
    example: 'Wear trousers.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Underwear': {
    part_of_speech: 'noun',
    definition: 'Wear under other clothes.',
    example: 'Wear underwear.',
    level: 4,
    is_a: ['Clothing'],
    children:
  },
  'Uniform': {
    part_of_speech: 'noun',
    definition: 'Same clothes, for group.',
    example: 'Wear uniform.',
    level: 4,
    is_a: ['Clothing', 'Object'],
    children:
  },
    'Part': {
    definition: 'A piece of a whole.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Blade': {
    part_of_speech: 'noun',
    definition: 'Sharp part of knife, tool.',
    example: 'Sharp blade.',
    level: 4,
    is_a: ['Part', 'Object'],
    children:
  },
  'Bit': {
    part_of_speech: 'noun',
    definition: 'A small piece or quantity of something.',
    example: 'A bit of food.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Branch': {
    part_of_speech: 'noun',
    definition: 'A part of a tree which grows out from the trunk.',
    example: 'A tree branch.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Chapter': {
    part_of_speech: 'noun',
    definition: 'A main division of a book.',
    example: 'Read the first chapter.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Component': {
    part_of_speech: 'noun',
    definition: 'A part or element of a larger whole.',
    example: 'A computer component.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Core': {
    part_of_speech: 'noun',
    definition: 'The central or most important part of something.',
    example: 'The core of the problem.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Deck': {
    part_of_speech: 'noun',
    definition: 'A floor of a ship.',
    example: 'On the ship deck.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'End': {
    part_of_speech: 'noun',
    definition: 'The final part of something.',
    example: 'The end of the road.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Feature': {
    part_of_speech: 'noun',
    definition: 'A distinctive attribute or aspect of something.',
    example: 'A key feature.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Figure': {
    part_of_speech: 'noun',
    definition: 'A number, especially one which forms part of official data.',
    example: 'A sales figure.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Front': {
    part_of_speech: 'noun',
    definition: 'The most forward part of something.',
    example: 'The front of the line.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Handle': {
    part_of_speech: 'noun',
    definition: 'The part by which a thing is carried, used, or controlled.',
    example: 'A door handle.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Layer': {
    part_of_speech: 'noun',
    definition: 'A sheet, quantity, or thickness of material, typically one of several, covering a surface or body.',
    example: 'A layer of dust.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Middle': {
    part_of_speech: 'noun',
    definition: 'The point or position at an equal distance from the sides, edges, or ends of something.',
    example: 'The middle of the room.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Piece': {
    part_of_speech: 'noun',
    definition: 'A part or portion of something.',
    example: 'A piece of cake.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Section': {
    part_of_speech: 'noun',
    definition: 'Any of the more or less distinct parts into which something is or may be divided or from which it is made up.',
    example: 'A section of the report.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Sector': {
    part_of_speech: 'noun',
    definition: 'An area or portion that is distinct from others.',
    example: 'The financial sector.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Segment': {
    part_of_speech: 'noun',
    definition: 'Each of the parts into which something is or may be divided.',
    example: 'A segment of an orange.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Side': {
    part_of_speech: 'noun',
    definition: 'A position to the left or right of an object, place, or central point.',
    example: 'The left side.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Slice': {
    part_of_speech: 'noun',
    definition: 'A thin, broad piece of food, such as bread, meat, or cake, cut from a larger portion.',
    example: 'A slice of pizza.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Stem': {
    part_of_speech: 'noun',
    definition: 'The main body or stalk of a plant.',
    example: 'A flower stem.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Tip': {
    part_of_speech: 'noun',
    definition: 'The pointed or rounded end of something.',
    example: 'The tip of the iceberg.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Top': {
    part_of_speech: 'noun',
    definition: 'The highest or uppermost point, part, or surface of something.',
    example: 'The top of the mountain.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Trunk': {
    part_of_speech: 'noun',
    definition: 'The main woody stem of a tree.',
    example: 'A tree trunk.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Unit': {
    part_of_speech: 'noun',
    definition: 'An individual thing or person regarded as single and complete but which can also form an individual component of a larger or more complex whole.',
    example: 'A unit of measurement.',
    level: 4,
    is_a: ['Part'],
    children:
  },
  'Wing': {
    part_of_speech: 'noun',
    definition: 'A modified forelimb on a bird or insect, used for flight.',
    example: 'A bird wing.',
    level: 4,
    is_a: ['Part'],
    children:
  },
    'Weapon': {
    definition: 'Tools for fighting or hunting.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Bomb': {
    part_of_speech: 'noun',
    definition: 'Explode, cause damage.',
    example: 'Bomb explode-d.',
    level: 4,
    is_a: ['Weapon'],
    children:
  },
  'Gun': {
    part_of_speech: 'noun',
    definition: 'Shoot bullet.',
    example: 'Fire gun.',
    level: 4,
    is_a:,
    children:
  },
  'Rifle': {
    part_of_speech: 'noun',
    definition: 'Long gun.',
    example: 'Shoot rifle.',
    level: 4,
    is_a: ['Weapon'],
    children:
  },
  'Missile': {
    part_of_speech: 'noun',
    definition: 'Fly, explode.',
    example: 'Launch missile.',
    level: 4,
    is_a: ['Weapon'],
    children:
  },
  'Sword': {
    part_of_speech: 'noun',
    definition: 'Long weapon, sharp.',
    example: 'Fight with sword.',
    level: 4,
    is_a:,
    children:
  },
  'Toy': {
    definition: 'Objects for play.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Ball': {
    part_of_speech: 'noun',
    definition: 'Round thing, play game.',
    example: 'Throw ball.',
    level: 4,
    is_a:,
    children:
  },
  'Block': {
    part_of_speech: 'noun',
    definition: 'Solid piece.',
    example: 'Wood block.',
    level: 4,
    is_a:,
    children:
  },
  'Doll': {
    part_of_speech: 'noun',
    definition: 'Toy, like person.',
    example: 'Play with doll.',
    level: 4,
    is_a:,
    children:
  },
  'Game': {
    part_of_speech: 'noun',
    definition: 'Activity with rule, for fun.',
    example: 'Play game.',
    level: 4,
    is_a:,
    children:
  },
  'Kite': {
    part_of_speech: 'noun',
    definition: 'Fly in air.',
    example: 'Fly kite.',
    level: 4,
    is_a:,
    children:
  },
  'Puzzle': {
    part_of_speech: 'noun',
    definition: 'Game, fit piece-s together.',
    example: 'Solve puzzle.',
    level: 4,
    is_a:,
    children:
  },
  'Document': {
    definition: 'Written or printed information.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Money': {
    definition: 'Use for buy.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Food': {
    definition: 'Things you eat.',
    level: 3,
    is_a: ['Object'],
    children:
  },
  'Apple': {
    part_of_speech: 'noun',
    definition: 'Round fruit, red or green.',
    example: 'Eat apple.',
    level: 4,
    is_a: ['Food', 'Fruit'],
    children:
  },
  'Baked Good': {
    part_of_speech: 'noun',
    definition: 'Food cook in oven, like bread, cake.',
    example: 'Eat baked good-s.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Banana': {
    part_of_speech: 'noun',
    definition: 'Long fruit, yellow.',
    example: 'Peel banana.',
    level: 4,
    is_a: ['Food', 'Fruit'],
    children:
  },
  'Bread': {
    part_of_speech: 'noun',
    definition: 'Food from flour, water.',
    example: 'Eat bread.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Butter': {
    part_of_speech: 'noun',
    definition: 'Soft food from milk.',
    example: 'Spread butter.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Cake': {
    part_of_speech: 'noun',
    definition: 'Sweet baked food.',
    example: 'Eat cake.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Candy': {
    part_of_speech: 'noun',
    definition: 'Sweet food.',
    example: 'Eat candy.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Carrot': {
    part_of_speech: 'noun',
    definition: 'Orange root vegetable.',
    example: 'Eat carrot.',
    level: 4,
    is_a: ['Food', 'Vegetable'],
    children:
  },
  'Cheese': {
    part_of_speech: 'noun',
    definition: 'Food from milk.',
    example: 'Eat cheese.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Chicken': {
    part_of_speech: 'noun',
    definition: 'Bird, eat as food.',
    example: 'Eat chicken.',
    level: 4,
    is_a: ['Food', 'Animal'],
    children:
  },
  'Chocolate': {
    part_of_speech: 'noun',
    definition: 'Sweet brown food.',
    example: 'Eat chocolate.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Cookie': {
    part_of_speech: 'noun',
    definition: 'Small flat sweet cake.',
    example: 'Eat cookie.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Corn': {
    part_of_speech: 'noun',
    definition: 'Yellow grain.',
    example: 'Eat corn.',
    level: 4,
    is_a: ['Food', 'Plant'],
    children:
  },
  'Cream': {
    part_of_speech: 'noun',
    definition: 'Thick part of milk.',
    example: 'Add cream.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Dairy': {
    part_of_speech: 'noun',
    definition: 'Food from milk.',
    example: 'Cheese be dairy.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Dinner': {
    part_of_speech: 'noun',
    definition: 'Big meal, evening.',
    example: 'Eat dinner.',
    level: 4,
    is_a: ['Food', 'Meal'],
    children:
  },
  'Drink': {
    part_of_speech: 'noun',
    definition: 'Liquid for swallow.',
    example: 'Drink water.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Egg': {
    part_of_speech: 'noun',
    definition: 'Round thing from bird.',
    example: 'Eat egg.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Fish': {
    part_of_speech: 'noun',
    definition: 'Animal live in water.',
    example: 'Eat fish.',
    level: 4,
    is_a: ['Food', 'Animal'],
    children:
  },
  'Flour': {
    part_of_speech: 'noun',
    definition: 'Powder from grain, make bread.',
    example: 'Bake with flour.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Fruit': {
    part_of_speech: 'noun',
    definition: 'Sweet food from plant.',
    example: 'Eat fruit.',
    level: 4,
    is_a: ['Food', 'Plant'],
    children:
  },
  'Garlic': {
    part_of_speech: 'noun',
    definition: 'Plant, strong taste.',
    example: 'Add garlic.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Grain': {
    part_of_speech: 'noun',
    definition: 'Seed of plant, like wheat, rice.',
    example: 'Eat grain.',
    level: 4,
    is_a: ['Food', 'Plant'],
    children:
  },
  'Honey': {
    part_of_speech: 'noun',
    definition: 'Sweet food from bee.',
    example: 'Eat honey.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Ice Cream': {
    part_of_speech: 'noun',
    definition: 'Cold sweet food.',
    example: 'Eat ice cream.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Juice': {
    part_of_speech: 'noun',
    definition: 'Liquid from fruit.',
    example: 'Drink juice.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Lamb': {
    part_of_speech: 'noun',
    definition: 'Young sheep, for food.',
    example: 'Eat lamb.',
    level: 4,
    is_a: ['Food', 'Animal'],
    children:
  },
  'Lunch': {
    part_of_speech: 'noun',
    definition: 'Meal, middle of day.',
    example: 'Eat lunch.',
    level: 4,
    is_a: ['Food', 'Meal'],
    children:
  },
  'Meal': {
    part_of_speech: 'noun',
    definition: 'Food eat at one time.',
    example: 'Eat meal.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Meat': {
    part_of_speech: 'noun',
    definition: 'Animal flesh, food.',
    example: 'Eat meat.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Milk': {
    part_of_speech: 'noun',
    definition: 'White liquid from cow.',
    example: 'Drink milk.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Nut': {
    part_of_speech: 'noun',
    definition: 'Hard shell fruit.',
    example: 'Eat nut-s.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Oat': {
    part_of_speech: 'noun',
    definition: 'Type of grain.',
    example: 'Eat oat-s.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Oil': {
    part_of_speech: 'noun',
    definition: 'Liquid fat.',
    example: 'Cook with oil.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Onion': {
    part_of_speech: 'noun',
    definition: 'Round vegetable, strong smell.',
    example: 'Cut onion.',
    level: 4,
    is_a: ['Food', 'Vegetable'],
    children:
  },
  'Pasta': {
    part_of_speech: 'noun',
    definition: 'Food from flour, water, shape.',
    example: 'Eat pasta.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Pepper': {
    part_of_speech: 'noun',
    definition: 'Spice, hot or sweet.',
    example: 'Add pepper.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Pie': {
    part_of_speech: 'noun',
    definition: 'Baked food with crust.',
    example: 'Eat pie.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Pork': {
    part_of_speech: 'noun',
    definition: 'Meat from pig.',
    example: 'Eat pork.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Potato': {
    part_of_speech: 'noun',
    definition: 'Round vegetable grow in ground.',
    example: 'Eat potato.',
    level: 4,
    is_a: ['Food', 'Vegetable'],
    children:
  },
  'Rice': {
    part_of_speech: 'noun',
    definition: 'Small grain, white or brown.',
    example: 'Eat rice.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Salad': {
    part_of_speech: 'noun',
    definition: 'Mix of raw vegetable.',
    example: 'Eat salad.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Salt': {
    part_of_speech: 'noun',
    definition: 'White crystal, add taste.',
    example: 'Add salt.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Sandwich': {
    part_of_speech: 'noun',
    definition: 'Two piece bread with food between.',
    example: 'Eat sandwich.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Sauce': {
    part_of_speech: 'noun',
    definition: 'Liquid food, add taste.',
    example: 'Add sauce.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Snack': {
    part_of_speech: 'noun',
    definition: 'Small food between meal-s.',
    example: 'Eat snack.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Soup': {
    part_of_speech: 'noun',
    definition: 'Liquid food.',
    example: 'Eat soup.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Spice': {
    part_of_speech: 'noun',
    definition: 'Plant part, add taste.',
    example: 'Add spice.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Sugar': {
    part_of_speech: 'noun',
    definition: 'Sweet white crystal.',
    example: 'Add sugar.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Tea': {
    part_of_speech: 'noun',
    definition: 'Drink from leaf.',
    example: 'Drink tea.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Tomato': {
    part_of_speech: 'noun',
    definition: 'Red fruit, use as vegetable.',
    example: 'Eat tomato.',
    level: 4,
    is_a: ['Food', 'Fruit', 'Vegetable'],
    children:
  },
  'Vegetable': {
    part_of_speech: 'noun',
    definition: 'Plant eat as food.',
    example: 'Eat vegetable-s.',
    level: 4,
    is_a: ['Food', 'Plant'],
    children:
  },
  'Wheat': {
    part_of_speech: 'noun',
    definition: 'Grain for bread, flour.',
    example: 'Grow wheat.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Yogurt': {
    part_of_speech: 'noun',
    definition: 'Food from milk, thick.',
    example: 'Eat yogurt.',
    level: 4,
    is_a: ['Food'],
    children:
  },
  'Appliance': {
    definition: 'Machine, help in house.',
    level: 3,
    is_a:,
    children:
  },
  'Blender': {
    part_of_speech: 'noun',
    definition: 'A kitchen appliance used to mix, emulsify, purée or liquefy food and other substances.',
    example: 'Use a blender to make a smoothie.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Dishwasher': {
    part_of_speech: 'noun',
    definition: 'A machine for washing dishes automatically.',
    example: 'Load the dishwasher.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Dryer': {
    part_of_speech: 'noun',
    definition: 'A machine or apparatus for drying something, especially clothes or hair.',
    example: 'The clothes be in the dryer.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Fan': {
    part_of_speech: 'noun',
    definition: 'A device with rotating blades that creates a current of air for cooling or ventilation.',
    example: 'Turn on the fan.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Freezer': {
    part_of_speech: 'noun',
    definition: 'A refrigerated cabinet or room for preserving food at very low temperatures.',
    example: 'Put the ice cream in the freezer.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Heater': {
    part_of_speech: 'noun',
    definition: 'A device for warming the air or water.',
    example: 'Turn on the heater.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Clothing-iron': {
    part_of_speech: 'noun',
    definition: 'A handheld implement with a flat, heated base, used to smooth clothes.',
    example: 'Use an iron on the shirt.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Microwave': {
    part_of_speech: 'noun',
    definition: 'An oven that heats and cooks food by exposing it to electromagnetic radiation in the microwave frequency range.',
    example: 'Heat the food in the microwave.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Oven': {
    part_of_speech: 'noun',
    definition: 'An enclosed compartment, as in a cooker, for heating and cooking food.',
    example: 'Bake a cake in the oven.',
    level: 4,
    is_a:,
    children:
  },
  'Refrigerator': {
    part_of_speech: 'noun',
    definition: 'An appliance or compartment which is artificially kept cool and used to store food and drink.',
    example: 'Put the milk in the refrigerator.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Stove': {
    part_of_speech: 'noun',
    definition: 'An apparatus for cooking or heating that operates by burning fuel or using electricity.',
    example: 'Cook on the stove.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Toaster': {
    part_of_speech: 'noun',
    definition: 'An electrical device for making toast.',
    example: 'The toast popped up from the toaster.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Vacuum': {
    part_of_speech: 'noun',
    definition: 'An electrical appliance for cleaning carpets, floors, etc., by suction.',
    example: 'Use the vacuum to clean the rug.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  'Washer': {
    part_of_speech: 'noun',
    definition: 'A machine for washing clothes.',
    example: 'Put the clothes in the washer.',
    level: 4,
    is_a: ['Appliance'],
    children:
  },
  // --- Placeholder Categories under 'Thing' ---
  'Substance': { level: 2, is_a:, children: },
  'Information': { level: 2, is_a:, children: },
  'Sound': { level: 2, is_a:, children: },
  'Light': { level: 2, is_a:, children: },
  'Energy': { level: 2, is_a:, children: },
  'Measurement': { level: 2, is_a:, children: },
  'Text': { level: 2, is_a:, children: },
  'Technology': { level: 2, is_a:, children: },
  'Property': { level: 2, is_a:, children: },
  'Signal': { level: 2, is_a:, children: },
  'Proof': { level: 2, is_a:, children: },
  'Mail': { level: 2, is_a:, children: },
  'Representation': { level: 2, is_a:, children: },
  'Publication': { level: 2, is_a:, children: },
  'Recording': { level: 2, is_a:, children: },
  'Medicine': { level: 2, is_a:, children: },
  'Resource': { level: 2, is_a:, children: },
  'Waste': { level: 2, is_a:, children: },
  'Body Fluid': { level: 2, is_a:, children: },
  'Element': { level: 2, is_a:, children: },
  'Molecule': { level: 2, is_a:, children: },
}
