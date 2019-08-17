// $(document).ready( function (){
//     $('#date').datepicker();
// });

$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          numberOfMonths: 1,
          dateFormat: "dd_mm_yy",
          showOn: "button",
          buttonImage: "images/calendar.gif",
          buttonImageOnly: true,
          buttonText: ' '
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        numberOfMonths: 1,
        dateFormat: "dd_mm_yy"
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }
  } );