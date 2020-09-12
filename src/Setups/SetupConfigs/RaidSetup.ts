export interface Role<Player> {
    profession: string;
    tasks: string[];
    player: Player;
    backups?: Player[];
    replacement?: Player;
}

export interface Setup<Player> {
    name: string;
    roles: Role<Player>[];
}

export interface Boss<Player> {
    name: string;
    iconMiniId?: number;
    selectedSetup: number;
    defaultSetup?: number;
    setups: Setup<Player>[];
}

export interface Wing<Player> {
    name: string;
    bosses: Boss<Player>[];
}

export interface PlayerSettings<Player> {
    players: Player[];
    missing: Player[];
    replacements: {[id: string] : Player};
}

export interface RaidSetup<Player> {
    playerSettings: PlayerSettings<Player>;
    list: Wing<Player>[];
    name: string;
};