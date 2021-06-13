var Bee = function() {
  this.operations = [
    {
      id: "plus",
      operation: "+",
      value: "+"
    },
    {
      id: "minus",
      operation: "-",
      value: "-"
    },
    // {
    //   id: "division",
    //   operation: "/",
    //   value: "/"
    // },
    {
      id: "multiplication",
      operation: "*",
      value: "x"
    }
  ]
  this.firstNumber = this.generateRandomNumber(10);
  this.secondNumber = this.generateRandomNumber(10);
  this.score = 0;
  this.timer = null;
  this.timerMaxCount = 5;
}

Bee.prototype.init = function() {
  var self = this;

  self.render();

  $('#toplama').on('click', function() {
    $('.bee-modal').addClass('bee-modal--active')
  })

  $('input').on('keyup', function() {
    // self.operation =  $('#operation').text()

    var getCurrentOperation = JSON.parse($('#operation').attr('data-operation'));
    console.log(getCurrentOperation);

    self.firstNumber = $('#firstNumber').text();
    self.secondNumber = $('#secondNumber').text();
    var answer = $(this).val()

    var result = eval(self.firstNumber + getCurrentOperation.operation + self.secondNumber)


    if (answer == result) {
      self.score += 10;
      // self.generateRandomNumber();



      self.stopTimer();
      self.render();


      // $('.bee-progress__item--in-progress').addClass('bee-progress__item--completed')
      // $('.bee-modal__score').addClass('bee-modal__score--success');
      //$('.bee-modal__result').addClass('bee-modal__result--active');
      //$('.bee-modal__result').find('.alert').html('Süren doldu.');

      setTimeout(function() {
        // $('.bee-modal__score').removeClass('bee-modal__score--success')
      }, 1000)
    }





  })
}

Bee.prototype.generateRandomNumber = function(number) {
  return Math.floor((Math.random() * number))
}

Bee.prototype.startTimer = function() {
  var self = this;

  self.timer = setInterval(function(){
    if(self.timerMaxCount <= 0){
      clearInterval(self.timer);
      $('input').attr('disabled', true);
      $('.bee-modal__start').addClass('bee-modal__start--active');
    }
    $('#progressBar').val(5 - self.timerMaxCount);
    self.timerMaxCount -= 1;
  }, 1000);

}

Bee.prototype.stopTimer = function() {
  var self = this;

  self.timerMaxCount = 5;
  $('#progressBar').val(0);
  clearInterval(self.timer);
  //self.timer = null;
}

Bee.prototype.render = function() {
  var self = this;

  self.firstNumber = self.generateRandomNumber(10);
  self.secondNumber = self.generateRandomNumber(10);

  $('#score').html(self.score)
  $('#firstNumber').html(self.firstNumber);
  $('#secondNumber').html(self.secondNumber);

  var operation = self.operations[self.generateRandomNumber(3)];
  console.log(operation);

  $('#operation')
    .attr('data-operation', JSON.stringify(operation))
    .html(operation.value);

  $('input').val('');

  self.startTimer();

}



$(function() {
  var bee = new Bee();
  bee.init()
});
