type Team = {
  id: number;
  capitan: string;
  players: string[];
};

type TournamentMatch = { teamsId: [number, number]; mapId: number };

const match: TournamentMatch = {
  teamsId: [0, 1],
  mapId: 1,
};

const team: Team[] = [
  { id: 0, capitan: 'Alex', players: ['Adrey', 'Nikita', 'Lesha', 'Ignat'] },
  { id: 1, capitan: 'Alex', players: ['Adrey', 'Nikita', 'Lesha', 'Ignat'] },
];

export default match;
