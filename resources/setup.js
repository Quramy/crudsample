var data = [
	{name:'foo', description: 'this is foo.'},
	{name:'hoge', description: 'this is hoge'},
	{name:'bar', description: 'this is bar.'}
];

db.sample.drop();

for (var i=0;i<data.length;i++){
	db.sample.save(data[i]);
}

