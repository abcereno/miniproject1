
$(document).ready(function(){
    // for staffs
    $("#Sregister").click(function(){
        let Fname = $("#Fname").val();
        let Slevel = $("#Slevel").val();
        const staff = document.createElement("li");
        staff.className = "mt-1 mb-1";
        staff.innerHTML = (`
                <div class="row d-flex justify-content-evenly align-items-center">
                    <input type="checkbox" name="" id="checkbox">
                    <h6 class="col-7 m-0 d-inline-block mt-1 mb-1 d-flex justify-content-center" id="">${Fname}</h6>
                    <h6 class="col-3 m-0 d-inline-block mt-1 mb-1 d-flex justify-content-center" id="">${Slevel}</h6>
                </div>
        `);
        $("div #Slist").append(staff);
        $("#Fname").val("");
        $("#Slevel").val("");   
    });
    // for all delete button
    $(".Sdelete").click(function(){
        $("input[type='checkbox']:checked").each(function(){
            $(this).closest("li").remove();
        });
    });
    // for select all checkbox
    $(".SSall").on("click", function(){
        $("input[type='checkbox']").prop("checked", $(this).prop("checked"));
      });
    // for computing margin up to 2 decimal places
    $("#cost, #retail").keyup(function() {
        let cost = parseFloat($("#cost").val());
        let retail = parseFloat($("#retail").val());
        let margin = retail - cost;
        $("#margin").text("Php"+" "+margin.toFixed(2));
    });
    // for adding product
    $("#Iadd").click(function(){
        let Pname = $("#Pname").val();
        let Scount = $("#Scount").val();
        let cost = $("#cost").val();
        let retail = $("#retail").val();
        let margin = $("#margin").text();
        let description = $("#description").val();
        let Dordered = $("#Dordered").val();
        let Ddelivered = $("#Ddelivered").val();
        let Sname = $("#Sname").val();
        const productId = `product-${Date.now()}`;
        const addProduct = document.createElement("li");
        addProduct.className = "mt-1 mb-1";
        addProduct.innerHTML = (`
            <div class="row ps-3 pe-0 d-flex justify-content-evenly align-items-center">
            <input class="col-1" type="checkbox" name="" id="checkbox">
                <a class="col-9" href="#${productId}">${Pname}</a>
            </div> 
        `);
        $("div #Ilist").append(addProduct);
        const imgSrc = $("#addImg").attr("src");
        const addProductDetails = document.createElement("div");
        addProductDetails.id = productId;
        addProductDetails.innerHTML = (`
        <div id="productDetails">
            <img class="detailsImg" src="${imgSrc}" alt="Product Image">
            <div>
                <h6><b>Product Name:</b> ${Pname}</h6>
                <h6><b>Stock Count:</b> ${Scount}</h6>
                <h6><b>Cost:</b> ${cost}</h6>
                <h6><b>Retail:</b> ${retail}</h6>
                <h6><b>Margin:</b> ${margin}</h6>
                <h6><b>Description:</b><p> ${description}</p></h6>
                <h6><b>Date Ordered:</b> ${Dordered}</h6>
                <h6><b>Date Delivered:</b> ${Ddelivered}</h6>
                <h6><b>Supplier Name:</b> ${Sname}</h6>
            </div>
        </div>
        `);
        $("#Ilistdetails").append(addProductDetails);
        $("#Ilistdetails > div").hide(); 
        $("#Pname").val("");
        $("#Scount").val("");
        $("#cost").val("");
        $("#retail").val("");
        $("#margin").text("");
        $("#description").val("");
        $("#Dordered").val("");
        $("#Ddelivered").val("");
        $("#Sname").val("");
    });
    $("#Ilist").on("click", "a", function(e){
        e.preventDefault();
        const targetId = $(this).attr("href");
        $("#Ilistdetails > div").hide();
        $(targetId).toggle();
    });
    $("#Sclear").click(function(){
        $("#Pname").val("");
        $("#Scount").val("");
        $("#cost").val("");
        $("#retail").val("");
        $("#margin").val("");
        $("#description").val("");
        $("#Dordered").val("");
        $("#Ddelivered").val("");
        $("#Sname").val("");
    });
    // $("#Pdelete").click(function(){
    //     $("input[type='checkbox']:checked").each(function(){
    //         $(this).closest("li").remove();
    //     });
    // });
    $("#Pdelete").click(function(){
        $("input[type='checkbox']:checked").each(function(){
        const parentLi = $(this).closest("li");
        const targetId = $(parentLi).find("a").attr("href");
        $(parentLi).remove();
        $(targetId).remove();
        });
        });
    // for orders
    $("#Oregister").click(function(){
        let productName = $("#prodName").val();
        let inOut = $("#inOut").val();
        let customerName = $("#customerName").val();
        const order = document.createElement("li");
        order.className = "mt-1 mb-1";
        order.innerHTML = (`
            <div class="d-flex justify-content-evenly align-items-center">
                <input type="checkbox" name="" id="checkbox">
                <h6 class="col-4 w-25" type="text"> ${productName}</h6>
                <h6 class="col-4 w-25" type="text"> ${inOut}</h6>
                <h6 class="d-flex align-items-center">To</h6>
                <h6 class="col-4 w-25" type="text">${customerName}</h6>
            </div>
        `);
        $("div #Olist").append(order);
        $("#prodName").val("");
        $("#inOut").val(""); 
        $("#customerName").val("");
    });
    // for adding suppliers
    $("#suppAdd").click(function(){
        let companyName = $("#companyName").val();
        let companyProduct = $("#companyProduct").val();
        let pieces = $("#pieces").val();
        let avgDelivery = $("#avgDelivery").val();
        const supplier = document.createElement("li");
        supplier.className = "mt-1 mb-1";
        supplier.innerHTML = (`
            <div class="row d-flex justify-content-evenly align-items-center">
                <input type="checkbox" name="" id="checkbox">
                <h6 id="companyName" class="col-3 col-md-3 mt-1 mb-1" type="text"> ${companyName}</h6>
                <h6 id="companyProduct" class="col-3 col-md-2 mt-1 mb-1" type="text"> ${companyProduct}</h6>
                <h6 id="pieces" class="col-2 col-md-1 mt-1 mb-1" type="text"> ${pieces}</h6>
                <h6 id="avgDelivery" class="col-2 col-md-2 mt-1 mb-1" type="text"> ${avgDelivery}</h6>
            </div>
        `);
        $("div #suppList").append(supplier);
        $("#companyName").val("");
        $("#pieces").val("");
        $("#companyProduct").val(""); 
        $("#avgDelivery").val("");
    });
});