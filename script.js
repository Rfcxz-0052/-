document.getElementById('myForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // 阻止表單預設提交行為

  // 獲取表單資料
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  // 發送到 Google Apps Script 的 Web App
  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbyKfKy-xbVAgQ3ziLy4GIXQ7uc0lCuEuW6Gs0l4RUrxB5dX_kxLiGbPm0HYTfHJXMddDw/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    // Handle the response
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('Success:', jsonResponse);
    } else {
      console.error('Error:', response.statusText);
    }
  } catch (error) {
    console.error('Request failed', error);
  }
});
