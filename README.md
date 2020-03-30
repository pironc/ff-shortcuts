# ff-shortcuts

Since it's **impossible** to change shortcuts in Firefox and I wanted to, I built this extension.

https://bugzilla.mozilla.org/show_bug.cgi?id=57805

It registers the following shortcuts:
- (Ctrl+Shift+Right) to go to next tab (Command+Shift+Right on a Mac).
- (Ctrl+Shift+Left) to go to previous tab (Command+Shift+Left on a Mac).

The following only works for `next-tab`

It also adds an [options page](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/user_interface/Options_pages) to the extension, which enables the user to change the registered shortcut for the extension. Just open the options page, then type a new value into the textbox (for example: "Ctrl+Shift+O") and press "Update keyboard shortcut". To reset the shortcut to its original value, press "Reset keyboard shortcut".

# Installation
- Download [Firefox Browser Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- Go to `about:config` and set `xpinstall.signatures.required` to `false`
- Zip this directory and load it in `about:addons` (Install Add-On From File)

# Todo
- Ability to change shortcuts without reloading the app
- Submit it to FF