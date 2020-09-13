export interface Role<Player> {
    profession: string;
    tasks: string[];
    player: Player;
    backups?: Player[];
    replacement?: Player;
    hidden?: boolean;
}

export interface Setup<Player> {
    name: string;
    roles: Role<Player>[];
    hidden?: boolean;
}

export interface Boss<Player> {
    name: string;
    iconMiniId?: number;
    selectedSetup: number;
    defaultSetup?: number;
    setups: Setup<Player>[];
    hidden?: boolean;
}

export interface Wing<Player> {
    name: string;
    bosses: Boss<Player>[];
    hidden?: boolean;
}

export interface PlayerSettings<Player> {
    players: Player[];
    missing: Player[];
    replacements: {[id: string] : Player};
}

export interface RaidSetup<Player> {
    playerSettings: PlayerSettings<Player>;
    list: Wing<Player>[];
};