export const loadRazorpay = async (amount: number, description: string, name: string, email: string, phone: string, onSuccess: (response: any) => void) => {
  try {
    const res = await fetch('/api/create-razorpay-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    if (!res.ok) {
      throw new Error('Failed to create order');
    }

    const order = await res.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'YOUR_RAZORPAY_KEY_ID', // Enter the Key ID generated from the Dashboard
      amount: order.amount,
      currency: order.currency,
      name: 'CRID',
      description: description,
      order_id: order.id,
      handler: function (response: any) {
        onSuccess(response);
      },
      prefill: {
        name: name,
        email: email,
        contact: phone,
      },
      theme: {
        color: '#10b981',
      },
    };

    // @ts-ignore
    const rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response: any) {
      alert(`Payment Failed: ${response.error.description}`);
    });
    rzp1.open();
  } catch (error) {
    console.error('Error loading Razorpay:', error);
    alert('Could not initiate payment. Please try again later.');
  }
};
