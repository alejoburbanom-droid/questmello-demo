import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const html=fs.readFileSync(new URL('../index.html', import.meta.url),'utf8');
test('Brand, demo and offline game are present',()=>{assert.match(html,/QuestMello/);assert.match(html,/Little quests\. Big memories\./i);assert.match(html,/Print host kit/);assert.match(html,/Not accepting orders/i);});
test('No checkout or network script in demo',()=>{assert.doesNotMatch(html,/https:\/\/js\.stripe\.com/);assert.doesNotMatch(html,/<script[^>]+src=/i);});
test('Game screens exist',()=>{for(const id of ['kid','ages','theme','prize','spots','make','print','game','print-sheet']) assert.match(html,new RegExp('id="'+id+'"'));});
