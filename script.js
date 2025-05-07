// 1. Handle Difficulty Level Button Selection (uses classList, DOM traversal)
document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    // Add 'active' class to the clicked button
    btn.classList.add('active');
  });
});

// 2. Handle Booking Form Submission (navigates to payment page)
document.getElementById('bookingForm')?.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission
  window.location.href = 'payment.html'; // Navigate to payment page
});

// 3. Mouseover/Mouseout Events on Input Fields (changes border style)
document.querySelectorAll('input').forEach(el => {
  el.addEventListener('mouseover', () => {
    el.style.border = "1px solid #f9cb1e"; // Add yellow border
  });
  el.addEventListener('mouseout', () => {
    el.style.border = "none"; // Remove border
  });
});

// 4. Keydown Event Listener (handles Escape key)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') alert('Escape key pressed!');
});

// 5. Payment Form Submission (dynamically adds a message and redirects)
document.getElementById('paymentForm')?.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default submission

  // Dynamically create and insert a message (DOM manipulation)
  const msg = document.createElement('p');
  msg.textContent = "Redirecting to confirmation...";
  document.body.append(msg); // Add to DOM

  // Simulate redirect after a short delay
  setTimeout(() => window.location.href = 'confirmation.html', 1000);
});
