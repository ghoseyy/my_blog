---
layout: post
title: "Text-to-Speech with Python"
date: 2024-10-20
categories: [Python, Text-to-Speech]
---

Today, I want to share with you a simple and fast way to generate text-to-speech using a Python library called Edge TTS (version 6.1.14). If you’re not familiar with technology, don’t worry! I’ll break it down step by step.

## What You Need

Before we start, make sure you have a few things ready:

1. **Python Installed**: Ensure you have Python installed on your computer. If you don’t have it yet, you can download it from the [official Python website](https://www.python.org/downloads/).
2. **Code Editor**: You’ll need a code editor to type commands. You can use simple ones like Notepad (Windows) or TextEdit (Mac).

## Installing Edge TTS

Once you have Python and a code editor, let’s install the Edge TTS library. Open your command line interface (like Command Prompt on Windows or Terminal on Mac) and type the following command:

```bash
pip install edge-tts
```

or if you’re using Python 3:

```bash
pip3 install edge-tts
```

For more detailed information, you can check the [documentation here](https://pypi.org/project/edge-tts/).

## Checking Available Voices

After the installation is complete, you can check the voices available for text-to-speech. Just type this command:

```bash
edge-tts --list-voices
```

This will show you a list of voices you can use.

## Generating Text-to-Speech

Now, let’s get to the most exciting part: generating speech! You don’t need to write a complicated script; just follow these simple steps:

### Things to Keep in Mind

1. **Choose Your Voice**: Decide which voice you want to use.
2. **Prepare Your Text**: Write the content you want to convert to speech.
3. **Know Your Operating System**: Make sure you know where you are saving the audio file (like in your Downloads or Documents folder).
4. **Define Your Save Location**: Choose a name for your audio file.

## Example: Generating Nepali Voices

Let’s generate some Nepali voices! Here’s what I did:

1. I checked the available voices using:

   ```bash
   edge-tts --list-voices
   ```

   I found two voices suitable for Nepali content:
   - **Female Voice**: `ne-NP-HemkalaNeural`
   - **Male Voice**: `ne-NP-SagarNeural`

2. Now, let’s generate the voice. If you are in your Documents folder, the audio will be saved there. Here’s the command you should enter in your terminal:

   ```bash
   edge-tts --text "नमस्ते, म बिमल ।" --voice "ne-NP-SagarNeural" --write-media voice.wav
   ```

   This command will convert the text "नमस्ते, म बिमल ।" into speech and save it as `voice.wav` in your current directory.

3. **Listen to Your Voice**: After you run the command, you will find the audio file in the specified location. Just click on it to listen!

## Conclusion

And that’s it! You’ve just generated text-to-speech using Python and Edge TTS. It’s a straightforward process, and now you can create your own audio files easily. Happy experimenting!
