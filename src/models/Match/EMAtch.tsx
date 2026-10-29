export enum EMatchStatus {
  Pending = 'Pending',
  Starting = 'Starting',
  InProgress = 'InProgress',
  Cancelled = 'Cancelled',
  Finished = 'Finished',
}

export enum EMatchBelonging {
  Single = 'Single',
  Tournament = 'Tournament',
}

export enum EMapSelectType {
  Preset = 'Preset',
  PickBan = 'PickBan',
}

export enum EBestOf {
  One = '1',
  Three = '3',
  Five = '5',
}

export enum EMaps {
  Dust2 = 'de_dust2',
  Mirage = 'de_mirage',
  Inferno = 'de_inferno',
  Overpass = 'de_overpass',
  Cache = 'de_cache',
  Nuke = 'de_nuke',
  Vertigo = 'de_vertigo',
}
