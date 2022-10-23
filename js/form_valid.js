// Wait for the DOM to be ready
$(function () {

    // Initialize form validation on the registration form.

    $.validator.addMethod("customemail",
        function (value, element) {
            return /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
        },
        "Please enter a valid email address."
    );

    $.validator.addMethod("alphanumeric", function (value, element) {

        return this.optional(element) || /^[\w ]+$/i.test(value);

    }, "Letters,numbers,and underscores only");


    // It has the name attribute "registration"
    $("#contact_form").validate({

        onkeyup: function (element) {
            this.element(element); // <- "eager validation"
        },
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            username: {
                required: true,
                minlength: 6,
                alphanumeric: true
            },
            email: {
                required: {
                    depends: function () {
                        $(this).val($.trim($(this).val()));
                        return true;
                    }
                },
                customemail: true
            },
            subject: {
                required: true,
                minlength: 15,
                alphanumeric: true
            },

            message: {
                required: true,
                minlength: 15,
                alphanumeric: true
            }
        },



        // Specify validation error messages
        messages: {
            //username: "Please enter your name", 
            subject: {
                //required: "Please subject a message",
                minlength: "This Field At Least 15 Characters"
            },
            message: {
                //required: "Please provide a message",
                minlength: "This Field At Least 15 Characters"
            }

        },

        errorElement: 'div',
        errorLabelContainer: '.errorTxt',

        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function () {
            $.ajax({

                dataType: 'JSON',

                url: 'sendmail.php',

                type: 'POST',

                data: $('#contact_form').serialize(),

                beforeSend: function (xhr) {

                    $('#contact_submit').html('Sending...');

                },

                success: function (response) {

                    if (response) {

                        console.log(response);

                        if (response['isSuccess']) {

                            $('#msg').html('<div class="alert alert-success">' + response['msg'] + '</div>');

                            $('input, textarea').val(function () {

                                return this.defaultValue;

                            });

                        } else {

                            $('#msg').html('<div class="alert alert-danger">' + response['msg'] + '</div>');

                        }

                    }

                },

                error: function () {

                    $('#msg').html('<div class="alert alert-danger">Errors occur. Please try again later.</div>');

                },
                complete: function () {

                    $('#contact_submit').html('Send Message');

                }

            });
        }
    });
});
