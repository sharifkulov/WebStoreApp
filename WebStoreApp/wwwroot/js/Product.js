var dtable
$(document).ready(function () {
    dtable = $('#myTable').DataTable({

        "ajax": { "url": "/Admin/Product/AllProducts" },
        columns: [
            { data: 'name' },
            { data: 'decription' },
            { data: 'price' },
            { data: 'category.name' },
            {
                "data": "id",
                "render": function(data){
                return `
                    <a href = "/Admin/Product/CreateUpdate?id=${data}"><i class="bi bi-pencil-square"></i></a >
            <a onclick-RemoveProduct("/Admin/Product/Delete/${data}")><i class="bi bi-pencil-square"></i></a >`
            }

            }
        ]
    })
})
function RemoveProduct(url) {
    Swal.fire({
        tittle: 'Вы уверены?',
        text: "Вы не сможете отменить это действие!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText:'Да, удалить это!'

    }).then((result)=> {
        if (result.isConfirmed) {
            $.ajax({
                url: url,
                type: 'DELETE',
                succes: function (data) {
                    if (data.success) {
                        dtable.ajax.reload();
                        toastr.success(data.message);
                    }
                    else {
                        toastr.error(data.message);
                    }
                }
            });
        }
    })
}
