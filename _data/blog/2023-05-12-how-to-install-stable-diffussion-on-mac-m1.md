---
template: BlogPost
path: /blog/how-to-install-stable-diffusion-on-mac-m1
date: 2023-05-12T11:37:42.146Z
title: How to use Stable Diffusion on Mac using Automatic1111's Web UI
tags:
  - stable diffusion
  - AI art
  - AI
featured: false
draft: false
travel: false
author: Urvashi
thumbnail: /assets/automatic1111.png
---

# What is Stable Diffusion?

[Stable Diffusion](https://github.com/Stability-AI/stablediffusion) is a deep learning, text-to-image model that was released in August 2022 by Stability AI.
This innovative technology is not just limited to generating images from text, but it can also do things like inpainting, outpainting, and even transforming images based on a text prompt.

So, how does Stable Diffusion work? Stable Diffusion is a latent diffusion model, a kind of deep generative neural network.
It begins with a random noise image and then gradually adds a touch of artistic noise until it turns into the image you desire. The diffusion process is controlled by a text prompt, which specifies the desired content of the image.

You can try it out online on [Stable Diffusion Web](https://stablediffusionweb.com/).

# Requirements

Here are some of the system requirements for installing Stable Diffusion locally on Mac:

- macOS Monterey or later
- Apple Silicon M1 or M2 chip (recommended)
- 8GB or more of RAM
- 128GB or more of storage space

If you meet these requirements, you should be able to install and use Stable Diffusion on your Mac without any problems.

# AUTOMATIC1111 Web UI


[AUTOMATIC1111 Web UI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) is a GitHub repository that contains a web-based interface for the Stable Diffusion text-to-image model.

Here are the step-by-step instructions to install it:

1. If you don't have Homebrew installed, please visit https://brew.sh and follow the provided instructions to install it. Keep the terminal window open and proceed to the next steps for adding Homebrew to your PATH.
2. Open a new terminal window and enter the following command to install the necessary dependencies: `brew install cmake protobuf rust python@3.10 git wget`
3. Clone the web UI repository by running the following command: `git clone https://github.com/AUTOMATIC1111/stable-diffusion-webui`
4. You can download the models from [Hugging Face](https://huggingface.co/models?pipeline_tag=text-to-image&sort=downloads) or [CivitAI](https://civitai.com/) abd place the models/checkpoints into the `stable-diffusion-webui/models/Stable-diffusion` directory. Here are some that you can try:
- [majicMIX realistic](https://civitai.com/models/43331/majicmix-realistic)
- [MeinaMix](https://civitai.com/models/7240/meinamix)
- [DreamShaper](https://civitai.com/models/4384/dreamshaper)
5. Navigate to the `stable-diffusion-webui` directory by running the command: `cd stable-diffusion-webui`. Then, execute the command: `./webui.sh` to launch the web UI. This will create and activate a Python virtual environment using `venv`, and any missing dependencies will be automatically downloaded and installed.
6. To relaunch the web UI at a later time, simply run the command: `./webui.sh`. Note that the web UI does not update automatically. If you want to update it, run the command `git pull` before executing `./webui.sh`.

That's it!
Now you can start generating your own AI Art!
[You can checkout the features of AUTOMATIC1111's Web UI here.](https://github.com/AUTOMATIC1111/stable-diffusion-webui/wiki/Features)
