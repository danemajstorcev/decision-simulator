
const TOTAL_CHAPTERS = 3;

const nodes = {

  start: {
    chapter: 1,
    age: '22',
    tag: 'Chapter One — The Crossroads',
    title: 'The morning after graduation.',
    text: `Your diploma sits in a cardboard tube by the door. Three emails sit open on your laptop, each a different version of your future. The coffee is getting cold. Outside, the city hums like it doesn't care what you decide.\n\nYou have to pick one.`,
    choices: [
      { id: 'corp',    label: 'A', text: 'Accept the corporate offer.',          sub: 'Stable salary. Health insurance. A corner office someday, maybe.' },
      { id: 'startup', label: 'B', text: "Join your college friend's startup.",   sub: 'No salary yet. Just equity, energy, and a shared Google Doc.' },
      { id: 'travel',  label: 'C', text: 'Buy a one-way ticket to Lisbon.',       sub: 'No plan. Just savings, a backpack, and a need to feel something.' },
    ]
  },

  corp: {
    chapter: 2,
    age: '24',
    tag: 'Chapter Two — The Comfort Trap',
    title: "Two years in. You're good at this.",
    text: `The job is fine. The paycheck clears every two weeks. Your manager likes you. You've learned to dress for the role you want, not the one you have.\n\nThen a DM arrives — a Series A startup, building something you actually believe in. They want you. But it means giving all of this up.`,
    choices: [
      { id: 'corp_stay', label: 'A', text: 'Stay. The stability is earned.',  sub: 'Decline the offer. Double down on the promotion track.' },
      { id: 'corp_leap', label: 'B', text: 'Take the leap. Join them.',        sub: "Terrifying. But you've been safe for two years." },
    ]
  },

  startup: {
    chapter: 2,
    age: '23',
    tag: 'Chapter Two — The Burn',
    title: 'The runway is 60 days. Maybe.',
    text: `You shipped fast. You stayed late. You believed in it. But the product isn't converting, and the investors want a pivot before they cut the wire.\n\nYour co-founder looks at you across a table covered in sticky notes. "What do we do?"`,
    choices: [
      { id: 'startup_pivot', label: 'A', text: 'Pivot. Kill the original idea.',  sub: 'Gut the roadmap. Build what the market actually wants.' },
      { id: 'startup_quit',  label: 'B', text: 'Fold it. Walk away.',             sub: 'Take the lesson. Find something stable before trying again.' },
    ]
  },

  travel: {
    chapter: 2,
    age: '23',
    tag: 'Chapter Two — Lisbon, November',
    title: "You've been here three months.",
    text: `The city is golden and slow. You speak bad Portuguese and good coffee Portuguese. In a coworking space off Mouraria, you meet two people who change the shape of your next decade.\n\nYou can only really choose one.`,
    choices: [
      { id: 'travel_partner', label: 'A', text: 'Miguel — a designer with a business idea.', sub: 'He wants to build a remote-first studio. He needs a technical co-founder.' },
      { id: 'travel_love',    label: 'B', text: 'Amara — a writer, a whole world.',           sub: "She's leaving for Nairobi in a month. You could go with her." },
    ]
  },



  corp_stay: {
    chapter: 3,
    age: '28',
    ending: 'mixed',
    tag: 'Chapter Three — The Long Game',
    title: 'Senior Manager. Comfortable. Restless.',
    text: `You got the promotion. Twice. Your apartment is nice and quiet. You're respected, reliable, a little bored. At 28 you start a side project on weekends — building something that's actually yours.\n\nSometimes you wonder about the startup. But you've learned that wondering costs nothing. Building costs everything. You're finally ready to pay that cost.`,
    stats: { wealth: '★★★★☆', freedom: '★★☆☆☆', growth: '★★★☆☆' },
    trailNote: 'The slow path. But the foundation is real.'
  },

  corp_leap: {
    chapter: 3,
    age: '27',
    ending: 'success',
    tag: 'Chapter Three — The Exit',
    title: 'The startup got acquired. You have a number.',
    text: `It wasn't all wins. Six months of zero salary. A co-founder dispute that aged you five years. But the product worked. A bigger company noticed.\n\nYou're 27 with enough runway to take your time on what's next. You send your old manager a message: "You were right. It was worth it."`,
    stats: { wealth: '★★★★★', freedom: '★★★★☆', growth: '★★★★★' },
    trailNote: 'Risk paid. The leap was the answer.'
  },

  startup_pivot: {
    chapter: 3,
    age: '26',
    ending: 'success',
    tag: 'Chapter Three — Product-Market Fit',
    title: 'The pivot worked. Slowly, then all at once.',
    text: `The new product felt wrong for two weeks. Then a user posted about it on Twitter. Then a newsletter picked it up. Then you had 200 paying customers and a Slack channel that never slept.\n\nYou didn't celebrate until MRR crossed $20k. Even then, you just got back to work.`,
    stats: { wealth: '★★★★☆', freedom: '★★★☆☆', growth: '★★★★★' },
    trailNote: 'Stubbornness about the vision. Flexibility about the path.'
  },

  startup_quit: {
    chapter: 3,
    age: '26',
    ending: 'regret',
    tag: 'Chapter Three — The Honest Answer',
    title: "You work in product now. You're good at it.",
    text: `You folded the startup cleanly, paid your debts, said goodbye without burning bridges. You got a product role at a mid-size company. The work suits you.\n\nBut you sit in meetings sometimes and watch founders pitch and you feel something unnamed and animal and strong. One day you'll try again. You're just not ready to admit that day is today.`,
    stats: { wealth: '★★★☆☆', freedom: '★★★☆☆', growth: '★★☆☆☆' },
    trailNote: 'Not failure. Just a longer story.'
  },

  travel_partner: {
    chapter: 3,
    age: '27',
    ending: 'success',
    tag: 'Chapter Three — The Studio',
    title: 'You run a six-person remote studio from anywhere.',
    text: `The business started with three clients and a shared bank account. Now you have a team in four countries, a waitlist for onboarding, and a rule: no Slack after 7pm.\n\nYou still travel. But now it's on your own schedule, for your own reasons. Lisbon in January. Tokyo in April. Home — wherever that is — when you need it.`,
    stats: { wealth: '★★★★☆', freedom: '★★★★★', growth: '★★★★☆' },
    trailNote: 'A detour that became the destination.'
  },

  travel_love: {
    chapter: 3,
    age: '27',
    ending: 'mixed',
    tag: 'Chapter Three — The Other Life',
    title: 'Nairobi. Then London. Then complicated.',
    text: `It lasted two beautiful years and ended the way things end when two people love each other but can't agree on a city. You came back changed — more patient, less certain, somehow more useful.\n\nYou never regret going. You do, occasionally, regret not also calling Miguel. But the person you are now is made of every place you said yes to.`,
    stats: { wealth: '★★★☆☆', freedom: '★★★★☆', growth: '★★★★☆' },
    trailNote: 'Love is never the wrong answer. Timing is harder.'
  }
};


let currentNode   = 'start';
let history       = [];
let historyOpen   = false;
let typingTimeout = null;

const LETTERS = ['A', 'B', 'C', 'D'];


let audioCtx = null;

function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playClick() {
  try {
    const ctx  = getAudio();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(440, ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
    osc.start();
    osc.stop(ctx.currentTime + 0.15);
  } catch (e) {}
}

function playEnd(type) {
  try {
    const ctx   = getAudio();
    const notes = type === 'success'
      ? [523, 659, 784]
      : type === 'mixed'
        ? [392, 466, 440]
        : [330, 311, 294];

    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.18);
      gain.gain.linearRampToValueAtTime(0.1, ctx.currentTime + i * 0.18 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.18 + 0.6);
      osc.start(ctx.currentTime + i * 0.18);
      osc.stop(ctx.currentTime + i * 0.18 + 0.65);
    });
  } catch (e) {}
}


function updateProgress(chapter) {
  const pct = Math.round(((chapter - 1) / TOTAL_CHAPTERS) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('prog-pct').textContent      = pct + '%';
  document.getElementById('prog-label').textContent    = `Chapter ${chapter} of ${TOTAL_CHAPTERS}`;

  const dots = document.getElementById('chapter-dots');
  dots.innerHTML = '';
  for (let i = 1; i <= TOTAL_CHAPTERS; i++) {
    const d = document.createElement('div');
    d.className = 'chapter-dot'
      + (i < chapter ? ' done' : i === chapter ? ' active' : '');
    dots.appendChild(d);
  }
}


function typeText(el, text, speed = 18, cb) {
  if (typingTimeout) clearTimeout(typingTimeout);
  el.textContent = '';
  el.classList.add('typed');
  let i = 0;

  function tick() {
    if (i < text.length) {
      el.textContent += text[i++];
      typingTimeout = setTimeout(tick, speed);
    } else {
      el.classList.remove('typed');
      if (cb) cb();
    }
  }
  tick();
}


function starColor(star) {
  const count = (star.match(/★/g) || []).length;
  return count >= 4 ? 'var(--success)' : count >= 3 ? 'var(--amber)' : 'var(--danger)';
}


function render(nodeId, animate = true) {
  const node  = nodes[nodeId];
  const scene = document.getElementById('scene');
  const card  = document.getElementById('main-card');

  if (animate) {
    scene.classList.add('exit');
    setTimeout(() => {
      scene.classList.remove('exit');
      scene.classList.add('enter');
      buildScene(node, scene);
      void scene.offsetWidth; 
      scene.classList.remove('enter');
      card.classList.add('pulse');
      setTimeout(() => card.classList.remove('pulse'), 900);
    }, 300);
  } else {
    buildScene(node, scene);
  }

  updateProgress(node.chapter);
}

function buildScene(node, scene) {
  scene.innerHTML = '';

  const tag = document.createElement('div');
  tag.className   = 'chapter-tag';
  tag.textContent = node.tag;
  scene.appendChild(tag);

  const age = document.createElement('div');
  age.className   = 'age-badge';
  age.textContent = `Age ${node.age}`;
  scene.appendChild(age);

  const title = document.createElement('div');
  title.id          = 'scene-title';
  title.textContent = node.title;
  scene.appendChild(title);

  const text = document.createElement('div');
  text.id = 'scene-text';
  scene.appendChild(text);

  if (node.ending) {
    buildEnding(node, scene, text);
  } else {
    buildChoices(node, scene, text);
  }
}

function buildEnding(node, scene, text) {
  text.textContent = node.text;

  const labels     = { success: '✦ Strong Outcome', mixed: '◈ Mixed Outcome', regret: '◇ Reflective Ending' };
  const outcomeTag = document.createElement('div');
  outcomeTag.className   = `outcome-tag ${node.ending}`;
  outcomeTag.textContent = labels[node.ending];
  scene.insertBefore(outcomeTag, text);

  const stats = document.createElement('div');
  stats.className = 'stat-row';
  [['wealth', 'Wealth'], ['freedom', 'Freedom'], ['growth', 'Growth']].forEach(([k, label]) => {
    const box = document.createElement('div');
    box.className = 'stat-box';

    const val = document.createElement('span');
    val.className       = 'stat-val';
    val.style.fontSize  = '0.9rem';
    val.style.color     = starColor(node.stats[k]);
    val.textContent     = node.stats[k];

    const lbl = document.createElement('div');
    lbl.className   = 'stat-label';
    lbl.textContent = label;

    box.appendChild(val);
    box.appendChild(lbl);
    stats.appendChild(box);
  });
  scene.appendChild(stats);

  const trail = document.createElement('div');
  trail.className = 'path-trail';

  const tl = document.createElement('div');
  tl.className   = 'path-trail-label';
  tl.textContent = 'Your path';
  trail.appendChild(tl);

  const ti = document.createElement('div');
  ti.className = 'path-trail-items';
  history.forEach((h, idx) => {
    if (idx > 0) {
      const arr = document.createElement('span');
      arr.className   = 'trail-arrow';
      arr.textContent = '→';
      ti.appendChild(arr);
    }
    const sp = document.createElement('span');
    sp.className   = 'trail-item';
    sp.textContent = h.choice;
    ti.appendChild(sp);
  });
  trail.appendChild(ti);

  const note = document.createElement('div');
  note.style.cssText = 'font-size:0.68rem;color:var(--muted);margin-top:0.8rem;font-style:italic;';
  note.textContent   = `"${node.trailNote}"`;
  trail.appendChild(note);
  scene.appendChild(trail);

  playEnd(node.ending);
  document.getElementById('progress-fill').style.width = '100%';
  document.getElementById('prog-pct').textContent      = '100%';
  document.getElementById('prog-label').textContent    = 'Complete';

  const restart = document.createElement('button');
  restart.className   = 'restart-btn';
  restart.textContent = '↩  Play again — choose differently';
  restart.onclick     = resetGame;
  scene.appendChild(restart);
}

function buildChoices(node, scene, text) {
  typeText(text, node.text, 16, () => {
    const choicesWrap = document.createElement('div');
    choicesWrap.className        = 'choices';
    choicesWrap.style.opacity    = '0';
    choicesWrap.style.transform  = 'translateY(8px)';
    choicesWrap.style.transition = 'opacity 0.35s ease, transform 0.35s ease';

    node.choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';

      const letter = document.createElement('span');
      letter.className   = 'choice-letter';
      letter.textContent = LETTERS[i];

      const textWrap = document.createElement('div');
      textWrap.className   = 'choice-text';
      textWrap.textContent = c.text;

      if (c.sub) {
        const sub = document.createElement('div');
        sub.className   = 'choice-sub';
        sub.textContent = c.sub;
        textWrap.appendChild(sub);
      }

      btn.appendChild(letter);
      btn.appendChild(textWrap);
      btn.onclick = () => makeChoice(c.id, c.text, node.tag);
      choicesWrap.appendChild(btn);
    });

    scene.appendChild(choicesWrap);
    void choicesWrap.offsetWidth; // force reflow
    choicesWrap.style.opacity   = '1';
    choicesWrap.style.transform = 'none';
  });
}


function makeChoice(nodeId, choiceText, fromChapter) {
  playClick();
  history.push({ chapter: fromChapter, choice: choiceText });
  updateHistoryPanel();
  currentNode = nodeId;
  render(nodeId, true);
}


function updateHistoryPanel() {
  const list = document.getElementById('history-list');
  list.innerHTML = '';

  if (history.length === 0) {
    list.innerHTML = '<div style="font-size:0.7rem;color:var(--muted)">No choices made yet.</div>';
    return;
  }

  history.forEach((h, i) => {
    const row = document.createElement('div');
    row.className = 'history-item';
    row.innerHTML = `
      <div class="h-num">${i + 1}</div>
      <div>
        <div class="h-text">${h.chapter}</div>
        <div class="h-choice">↳ ${h.choice}</div>
      </div>
    `;
    list.appendChild(row);
  });
}

function toggleHistory() {
  historyOpen = !historyOpen;
  const panel = document.getElementById('history-panel');
  const btn   = document.getElementById('history-btn');
  panel.classList.toggle('open', historyOpen);
  btn.textContent = historyOpen ? '▴ hide choices made' : '▾ show choices made';
}


function resetGame() {
  history     = [];
  currentNode = 'start';
  historyOpen = false;
  document.getElementById('history-panel').classList.remove('open');
  document.getElementById('history-btn').textContent = '▾ show choices made';
  updateHistoryPanel();
  render('start', true);
}


updateHistoryPanel();
render('start', false);
updateProgress(1);
