$(document).ready(function() {
  $("#add-new-todo-button").click(function(){
      var description = $("#new-todo-description")
       var pomodoroEstimate = $("#new-pomodoro-estimate")
      $("table").append('<tr><th><a href="/show.html">' + description.val() +' </a></th><th><span  class="pomodoro-estimate">' + pomodoroEstimate.val() + ' pomodoros' +'</span></th><th><input type="checkbox"></th></tr>');
  
      description.val('');
      pomodoroEstimate.val('');
  });
});
