const moviesData = [
  {
    title: 'A History of Violence',
    year: 2005,
    country: 'USA',
    genre: 'Crime',
    summary: `Tom Stall, a humble family man and owner of a
  popular neighborhood restaurant, lives a quiet but
  fulfilling existence in the Midwest. One night Tom
  foils a crime at his place of business and, to his
  chagrin, is plastered all over the news for his
  heroics. Following this, mysterious people follow
  the Stalls' every move, concerning Tom more than
  anyone else. As this situation is confronted, more
  lurks out over where all these occurrences have
  stemmed from compromising his marriage, family
  relationship and the main characters' former
  relations in the process.`,
    director: {
      firstName: 'David',
      lastName: 'Cronenberg',
      birthDate: '1943'
    },
    actors: [
      {
        firstName: 'Vigo',
        lastName: 'Mortensen',
        birthDate: '1958',
        role: 'Tom Stall'
      },
      {
        firstName: 'Maria',
        lastName: 'Bello',
        birthDate: '1967',
        role: 'Eddie Stall'
      },
      {
        firstName: 'Ed',
        lastName: 'Harris',
        birthDate: '1950',
        role: 'Carl Fogarty'
      },
      {
        firstName: 'William',
        lastName: 'Hurt',
        birthDate: '1950',
        role: 'Richie Cusack'
      }
    ]
  },
  {
    title: 'Heat',
    year: 1995,
    country: 'USA',
    genre: 'Crime',
    summary: `Hunters and their prey--Neil and his professional
  criminal crew hunt to score big money targets
  (banks, vaults, armored cars) and are, in turn,
  hunted by Lt. Vincent Hanna and his team of cops
  in the Robbery/Homicide police division. A botched
  job puts Hanna onto their trail while they regroup
  and try to put together one last big 'retirement'
  score. Neil and Vincent are similar in many ways,
  including their troubled personal lives. At a
  crucial moment in his life, Neil disobeys the
  dictum taught to him long ago by his criminal
  mentor--'Never have anything in your life that you
  can't walk out on in thirty seconds flat, if you
  spot the heat coming around the corner'--as he
  falls in love. Thus the stage is set for the
  suspenseful ending....
`,
    director: {
      firstName: 'Michael',
      lastName: 'Mann',
      birthDate: '1943'
    },
    actors: [
      {
        firstName: 'Al',
        lastName: 'Pacino',
        birthDate: '1940',
        role: 'Lt. Vincent Hanna'
      },
      {
        firstName: 'Robert',
        lastName: 'De Niro',
        birthDate: '1943',
        role: 'Neil McCauley'
      },
      {
        firstName: 'Val',
        lastName: 'Kilmer',
        birthDate: '1959',
        role: 'Chris Shiherlis'
      },
      {
        firstName: 'Jon',
        lastName: 'Voight',
        birthDate: '1938',
        role: 'Nate'
      }
    ]
  },
  {
    title: 'Unforgiven',
    year: 1992,
    country: 'USA',
    genre: 'Western',
    summary: `The town of Big Whisky is full of normal people
  trying to lead quiet lives. Cowboys try to make a
  living. Sheriff 'Little Bill' tries to build a
  house and keep a heavy-handed order. The town
  whores just try to get by.Then a couple of cowboys
  cut up a whore. Unsatisfied with Bill's justice,
  the prostitutes put a bounty on the cowboys. The
  bounty attracts a young gun billing himself as
  'The Schofield Kid', and aging killer William
  Munny. Munny reformed for his young wife, and has
  been raising crops and two children in peace. But
  his wife is gone. Farm life is hard. And Munny is
  no good at it. So he calls his old partner Ned,
  saddles his ornery nag, and rides off to kill one
  more time, blurring the lines between heroism and
  villainy, man and myth.
`,
    director: {
      firstName: 'Clint',
      lastName: 'Eastwood',
      birthDate: '1930'
    },
    actors: [
      {
        firstName: 'Clint',
        lastName: 'Eastwood',
        birthDate: '1930',
        role: `William 'Bill' Munny`
      },
      {
        firstName: 'Gene',
        lastName: 'Hackman',
        birthDate: '1930',
        role: 'Little Bill Daggett'
      },
      {
        firstName: 'Morgan',
        lastName: 'Freeman',
        birthDate: '1937',
        role: 'Ned Logan'
      }
    ]
  },
  {
    title: 'Match Point',
    year: 2005,
    country: 'USA',
    genre: 'Crime',
    summary: `Chris Wilton is a former tennis pro, looking to
  find work as an instructor. He meets Tom Hewett, a
  well-off pretty boy. Tom's sister Chloe falls in
  love with Chris but Chris has his eyes on Tom's
  fiancée, the luscious Nola. Both Chris and Nola
  know it's wrong but what could be more right than
  love? Chris tries to juggle both women but at some
  point, he must choose between them...
`,
    director: {
      firstName: 'Woody',
      lastName: 'Allen',
      birthDate: '1935'
    },
    actors: [
      {
        firstName: 'Jonathan',
        lastName: 'Rhys Meyers',
        birthDate: '1977',
        role: `Chris Wilton`
      },
      {
        firstName: 'Scarlett',
        lastName: 'Johansson',
        birthDate: '1984',
        role: 'Nola Rice'
      },
      {
        firstName: 'Morgan',
        lastName: 'Freeman',
        birthDate: '1937',
        role: 'Ned Logan'
      }
    ]
  },
  {
    title: 'Lost in Translation',
    year: 2003,
    country: 'USA',
    genre: 'Drama',
    summary: ``,
    director: {
      firstName: 'Sofia',
      lastName: 'Coppola',
      birthDate: '1971'
    },
    actors: [
      {
        firstName: 'Scarlett',
        lastName: 'Johansson',
        birthDate: '1984',
        role: 'Charlotte'
      },
      {
        firstName: 'Bill',
        lastName: 'Murray',
        birthDate: '1950',
        role: 'Bob Harris'
      }
    ]
  },
  {
    title: 'Marie Antoinette',
    year: 2006,
    country: 'USA',
    genre: 'Drama',
    summary: `Based on Antonia Fraser's book about the ill-fated
  Archduchess of Austria and later Queen of France,
  'Marie Antoinette' tells the story of the most
  misunderstood and abused woman in history, from
  her birth in Imperial Austria to her later life in
  France.
`,
    director: {
      firstName: 'Sofia',
      lastName: 'Coppola',
      birthDate: '1971'
    },
    actors: [
      {
        firstName: 'Kirsten',
        lastName: 'Dunst',
        birthDate: '1982',
        role: 'Marie Antoinette'
      },
      {
        firstName: 'Jason',
        lastName: 'Schwartzman',
        birthDate: '1980',
        role: 'Louis XVI'
      }
    ]
  },
  {
    title: 'Spider-Man',
    year: 2002,
    country: 'USA',
    genre: 'Action',
    summary: `On a school field trip, Peter Parker (Maguire) is
  bitten by a genetically modified spider. He wakes
  up the next morning with incredible powers. After
  witnessing the death of his uncle (Robertson),
  Parkers decides to put his new skills to use in
  order to rid the city of evil, but someone else
  has other plans. The Green Goblin (Dafoe) sees
  Spider-Man as a threat and must dispose of him.
  Even if it means the Goblin has to target Parker's
  Aunt (Harris) and the girl he secretly pines for
  (Dunst)

`,
    director: {
      firstName: 'Sam',
      lastName: 'Raimi',
      birthDate: '1959'
    },
    actors: [
      {
        firstName: 'Kirsten',
        lastName: 'Dunst',
        birthDate: '1982',
        role: 'Mary Jane Watson'
      },
      {
        firstName: 'Tobey',
        lastName: 'Maguire',
        birthDate: '1975',
        role: 'Spider-Man / Peter Parker'
      },
      {
        firstName: 'Willem',
        lastName: 'Dafoe',
        birthDate: '1955',
        role: 'Green Goblin / Norman Osborn'
      }
    ]
  }
];

module.exports = moviesData;
