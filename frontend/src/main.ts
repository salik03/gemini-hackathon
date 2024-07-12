import { App } from './app';
import { createNPC } from './characters/npc';
import { createTextBubble } from './utils/create-text-bubble';

window.addEventListener('DOMContentLoaded', () => {
  const app = new App('renderCanvas');
  createNPC();
  createTextBubble('what is your job');
  app.run();
});
