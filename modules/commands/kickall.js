module.exports.config = {
  name: "kickall",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Khánh Milo",
  description: "Kick out all the member inside of the group.",
  commandCategory: "group",
  usages: "[]",
  cooldowns: 3,
  usePrefix: true
};

module.exports.run = async function({ api, event, args }) {
  var threadInfo = await api.getThreadInfo(event.threadID)
  var id = threadInfo.participantIDs
  const user = args.join(" ")
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  for (let user of id) {
    await delay(5000)
    api.removeUserFromGroup(user, event.threadID, user);
  }
};