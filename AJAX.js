$('#c_type').change(function(){
                $('#client_name').removeAttr("disabled");
                var client_type_id = $(this).val();
                            if(client_type_id!="first"){
                                $.ajaxSetup({
                                    headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                        }
                                });
                                $.ajax({
                                    type: "GET",
                                    dataType: 'json',
                                    url: "client_info_ajax/"+client_type_id,
                                    success:function(respose){
                                        console.log(respose);
                                        var data = '<option value="">Select Client Name</option>';
                                        $.each(respose,function(key,value){
                                            data = data + '<option value="'+value.id+'">'+value.c_name+'</option>';
                                        });
                                        $('#client_name').html(data);
                                    }
                                });
                            }
                });
