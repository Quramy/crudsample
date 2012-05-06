$(function(){
	$('#btn_post').click(createBook);
	$('#btn_update').click(updateBook);
	$('button.editBook').click(editBook);
	$('button.deleteBook').click(deleteBook);
});

var reflesh = function(){
	$.getJSON('/book/json').done(function(books){
		$('#booklist tbody').empty();
		$.each(books, function(i, book){
			$('#booklist tbody').append(
				$('<tr>').
					append($('<td>' + book.author + '</td>')).
					append($('<td>' + book.title+ '</td>')).
					append($('<td><button class="editBook" book_id="' + book._id + '">edit</button></td>')).
					append($('<td><button class="deleteBook" book_id="' + book._id+ '">delete</button></td>'))
			);
		});
		$('button.editBook').click(editBook);
		$('button.deleteBook').click(deleteBook);
		$('#frm_edit input, #frm_edit textarea').val('');
	});
};

var createBook = function(){
	$.post('/book', {
		author:$('#new_author').val(),
		title:$('#new_title').val(),
		description:$('#new_desc').val()
	}).done(function(book){
		reflesh();
	});
	return false;
};

var updateBook = function(){
	var id = $('#new_id').val();
	if(id === ''){
		return false;
	}
	$.ajax({
		url: '/book/' + id,
		type: 'PUT',
		data: {
			newAuthor: $('#new_author').val(),
			newTitle: $('#new_title').val(),
			newDesc: $('#new_desc').val()
		}
	}).done(function(book){
		reflesh();
	});
	return false;
};

var editBook = function(){
	//var id = $(this).parent().parent().find('input:hidden.book_id').val()
	$.getJSON('/book/'+$(this).attr('book_id')).done(function(book){
		$('#new_id').val(book._id);
		$('#new_author').val(book.author);
		$('#new_title').val(book.title);
		$('#new_desc').val(book.description);
	});
};

var deleteBook = function(){
	$.ajax({
		url: '/book/' + $(this).attr('book_id'),
		type: 'delete',
	}).done(function(){
		reflesh();
	});
};
