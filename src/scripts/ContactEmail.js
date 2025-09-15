export function setupCopyEmail(emailId, buttonId) {
  const btn = document.getElementById(buttonId);
  const emailSpan = document.getElementById(emailId);
  

  if (!btn || !emailSpan) return;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(emailSpan.textContent);
      btn.textContent = '¡Copiado!';
      setTimeout(() => {
        btn.textContent = 'Copiar';
      }, 2000);
    } catch (e) {
      btn.textContent = 'Error';
    }
  });
}