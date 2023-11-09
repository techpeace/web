---
layout: post
title: Adding a Voice Interface to a Web Application (Video)
description: "Check out my short presentation on adding voice interface to a web app to enable speech, the most natural interface."
share_image_url: https://uploads-ssl.webflow.com/6170359d525787cd986bc625/61d62dec9127114d0041bfd8_5e190f412b927ddcd7c9da13_give-voice-to-your-web-application.png
canonical_url: https://www.voxable.io/blog/adding-a-voice-interface-to-a-web-application-video
date: 2016-04-05 12:41:00 -0400
categories:
  - voice
  - conversational-ai
---

<div class="container mx-auto">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/vbEU4mE_rkc?si=bY-p-GUqLE-FHSXP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

At a recent [Austin on Rails](http://www.austinonrails.org/) meeting, we gave a short talk on the benefits of adding an interactive voice interface to a web application. Over the course of the afternoon we spent preparing for the presentation, we were able to add voice interaction to the [Spree Open Source ecommerce platform](https://spreecommerce.com/).

## Why voice?

When someone uses a piece of software, the software's first job is to _divine the user's intent_. What does this series of points, clicks, keyboard presses, swipes, and/or gestures mean? What is it that the user wishes to do? This process of expressing intent by navigating a visual (or physical) user interface is the primary means by which we have used technology to date. No matter what series of points, clicks, and keystrokes we require the user to enter, it all began in the user's mind with that **intent:**

- I want to check my savings account balance.
- I want to publish my latest blog post draft.
- I want to see the shipping address for the latest order to my store.

That intent is formulated as a series of words in the user's mind. Rather than expressing that intent via pointing and clicking, we can instead allow users to express that intent in the most natural way possible: by _speaking_ it:

- “Show me my savings account balance.”
- “Publish the latest draft blog post.”
- “Show me the shipping address for the latest order.”

This kind of organic, natural communication with software will eventually become the primary way we interact with technology. But it's already possible to make these kinds of interactions a reality _today_.

## How we did it

The code for the demo in the above presentation can be found [on GitHub](https://github.com/voxable-labs/spree-api-ai-demo). We made use of Google Chrome's support for voice recognition via the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), and leveraged [the Api.ai Natural Language Understanding platform](http://api.ai/) for parsing user input into machine-readable intents.

## Let's talk

If you want to learn more about Voxable can help you give voice to your product, please [get in touch](https://www.voxable.io/hire-us)!
