var data = [
	{title: 'hogehoge', author: 'yosuke kurami', description:'this is hoge book!'},
	{title: 'foo', author: 'yosuke kurami', description:'this is hoge book!'},
	{title: 'bar', author: 'yosuke kurami', description:'this is hoge book!'},
	{title: 'hoge2', author: 'yosuke kurami', description:'this is hoge book!'},
];

db.books.drop();

for (var i=0;i<data.length;i++){
	db.books.save(data[i]);
}

