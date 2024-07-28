AppSettingsPage({
  build() {
    return View({}, [
      TextInput({
        label: '_js',
        settingsKey: "_js",
        maxLength: 100000,
      }),
      TextInput({
        label: '_js_return',
        settingsKey: "_js_return",
        maxLength: 100000,
      }),
    ]);
  }
})
