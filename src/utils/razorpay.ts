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
      console.error('Razorpay API error status:', res.status);
      const text = await res.text();
      console.error('Razorpay API error body:', text);
      let errorData = { error: '' };
      try {
        errorData = JSON.parse(text);
      } catch (e) {}
      throw new Error(errorData.error || `Server returned ${res.status}: ${text.substring(0, 100)}`);
    }

    const order = await res.json();

    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'YOUR_RAZORPAY_KEY_ID';
    if (razorpayKey === 'YOUR_RAZORPAY_KEY_ID') {
      alert("Razorpay Client Key (VITE_RAZORPAY_KEY_ID) is not configured in the environment. Please add it to your Vercel/AI Studio environment variables.");
      return;
    }
    console.log("Initiating Razorpay with key:", razorpayKey.substring(0, 8) + "...");

    const options = {
      key: razorpayKey, // Enter the Key ID generated from the Dashboard
      amount: order.amount,
      currency: order.currency,
      name: 'CRID',
      description: description,
      order_id: order.id,
      handler: async function (response: any) {
        try {
          const verifyRes = await fetch('/api/verify-payment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          if (verifyRes.ok) {
            onSuccess(response);
          } else {
            const error = await verifyRes.json();
            alert(`Payment verification failed: ${error.error || 'Please contact support.'}`);
          }
        } catch (error) {
          console.error('Verification error:', error);
          alert('An error occurred during payment verification. Please contact support.');
        }
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
  } catch (error: any) {
    console.error('Error loading Razorpay:', error);
    alert(`Could not initiate payment: ${error.message || 'Please try again later.'}`);
  }
};
