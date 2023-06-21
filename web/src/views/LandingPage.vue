<template>
    <div class="header">
        <nav>
            <img src="../assets/imagem/image_logo.png" alt="logo"> <!--ADICIONAR LOGO-->
            <ul id="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Solução</a></li>
            </ul>
            <h1 class="menu">&#9776;</h1>
        </nav>
        <div class="main">
            <h1>Chegou a hora de levar seu petshop para o próximo nível<br> com nosso sistema de gestão moderno e eficiente</h1>
            <a href="#">Explore mais</a>
        </div>
        <div class="right-box">
            <img src="../assets/imagem/image-rightbox.png" alt="">
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#04294d" fill-opacity="1" d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,186.7C672,192,768,192,864,213.3C960,235,1056,277,1152,282.7C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>     
    </div>
    <div class="service">
        <h2>Serviços</h2>
        <p>testando testando</p>
        <div class="row">
            <div class="servicecol">
                <div class="service-offer">
                    <img src="../assets/imagem/img1.png" alt=""> <!--ADICIONAR IMAGEM-->
                </div>
                <h4>Groming</h4>
                <p>testando testando testando</p>
            </div>
            <div class="servicecol">
                <div class="service-offer">
                    <img src="../assets/imagem/img3.png" alt=""> <!--ADICIONAR IMAGEM-->
                </div>
                <h4>Vet Car</h4>
                <p>testando testando testando</p>
            </div>
            <div class="servicecol">
                <div class="service-offer">
                    <img src="../assets/imagem/img2.png" alt=""> <!--ADICIONAR IMAGEM-->
                </div>
                <h4>Playing</h4>
                <p>testando testando testando</p>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

.header{
    height: 100vh;
    width: 100%;
    background-color: var(--secondary-color);
    position: relative;
}
.header nav{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 2rem;
}
.header .menu{
    font-size: 25px;
    display: none;
}
.header nav img{
    width: 120px;
}
.header nav ul{
    display: flex;
}
.header nav li {
    list-style: none;
    margin: 0 5px;
}
.header nav li a{
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.2rem 1rem;
    font-size: 15px;
    font-weight: bold;
    color: var(--primary-color);
    position: relative;
    z-index: 1;
}
.header nav li a::before{
    content: '';
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--primary-color);
    border-radius: 20px;
    z-index: -1;
    transition: 0.5s linear;
}
.header nav li a:hover:before{
    width: 100%;
}
.header nav li a:hover{
    color: var(--tertiary-color);
}
.header .main{
    text-align: center;
    
}
.header .main h1{
    font-size: 2.5rem;
    margin-top: 90px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 2rem;
}
.header .main a{
    text-decoration: none;
    width: 350px;
    font-size: 15px;
    padding: 0.5rem 1rem;
    font-weight: bold;
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    transition: 0.9s;
    color: #e2ebf4cb;
}
.header .main a:hover{
    background: transparent;
    color: black;
}
svg {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
}
.header .right-box{
    position: absolute;
    right: 0;
    bottom: 0;
}
.header .right-box img{
    width: 100%;
}
/*SERVICE*/
.service{
    padding-top: 1rem;
    width: 80%;
    margin: auto;
    text-align: center;
}
.service h2{
    font-size: 2.5rem;
    color: var(--tertiary-color);
    font-family: 'Montserrat', sans-serif;
}
.service p{
    color: var(--tertiary-color);
    font-size: 17px;
}
.service .row{
    margin-top: 5%;
    display: flex;
    justify-content: space-around;
}
.service .servicecol{
    flex-basis: 30%;
    border: 1px solid var(--secondary-color);
    color: var(--tertiary-color);
    margin: 5% 0;
    padding: 1rem 0.5rem;
    position: relative;
}
.service .service-offer{
   display: block;
   width: 60px;
   height: 60px;
   border: 3px solid var(--secondary-color);
   background-color: var(--primary-color);
    border-radius: 50%;
    padding: 10px;
    position: absolute;
    margin-top: -50px;
    margin-left: 50px;
    transform: translateX(-50px);
}

.service h4{
    font-size: 1.3rem;
}
.service .service-offer img{
    width: 100%;

}
</style>