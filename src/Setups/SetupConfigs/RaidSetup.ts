interface Role<Player> {
    profession: String;
    tasks: String[];
    player: Player;
    replacement?: String;
}

interface Setup<Player> {
    name: String;
    roles: Role<Player>[];
}

interface Boss<Player> {
    name: String;
    iconMiniId?: Number;
    selectedSetup?: Number;
    defaultSetup?: Number;
    setups: Setup<Player>[];
}

interface Wing<Player> {
    name: String;
    bosses: Boss<Player>[];
}

interface PlayerSettings<Player> {
    players: Player[];
    missing: Player[];
    replacements: object;
}

export interface RaidSetup<Player> {
    playerSettings: PlayerSettings<Player>;
    list: Wing<Player>[];
};