import avatarFLASH from "./assets/avatar/flash-avatar-hd-shadow.png";
import logoFLASH from "./assets/radioLogos/flash-logo-resized.png";
import weaponFLASH from "./assets/weapons/bazook.png";
// import audioFLASH from './assets/audio/flash-fm-gta-vice-city.mp3'

import avatarWAVE from "./assets/avatar/wave-avatar-hd-shadow.png";
import logoWAVE from "./assets/radioLogos/wave-logo-resized.png";
import weaponWAVE from "./assets/weapons/hammer.png";
// import audioWAVE from './assets/audio/wave-103-grand-theft-auto-vice-city.mp3'

import avatarWILDSTYLE from "./assets/avatar/wildstyle-avatar-hd-shadow.png";
import logoWILDSTYLE from "./assets/radioLogos/wildstyle-logo-resized.png";
import weaponWILDSTYLE from "./assets/weapons/beretha.png";
// import audioWILDSTYLE from './assets/audio/wildstyle-gta-vice-city-radio-full-hq.mp3'

import avatarFEVER from "./assets/avatar/fever-avatar-hd-shadow.png";
import logoFEVER from "./assets/radioLogos/fever-logo-resized.png";
import weaponFEVER from "./assets/weapons/chainsaw.png";
// import audioFEVER from './assets/audio/fever-105-grand-theft-auto-vice-city.mp3'

import avatarESPANTOSO from "./assets/avatar/espantoso-avatar-hd-shadow.png";
import logoESPANTOSO from "./assets/radioLogos/espantoso-logo-resized.png";
import weaponESPANTOSO from "./assets/weapons/uzi1.png";
// import audioESPANTOSO from './assets/audio/radio-espantoso-grand-theft-auto-vice-city-vice-city-stories.mp3'

import avatarEMOTION from "./assets/avatar/emotion-avatar-hd-shadow.png";
import logoEMOTION from "./assets/radioLogos/emotion-logo-resized.png";
import weaponEMOTION from "./assets/weapons/machette.png";
// import audioEMOTION from './assets/audio/emotion-983-gta-vice-city-stories-gta-vice-city-hosted-by-fernando-martinez.mp3'

import avatarVROCK from "./assets/avatar/vrock-avatar-hd-shadow.png";
import logoVROCK from "./assets/radioLogos/vrock-logo-resized.png";
import weaponVROCK from "./assets/weapons/vice-revolver.png";
// import audioVROCK from './assets/audio/v-rock-grand-theft-auto-vice-city-radio-hard-rock-heavy-metal.mp3'

import avatarVCPR from "./assets/avatar/vcpr-avatar-hd-shadow.png";
import logoVCPR from "./assets/radioLogos/vcpr-logo-resized.png";
import weaponVCPR from "./assets/weapons/golf.png";
// import audioVCPR from './assets/audio/gta-vice-city-radio-comedy-vcpr.mp3'

import avatarKCHAT from "./assets/avatar/kchat-avatar-hd-shadow.png";
import logoKCHAT from "./assets/radioLogos/kchat-logo-resized.png";
import weaponKCHAT from "./assets/weapons/pomp1.png";
// import audioKCHAT from './assets/audio/grand-theft-auto-vice-city-k-chat-pc.mp3'

const prefixURL = "https://jeromenicco.com";

export const radioList = [
  {
    id: 1,
    name: "Flash",
    avatar: `${avatarFLASH}`,
    logo: `${logoFLASH}`,
    audio: `${prefixURL}/build/static/media/vice-radio/flash-fm-gta-vice-city.mp3`,
    duration: 3792,
    path: "/",
    background: "#EE4E8C",
    weapon: `${weaponFLASH}`,
  },
  {
    id: 2,
    name: "Wave",
    avatar: `${avatarWAVE}`,
    logo: `${logoWAVE}`,
    audio: `${prefixURL}/build/static/media/vice-radio/wave-103-grand-theft-auto-vice-city.mp3`,
    path: "/wave",
    background: "#AF95B8",
    weapon: `${weaponWAVE}`,
  },
  {
    id: 3,
    name: "WildStyle",
    avatar: `${avatarWILDSTYLE}`,
    logo: `${logoWILDSTYLE}`,
    audio: `${prefixURL}/build/static/media/vice-radio/wildstyle-gta-vice-city-radio-full-hq.mp3`,
    duration: 4107,
    path: "/wildstyle",
    background: "#CCC5C2",
    weapon: `${weaponWILDSTYLE}`,
  },
  {
    id: 4,
    name: "Fever",
    avatar: `${avatarFEVER}`,
    logo: `${logoFEVER}`,
    audio: `${prefixURL}/build/static/media/vice-radio/fever-105-grand-theft-auto-vice-city.mp3`,
    duration: 3794,
    path: "/fever",
    background: "#D6607A",
    weapon: `${weaponFEVER}`,
  },
  {
    id: 5,
    name: "Espantoso",
    avatar: `${avatarESPANTOSO}`,
    logo: `${logoESPANTOSO}`,
    audio: `${prefixURL}/build/static/media/vice-radio/radio-espantoso-grand-theft-auto-vice-city-vice-city-stories.mp3`,
    duration: 5530,
    path: "/espantoso",
    background: "#F78921",
    weapon: `${weaponESPANTOSO}`,
  },
  {
    id: 6,
    name: "Emotion",
    avatar: `${avatarEMOTION}`,
    logo: `${logoEMOTION}`,
    audio: `${prefixURL}/build/static/media/vice-radio/emotion-983-gta-vice-city-stories-gta-vice-city-hosted-by-fernando-martinez.mp3`,
    duration: 7500,
    path: "/emotion",
    background: "#758DC6",
    weapon: `${weaponEMOTION}`,
  },
  {
    id: 7,
    name: "Vrock",
    avatar: `${avatarVROCK}`,
    logo: `${logoVROCK}`,
    audio: `${prefixURL}/build/static/media/vice-radio/v-rock-grand-theft-auto-vice-city-radio-hard-rock-heavy-metal.mp3`,
    duration: 4738,
    path: "/vrock",
    background: "#51776A",
    weapon: `${weaponVROCK}`,
  },
  {
    id: 8,
    name: "Vcpr",
    avatar: `${avatarVCPR}`,
    logo: `${logoVCPR}`,
    audio: `${prefixURL}/build/static/media/vice-radio/gta-vice-city-radio-comedy-vcpr.mp3`,
    duration: 5184,
    path: "/vcpr",
    background: "#4686C9",
    weapon: `${weaponVCPR}`,
  },
  {
    id: 9,
    name: "Kchat",
    avatar: `${avatarKCHAT}`,
    logo: `${logoKCHAT}`,
    audio: `${prefixURL}/build/static/media/vice-radio/grand-theft-auto-vice-city-k-chat-pc.mp3`,
    duration: 6239,
    path: "/kchat",
    background: "#A0B2DB",
    weapon: `${weaponKCHAT}`,
  },
];
