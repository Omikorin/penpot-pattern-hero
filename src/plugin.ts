penpot.ui.open('Pattern Hero', `?theme=${penpot.theme}`, {
  width: 285,
  height: 500,
});

penpot.ui.onMessage<any>((message) => {
  if (message.type === 'create-pattern') {
    const { config, name } = message.content;

    if (!config || !name) return;
    if (penpot.selection.length === 0) return;

    // TODO
  }
});

// Update the theme in the iframe
penpot.on('themechange', (theme) => {
  penpot.ui.sendMessage({
    source: 'penpot',
    type: 'themechange',
    theme,
  });
});
