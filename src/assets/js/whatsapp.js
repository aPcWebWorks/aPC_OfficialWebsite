        document.getElementById('whatsapp-button').addEventListener('click', function() {
            var phoneNumber = '7558260726';
            var message = 'Hello!'; // You can also include a default message

            // Create a WhatsApp URL with a pre-defined message
            var whatsappUrl = 'https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + encodeURIComponent(message);

            // Open the WhatsApp link in a new tab/window
            window.open(whatsappUrl, '_blank');
        });