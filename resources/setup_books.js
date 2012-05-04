var data = [
	{title: 'hogehoge', author: 'yosuke kurami'},
	{title: 'foo', author: 'yosuke kurami'},
	{title: 'bar', author: 'yosuke kurami'},
	{title: '謎の本', author: 'yosuke kurami'}
];

db.books.drop();

for (var i=0;i<data.length;i++){
	db.books.save(data[i]);
}

