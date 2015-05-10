$(function(){

  var IncrementWeek = {
    weeks: [
      "first",
      "second",
      "third",
      "fourth",
      "fifth",
      "sixth",
      "seventh",
      "eighth",
      "ninth",
      "tenth",
      "eleventh",
      "twelfth",
      "thirteenth",
      "fourteenth",
      "fifteenth"
    ],

    weekCount: 0,
    totalWeeks: 14,

    nextWeek: function() {
      if(this.weekCount <= this.totalWeeks-1){
        this.weekCount++;
        console.log(this.weeks[this.weekCount], this.weekCount);
        return this.weeks[this.weekCount];
      }
    },

    prevWeek: function() {
      if(this.weekCount != 0){
        this.weekCount--;
        console.log(this.weeks[this.weekCount], this.weekCount);
        return this.weeks[this.weekCount];
      }
    },

    forwardWeek: function() {
      return this.weeks[this.weekCount+1];
    },

    backWeek: function() {
      return this.weeks[this.weekCount-1];
    }
  }

  $(document).keyup(function(e) {
    e.preventDefault();
    var container = $('.container');
    var weeks = document.getElementsByClassName('week');
    var forwardWeek = document.getElementsByClassName(IncrementWeek.forwardWeek());
    var backWeek = document.getElementsByClassName(IncrementWeek.backWeek());

    if(e.keyCode == 39 && IncrementWeek.weekCount != 14) {

      //remove any active classes
      $(weeks).attr('class', function(idx, classes) {
        return classes.replace('active', '');
      });
      //apply an active class to the next item
      $(forwardWeek).not('.first').attr('class', function(idx, classes) {
        return classes + ' active';
      });

      container.removeClass().addClass('container ' + IncrementWeek.nextWeek() + '-week');
    }
    if(e.keyCode == 37 && IncrementWeek.weekCount != 0){
      //remove any active classes
      $(weeks).attr('class', function(idx, classes) {
        return classes.replace('active', '');
      });
      //apply an active class on the previous item
      $(backWeek).not('.fifteenth').attr('class', function(idx, classes) {
        return classes + ' active';
      });

      container.removeClass().addClass('container ' + IncrementWeek.prevWeek() + '-week').addClass('reverse');
    }
  });

  $('.animate').click(function() {
    //$('.container').addClass('animated');
  });
});
