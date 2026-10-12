export type GameRule = {
  slug: string
  name: string
  category: "Field Game" | "Tee Time Game"
  summary: string
  rules: string[]
}

export const gameRules: GameRule[] = [
  {
    slug: "better-ball",
    name: "Better Ball",
    category: "Field Game",
    summary:
      "Two-person teams compete using the better score from each team on every hole. Teams can be selected manually or randomly assigned.",
    rules: [
      "Better Ball is a team game played with two-person partnerships. Teams can be manually selected before the round or randomly generated using Need One's team randomizer. The game requires an even number of players so everyone can be paired.",
      "Better Ball can be played using gross or net scores. When using net scoring, handicap strokes are applied according to the game's configured handicap settings.",
      "Both partners play their own ball on every hole. The lower score between the two partners becomes the team's score for that hole. For example, if one partner makes 4 and the other makes 5, the team records a 4. When playing net Better Ball, the lower net score is used instead.",
      "The team's counting score from each hole is added together throughout the round. Only one score per team counts on each hole, regardless of which partner provides it.",
      "The team with the lowest total Better Ball score at the end of the round wins. If two or more teams finish with the same total, the game is tied.",
    ],
  },

  {
    slug: "skins",
    name: "Skins",
    category: "Field Game",
    summary:
      "Every hole is its own contest, with tied skins optionally carrying over to make the next hole more valuable.",
    rules: [
      "Skins turns every hole into its own contest. Instead of playing for the lowest 18-hole total, players are trying to win individual holes outright and collect skins along the way. The game can be played gross or net.",
      "Each hole begins worth one skin. To win it, a player must post the single lowest score on the hole. For example, if one player makes 4 and everyone else makes 5 or worse, that player wins the skin.",
      "If two or more players tie for the lowest score, nobody wins the skin on that hole. When carryovers are enabled, the tied skin rolls into the next hole, making that hole worth the new skin plus everything that has carried over.",
      "Several tied holes in a row can create a much more valuable hole later in the round. Once somebody wins a hole outright, that player collects the skin for that hole along with the skins that carried into it.",
      "If carryovers are turned off, a tied hole simply has no winner and the next hole starts fresh at one skin.",
      "The player who collects the most skins over the round wins.",
    ],
  },

  {
    slug: "canadian-skins",
    name: "Canadian Skins",
    category: "Field Game",
    summary:
      "Net skins with gross score used as the tiebreaker when players tie for low net.",
    rules: [
      "Canadian Skins follows the same hole-by-hole format as traditional Skins, but adds another layer to the scoring. Net score determines the winner first, while gross score is used to break a tie for low net.",
      "Compare every player's net score on the hole. If one player has the outright lowest net score, that player wins the skin.",
      "If two or more players tie for low net, compare the gross scores of only those tied players. If one of them has the lower gross score, that player wins the skin.",
      "If the tied players are still tied after comparing gross scores, nobody wins the skin. When carryovers are enabled, that unresolved skin rolls into the next hole and increases the number of skins available.",
      "If carryovers are disabled, the tied skin does not carry forward and the next hole begins fresh.",
      "The golfer with the most skins at the end of the round wins.",
    ],
  },

  {
    slug: "twenty-twos",
    name: "Twenty-Twos",
    category: "Field Game",
    summary:
      "A team game where each side must choose exactly 22 net scores on the front nine and another 22 on the back.",
    rules: [
      "Twenty-Twos is a team game built around deciding which scores to count. Instead of automatically taking the same number of scores on every hole, each team must assemble exactly 22 counting net scores on each nine.",
      "The field is divided into equal-sized teams. Every team faces the same challenge: count exactly 22 scores on the front nine and exactly 22 more on the back nine.",
      "A team can count more than one player's score on the same hole. The strategy is deciding when to use several good scores while still leaving enough selections to reach exactly 22 by the end of the nine.",
      "Every selected net score is counted relative to par. A net birdie is one under, a net par is even, and a net bogey is one over. The selected scores are added together to produce the team's running score to par.",
      "The front and back are handled separately. After completing 22 selections on the front nine, each team begins a new set of 22 selections on the back.",
      "The team with the lowest cumulative score relative to par after both nines wins.",
    ],
  },

  {
    slug: "stableford",
    name: "Stableford",
    category: "Field Game",
    summary:
      "Earn points based on your score relative to par instead of simply adding total strokes.",
    rules: [
      "Stableford replaces traditional stroke totals with points. Better holes earn more points, while a bad hole does less damage than it would in regular Stroke Play. The game can be played using gross or net scores.",
      "Standard Stableford awards 0 points for double bogey or worse, 1 for bogey, 2 for par, 3 for birdie, 4 for eagle, 5 for albatross, and 6 for four under or better.",
      "Modified Stableford puts a larger premium on good holes while also subtracting points for poor ones. Double bogey or worse is -3, bogey is -1, par is 0, birdie is 2, eagle is 5, albatross is 8, and four under or better is 10.",
      "Points are awarded on each hole and added together throughout the round. Unlike Stroke Play, the player with the highest total wins.",
    ],
  },

  {
    slug: "stroke-play",
    name: "Stroke Play",
    category: "Field Game",
    summary:
      "Traditional golf scoring: count every hole and finish with the lowest total.",
    rules: [
      "Stroke Play is traditional golf scoring. Every hole counts, every eligible stroke is added to the total, and the lowest score wins. The game can be played gross or net.",
      "In gross Stroke Play, the score actually shot on each hole counts toward the player's total. In net Stroke Play, handicap strokes are applied and the resulting net score is used.",
      "Record a score on every hole and continue adding the scores throughout the round. For example, scores of 4, 5 and 3 on the first three holes produce a running total of 12.",
      "There are no skins, points, presses or separate hole values. The full round is one cumulative score.",
      "The golfer with the lowest total score wins. If multiple players finish with the same lowest total, the result is a tie.",
    ],
  },

  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    category: "Tee Time Game",
    summary:
      "A four-player team betting game using better ball and multiple running bets called ways. Its roots were started out at a club around Pittsburgh, and brought to The 1912 Club in Plymouth Meeting, PA, where it has taken over as the standard 4-some game.",
    rules: [
      "Pittsburgh is a high-action four-player betting game played between two fixed teams of two. The game uses net better ball along with multiple running bets called ways. Several ways can be open at the same time, so the game can change quickly.",
      "Split the foursome into two fixed teams of two. Both players play their own ball, and the lower net score between the partners becomes the team's score for the hole. Before teeing off, the group can agree on a value for each way, such as $5 per way.",
      "A way is an individual running bet between the two teams. Multiple ways can be active simultaneously, and each keeps its own running position. The first way opened is the top line, which is treated differently at the turn because it continues through the full 18 holes.",
      "Compare the teams' net better-ball scores on each hole. The lower team score wins. The margin of victory moves every active way. If Team A wins 4 to 3, the margin is one. If Team A wins 5 to 3, the margin is two.",
      "Every won hole opens at least one new way. Strong gross scoring by the winning team can open additional ways: a gross birdie is worth 2 ways, eagle 3, albatross 4, and four under or better 5. Qualifying gross scores from both partners can contribute to the number of ways opened.",
      "If the teams post the same net better-ball score, the hole is tied. No new way opens and none of the existing ways move. All active ways simply carry forward unchanged.",
      "At the end of the front nine, the additional front-nine ways are settled. The top line is the exception: it settles at the turn but remains active and continues through the back nine.",
      "The remaining back-nine ways and the continuing top line settle after hole 18. Each way is settled independently using the value agreed upon before the round, so wins and losses across different ways can offset each other.",
    ],
  },

  {
    slug: "wolf",
    name: "Wolf",
    category: "Tee Time Game",
    summary:
      "A four-player game where the Wolf rotates every hole and chooses a partner or takes on the other three alone.",
    rules: [
      "Wolf is a four-player game where the teams can change on every hole. One golfer is the Wolf, and the Wolf decides whether to choose a partner or play alone against the other three.",
      "The Wolf position rotates in a fixed order throughout the round. On each hole, the Wolf can select one of the other golfers as a partner, creating a two-versus-two match for that hole.",
      "The Wolf can instead choose to play alone, becoming the Lone Wolf against the other three players. Blind Wolf can also be enabled, allowing the Wolf to commit to playing alone under the Blind Wolf rules.",
      "Each side uses its best score on the hole, and the game can be played gross or net. The side with the lower best-ball score wins the hole.",
      "A normal partnership uses the standard point value. Lone Wolf and Blind Wolf can use larger multipliers because the Wolf is taking on the field alone. The Lone Wolf and Blind Wolf multipliers are agreed upon before play.",
      "Every player on the winning side receives the full number of points awarded for the hole rather than splitting the points between teammates.",
      "Ties can be handled as either a push or a carryover. With a push, nobody receives points and the next hole begins normally. With a carryover, the tied value carries forward and makes the next decided hole more valuable.",
      "Add each player's points over the round. The golfer with the highest point total wins.",
    ],
  },

  {
    slug: "nassau",
    name: "Nassau",
    category: "Tee Time Game",
    summary:
      "Three match-play contests in one round: the front nine, back nine and overall match.",
    rules: [
      "A Nassau is three separate match-play contests played during the same round: the front nine on holes 1–9, the back nine on holes 10–18, and the overall match across all 18 holes.",
      "The game can be played as singles or with two-player teams, using either gross or net scoring. In team play, the lower score between the two partners becomes the side's score for the hole.",
      "The side with the lower eligible score wins the hole. A tied hole is halved and does not change the match. A win on hole 4 affects both the Front match and the Overall match, while a win on hole 14 affects both the Back match and the Overall match.",
      "A press creates a new match while the original match continues. It does not erase or restart the original Nassau. The new press begins on the next hole and runs through the end of that nine.",
      "Presses can be turned off, started manually, or triggered automatically. With automatic presses, a new press can begin when a side falls a predetermined number of holes behind.",
      "Re-presses and multiple simultaneous presses can also be allowed depending on the rules agreed upon before the round. The Overall match itself does not generate presses.",
      "The Front, Back and Overall matches are each separate results. Any presses created during the round are also scored as their own matches.",
      "If the group is playing for a wager, the value of the Front, Back, Overall and any presses should be agreed upon before teeing off.",
    ],
  },

  {
    slug: "match-play",
    name: "Match Play",
    category: "Tee Time Game",
    summary:
      "Win individual holes rather than counting total strokes for the entire round.",
    rules: [
      "Match Play is about winning holes rather than posting the lowest total score. A terrible score on one hole only costs that hole; it does not continue hurting the player for the rest of the round.",
      "The game can be played as Singles or Four-Ball, using gross or net scores, over 9 or 18 holes.",
      "Singles is one player against another. Compare the two eligible scores on each hole, and the lower score wins the hole.",
      "Four-Ball uses two players on each side. Everyone plays their own ball, and the lower score between the two partners becomes that side's score for the hole. The two side scores are then compared.",
      "Winning a hole moves a side one hole ahead. Losing the next hole gives that hole back. A tied hole is halved and does not change the match. If neither side is ahead, the match is All Square.",
      "A match ends as soon as the trailing side can no longer catch up with the number of holes remaining. For example, if a side is four holes ahead with only three left to play, the match ends 4 & 3.",
      "If the match reaches the end of the scheduled holes All Square, it can either finish tied or continue to extra holes. With extra holes, play continues until one side wins a hole and the match.",
      "An individual hole can be conceded to the other side, and the entire match can also be conceded before it is mathematically complete.",
    ],
  },

  {
    slug: "train",
    name: "Train",
    category: "Tee Time Game",
    summary:
      "Build a running point total with good holes, but a bad stretch can knock you off the Train and reset your score.",
    rules: [
      "Train rewards golfers for stringing together good holes. Par or better builds a running point total, while bad holes threaten to wipe that total back to zero. The game can be played gross or net.",
      "Points increase quickly as scores improve: par earns 1 point, birdie 2, eagle 4, albatross 8, and four under or better 16. Par or better adds those points to the player's existing running total.",
      "One bogey earns no points, but it does not immediately erase the points already accumulated. The player's existing total survives the first bogey.",
      "If the next hole is also a bogey, two consecutive bogeys knock the player off the Train and reset the entire running total to zero.",
      "Making par or better after the first bogey ends the bogey streak, adds the points earned on that hole, and keeps the existing running total alive.",
      "A double bogey or worse causes an immediate reset to zero regardless of what happened on the previous hole. After a reset, the player can begin building a new Train on later holes.",
      "The golfer with the highest running point total remaining at the end of the round wins.",
    ],
  },

  {
    slug: "nines",
    name: "Nines",
    category: "Tee Time Game",
    summary:
      "A three-player game that divides exactly nine points among the group on every hole.",
    rules: [
      "Nines is a game for exactly three golfers. Every hole has nine points available, and those nine points are divided among the players based on their scores. The game can be played gross or net.",
      "When all three players have different scores, the player with the lowest score receives 5 points, the middle score receives 3, and the highest score receives 1. That's the standard 5 / 3 / 1 split.",
      "If two players tie for the lowest score, they split the eight points normally awarded to first and second place. Each tied player receives 4 points and the third player receives 1, making it 4 / 4 / 1.",
      "If one player has the low score and the other two tie for second, the low player receives 5 points and the tied players receive 2 points each, making it 5 / 2 / 2.",
      "If all three golfers post the same score, the nine available points are divided evenly. Each player receives 3 points.",
      "Exactly nine points are distributed on every hole. Keep adding those points throughout the round, and the golfer with the highest total at the end wins.",
    ],
  },
]

export function getGameRule(slug: string) {
  return gameRules.find((game) => game.slug === slug)
}