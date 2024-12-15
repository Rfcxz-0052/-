document.getElementById('myForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('https://cors.io/https://script.google.com/macros/s/AKfycbxXYQKL-B1J_F_Sz_UWYOvSRkZC1O-4nEsBlAjyVsACbtjSzgvJi6gzbnjtfGbeNI1wEQ/exec', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('Success:', jsonResponse);
      document.getElementById('response').textContent = '提交成功！';
    } else {
      console.error('Error:', response.statusText);
      document.getElementById('response').textContent = '提交失敗！';
    }
  } catch (error) {
    console.error('Request failed', error);
    document.getElementById('response').textContent = '發送請求失敗！';
  }
});

