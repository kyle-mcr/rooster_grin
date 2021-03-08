import { Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit(){
  (function ($) {
    $(document).ready(function () {
      $('.read_more').click(function(){
        $('.content, .read_more').hide('slow');
        $('.content2').show('slow');
    });
    $('.read_more2').click(function(){
      $('.content3, .read_more2').hide('slow');
      $('.content4').show('slow');
  });
    });
    $('#orange_button').click(function(){
      $('#orange_button').hide(500, "linear");
      $('.content5').show(500, "linear");
  });
  $('#orange_button2').click(function(){
    $('#orange_button2, .content6').hide(400, "linear");
    $('.content7').show(400, "linear");
});
  })(jQuery);
  }

  goToDestination(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
  }

}
