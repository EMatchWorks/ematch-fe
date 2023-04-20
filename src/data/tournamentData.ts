export interface Match {
  team1: string;
  team2: string;
  winner: string;
}

export interface Round {
  round: Match[];
}

export interface TournamentData {
  rounds: Round[];
}
const tournamentData: TournamentData = {
  rounds: [
    // Раунд 1
    {
      round: [
        { team1: 'Команда 1', team2: 'Команда 2', winner: 'Команда 1' },
        { team1: 'Команда 3', team2: 'Команда 4', winner: 'Команда 3' },
        { team1: 'Команда 5', team2: 'Команда 6', winner: 'Команда 5' },
        { team1: 'Команда 7', team2: 'Команда 8', winner: 'Команда 7' },
        { team1: 'Команда 9', team2: 'Команда 10', winner: 'Команда 9' },
        { team1: 'Команда 11', team2: 'Команда 12', winner: 'Команда 11' },
        { team1: 'Команда 13', team2: 'Команда 14', winner: 'Команда 13' },
        { team1: 'Команда 15', team2: 'Команда 16', winner: 'Команда 15' },
        { team1: 'Команда 17', team2: 'Команда 18', winner: 'Команда 17' },
        { team1: 'Команда 19', team2: 'Команда 20', winner: 'Команда 19' },
        { team1: 'Команда 21', team2: 'Команда 22', winner: 'Команда 21' },
        { team1: 'Команда 23', team2: 'Команда 24', winner: 'Команда 23' },
        { team1: 'Команда 25', team2: 'Команда 26', winner: 'Команда 25' },
        { team1: 'Команда 27', team2: 'Команда 28', winner: 'Команда 27' },
        { team1: 'Команда 29', team2: 'Команда 30', winner: 'Команда 29' },
        { team1: 'Команда 31', team2: 'Команда 32', winner: 'Команда 31' },
      ],
    },
    // Раунд 2
    {
      round: [
        { team1: 'Команда 1', team2: 'Команда 3', winner: 'Команда 1' },
        { team1: 'Команда 5', team2: 'Команда 7', winner: 'Команда 5' },
        { team1: 'Команда 9', team2: 'Команда 11', winner: 'Команда 9' },
        { team1: 'Команда 13', team2: 'Команда 15', winner: 'Команда 13' },
        { team1: 'Команда 17', team2: 'Команда 19', winner: 'Команда 17' },
        { team1: 'Команда 21', team2: 'Команда 23', winner: 'Команда 21' },
        { team1: 'Команда 25', team2: 'Команда 27', winner: 'Команда 25' },
        { team1: 'Команда 29', team2: 'Команда 31', winner: 'Команда 29' },
      ],
    },
    // Раунд 3
    {
      round: [
        { team1: 'Команда 1', team2: 'Команда 5', winner: 'Команда 1' },
        { team1: 'Команда 9', team2: 'Команда 13', winner: 'Команда 9' },
        { team1: 'Команда 17', team2: 'Команда 21', winner: 'Команда 17' },
        { team1: 'Команда 25', team2: 'Команда 29', winner: 'Команда 25' },
      ],
    },
    // Раунд 4
    {
      round: [
        { team1: 'Команда 1', team2: 'Команда 9', winner: 'Команда 1' },
        { team1: 'Команда 17', team2: 'Команда 25', winner: 'Команда 17' },
      ],
    },
    // Раунд 5 (финал)
    {
      round: [{ team1: 'Команда 1', team2: 'Команда 17', winner: 'Команда 1' }],
    },
  ],
};

export default tournamentData;
