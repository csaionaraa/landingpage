<template>
    <!--Nav-->
    <div v-if="loading" class="loading-overlay">
        <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
            <div class="wheel"></div>
            <div class="hamster">
                <div class="hamster__body">
                    <div class="hamster__head">
                        <div class="hamster__ear"></div>
                        <div class="hamster__eye"></div>
                        <div class="hamster__nose"></div>
                    </div>
                    <div class="hamster__limb hamster__limb--fr"></div>
                    <div class="hamster__limb hamster__limb--fl"></div>
                    <div class="hamster__limb hamster__limb--br"></div>
                    <div class="hamster__limb hamster__limb--bl"></div>
                    <div class="hamster__tail"></div>
                </div>
            </div>
            <div class="spoke"></div>
        </div>
    </div>

    <div class="header">
        <nav>
            <div class="logo">
                <img src="../assets/imagem/image_logo.png" alt="logo"> <!--ADICIONAR LOGO-->
                <img src="../assets/imagem/logonome.png" alt="logonome">
            </div>
            <ul id="navbar">
                <li><a href="#um">Home</a></li>
                <li><a href="#dois">Serviços</a></li>
                <li><a href="#tres">Carousel</a></li>
            </ul>
        </nav>
        <!--Modal-->
        <div class="modal" v-if="showModal">
            <div class="modal-content">
                <span class="close" @click="closeModal">&times;</span>
                <h2>Cadastre-se</h2>
                <p class="modaltext">Experimente uma demonstração grátis!</p>
                <form @submit.prevent="submitForm">
                    <div class="roww">
                        <label for="email" class="label">Email:</label>
                        <input type="email" id="email" name="email" v-model="email" required>
                    </div>
                    <div class="roww">
                        <label for="password" class="label">Senha:</label>
                        <input type="password" id="password" name="password" v-model="password" required>
                    </div>
                    <button type="submit">Cadastrar</button>
                </form>

            </div>
        </div>
        <!--Main-->
        <div class="main">
            <h1>Chegou a hora de levar seu petshop para o próximo nível<br> com nosso sistema de gestão moderno e
                eficiente.<br>
            </h1>
            <a href="#" @click="openModal">Faça um teste</a>
        </div>
        <div class="right-box">
            <img src="../assets/imagem/image-rightbox.png" alt="">
        </div>
        <svg style="margin-bottom: -1;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="dois">
            <path fill="#04294d" fill-opacity="1"
                d="M0,32L48,53.3C96,75,192,117,288,144C384,171,480,181,576,186.7C672,192,768,192,864,213.3C960,235,1056,277,1152,282.7C1248,288,1344,256,1392,240L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
            </path>
        </svg>
    </div>

    <!--Serviços-->
    <div class="service">
        <h2 style="margin-bottom: 20px;">Serviços</h2>
        <p>Descubra o poder do nosso sistema, transforme suas operações<br> e impulsione seu sucesso com nossos serviços
            inovadores.</p>
        <div class="row">
            <div class="servicecol">
                <div class="service-offer">
                    <img src="../assets/imagem/img1.png" alt="">
                </div>
                <h4>Agendamento de Pet</h4>
                <h6 class="servicep">Facilitamos o agendamento de serviços e consultas através de uma interface online.</h6>
            </div>
            <div class="servicecol">
                <div class="service-offer">
                    <img src="../assets/imagem/img3.png" alt="">
                </div>
                <h4>Frente de Caixa</h4>
                <h6 class="servicep">Frente de caixa eficiente, que agiliza o processo de vendas e pagamentos.</h6>
            </div>
            <div class="servicecol">
                <div class="service-offer">
                    <img src="../assets/imagem/img2.png" alt="">
                </div>
                <h4>Gestão Integrada</h4>
                <h6 class="servicep">Nosso sistema permite a gestão eficiente de clientes, pets, funcionários, produtos e
                    fornecedores.</h6>
            </div>
        </div>
        <!--Carousel-->
        <div class="carouselContainer" id="tres">
            <div class="carousel">
                <h2 style="margin-bottom: 50px;">Carousel de Imagens</h2>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/imagem/care1.png" alt="Imagem 1" class="carousel-image">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/imagem/care2.png" alt="Imagem 2" class="carousel-image">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/imagem/care3.png" alt="Imagem 3" class="carousel-image">
                    </div>
                </div>
                <a class="carousel-control-prev" @click="prevSlide">&#10094;</a>
                <a class="carousel-control-next" @click="nextSlide">&#10095;</a>
            </div>
        </div>
    </div>
    <!--Botão back to top-->
    <div class="back-to-top" v-if="showBackToTop" @click="scrollToTop">
        <i class="fa fa-arrow-up"></i>
    </div>
    <!--Footer-->
    <footer>
        <div class="bottom-details">
            <div class="bottom_text">
                <span class="copyright_text">Copyright © 2023 All rights reserved</span>
            </div>
        </div>
    </footer>
</template>

<script>

import '../css/style.css';

export default {
    data() {

        return {
            showModal: false,
            email: '',
            password: '',
            showBackToTop: false,
            activeIndex: 0,
            loading: true,
            carouselTimer: null,
        }
    },

    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        this.loading = false;
    },

    created() {
        this.startCarouselTimer();
    },

    destroyed() {
        this.stopCarouselTimer();
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        openModal() {
            this.showModal = true;
        },

        closeModal() {
            this.showModal = false;
        },

        submitForm() {
           
            const payload = {
                email: this.email,
                password: this.password,
            };

            fetch('https://petshoptcc.ew.r.appspot.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            
                .then((response) => {
                    this.loading = true
                    if (response.ok) {
                        swal({
                            title: 'Está tudo ok ?',
                            text: 'Tenha em mente que este email e senha serão usados para fazer login no sistema',
                            icon: 'info',
                            button: 'OK'
                        }).then(() => {
                            window.location.href = 'https://doo-pets.vercel.app/';
                        });
                    }
                    else {
                        swal({
                            title: 'Erro!',
                            text: 'Erro ao registrar usuário',
                            icon: 'error',
                            button: 'OK'
                        });
                    }
                })
                .catch((error) => {
                    console.error('Erro ao realizar cadastro:', error);
                    this.message = 'Erro ao realizar cadastro.';
                });
            this.email = ''
            this.password = ''
            this.closeModal();
            this.loading = false
        },

        prevSlide() {
            const carouselItems = document.querySelectorAll('.carousel-item');
            const totalItems = carouselItems.length;
            const currentIndex = this.activeIndex;
            const newIndex = (currentIndex - 1 + totalItems) % totalItems;

            carouselItems[currentIndex].classList.remove('active');
            carouselItems[newIndex].classList.add('active');

            this.activeIndex = newIndex;
        },

        nextSlide() {
            const carouselItems = document.querySelectorAll('.carousel-item');
            const totalItems = carouselItems.length;
            const currentIndex = this.activeIndex;
            const newIndex = (currentIndex + 1) % totalItems;

            carouselItems[currentIndex].classList.remove('active');
            carouselItems[newIndex].classList.add('active');

            this.activeIndex = newIndex;
        },

        startCarouselTimer() {
            this.carouselTimer = setInterval(() => {
                this.nextSlide();
            }, 8000);
        },

        stopCarouselTimer() {
            clearInterval(this.carouselTimer);
            this.carouselTimer = null;
        },

        handleScroll() {
            this.showBackToTop = window.scrollY > 500;
        },

        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    },
}
</script>
