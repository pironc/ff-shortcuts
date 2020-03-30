// Listener
browser.commands.onCommand.addListener(function (command) {
  const tabs = browser.tabs.query({
    currentWindow: true
  });

  tabs.then(handle.bind(null, command), error);
});

// Go to next tab
function gotoNextTab(i, tabs) {
  if (i == tabs.length - 1) {
    browser.tabs.update(tabs[0].id, {
      active: true
    });
  } else {
    browser.tabs.update(tabs[i + 1].id, {
      active: true
    });
  }
}

// Go to previous tab
function gotoPreviousTab(i, tabs) {
  if (i == 0) {
    browser.tabs.update(tabs[tabs.length - 1].id, {
      active: true
    });
  } else {
    browser.tabs.update(tabs[i - 1].id, {
      active: true
    });
  }
}

function handle(command, tabs) {
  console.log(tabs);

  // Loop over all tabs
  for (let i = 0; i < tabs.length; i++) {
    const element = tabs[i];

    // Find the current tab
    if (element.active == true) {
      if (command == "next-tab") {
        gotoNextTab(i, tabs);
      } else if (command == "previous-tab") {
        gotoPreviousTab(i, tabs);
      }
      return
    }
  }
}

function error(msg) {
  console.log("Error: " + msg);
}