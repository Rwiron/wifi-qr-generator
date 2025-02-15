function generateWiFiQR() {
    let ssid = document.getElementById("ssid").value.trim();
    let password = document.getElementById("password").value.trim();
    let encryption = document.getElementById("encryption").value;
    const canvas = document.getElementById("qr-code");

    if (ssid === "") {
        alert("Please enter a WiFi name (SSID)!");
        return;
    }

    // Create WiFi QR Code format
    let wifiData = `WIFI:S:${ssid};T:${encryption};P:${password};;`;

    // Generate QR Code
    new QRious({
        element: canvas,
        value: wifiData,
        size: 250,
        backgroundAlpha: 1,
        foreground: '#000000',
        background: '#ffffff',
        level: 'H', // Highest error correction level
        padding: 10
    });
}

function downloadQR() {
    const canvas = document.getElementById("qr-code");
    const format = document.getElementById("format").value;

    if (!canvas.getContext) {
        alert("Please generate a QR code first!");
        return;
    }

    const link = document.createElement('a');

    if (format === "png") {
        link.href = canvas.toDataURL("image/png");
        link.download = "wifi-qr.png";
    } else {
        link.href = canvas.toDataURL("image/jpeg");
        link.download = "wifi-qr.jpg";
    }

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
