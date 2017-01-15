# oioi
[![Franko Fraize - Oi Oi! ](https://img.youtube.com/vi/nZWlRnOvBKs/0.jpg)](https://www.youtube.com/watch?v=nZWlRnOvBKs)

oioi (pronounced oy-oy) is a tiny pubsub library implementation

To use:
```
oioi.subscribe('hifive', function (data) {
	console.log(data);
});

oioi.subscribe('hifive', function (data) {
	console.log(data+'gotcha');
});

oioi.subscribe('random', function (data) {
	console.log(data);
})

oioi.publish('hifive', 'raiseyourhands');
oioi.publish('random', Math.round(Math.random()*10));
```
