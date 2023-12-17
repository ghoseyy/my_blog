---
layout: post
title: Android debugging tool
tags: [google, tutorial, search , technique]
thumbnail: /assets/images/favicon.adbthumb.jpeg
---

# Using ADB Tool for Wireless File Sharing on Mac with Android

Wireless file sharing between your Mac and Android device using ADB (Android Debug Bridge) can greatly enhance your workflow. Follow these steps to seamlessly connect and transfer files:

## Initial Requirements

Ensure your Android device and Mac are connected to the same Wi-Fi network.

## Verify ADB Installation

Open Terminal on your Mac and confirm ADB is installed:

```bash
adb version
```

If ADB is not installed, download and install it by following the instructions on the [Android Developers website](https://developer.android.com/tools/releases/platform-tools). Repeat the ADB version check after installation.

## Enable ADB over Wi-Fi

Connect your Android device to your Mac via USB and execute the following command in Terminal:

```bash
adb devices
```

If no device is attached, enable Developer Options on your device. Navigate to Settings > Developer Options > Turn on Developer Options > Enable USB Debugging.

## Wireless Connection Setup

1. Connect your device and Mac using a USB cable.
2. Enable Developer Options: Settings > Developer Options > Turn on Developer Options > Enable USB Debugging.
3. For wireless debugging: Settings > Developer Options > Turn on Developer Options > Wireless Debugging > Turn on.

Run `adb devices` in Terminal to ensure successful USB connection.

## Wireless ADB Connection

1. Check the IP address and port in Developer Options on your device (e.g., 192.168.9.657:36875).
2. In Terminal, execute:

```bash
adb tcpip 5555
adb connect <your_ip_address>:5555
```

Replace `<your_ip_address>` with the provided IP address. Once connected, you can disconnect the USB cable.

## File Sharing Commands

### Pushing a File from Mac to Android

Suppose you want to push a video named `tea.mp4` from your Mac's Downloads directory to your Android's Download folder:

```bash
adb push ~/Downloads/tea.mp4 /sdcard/Download/
```

### Pulling a File from Android to Mac

To pull the same video from your Android device to your Mac:

```bash
adb pull /sdcard/Download/tea.mp4 ~/Downloads/
```

## Conclusion

These commands allow you to seamlessly share files between your Mac and Android device wirelessly using ADB. This secure, reliable, and efficient method eliminates the need for third-party tools. Stay tuned for more ADB tips and tricks in upcoming articles!