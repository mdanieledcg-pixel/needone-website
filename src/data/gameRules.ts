export type GameRuleTable = {
  headers: string[]
  rows: string[][]
}

export type GameRuleSection = {
  title: string
  paragraphs?: string[]
  bullets?: string[]
  table?: GameRuleTable
}

export type GameRule = {
  slug: string
  name: string
  category: "Field Game" | "Tee Time Game"
  summary: string
  sections: GameRuleSection[]
}

export const gameRules: GameRule[] = [
  {
    slug: "blind-better-ball",
    name: "Blind Better Ball",
    category: "Field Game",
    summary:
      "Random two-person teams compete using the better score from each team on every hole.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Blind Better Ball is a team game where the partnerships are determined randomly. Once the teams are drawn, each two-player team plays better ball for the round.",
          "The game requires an even number of players so everyone can be paired with a partner. It can be played using gross or net scores.",
        ],
      },
      {
        title: "Scoring",
        paragraphs: [
          "Both partners play their own ball on every hole. The lower score between the two partners becomes the team's score for that hole.",
          "For example, if one partner makes 4 and the other makes 5, the team records a 4.",
          "Continue the same way for the entire round, adding the team's counting score from each hole.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "The team with the lowest total better-ball score at the end of the round wins. If two teams finish with the same total, the game is tied.",
        ],
      },
    ],
  },

  {
    slug: "skins",
    name: "Skins",
    category: "Field Game",
    summary:
      "Every hole is its own contest, with tied skins optionally carrying over to make the next hole more valuable.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Skins turns every hole into its own contest. Instead of playing for the lowest 18-hole total, players are trying to win individual holes outright and collect skins along the way.",
          "The game can be played gross or net. Before the round, the group can also decide whether tied skins will carry over.",
        ],
      },
      {
        title: "Winning a Skin",
        paragraphs: [
          "Each hole begins worth one skin. To win it, a player must post the single lowest score on the hole.",
          "For example, if one player makes 4 and everyone else makes 5 or worse, that player wins the skin.",
          "If two or more players tie for the lowest score, nobody wins the skin on that hole.",
        ],
      },
      {
        title: "Carryovers",
        paragraphs: [
          "When carryovers are enabled, a tied skin rolls into the next hole. The next hole is then worth the new skin plus the skin that carried over.",
          "Several tied holes in a row can create a much more valuable hole later in the round.",
          "If carryovers are turned off, a tied hole simply has no winner and the next hole starts fresh at one skin.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "The player who collects the most skins over the round wins.",
        ],
      },
    ],
  },

  {
    slug: "canadian-skins",
    name: "Canadian Skins",
    category: "Field Game",
    summary:
      "Net skins with gross score used as the tiebreaker when players tie for low net.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Canadian Skins follows the same hole-by-hole format as traditional Skins, but adds a second layer to the scoring. Net score determines the winner first, while gross score is used to break a tie for low net.",
        ],
      },
      {
        title: "Winning a Skin",
        paragraphs: [
          "Compare every player's net score on the hole. If one player has the outright lowest net score, that player wins the skin.",
          "If two or more players tie for low net, compare the gross scores of only those tied players. If one of them has the lower gross score, that player wins the skin.",
          "If the tied players are still tied after comparing gross scores, the skin remains unresolved.",
        ],
      },
      {
        title: "Carryovers",
        paragraphs: [
          "When carryovers are enabled, an unresolved skin rolls into the next hole and increases the number of skins available on that hole.",
          "If carryovers are disabled, the tied skin is not carried forward.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "The golfer with the most skins at the end of the round wins.",
        ],
      },
    ],
  },

  {
    slug: "twenty-twos",
    name: "Twenty-Twos",
    category: "Field Game",
    summary:
      "A team game where each side must choose exactly 22 net scores on the front nine and another 22 on the back.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Twenty-Twos is a team game built around deciding which scores to count. Instead of automatically taking the same number of scores on every hole, each team must assemble exactly 22 counting net scores on each nine.",
          "The field is divided into equal-sized teams. Every team faces the same challenge: count exactly 22 scores on the front nine and exactly 22 more on the back nine.",
        ],
      },
      {
        title: "Choosing Scores",
        paragraphs: [
          "A team can count more than one player's score on the same hole. That creates the strategy: use several good scores when the opportunity is there, while making sure the team can still reach exactly 22 selections by the end of the nine.",
          "The front and back are handled separately. Once the front nine is complete, the team begins a new set of 22 selections for the back nine.",
        ],
      },
      {
        title: "Scoring",
        paragraphs: [
          "Every selected net score is counted relative to par. A net birdie is one under, a net par is even, and a net bogey is one over.",
          "All selected scores are added together to produce the team's running score to par.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "After counting 22 scores on each nine, the team with the lowest cumulative score relative to par wins.",
        ],
      },
    ],
  },

  {
    slug: "stableford",
    name: "Stableford",
    category: "Field Game",
    summary:
      "Earn points based on your score relative to par instead of simply adding total strokes.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Stableford replaces traditional stroke totals with points. Better holes earn more points, while a bad hole does less damage than it would in regular Stroke Play.",
          "The game can be played using gross or net scores and can use either Standard Stableford or Modified Stableford scoring.",
        ],
      },
      {
        title: "Standard Stableford",
        paragraphs: [
          "Standard Stableford awards points for each hole based on the player's score relative to par.",
        ],
        table: {
          headers: ["Score", "Points"],
          rows: [
            ["Double bogey or worse", "0"],
            ["Bogey", "1"],
            ["Par", "2"],
            ["Birdie", "3"],
            ["Eagle", "4"],
            ["Albatross", "5"],
            ["Four under or better", "6"],
          ],
        },
      },
      {
        title: "Modified Stableford",
        paragraphs: [
          "Modified Stableford puts a larger premium on birdies and eagles while also subtracting points for poor holes.",
        ],
        table: {
          headers: ["Score", "Points"],
          rows: [
            ["Double bogey or worse", "-3"],
            ["Bogey", "-1"],
            ["Par", "0"],
            ["Birdie", "2"],
            ["Eagle", "5"],
            ["Albatross", "8"],
            ["Four under or better", "10"],
          ],
        },
      },
      {
        title: "How to Win",
        paragraphs: [
          "Add the points earned on every hole. Unlike Stroke Play, the player with the highest total wins.",
        ],
      },
    ],
  },

  {
    slug: "stroke-play",
    name: "Stroke Play",
    category: "Field Game",
    summary:
      "Traditional golf scoring: count every hole and finish with the lowest total.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Stroke Play is traditional golf scoring. Every hole counts, every eligible stroke is added to the total, and the lowest score wins.",
          "The game can be played gross or net.",
        ],
      },
      {
        title: "Gross vs. Net",
        paragraphs: [
          "In gross Stroke Play, the score actually shot on each hole counts toward the player's total.",
          "In net Stroke Play, handicap strokes are applied and the resulting net score is used.",
        ],
      },
      {
        title: "Scoring",
        paragraphs: [
          "Record a score on every hole and continue adding the scores throughout the round. For example, scores of 4, 5 and 3 on the first three holes produce a running total of 12.",
          "There are no skins, points, presses or separate hole values. The full round is one cumulative score.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "The golfer with the lowest total score wins. If multiple players finish with the same lowest total, the result is a tie.",
        ],
      },
    ],
  },

  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    category: "Tee Time Game",
    summary:
      "A four-player team betting game using better ball and multiple running bets called ways.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Pittsburgh is a high-action four-player betting game played between two fixed teams of two. The game uses net better ball along with multiple running bets called ways.",
          "Several ways can be open at the same time. Winning a hole can move every existing way while also opening new ones, so the game can change quickly.",
        ],
      },
      {
        title: "Setup",
        paragraphs: [
          "Split the foursome into two fixed teams of two. Both players play their own ball, and the lower net score between the partners becomes the team's score for the hole.",
          "Before teeing off, the group can agree on a value for each way, such as $5 per way.",
        ],
      },
      {
        title: "What Is a Way?",
        paragraphs: [
          "A way is an individual running bet between the two teams. Multiple ways can be active simultaneously, and each keeps its own running position.",
          "The first way opened is the top line. It is treated differently at the turn because it continues through the full 18 holes.",
        ],
      },
      {
        title: "Winning a Hole",
        paragraphs: [
          "Compare the two teams' net better-ball scores. The team with the lower score wins the hole.",
          "The margin of victory moves every active way. If Team A wins 4 to 3, the margin is one. If Team A wins 5 to 3, the margin is two.",
          "That margin is applied to every way currently running.",
        ],
      },
      {
        title: "Opening New Ways",
        paragraphs: [
          "Every won hole opens at least one new way. Strong gross scoring by the winning team can open additional ways.",
        ],
        table: {
          headers: ["Gross Score", "Ways"],
          rows: [
            ["Par or worse", "1 minimum"],
            ["Birdie", "2"],
            ["Eagle", "3"],
            ["Albatross", "4"],
            ["Four under or better", "5"],
          ],
        },
      },
      {
        title: "When Both Partners Go Low",
        paragraphs: [
          "Qualifying gross scores from both partners can contribute to the number of ways opened. That means a team can win the hole with its net better ball while also creating additional action because one or both partners made birdie or better.",
        ],
      },
      {
        title: "Tied Holes",
        paragraphs: [
          "If the teams post the same net better-ball score, the hole is tied. No new way opens and none of the existing ways move.",
          "All active ways simply carry forward unchanged to the next hole.",
        ],
      },
      {
        title: "The Turn",
        paragraphs: [
          "At the end of the front nine, the additional front-nine ways are settled.",
          "The top line is the exception. It settles at the turn but remains active and continues through the back nine. Ways opened on the back nine continue until the end of the round.",
        ],
      },
      {
        title: "Settlement",
        paragraphs: [
          "Each way is settled independently using the value agreed upon before the round. Because a team can be ahead on some ways and behind on others, wins and losses can offset each other.",
          "The remaining back-nine ways and the continuing top line are settled after hole 18.",
        ],
      },
    ],
  },

  {
    slug: "wolf",
    name: "Wolf",
    category: "Tee Time Game",
    summary:
      "A four-player game where the Wolf rotates every hole and chooses a partner or takes on the other three alone.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Wolf is a four-player game where the teams can change on every hole. One golfer is the Wolf, and the Wolf decides whether to choose a partner or play alone against the other three.",
          "The Wolf position rotates in a fixed order throughout the round, giving every player repeated chances to control the matchup.",
        ],
      },
      {
        title: "Choosing Sides",
        paragraphs: [
          "On each hole, the Wolf can select one of the other golfers as a partner. That creates a two-versus-two match for the hole.",
          "The Wolf can instead choose to play alone, becoming the Lone Wolf against the other three players.",
          "Blind Wolf can also be enabled, allowing the Wolf to commit to playing alone under the Blind Wolf rules.",
        ],
      },
      {
        title: "Scoring the Hole",
        paragraphs: [
          "Each side uses its best score on the hole. The game can be played gross or net.",
          "The side with the lower best-ball score wins the hole.",
        ],
      },
      {
        title: "Points and Multipliers",
        paragraphs: [
          "A normal partnership uses the standard point value. Lone Wolf and Blind Wolf can use larger multipliers because the Wolf is taking on the field alone.",
          "The Lone Wolf and Blind Wolf multipliers are set before play.",
          "Every player on the winning side receives the full number of points awarded for the hole.",
        ],
      },
      {
        title: "Tied Holes",
        paragraphs: [
          "Ties can be handled as either a push or a carryover.",
          "With a push, nobody receives points and the next hole begins normally. With a carryover, the tied point value carries forward and makes the next decided hole more valuable.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "Add each player's points over the round. The golfer with the highest point total wins.",
        ],
      },
    ],
  },

  {
    slug: "nassau",
    name: "Nassau",
    category: "Tee Time Game",
    summary:
      "Three match-play contests in one round: the front nine, back nine and overall match.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "A Nassau is three separate match-play contests played during the same round: the front nine, the back nine and the overall 18-hole match.",
          "It can be played as singles or with two-player teams, using either gross or net scoring.",
        ],
      },
      {
        title: "The Three Matches",
        table: {
          headers: ["Match", "Holes"],
          rows: [
            ["Front", "1–9"],
            ["Back", "10–18"],
            ["Overall", "1–18"],
          ],
        },
        paragraphs: [
          "Each of the three matches is scored independently.",
        ],
      },
      {
        title: "Scoring a Hole",
        paragraphs: [
          "In singles, compare the two players' eligible scores. In team play, the lower score between the two partners becomes the side's score for the hole.",
          "The side with the lower score wins the hole. A tied hole is halved and does not change the match.",
          "A win on hole 4 affects both the Front match and the Overall match. A win on hole 14 affects both the Back match and the Overall match.",
        ],
      },
      {
        title: "Presses",
        paragraphs: [
          "A press creates a new match while the original match continues. It does not erase or restart the original Nassau.",
          "Presses can be turned off, started manually or triggered automatically.",
          "A press begins on the next hole and runs through the end of that nine. This gives a side that is down a chance to create a new bet while the original match remains in play.",
        ],
      },
      {
        title: "Automatic Presses",
        paragraphs: [
          "With automatic presses, a new press can be triggered when a side falls a predetermined number of holes behind.",
          "Re-presses and multiple simultaneous presses can also be allowed depending on the rules agreed upon before the round.",
          "The Overall match does not generate presses.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "The Front, Back and Overall matches are each separate results. Any presses created during the round are also scored as their own matches.",
          "If the group is playing for a wager, the value of the three base matches and any presses should be agreed upon before teeing off.",
        ],
      },
    ],
  },

  {
    slug: "match-play",
    name: "Match Play",
    category: "Tee Time Game",
    summary:
      "Win individual holes rather than counting total strokes for the entire round.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Match Play is about winning holes rather than posting the lowest total score. A terrible score on one hole only costs that hole; it does not continue hurting the player for the rest of the round.",
          "The game can be played as Singles or Four-Ball, using gross or net scores, over 9 or 18 holes.",
        ],
      },
      {
        title: "Singles",
        paragraphs: [
          "Singles is one player against another. Compare the two scores on each hole. The lower score wins the hole.",
        ],
      },
      {
        title: "Four-Ball",
        paragraphs: [
          "Four-Ball uses two players on each side. Everyone plays their own ball, and the lower score between the two partners becomes that side's score for the hole.",
          "The two side scores are then compared to determine the winner of the hole.",
        ],
      },
      {
        title: "Match Status",
        paragraphs: [
          "Winning a hole moves the side one hole ahead. Losing the next hole gives that hole back. A tied hole is halved and does not change the match.",
          "If neither side is ahead, the match is All Square. If Side A has won two more holes than Side B, Side A is 2 UP.",
        ],
      },
      {
        title: "Closing Out the Match",
        paragraphs: [
          "A match ends as soon as the trailing side can no longer catch up with the number of holes remaining.",
          "For example, if a side is four holes ahead with only three holes left to play, the match ends 4 & 3.",
        ],
      },
      {
        title: "Ties and Extra Holes",
        paragraphs: [
          "If the match reaches the end of the scheduled holes All Square, the game can either finish tied or continue to extra holes.",
          "When extra holes are used, play continues until one side wins the match.",
        ],
      },
      {
        title: "Concessions",
        paragraphs: [
          "A hole can be conceded to the other side, and the entire match can also be conceded before it is mathematically complete.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "Finish ahead when the match is mathematically decided, or be ahead at the end of the scheduled number of holes.",
        ],
      },
    ],
  },

  {
    slug: "train",
    name: "Train",
    category: "Tee Time Game",
    summary:
      "Build a running point total with good holes, but a bad stretch can knock you off the Train and reset your score.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Train rewards golfers for stringing together good holes. Par or better builds a running point total, while bad holes threaten to wipe that total back to zero.",
          "The game can be played gross or net.",
        ],
      },
      {
        title: "Points",
        table: {
          headers: ["Score", "Points"],
          rows: [
            ["Bogey or worse", "0"],
            ["Par", "1"],
            ["Birdie", "2"],
            ["Eagle", "4"],
            ["Albatross", "8"],
            ["Four under or better", "16"],
          ],
        },
        paragraphs: [
          "Par or better adds the listed points to the player's existing running total.",
        ],
      },
      {
        title: "Bogeys",
        paragraphs: [
          "One bogey earns no points, but it does not immediately erase the points already accumulated.",
          "If the next hole is also a bogey, two consecutive bogeys knock the player off the Train and reset the entire running total to zero.",
          "Making par or better after the first bogey ends the bogey streak and keeps the existing total alive.",
        ],
      },
      {
        title: "Double Bogey or Worse",
        paragraphs: [
          "A double bogey or worse causes an immediate reset to zero. It does not matter what happened on the previous hole.",
          "After a reset, the player can begin building a new Train on the holes that follow.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "The golfer with the highest running point total remaining at the end of the round wins.",
        ],
      },
    ],
  },

  {
    slug: "nines",
    name: "Nines",
    category: "Tee Time Game",
    summary:
      "A three-player game that divides exactly nine points among the group on every hole.",
    sections: [
      {
        title: "How It Works",
        paragraphs: [
          "Nines is a game for exactly three golfers. Every hole has nine points available, and those nine points are divided among the players based on their scores.",
          "The game can be played gross or net.",
        ],
      },
      {
        title: "Normal Scoring — 5 / 3 / 1",
        paragraphs: [
          "When all three players have different scores, the player with the lowest score receives 5 points, the middle score receives 3, and the highest score receives 1.",
        ],
        table: {
          headers: ["Finish", "Points"],
          rows: [
            ["Low score", "5"],
            ["Middle score", "3"],
            ["High score", "1"],
          ],
        },
      },
      {
        title: "Tie for Low — 4 / 4 / 1",
        paragraphs: [
          "If two players tie for the lowest score, they split the eight points normally awarded to first and second place. Each tied player receives 4 points, while the third player receives 1.",
        ],
      },
      {
        title: "Tie for Second — 5 / 2 / 2",
        paragraphs: [
          "If one player has the low score and the other two players tie, the low player receives 5 points and the tied players receive 2 points each.",
        ],
      },
      {
        title: "Three-Way Tie — 3 / 3 / 3",
        paragraphs: [
          "If all three golfers post the same score, the nine available points are divided evenly. Each player receives 3 points.",
        ],
      },
      {
        title: "How to Win",
        paragraphs: [
          "Exactly nine points are distributed on every hole. Keep adding those points throughout the round, and the golfer with the highest total at the end wins.",
        ],
      },
    ],
  },
]

export function getGameRule(slug: string) {
  return gameRules.find((game) => game.slug === slug)
}