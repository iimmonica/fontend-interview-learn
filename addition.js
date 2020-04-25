
    document.getElementsByClassName('menu')[0].addEventListener('click', function(){
        if (document.getElementsByClassName('fold-pc').length > 0) {
          document.getElementsByClassName('book-section')[0].className = 'book-section';
          document.getElementsByClassName('book-summary')[0].className = 'book-summary';
        } else {
          document.getElementsByClassName('book-section')[0].className = 'book-section fold-pc';
          document.getElementsByClassName('book-summary')[0].className = 'book-summary unfold-mobile';
        }
      });