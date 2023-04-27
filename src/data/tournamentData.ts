export interface Match {
  id: number;
  team1: string;
  team2: string;
  winner: string;
}

export interface Round {
  matches: Match[];
}

export interface TournamentData {
  id:number
  rounds: Round[];
}
const tournamentData: TournamentData = {
  id: 0,
  rounds: [
    // Раунд 1
    {
      matches: [
        { id: 0, team1: 'Команда 1', team2: 'Команда 2', winner: 'Команда 1' },
        { id: 1, team1: 'Команда 3', team2: 'Команда 4', winner: 'Команда 3' },
        { id: 2, team1: 'Команда 5', team2: 'Команда 6', winner: 'Команда 5' },
        { id: 3, team1: 'Команда 7', team2: 'Команда 8', winner: 'Команда 7' },
        { id: 4, team1: 'Команда 9', team2: 'Команда 10', winner: 'Команда 9' },
        {
          id: 5,
          team1: 'Команда 11',
          team2: 'Команда 12',
          winner: 'Команда 11',
        },
        {
          id: 6,
          team1: 'Команда 13',
          team2: 'Команда 14',
          winner: 'Команда 13',
        },
        {
          id: 7,
          team1: 'Команда 15',
          team2: 'Команда 16',
          winner: 'Команда 15',
        },
        {
          id: 8,
          team1: 'Команда 17',
          team2: 'Команда 18',
          winner: 'Команда 17',
        },
        {
          id: 9,
          team1: 'Команда 19',
          team2: 'Команда 20',
          winner: 'Команда 19',
        },
        {
          id: 10,
          team1: 'Команда 21',
          team2: 'Команда 22',
          winner: 'Команда 21',
        },
        {
          id: 11,
          team1: 'Команда 23',
          team2: 'Команда 24',
          winner: 'Команда 23',
        },
        {
          id: 12,
          team1: 'Команда 25',
          team2: 'Команда 26',
          winner: 'Команда 25',
        },
        {
          id: 13,
          team1: 'Команда 27',
          team2: 'Команда 28',
          winner: 'Команда 27',
        },
        {
          id: 14,
          team1: 'Команда 29',
          team2: 'Команда 30',
          winner: 'Команда 29',
        },
        {
          id: 15,
          team1: 'Команда 31',
          team2: 'Команда 32',
          winner: 'Команда 31',
        },
      ],
    },
    // Раунд 2
    {
      matches: [
        { id: 16, team1: 'Команда 1', team2: 'Команда 3', winner: 'Команда 1' },
        { id: 17, team1: 'Команда 5', team2: 'Команда 7', winner: 'Команда 5' },
        {
          id: 18,
          team1: 'Команда 9',
          team2: 'Команда 11',
          winner: 'Команда 9',
        },
        {
          id: 19,
          team1: 'Команда 13',
          team2: 'Команда 15',
          winner: 'Команда 13',
        },
        {
          id: 20,
          team1: 'Команда 17',
          team2: 'Команда 19',
          winner: 'Команда 17',
        },
        {
          id: 21,
          team1: 'Команда 21',
          team2: 'Команда 23',
          winner: 'Команда 21',
        },
        {
          id: 22,
          team1: 'Команда 25',
          team2: 'Команда 27',
          winner: 'Команда 25',
        },
        {
          id: 23,
          team1: 'Команда 29',
          team2: 'Команда 31',
          winner: 'Команда 29',
        },
      ],
    },
    // Раунд 3
    {
      matches: [
        { id: 24, team1: 'Команда 1', team2: 'Команда 5', winner: 'Команда 1' },
        {
          id: 25,
          team1: 'Команда 9',
          team2: 'Команда 13',
          winner: 'Команда 9',
        },
        {
          id: 26,
          team1: 'Команда 17',
          team2: 'Команда 21',
          winner: 'Команда 17',
        },
        {
          id: 27,
          team1: 'Команда 25',
          team2: 'Команда 29',
          winner: 'Команда 25',
        },
      ],
    },
    // Раунд 4
    {
      matches: [
        { id: 28, team1: 'Команда 1', team2: 'Команда 9', winner: 'Команда 1' },
        {
          id: 29,
          team1: 'Команда 17',
          team2: 'Команда 25',
          winner: 'Команда 17',
        },
      ],
    },
    // Раунд 5 (финал)
    {
      matches: [
        {
          id: 30,
          team1: 'Команда 1',
          team2: 'Команда 17',
          winner: 'Команда 1',
        },
      ],
    },
  ],
};

export default tournamentData;
