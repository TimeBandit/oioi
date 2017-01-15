'use strict';

const oioi = (function() {
  let topics = {};
  let subId = -1;

  function publish(topicName, data) {
    if (arguments.length < 2) {
      throw new Error('oioi.publish expects 2 args');
    }

    if (!topics[topicName]) {
      return false;
    };
    topics[topicName].forEach((subscriber) => {
      subscriber.callback(data)
    });
    return this;
  };

  function subscribe(topicName, callback) {
    if (arguments.length < 2) {
      throw new Error('oioi.subscribe expects 2 args');
    }
    if (!topics[topicName]) {
      topics[topicName] = [];
    };
    let token = (++subId).toString();
    topics[topicName].push({
      token: token,
      callback: callback
    });
    return token;
  }

  function unsubscribe(token) {
    if (typeof token !== String) {
      token = token.toString();
    };

    for (let topicName in topics) {
      let subscriberList = topics[topicName]
      subscriberList.forEach((subscriber, index) => {
        if (subscriber.token === token) {
          subscriberList.splice(index, 1);
          return token;
        }
      })
    }
  }

  return {
    publish,
    subscribe,
    unsubscribe
  }

})()

module.exports = oioi;

// oioi.subscribe('hifive', function (data) {
// 	console.log(data);
// });
// oioi.subscribe('hifive', function (data) {
// 	console.log(data+'gotcha');
// });
// oioi.subscribe('random', function (data) {
// 	console.log(data);
// })
// oioi.publish('hifive', 'raiseyourhands');
// oioi.publish('random', Math.round(Math.random()*10));