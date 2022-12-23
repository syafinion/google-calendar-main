<section class="gallery">
    <div class="container">
        <div class="row">


            <div class="col-lg-4 mb-3">
                <div class="card">
                    <div class="img-container">
                        <img src="" alt="" class="image card-img-top">
                        <div class="overlay">
                            <button class="btn btn-outline-secondary btn-sm"><i class="fas fa-cart-plus mr-2"></i>Add To Calendar</button>
</div>
</div>

<div class="card-body">
    <h5 class="card-title">A Sturdy Table</h5>
    <h6 class="card-subtitle mb-2 text-muted"> Event date</h6>
    <p class="card-text"> Event desc</p>
</div>
</div>
</div>



</div>
</div>
</section>


<style>

    .img-container {
        position: relative;
    }

    .image {
        transition: .5s ease;
        backface-visibility: hidden;
    }

    .overlay{
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .img-container:hover .image{
        opacity: 0.2;
    }

    .img-container:hover .overlay{
        opacity:1;
    }


    </style>


