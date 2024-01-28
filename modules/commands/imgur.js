module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermission: 0,
  credits: "cc",
  description: "Turns an image into an imgur link",
  commandCategory: "Game",
  usages: "[reply]",
  cooldowns: 5,
  usePrefix: true,
  dependencies: {
    "axios": "",
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule['axios'];
  var linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if (!linkanh) return api.sendMessage('Please reply to an image or enter a link 1 picture!!!', event.threadID, event.messageID)
  const res = await axios.get(`https://api-12.chinhle4447.repl.co/imgur?link=${encodeURIComponent(linkanh)}`);
  var img = res.data.uploaded.image;
  return api.sendMessage(`${img}`, event.threadID, event.messageID);
}