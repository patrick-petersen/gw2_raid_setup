export interface Role<Player> {
    profession: String;
    tasks: String[];
    player: Player;
    replacement?: String;
}

export interface Setup<Player> {
    name: String;
    roles: Role<Player>[];
}

export interface Boss<Player> {
    name: String;
    iconMiniId?: number;
    selectedSetup?: number;
    defaultSetup?: number;
    setups: Setup<Player>[];
}

export interface Wing<Player> {
    name: String;
    bosses: Boss<Player>[];
}

export interface PlayerSettings<Player> {
    players: Player[];
    missing: Player[];
    replacements: object;
}

export interface RaidSetup<Player> {
    playerSettings: PlayerSettings<Player>;
    list: Wing<Player>[];
};