const words = [
  'abandon',
  'beacon',
  'candy',
  'dove',
  'eagle',
  'flame',
  'grape',
  'happy',
  'ice',
  'jungle',
  'kingdom',
  'lunar',
  'mango',
  'noble',
  'ocean',
  'petal',
  'quest',
  'river',
  'shadow',
  'train',
  'umbrella',
  'vivid',
  'whale',
  'basket',
  'yellow',
  'zebra',
  'angel',
  'brave',
  'crane',
  'dusk',
  'enigma',
  'frost',
  'glow',
  'honey',
  'index',
  'juice',
  'knight',
  'lunar',
  'magic',
  'night',
  'oasis',
  'pearl',
  'quill',
  'rose',
  'scent',
  'tiger',
  'unity',
  'vortex',
  'wind',
  'xray',
  'yogurt',
  'zoned',
  'atlas',
  'bliss',
  'cider',
  'dawn',
  'epoch',
  'flame',
  'gauge',
  'heaven',
  'irony',
  'jolly',
  'koala',
  'lamb',
  'mint',
  'neon',
  'opal',
  'plum',
  'quartz',
  'ruby',
  'sunset',
  'tango',
  'urban',
  'vogue',
  'wave',
  'xerox',
  'yearn',
  'zephyr',
  'aqua',
  'bold',
  'crisp',
  'dove',
  'edge',
  'forge',
  'grace',
  'hush',
  'ink',
  'jade',
  'kite',
  'leaf',
  'mist',
  'navy',
  'oak',
  'pale',
  'quilted',
  'rare',
  'stone',
  'tone',
  'urban',
  'vibes',
  'wisp',
  'yacht',
  'zeal',
  'arc',
  'blaze',
  'core',
  'dust',
  'echo',
  'flint',
  'gaze',
  'halo',
  'iron',
  'june',
  'kale',
  'lime',
  'moss',
  'nest',
  'ore',
  'peach',
  'quail',
  'ridge',
  'snow',
  'tide',
  'use',
  'vow',
  'window',
  'xmas',
  'yoga',
  'zoo',
  'amber',
  'breeze',
  'clover',
  'drift',
  'enjoy',
  'flame',
  'grin',
  'hatch',
  'icicle',
  'jazz',
  'knack',
  'latch',
  'mocha',
  'nail',
  'open',
  'pale',
  'quiz',
  'rust',
  'sail',
  'tide',
  'ugly',
  'vowed',
  'wool',
  'xenon',
  'yawned',
  'zone',
  'awe',
  'belt',
  'charm',
  'dome',
  'elixir',
  'fawn',
  'gala',
  'hop',
  'inc',
  'june',
  'knot',
  'lump',
  'moon',
  'noon',
  'opal',
  'pier',
  'quiver',
  'ride',
  'stare',
  'twin',
  'unit',
  'vase',
  'wax',
  'yolk',
  'zoom',
  'arrow',
  'brick',
  'cloud',
  'dune',
  'eagle',
  'frost',
  'grip',
  'haze',
  'ignite',
  'jacket',
  'lure',
  'mesh',
  'nest',
  'ogre',
  'puff',
  'quilt',
  'rave',
  'swoop',
  'track',
  'urge',
  'view',
  'windy',
  'yell',
  'zen',
  'bolt',
  'clip',
  'deep',
  'echo',
  'flare',
  'gaze',
  'heron',
  'iris',
  'jolt',
  'key',
  'lily',
  'mint',
  'nook',
  'olive',
  'plow',
  'quill',
  'rust',
  'sage',
  'tick',
  'uniform',
  'vibe',
  'whip',
  'yarn',
  'zoomed',
  'art',
  'blow',
  'core',
  'dove',
  'eagle',
  'foam',
  'gloom',
  'hand',
  'ice',
  'joke',
  'knee',
  'loaf',
  'melt',
  'note',
  'open',
  'pale',
  'quill',
  'roar',
  'slug',
  'tear',
  'urge',
  'blank',
  'wait',
  'yawn',
  'zinc'
];

// Shuffle words array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

console.log(shuffleArray(words));
