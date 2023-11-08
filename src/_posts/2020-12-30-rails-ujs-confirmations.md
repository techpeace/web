---
layout: post
title: Using Rails UJS Confirmations in Stimulus and StimulusReflex
description: Learn how to add confirmation steps and trigger actions post-confirmation in your Rails & StimulusReflex applications.
canonical_url: https://dev.to/techpeace/using-rails-ujs-confirmations-in-stimulus-and-stimulusreflex-4f6e
date: 2023-09-21 11:52:06 -0400
categories:
  - rails
  - stimulus-reflex
---

One of the many benefits of using the fantastic [StimulusReflex](https://stimulusreflex.com) has been a return to using the conventions of [Rails UJS](https://edgeguides.rubyonrails.org/working_with_javascript_in_rails.html#stoppable-events). Simply [appending a data attribute to an element to have it automatically disable itself during an interaction](https://edgeguides.rubyonrails.org/working_with_javascript_in_rails.html#automatic-disabling) is the type of magic that reminds me of first getting started with Rails.

If you need to add a confirmation step to an interaction, which is a common pattern if a user is trying to destroy an object, [you can make use of the `data-confirm` attribute](https://edgeguides.rubyonrails.org/working_with_javascript_in_rails.html#confirmations):

```erb
<button data-confirm="Are you sure you want to remove this context?">
  <%= render_svg 'icons/custom/remove' %>
</button>
```

If you try to use `data-confirm` with Stimulus or StimulusReflex, you'll find out that [`data-confirm` is not supported out-of-the-box](https://discuss.hotwire.dev/t/wait-for-alert-confirmation-to-run-stimulus-code/383/9) - which makes sense. In order to use it along with `data-action` or `data-reflex`, you can simply listen for the `confirm:complete` event (instead of `click`) that is triggered by `rails-ujs` when the user accepts the confirmation modal:

```erb
<button data-reflex-dataset="combined"
        data-confirm="Are you sure you want to remove this context?"
        data-reflex="confirm:complete->Context#remove_context">
  <%= render_svg 'icons/custom/remove' %>
</button>
```

```javascript
// When confirmation accepted, delete the block.
this.element.addEventListener("confirm:complete", (event) => {
  this.stimulate("ScriptEditor#delete_context", event.target);
});
```

![user accepting a confirmation modal](https://dev-to-uploads.s3.amazonaws.com/i/adw35mkq7ny2ikb7ttxg.gif)

Now, the action specified by `data-action` or `data-reflex` will only be triggered if the user accepts the confirmation dialog. This allows us to easily add a confirmation step to any Stimulus or StimulusReflex interaction.

---

_I ran across this issue while building [Voxable](https://voxable.io), a conversation design platform. If you're building chatbots or voice applications, I hope you'll [check it out](https://voxable.io)!_
