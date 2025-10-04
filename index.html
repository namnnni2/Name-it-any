<!doctype html>

<html lang="vi">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Follow TikTok -> Hiển thị Script</title>
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--accent:#06b6d4;--muted:#9ca3af;color-scheme:dark}
    body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial;margin:0;background:linear-gradient(180deg,#071023 0%, #07172a 100%);color:#e6eef6;display:flex;align-items:center;justify-content:center;height:100vh}
    .card{width:min(760px,94%);background:var(--card);border-radius:12px;padding:22px;box-shadow:0 10px 30px rgba(2,6,23,.6)}
    h1{margin:0 0 10px 0;font-size:20px}
    p{margin:0 0 16px 0;color:var(--muted)}
    .row{display:flex;gap:8px}
    button{background:var(--accent);border:none;padding:10px 14px;border-radius:8px;color:#042027;font-weight:600;cursor:pointer}
    .ghost{background:transparent;border:1px solid rgba(255,255,255,.06);color:var(--muted)}
    .count{font-weight:700}
    .script-wrap{margin-top:16px;background:#061225;padding:12px;border-radius:8px;display:none}
    pre{white-space:pre-wrap;word-break:break-word;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", monospace;font-size:13px;margin:0}
    .controls{margin-top:12px;display:flex;gap:8px}
    label{display:flex;gap:8px;align-items:center;color:var(--muted)}
    input[type=number]{width:72px;padding:6px;border-radius:6px;border:none;background:#031022;color:#e6eef6}
    .note{margin-top:12px;color:#9aa6b3;font-size:13px}
  </style>
</head>
<body>
  <div class="card">
    <h1>Follow TikTok → Hiển thị Script</h1>
    <p>Bấm nút để mở kênh TikTok. Sau khi bấm, hệ thống sẽ đếm ngược và hiển thị nội dung script (hoặc file) sau khi hết thời gian.</p><div class="row">
  <button id="followBtn">Mở kênh TikTok / Follow</button>
  <button class="ghost" id="resetBtn">Reset</button>
  <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
    <label>Delay (giây): <input id="delayInput" type="number" min="1" value="5"></label>
  </div>
</div>

<div style="margin-top:12px;display:flex;align-items:center;gap:12px">
  <div>Trạng thái: <span id="status">Chưa bấm</span></div>
  <div style="margin-left:8px">Đếm ngược: <span class="count" id="countdown">0</span>s</div>
</div>

<div class="script-wrap" id="scriptWrap">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
    <div style="font-weight:700">Script (hiển thị)</div>
    <div class="controls">
      <button id="copyBtn" class="ghost">Sao chép</button>
      <button id="downloadBtn">Tải về</button>
    </div>
  </div>
  <pre id="scriptPre">-- Đây là script mẫu. Thay thế biến SCRIPT_CONTENT trong file HTML bằng script bạn muốn hiển thị.

print("Hello from revealed script!")</pre> </div>

<div class="note">
  LƯU Ý: Vì giới hạn bảo mật trình duyệt và TikTok, trang này <strong>không thể</strong> tự động kiểm tra việc bạn đã follow tài khoản hay chưa (cross-origin và chính sách API). Kịch bản hoạt động là: mở kênh trong tab mới, đếm ngược theo thời gian bạn cấu hình, rồi hiển thị script. Nếu cần xác thực thật sự (ví dụ gọi API TikTok), bạn cần server-side và OAuth/API hợp lệ.
</div>

  </div>  <script>
    // ========== CẤU HÌNH ==========
    const CHANNEL_URL = "https://www.tiktok.com/@pilow.105";

    const SCRIPT_CONTENT = `loadstring(game:HttpGet("https://raw.githubusercontent.com/ZysumeDupePet/ZymuseScript/refs/heads/main/UpdateZysume"))()`;

    const DOWNLOAD_FILENAME = "revealed_script.lua";
    // ==================================

    const followBtn = document.getElementById('followBtn');
    const resetBtn = document.getElementById('resetBtn');
    const statusEl = document.getElementById('status');
    const countdownEl = document.getElementById('countdown');
    const scriptWrap = document.getElementById('scriptWrap');
    const scriptPre = document.getElementById('scriptPre');
    const copyBtn = document.getElementById('copyBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    const delayInput = document.getElementById('delayInput');

    // Init script content
    scriptPre.textContent = SCRIPT_CONTENT;

    let timer = null;

    followBtn.addEventListener('click', () => {
      const delay = Math.max(1, parseInt(delayInput.value) || 5);
      try {
        window.open(CHANNEL_URL, '_blank');
      } catch (e) {
        alert('Trình duyệt có thể chặn pop-up. Hãy mở link kênh bằng tay: ' + CHANNEL_URL);
      }

      statusEl.textContent = 'Đã mở kênh — đếm ngược...';
      scriptWrap.style.display = 'none';
      countdownEl.textContent = delay;

      if (timer) clearInterval(timer);

      let remaining = delay;
      timer = setInterval(() => {
        remaining -= 1;
        countdownEl.textContent = remaining;
        if (remaining <= 0) {
          clearInterval(timer);
          timer = null;
          revealScript();
        }
      }, 1000);
    });

    resetBtn.addEventListener('click', () => {
      if (timer) clearInterval(timer);
      timer = null;
      statusEl.textContent = 'Chưa bấm';
      countdownEl.textContent = '0';
      scriptWrap.style.display = 'none';
    });

    function revealScript(){
      statusEl.textContent = 'Đã hiển thị script';
      scriptPre.textContent = SCRIPT_CONTENT;
      scriptWrap.style.display = 'block';
    }

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(SCRIPT_CONTENT);
        copyBtn.textContent = 'Đã sao chép';
        setTimeout(()=>copyBtn.textContent='Sao chép',1500);
      } catch (e) {
        alert('Không thể sao chép tự động — hãy bôi đen và sao chép thủ công.');
      }
    });

    downloadBtn.addEventListener('click', () => {
      const blob = new Blob([SCRIPT_CONTENT], {type: 'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = DOWNLOAD_FILENAME;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  </script></body>
</html>
