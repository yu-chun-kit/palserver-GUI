const en = {
  ServerIsRunning: "Server is running",
  Server: "Server",
  BootServer: "Boot Server",
  EditServer: "Edit Server",
  CreateServer: "Create Server",
  DeleteServer: "Delete Server",
  DeleteServerDesc:
    "Once the server is deleted, all data including archives, settings, and player data will be difficult to recover. Please consider carefully before performing the operation.",
  PleaseEnterServerName: "Please enter server name",
  OthersEnterIP: "This is the IP address entered by other players",
  YourselfEnterIP: "This is the IP address entered by yourself",
  HaventSavedYet: "Not yet saved",
  LuaMods: "Lua Mods",
  PakMods: "Pak Mods",
  Mod: "Mod",
  Disabled: "Disabled",
  Enabled: "Enabled",
  Cancel: "Cancel",
  Reset: "Reset",
  Confirm: "Confirm",
  Create: "Create",
  VerifyChange: "Verify Change",
  VerifyDelete: "Verify Delete",
  EditFromSourceFile: "Edit from source file",
  SourceCode: "Source Code",
  ServerIsUpdating: "Server is updating...",
  UpdateServerToLatestVersion: "Update server to latest version",
  ServerUpdateDone: "Server update done!",
  OpenModsFolder: "Open mods folder",
  HowToImportMods: "How to import ${1} mods?",
  HowToImportLuaModsDesc1:
    "Lua mods are in a form supported by the game. To install downloaded mods, click the 'Open Mods Folder' button and place the mods in that folder to complete the installation.",
  HowToImportLuaModsDesc2:
    "Please note that initially installed mods are set to 'Disabled' by default (right-click to enable mods), and they must be synchronized and installed on the client (game body) to take effect.",
  HowToImportPakModsDesc1:
    "Pak mods are in a form supported by the game. To install downloaded mods, click the 'Open Mods Folder' button and place the mods in that folder to complete the installation.",
  HowToImportPakModsDesc2:
    "Please note that they must be synchronized and installed on the client (game body) to take effect.",
  Difficulty: "Difficulty",
  DayTimeSpeedRate: "Daytime speed rate",
  NightTimeSpeedRate: "Nighttime speed rate",
  ExpRate: "Experience rate",
  PalCaptureRate: "Pal capture rate",
  PalSpawnNumRate: "Pal spawn number rate",
  PalDamageRateAttack: "Pal damage rate (attack)",
  PalDamageRateDefense: "Pal damage rate (defense)",
  PalStomachDecreaceRate: "Pal stomach decrease rate",
  PalStaminaDecreaceRate: "Pal stamina decrease rate",
  PalAutoHPRegeneRate: "Pal auto HP regeneration rate",
  PalAutoHpRegeneRateInSleep: "Pal auto HP regeneration rate in sleep",
  PlayerDamageRateAttack: "Player damage rate (attack)",
  PlayerDamageRateDefense: "Player damage rate (defense)",
  PlayerStomachDecreaceRate: "Player stomach decrease rate",
  PlayerStaminaDecreaceRate: "Player stamina decrease rate",
  PlayerAutoHPRegeneRate: "Player auto HP regeneration rate",
  PlayerAutoHpRegeneRateInSleep: "Player auto HP regeneration rate in sleep",
  BuildObjectDamageRate: "Build object damage rate",
  BuildObjectDeteriorationDamageRate: "Build object deterioration damage rate",
  DropItemMaxNum: "Drop item max number in the world",
  CollectionObjectHpRate: "Collection object HP rate",
  CollectionObjectRespawnSpeedRate: "Collection object respawn speed rate",
  CollectionDropRate: "Collection drop rate",
  PalEggDefaultHatchingTime: "Pal egg default hatching time",
  DeathPenalty: "Death penalty",
  DeathPenalty_All: "All",
  DeathPenalty_None: "None",
  DeathPenalty_Item: "Only items",
  DeathPenalty_ItemAndEquipment: "Items and equipment",
  GuildPlayerMaxNum: "Guild player max number",
  EnemyDropItemRate: "Enemy drop item rate",
  bEnablePlayerToPlayerDamage: "Enable player to player damage?",
  bEnableFriendlyFire: "Enable friendly fire?",
  bEnableInvaderEnemy: "Enable invader enemy?",
  bActiveUNKO: "",
  bEnableAimAssistPad: "Enable aim assist for pad",
  bEnableAimAssistKeyboard: "Enable aim assist for keyboard",
  DropItemMaxNum_UNKO: "",
  BaseCampMaxNum: "Base camp max number",
  BaseCampWorkerMaxNum: "Base camp worker max number",
  DropItemAliveMaxHours: "Drop item alive max hours",
  bAutoResetGuildNoOnlinePlayers: "Auto reset guild with no online players",
  AutoResetGuildTimeNoOnlinePlayers:
    "Auto reset guild time with no online players (hours)",
  WorkSpeedRate: "Work speed rate",
  bIsMultiplay: "Is multiplayer",
  bIsPvP: "Is PvP enabled",
  bCanPickupOtherGuildDeathPenaltyDrop:
    "Can pick up other guild's death penalty drop",
  bEnableNonLoginPenalty: "Enable non-login penalty",
  bEnableFastTravel: "Enable fast travel",
  bIsStartLocationSelectByMap: "Start location selection based on map",
  bExistPlayerAfterLogout:
    "Exist player after logout automatically close server",
  bEnableDefenseOtherGuildPlayer: "Enable defense other guild player",
  CoopPlayerMaxNum: "Co-op player max number",
  ServerPlayerMaxNum: "Server player max number online",
  ServerName: "Server Name",
  ServerDescription: "Server description",
  AdminPassword: "Admin Password",
  ServerPassword: "Server Password",
  PublicPort: "Public port",
  PublicIP: "Public IP",
  LocalIP: "Local IP",
  RCONEnabled: "RCON enabled",
  RCONPort: "RCON port",
  Region: "Region",
  bUseAuth: "Use authentication",
  BanListURL: "Ban list URL",
  SwitchOn: "On",
  SwitchOff: "Off",
  //
  ServerSettings: "Server Settings",
  WorldSettings: "Change World Settings",
  ModsTool: "Mods Manager",
  OpenServerFolder: "Open Server Folder",
  GoBack: "Go Back",
  OpenServerFolderDesc:
    "This is the directory path of the server. You can operate it to adjust detailed settings or migrate existing server archives to PalServer GUI. Please note that .pal files in the folder should not be modified, overwritten, or deleted.",
  //

  ExportModsToClientSide: "Export Mods to Client Side",
  ExportModsToClientSideDesc1: "Mods need to be installed on both the client and server side to take effect. Clicking 'Export' will generate a client-side version of the mods configured on your server.",
  ExportModsToClientSideDesc2: "Copy and paste the generated content into the Steam local files (click to replace all) to complete the installation.",
  Export: "Export",
  FAQ: "FAQs",
  FAQ1Q: "How do I migrate save files?",
  FAQ1A: "To migrate save files, please ensure that the server has just been created in the palserver GUI (not yet activated). Copy and paste the original save files (Dedicated server save: /SaveGames/0/some ID; Four-player save: /SaveGames/some ID/your map file ID) into /SaveGames/0/47D51DB549971BDC025E4BA00A549007, then start the server to complete the process.",
  FAQ2Q: "Why can't map files be correctly modified, with changes being overwritten each time?",
  FAQ2A: "This is due to the bidirectional backup caused by the tool, where content in the SaveGames folder will be overwritten. The approach is to always create a new server when you need to modify save files, and do so before starting the server.",
  FAQ3Q: "After migrating a four-player save file to a dedicated server, why does the host's data disappear?",
  FAQ3A: "Yes, because the official mechanism for identifying player IDs results in the host's data being inaccessible. The current version relies on a conversion tool to transform the host's data into a file that can be read by the dedicated server: https://github.com/xNul/palworld-host-save-fix. Follow the steps above to complete the process. (If it feels troublesome, you can also transfer the ownership of the base to another player in four-player mode, hand over Palu to another player, and put supplies in a chest, and then migrate it directly before transferring the ownership back, which is also okay.)",
  FAQ4Q: "After migrating a four-player save file to a dedicated server, why don't the adjusted world settings take effect?",
  FAQ4A: "Please create a new server, copy and paste the save file, and before starting, find a file called WorldOption.sav. Deleting or renaming it will make the settings take effect!",
  FAQ5Q: "Why don't the world settings for hatching or base limits take effect?",
  FAQ5A: "The recommended approach is to use mods, or you can use the configuration method of WorldOption.sav. For a detailed solution, refer to the latter half of this video: https://www.youtube.com/watch?v=1LqoN-pjb-0&t=6s",
};
export default en;
