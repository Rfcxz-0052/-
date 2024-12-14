document.getElementById('myForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // 阻止表單預設提交行為

  // 獲取表單資料
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // 發送到 Google Apps Script 的 Web App
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbwUzV8qFrUCS9qUbfruC5XN13HMrD1p19bf-YLzbAR_6-NEjkFhqnw20l-QPQ6QPA2Fjw/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    const result = await response.json();
    document.getElementById('response').innerText = result.status === 'success' 
      ? 'Submission successful!' 
      : 'Submission failed!';
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('response').innerText = 'Error occurred!';
  }
});
