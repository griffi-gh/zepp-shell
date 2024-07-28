import { MessageBuilder } from "../utils/message.js";

const messageBuilder = new MessageBuilder();

AppSideService({
  onInit() {
    messageBuilder.listen(() => {});
    settings.settingsStorage.addListener('change', async ({ key, newValue, oldValue }) => {
      if (key === "_js") {
        messageBuilder.request({
          method: "JS_EVAL",
          data: newValue,
        }).then(data => {
          settings.settingsStorage.setItem("_js_return", data);
        });
      }
    });
  },
  onRun() {},
  onDestroy() {},
})
