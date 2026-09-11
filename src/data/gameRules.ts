export type GameRule = {
  slug: string
  name: string
  category: "Field Game" | "Tee Time Game"
  summary: string
  rules: string[]
}

export const gameRules: GameRule[] = [
  {
    slug: "blind-better-ball",
    name: "Blind Better Ball",
    category: "Field Game",
    summary:
      "Random two-person teams compete using the better score from each team on every hole.",
    rules: [
      "Players are randomly paired into two-person teams.",
      "On each hole, the lower score from the two partners counts for the team.",
      "The game can be played gross or net.",
      "Add the team's counting scores across the round.",
      "The team with the lowest total wins.",
      "An even number of players is required.",
    ],
  },
  {
    slug: "skins",
    name: "Skins",
    category: "Field Game",
    summary:
      "Win holes outright to collect skins, with optional carryovers when a hole is tied.",
    rules: [
      "Each hole starts out worth one skin.",
      "The player with the single lowest score on the hole wins the skin.",
      "The game can be played gross or net.",
      "If the low score is tied, nobody wins the hole.",
      "When carryovers are enabled, a tied skin carries to the next hole and increases its value.",
      "The player with the most skins at the end wins.",
    ],
  },
  {
    slug: "canadian-skins",
    name: "Canadian Skins",
    category: "Field Game",
    summary:
      "Net skins with gross score used to break ties.",
    rules: [
      "Each hole starts out worth one skin.",
      "The player with the single lowest net score wins the skin.",
      "If players tie for low net, their gross scores are used as the tiebreaker.",
      "If the tied players also tie gross, nobody wins the hole.",
      "When carryovers are enabled, the tied skin carries to the next hole.",
      "The player with the most skins at the end wins.",
    ],
  },
  {
    slug: "twenty-twos",
    name: "Twenty-Twos",
    category: "Field Game",
    summary:
      "A team game where each side must count exactly 22 net scores on each nine.",
    rules: [
      "The field is divided into equal-sized teams.",
      "Each team must select exactly 22 player scores on the front nine and 22 on the back nine.",
      "Teams decide which net scores to count as the round progresses.",
      "More than one player's score can count on the same hole.",
      "Need One makes sure enough scores are selected to reach 22 by the end of each nine.",
      "Selected scores are totaled relative to par, and the team with the lowest total wins.",
    ],
  },
  {
    slug: "stableford",
    name: "Stableford",
    category: "Field Game",
    summary:
      "Earn points based on your score relative to par instead of counting total strokes.",
    rules: [
      "Stableford can be played gross or net.",
      "In Standard Stableford: bogey = 1 point, par = 2, birdie = 3, eagle = 4, albatross = 5, and four-under or better = 6.",
      "Double bogey or worse earns 0 points.",
      "Modified Stableford uses a more aggressive points system: par = 0, birdie = 2, eagle = 5, albatross = 8, and four-under or better = 10.",
      "In Modified Stableford, bogey is -1 and double bogey or worse is -3.",
      "The player with the most points wins.",
    ],
  },
  {
    slug: "stroke-play",
    name: "Stroke Play",
    category: "Field Game",
    summary:
      "Traditional golf scoring. Add every counting stroke and lowest total wins.",
    rules: [
      "The game can be played gross or net.",
      "Each player's eligible score is recorded on every hole.",
      "Scores are added together across the round.",
      "The player with the lowest total score wins.",
      "If multiple players finish with the same lowest total, the result is a tie.",
    ],
  },
  {
    slug: "pittsburgh",
    name: "Pittsburgh",
    category: "Tee Time Game",
    summary:
      "A four-player team game where winning holes moves multiple live ways.",
    rules: [
      "Pittsburgh requires exactly four players split into two teams of two.",
      "Each team's low net score is its better-ball score for the hole.",
      "The team with the lower better-ball score wins the hole.",
      "The winning margin moves every active way in favor of the winning team.",
      "A winning team's gross birdies or better can open additional ways on that hole.",
      "Front-nine ways settle after hole 9. The top line continues through the full 18, and remaining ways settle after hole 18.",
    ],
  },
  {
    slug: "wolf",
    name: "Wolf",
    category: "Tee Time Game",
    summary:
      "A rotating four-player game where the Wolf chooses a partner or takes on the field alone.",
    rules: [
      "Wolf requires exactly four players.",
      "The Wolf rotates from player to player each hole.",
      "The Wolf can choose another player as a partner or choose to play alone.",
      "Each side uses its best score on the hole, either gross or net.",
      "Lone Wolf holes can use a larger point multiplier.",
      "Blind Wolf can also be enabled with its own multiplier.",
      "Tied holes can either push or carry over depending on the game settings.",
      "Players on the winning side receive the points for the hole. The player with the most total points wins.",
    ],
  },
  {
    slug: "nassau",
    name: "Nassau",
    category: "Tee Time Game",
    summary:
      "Three match-play contests in one round: the front nine, back nine, and overall match.",
    rules: [
      "Nassau can be played as singles or two-person teams.",
      "Scoring can be gross or net.",
      "Three matches run during the round: front nine, back nine, and overall.",
      "In team play, each side's better score determines the result of the hole.",
      "Each hole won moves that match one hole in favor of the winning side.",
      "Presses can be turned off, started manually, or triggered automatically.",
      "A press begins on the next hole and creates a new match through the end of that nine.",
    ],
  },
  {
    slug: "match-play",
    name: "Match Play",
    category: "Tee Time Game",
    summary:
      "Win individual holes instead of counting total strokes for the round.",
    rules: [
      "Match Play can be played as singles or four-ball.",
      "The game can use gross or net scores.",
      "In four-ball, the lower score from each two-player side counts on the hole.",
      "The side with the lower score wins the hole and goes one hole up.",
      "A tied hole is halved and does not change the match.",
      "The match ends early when one side is ahead by more holes than remain.",
      "Matches can be set for 9 or 18 holes, with ties either allowed or continued to extra holes.",
      "A match or individual hole can also be conceded.",
    ],
  },
  {
    slug: "train",
    name: "Train",
    category: "Tee Time Game",
    summary:
      "Build a running point total with good holes, but bad holes can knock you off the train.",
    rules: [
      "Train can be played gross or net.",
      "Par earns 1 point, birdie 2, eagle 4, albatross 8, and four-under or better 16.",
      "A bogey earns no points, but your existing total survives the first bogey.",
      "Two consecutive bogeys reset your entire running total to zero.",
      "A double bogey or worse immediately resets your entire running total to zero.",
      "Par or better ends a bogey streak and adds points to your running total.",
      "The player with the most points remaining at the end wins.",
    ],
  },
  {
    slug: "nines",
    name: "Nines",
    category: "Tee Time Game",
    summary:
      "A three-player game that divides nine points among the group on every hole.",
    rules: [
      "Nines requires exactly three players and can be played gross or net.",
      "Nine total points are awarded on every hole.",
      "If all three scores are different, the players receive 5, 3, and 1 point from lowest to highest score.",
      "If two players tie for low score, they receive 4 points each and the third player gets 1.",
      "If two players tie for second, the low player gets 5 points and the other two get 2 each.",
      "If all three players tie, everyone receives 3 points.",
      "The player with the most points at the end wins.",
    ],
  },
]

export function getGameRule(slug: string) {
  return gameRules.find((game) => game.slug === slug)
}