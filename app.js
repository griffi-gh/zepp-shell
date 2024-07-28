import { MessageBuilder } from "./utils/message.js";

const appId = 11394;
const messageBuilder = new MessageBuilder({ appId });

App({
  globalData: {},
  onCreate(options) {
    messageBuilder.connect();
    messageBuilder.on("request", ctx => {
      const request = messageBuilder.buf2Json(ctx.request.payload);
      if (request.method === "JS_EVAL") {
        const rt_code = "" + request.data;
        console.log("JS_EVAL " + rt_code);
        let rt_return = (new Function(rt_code))();
        if (rt_return == null) rt_return = null;
        ctx.response({
          requestId: ctx.request.traceId,
          data: JSON.stringify(rt_return),
        });
      }
    });
  },
  onDestroy(options) {
    messageBuilder.disConnect();
  },
})
